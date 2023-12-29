import "./_card.scss"
import Image from "next/image";
import Link from "next/link";
const Card = () => {
    return (
        <div className='card'>
            <div className="cardImage">
                <Image alt="" src={"/travel.png"} fill className="cardImg" />
            </div>
            <div className="cardText">
                <div className="cardDetail">
                    <span className="cardDate">
                        31.31.2031
                    </span>
                    <span className="cardCategory">
                        -categorySlug
                    </span>
                </div>
                <Link href="/">
                    <h1 className="cardTitle">
                        Lorem ipsum dolor sit amet
                    </h1>
                </Link>
                <div className="cardDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae possimus, perferendis excepturi itaque laborum eveniet nesciunt odio non perspiciatis accusantium est fugiat sunt natus error minima nisi saepe recusandae!
                </div>
                <Link href="/posts" className="cardLink">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card