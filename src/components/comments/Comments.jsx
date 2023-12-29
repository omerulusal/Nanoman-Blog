import "./_comments.scss"
import Link from "next/link"
import Image from "next/image"
const Comments = () => {
    const status = "authenticated"
    return (
        <div className="comments">
            <h1 className="cTitle">Comments</h1>
            {status === "authenticated" ? (
                <div className="cWrite">
                    <textarea placeholder="Write a comment..." className="cInput" />
                    <button className="cButton">Send</button>
                </div>
            ) : (
                <Link href="/login" className="cCommentLink">
                    Login to write a comment
                </Link>
            )}
            <div className="cComments">
                <div className="cComment">
                    <div className="cUser">
                        <Image alt="img" src={"/p1.jpeg"} width={50} height={50} className="cImg" />
                        <div className="cUserInfo">
                            <span className="cUsername" >John Doe</span>
                            <span className="cDate" >01.01.2025</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments