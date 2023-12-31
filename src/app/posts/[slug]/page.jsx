import Menu from '@/components/menu/Menu'
import './_singleP.scss'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error("something went wrong");
    }
    return res.json()
}




const SinglePage = async ({ params }) => {

    const { slug } = params
    const data = await getData(slug)

    return (
        <div className='singleP'>
            <div className="sInfoContainer">
                <div className="sTextContainer">
                    <h1 className='sTitle'>{data.title}</h1>
                    <div className='sUser'>
                        {data?.user?.img && (
                            <div className="sUserImgContainer">
                                <Image alt='' src={data.user.img} fill className={"sAvatar"} />
                            </div>
                        )}
                        <div className='sUserTextContainer'>
                            <span className='sUserName' >{data?.user.name}</span>
                            <span className='sDate' >31.12.2023</span>
                        </div>
                    </div>
                </div>
                {data?.img && <div className='sImgContainer'>
                    <Image alt='dataIMG' src={data.img} fill className={"sUserImg"} />
                </div>}
            </div>
            <div className='sContent'>
                <div className='sPost'>
                    <div className='sDesc' dangerouslySetInnerHTML={{ __html: data?.desc }} />
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