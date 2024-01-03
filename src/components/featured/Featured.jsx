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
                    <Image className='image' src={"/p1.jpg"} alt="img" width={420} height={400} />
                </div>
                <div className="textContainer">
                    <h1 className='postTitle'>Discover Your Creativity</h1>
                    <p className='postDesc'>
                        Soothe your soul with music, get in touch with nature, explore new places, make your dreams come true with coding and taste the flavors of 
                        different cultures.
                        If you are interested in these topics, you are in the right place. On this blog, you can find interesting and informative content on these 
                        topics.
                    </p>
                    <button className='button'>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Featured