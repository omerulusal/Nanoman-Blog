import "./_card.scss"
import Image from "next/image";
import Link from "next/link";
const Card = ({ item }) => {
    return (
        <div className='card'>
            {item.img && (
                <div className="cardImage">
                    <Image alt="img" src={item.img} fill className="cardImg" />
                </div>
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
                    <h1 className="cardTitle">
                        {item.title}
                    </h1>
                </Link>
                <div className="cardDesc">
                    {item.desc.substring(0, 60)}
                </div>
                <Link href={`/posts/${item.slug}`} className="cardLink">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card