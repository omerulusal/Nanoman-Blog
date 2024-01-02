"use client"
import "./_comments.scss"
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"
import { useSession } from "next-auth/react"
import { useState } from "react"


const getir = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        throw new Error("something went wrong");
    }
    return data;
}


const Comments = ({ postSlug }) => {
    // props posts page'ten gelir ve yorumların hangi blog yazısıyla ilişkilendirileceğini belirtir

    const { status } = useSession()
    // status kullanıcının oturum durumunu kontrol eder.

    const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, getir)
    //data: urldeki API'den alınan yorum verilerini içeren bir değişken. 
    //mutate: yorumları yeniden yüklemeye yarar.Yorum yapıldıgında veya silindiğinde, veriyi güncellemeye yarar. 

    const [desc, setDesc] = useState()
    const handleSubmit = async () => {
        await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            // HTTP POST methodu ile yorumu fetchledigim url endpointe yolluyorum  
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                desc,
                postSlug
                // oluturdugum veriyi jsona cevirip yolluyorum
            }),
        });
        mutate()
        // mutate önbellekteki veriyi yeniden getirir, böylece kullanıcı, gönderdiği yeni yorumu anında görüntüleyebilir.
    }
    return (
        <div className="comments">
            <h1 className="cTitle">Comments</h1>
            {status === "authenticated" ? (
                // eger oturum aciksa calısır
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
                    // veriler henuz yoksa loading doner aksi halde maplenen verileri(yorumları) render eder
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