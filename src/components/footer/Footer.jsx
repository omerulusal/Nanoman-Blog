import './_footer.scss'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="fInfo">
                <div className="fLogo">
                    <Image src={"/logo.png"} alt="logo" className='logo' width={90} height={50} />
                </div>
                <p className='fDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus labore eveniet maiores, repudiandae dolorum veniam non aperiam dolor ut rem quam doloribus libero natus perferendis placeat ab totam maxime?
                </p>
                <div className="fIcons">
                    <Image src="/facebook.png" alt="" width={18} height={18} />
                    <Image src="/instagram.png" alt="" width={18} height={18} />
                    <Image src="/tiktok.png" alt="" width={18} height={18} />
                    <Image src="/youtube.png" alt="" width={18} height={18} />
                </div>
            </div>
            <div className="fLinks">
                <div className="fList">
                    <span className="fListTitle">Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/">Blog</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                </div>
                <div className="fList">
                    <span className="fListTitle">Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className="fList">
                    <span className="fListTitle">Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer