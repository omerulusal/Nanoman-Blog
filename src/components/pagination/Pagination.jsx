"use client"
import React from 'react'
import './_pagination.scss'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, hasPrev, hasNext }) => {
    // cardList.jsx ten propslar gelir

    const router = useRouter()

    return (
        <div className='pagination'>
            <button className='Pbutton'
                disabled={!hasPrev} onClick={() => router.push(`?page=${page - 1}`)} >
                Previous
            </button>
            <button className='Pbutton'
                disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)} >
                Next
            </button>
        </div>
    )
}
/*
sayfa icerisinde ileri veya geri gidecek bir veri yoksa buton disabled olacak
*/
export default Pagination