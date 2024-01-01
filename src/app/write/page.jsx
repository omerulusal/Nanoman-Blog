"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import "./_writeP.scss"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";

const storage = getStorage(app);
const WritePage = () => {
    const { status } = useSession()
    const router = useRouter()

    const [open, setOpen] = useState(false)
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [value, setValue] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        // ! Kodları Firebase doc tan aldım
        const upload = () => {
            const storageRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file, metadata);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                        console.log('File available at', downloadURL);
                    });
                }
            );
        }
        file && upload()
    }, [file])
    if (status === "loading") {
        return <div className='loading'>Loading...</div>
    }
    if (status === "unauthenticated") {
        return router.push("/")
    }


    const handleSubmit = async () => {
        const res = await fetch("http://localhost:3000/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media
            }),
        })
    }
    return (
        <div className="write">
            <input type="text" placeholder="Title" className="wTitle" onChange={e => setTitle(e.target.value)} />
            <div className="wEditor">
                <button className="wButton" onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="pen" width={20} height={20} />
                </button>
                {open && (
                    <div className="wAdd">
                        <input type="file" className="wFile" id="image" onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                        <button className="wAddButton">
                            <label htmlFor="image" >
                                <Image src="/image.png" alt="add" width={20} height={20} />
                            </label>
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
            <button className="wPublish" onClick={handleSubmit} >Publish</button>
        </div>
    )
}

export default WritePage