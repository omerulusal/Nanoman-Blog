"use client"
import Image from "next/image"
import React, { useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import "./_writeP.scss"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const WritePage = () => {
    const { status } = useSession()
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState('')
    const router = useRouter()
    if (status === "loading") {
        return <div className='loading'>Loading...</div>
    }
    if (status === "authenticated") {
        return router.push("/")
    }


    return (
        <div className="write">
            <input type="text" placeholder="Title" className="wTitle" />
            <div className="wEditor">
                <button className="wButton" onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="pen" width={20} height={20} />
                </button>
                {open && (
                    <div className="wAdd">
                        <button className="wAddButton">
                            <Image src="/image.png" alt="add" width={20} height={20} />
                        </button>
                        <button className="wAddButton">
                            <Image src="/external.png" alt="add" width={20} height={20} />
                        </button>
                        <button className="wAddButton">
                            <Image src="/video.png" alt="add" width={20} height={20} />
                        </button>
                    </div>
                )}
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Write something..." />
            </div>
            <button className="wPublish">Publish</button>
        </div>
    )
}

export default WritePage