import React from 'react'
import "./_featured.scss"
import Image from "next/image"
const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='title'>
                <b>Hey, omer here!</b>
                <br />
                Discover my stories and creative ideas.
            </h1>
            <div className="post">
                <div className="imgContainer">
                    <Image className='image' src={"/p1.jpeg"} alt="img" width={420} height={400} />
                </div>
                <div className="textContainer">
                    <h1 className='postTitle'>Lorem ipsum dolor sit amet.</h1>
                    <p className='postDesc'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum unde dolor maiores. Ea ducimus quos dicta aperiam laudantium, praesentium dolor unde voluptatibus necessitatibus tenetur porro ipsum perspiciatis aut enim alias.
                    </p>
                    <button className='button'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Featured