"use client"
import "./_comments.scss"
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"
import { useSession } from "next-auth/react"
import { useState } from "react"


const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        throw new Error("something went wrong");
    }
    return data;
}


const Comments = ({ postSlug }) => {

    const { status } = useSession()

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

    const [desc, setDesc] = useState()
    const handleSubmit = async () => {
        await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            body: JSON.stringify({
                desc,
                postSlug
            }),
        });
        mutate()
    }
    return (
        <div className="comments">
            <h1 className="cTitle">Comments</h1>
            {status === "authenticated" ? (
                <div className="cWrite">
                    <textarea placeholder="Write a comment..." className="cInput" onChange={(e) => setDesc(e.target.value)} />
                    <button className="cButton" onClick={handleSubmit} >Send</button>
                </div>
            ) : (
                <Link href="/login" className="cCommentLink">
                    Login to write a comment
                </Link>
            )}
            <div className="cComments">
                {isLoading ? "loading..." : data?.map(item => (
                    <div className="cComment" key={item._id}>
                        <div className="cUser">
                            {item?.user?.image && <Image alt="img" src={item.user.image} width={50} height={50} className="cImg" />}
                            <div className="cUserInfo">
                                <span className="cUsername" >{item.user.name}</span>
                                <span className="cDate" >{item.createdAt.substring(0, 10)}</span>
                            </div>
                        </div>
                        <p className="cDesc">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments