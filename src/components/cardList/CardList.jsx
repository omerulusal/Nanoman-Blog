import React from 'react'
import "./_cardList.scss"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
const getData = async (page, cat) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error("something went wrong");
    }
    return res.json()
}

const CardList = async ({ page }) => {
    // home page ten page propsu gelir
    const { posts, count } = await getData(page)
    const POST_PER_PAGE = 2
    // her bir pagete 2 adet post bulunur

    const hasPrev = POST_PER_PAGE * (page - 1) > 0
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className='cardlist'>
            <h1 className='cListTitle'>Recent Posts</h1>
            <div className='cListPosts'>
                {posts?.map((item) => (
                    <Card key={item._id} item={item} />
                ))}
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
            {
                /* propslar sayesinde Paginationdaki butonlara tıklandıgında mevcut page 
                sayısını alır ve page sayısını artırır veya azaltır */
            }
        </div>
    )
}

export default CardList