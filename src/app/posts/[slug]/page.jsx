import Menu from '@/components/menu/Menu'
import './_singleP.scss'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
const SinglePage = () => {
    return (
        <div className='singleP'>
            <div className="sInfoContainer">
                <div className="sTextContainer">
                    <h1 className='sTitle'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                    <div className='sUser'>
                        <div className="sUserImgContainer">
                            <Image alt='' src={"/p1.jpeg"} fill className={"sAvatar"} />
                        </div>
                        <div className='sUserTextContainer'>
                            <span className='sUserName' >John Doe</span>
                            <span className='sDate' >31.12.2023</span>
                        </div>
                    </div>
                </div>
                <div className='sImgContainer'>
                    <Image alt='' src={"/p1.jpeg"} fill className={"sUserImg"} />
                </div>
            </div>
            <div className='sContent'>
                <div className='sPost'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora nam, accusantium iure perspiciatis dignissimos delectus eaque velit officiis facilis voluptatem assumenda fuga cumque! Dolores explicabo et necessitatibus harum ut.
                    <div className='sComments'>
                        <Comments />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default SinglePage