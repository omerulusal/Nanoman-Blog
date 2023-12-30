import React from 'react'
import Link from "next/link";
import Image from "next/image";
import "./_categoryList.scss"


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/categories', {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Something bad happened.');
    }
    return res.json()
}

const CategoryList = async () => {
    const data = await getData()
    return (

        <div className="categoryList">
            <h1 className="title">Popular Categories</h1>
            <div className="categories">
                {data?.map(item => (
                    <Link href="/blog?cat=style" className={item.title} key={item._id}>
                        {item.img && (
                            <Image
                                src={item.img}
                                alt=""
                                width={32}
                                height={32}
                                className="Categoryimage"
                            />
                        )}
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryList


/*

!  Categorileri prisma studio uzerinden ekledim
! 'npx prisma studio'

*/