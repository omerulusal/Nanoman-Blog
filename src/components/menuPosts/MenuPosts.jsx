import Image from "next/image";
import Link from "next/link";
import './_menuPosts.scss'
const MenuPosts = ({ withImg }) => {
    return (
        <div className='menuPosts'>
            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostTravel">Travel</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostCulture">Culture</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostFood">Food</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostFashion">Fashion</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MenuPosts