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
                    <Link href="/blog?cat=fashion" className="Mfashion">
                        fashion
                    </Link>
                    <Link href="/blog?cat=food" className="Mfood">
                        food
                    </Link>
                    <Link href="/blog?cat=travel" className="Mtravel">
                        Travel
                    </Link>
                    <Link href="/blog?cat=culture" className="Mculture">
                        culture
                    </Link>
                    <Link href="/blog?cat=coding" className="Mcoding">
                        coding
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuCategories