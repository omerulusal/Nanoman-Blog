import Image from "next/image";
import Link from "next/link";
import './_menuPosts.scss'
const MenuPosts = () => {
    return (
        <div className='menuPosts'>
            <Link href="/" className="menuPostItem">
                <div className="menuPostImageContainer">
                    <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                    />
                </div>
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
                <div className="menuPostImageContainer">
                    <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                    />
                </div>
                <div className="menuPostText">
                    <span className="menuPostCulture">Travel</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                <div className="menuPostImageContainer">
                    <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                    />
                </div>
                <div className="menuPostText">
                    <span className="menuPostFood">Travel</span>
                    <h3 className="menuPostTitle">Lorem ipsum dolor sit</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                <div className="menuPostImageContainer">
                    <Image src={"/p1.jpeg"} alt="img" fill className="menuPostImage"
                    />
                </div>
                <div className="menuPostText">
                    <span className="menuPostFashion">Travel</span>
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