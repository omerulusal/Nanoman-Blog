import CardList from '@/components/cardList/CardList'
import './_BlogP.scss'
import Menu from '@/components/menu/Menu'

const BlogPage = () => {
    return (
        <div className='blog'>
            <h1 className='bTitle'>Blog Page</h1>
            <div className='blogContent'>
                <CardList />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage