import './_menuCat.scss'
import Link from "next/link";
const MenuCategories = () => {
    return (
        <div className='menuCategories'>
            <div className="McategoryList">
                <div className="Mcategories">
                    <Link href="/blog?cat=style" className="Mstyle">
                        style
                    </Link>
                    <Link href="/blog?cat=style" className="Mfashion">
                        fashion
                    </Link>
                    <Link href="/blog?cat=style" className="Mfood">
                        food
                    </Link>
                    <Link href="/blog?cat=style" className="Mtravel">
                        Travel
                    </Link>
                    <Link href="/blog?cat=style" className="Mculture">
                        culture
                    </Link>
                    <Link href="/blog?cat=style" className="Mcoding">
                        coding
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuCategories