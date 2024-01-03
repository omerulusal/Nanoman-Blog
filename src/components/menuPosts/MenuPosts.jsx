import Image from "next/image";
import Link from "next/link";
import './_menuPosts.scss'
const MenuPosts = ({ withImg }) => {
    return (
        <div className='menuPosts'>
            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/travel.jpg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostTravel">Travel</span>
                    <h3 className="menuPostTitle">Beautiful Autumn Destination in Europe:Bristol, UK</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/culture.jpg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostCulture">Culture</span>
                    <h3 className="menuPostTitle">Sicily Art Tours: The best way to explore Sicily’s cultural heritage</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/producing.jpg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostProducing">Producing</span>
                    <h3 className="menuPostTitle">Nightvision’ Solo Show with all new 6 track EP</h3>
                    <div className="menuPostDetail">
                        <span>Omer Ulusal</span>
                        <span> -04.12.2070</span>
                    </div>
                </div>
            </Link>


            <Link href="/" className="menuPostItem">
                {withImg && (
                    <div className="menuPostImageContainer">
                        <Image src={"/music.jpg"} alt="img" fill className="menuPostImage"
                        />
                    </div>
                )}
                <div className="menuPostText">
                    <span className="menuPostMusic">Music</span>
                    <h3 className="menuPostTitle">Afterlife EP</h3>
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

/*
!Eğer withImg prop'u true ise, bir resim içeren bir yapı eklenir. Resimler Image bileşeni kullanılarak gösterilir.
*/