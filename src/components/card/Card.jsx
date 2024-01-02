import "./_card.scss"
import Image from "next/image";
import Link from "next/link";
const Card = ({ item }) => {
    // cardList.jsx ten item props gelir, bu item veritabanındaki verilerin maplenmis halidir
    return (
        <div className='card'>
            {item.img && (
                <div className="cardImage">
                    <Image alt="img" src={item.img} fill className="cardImg" />
                </div>
                // image varsa cardImage divini render eder
            )}
            <div className="cardText">
                <div className="cardDetail">
                    <span className="cardDate">
                        {item.createdAt.substring(0, 10)} {""}
                    </span>
                    <span className="cardCategory">
                        - {item.catSlug}
                    </span>
                </div>
                <Link href={`/posts/${item.slug}`} >
                    {/* tıklandıgında posts sayfasından slug(orn: 1,2,3...) gönderilir */}
                    <h1 className="cardTitle">
                        {item.title}
                    </h1>
                </Link>
                <div className="cardDesc">
                    {item.desc.substring(0, 60)}
                    {/* acıklamanın ilk 60 harfini yazar */}
                </div>
                <Link href={`/posts/${item.slug}`} className="cardLink">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card