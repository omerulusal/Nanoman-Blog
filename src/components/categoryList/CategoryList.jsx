import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./_categoryList.scss"
const CategoryList = async () => {
    return (
        <div className="categoryList">
            <h1 className="title">Popular Categories</h1>
            <div className="categories">
                <Link href="/blog?cat=style" className="style">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    style
                </Link>
                <Link href="/blog?cat=style" className="fashion">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    fashion
                </Link>
                <Link href="/blog?cat=style" className="food">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    food
                </Link>
                <Link href="/blog?cat=style" className="travel">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    Travel
                </Link>
                <Link href="/blog?cat=style" className="culture">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    culture
                </Link>
                <Link href="/blog?cat=style" className="coding">
                    <Image
                        src={"/style.png"}
                        alt=""
                        width={32}
                        height={32}
                        className="Categoryimage"
                    />
                    coding
                </Link>
            </div>
        </div>
    );
};

export default CategoryList