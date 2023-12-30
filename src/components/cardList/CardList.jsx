import React from 'react'
import "./_cardList.scss"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
const getData = async () => {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: 'no-store'
    })
    if (!res.ok) {
        throw new Error('Something bad happened.');
    }
    return res.json()
}

const CardList = async () => {
    const data = await getData()
    return (
        <div className='cardlist'>
            <h1 className='cListTitle'>Recent Posts</h1>
            <div className='cListPosts'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Pagination />
        </div>
    )
}

export default CardList