import React from 'react'
import "./_cardList.scss"
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
const CardList = () => {
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