import CardList from '@/components/cardList/CardList'
import './_BlogP.scss'
import Menu from '@/components/menu/Menu'

const BlogPage = ({ searchParams }) => {
    const page = parseInt(searchParams?.page) || 1
    const { cat } = searchParams;
    return (
        <div className='blog'>
            <h1 className='bTitle'>{cat ? cat : 'All'} Blog</h1>
            <div className='blogContent'>
                <CardList page={page} cat={cat} />
                <Menu />
            </div>
        </div>
    )
}

export default BlogPage