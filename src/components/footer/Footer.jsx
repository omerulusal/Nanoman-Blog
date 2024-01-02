import './_footer.scss'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="fInfo">
                <div className="fLogo">
                    <Image src={"/logo.png"} alt="logo" className='logo' width={90} height={50} priority />
                </div>
                <p className='fDesc'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus labore eveniet maiores, repudiandae dolorum veniam non aperiam dolor ut rem quam doloribus libero natus perferendis placeat ab totam maxime?
                </p>
                <div className="fIcons">
                    <Link href="https://www.facebook.com" target='_blank' >
                        <Image src="/facebook.png" alt="" width={18} height={18} />
                    </Link>
                    <Link href="https://www.instagram.com" target='_blank'>
                        <Image src="/instagram.png" alt="" width={18} height={18} />
                    </Link>
                    <Link href="https://www.tiktok.com" target='_blank'>
                        <Image src="/tiktok.png" alt="" width={18} height={18} />
                    </Link>
                    <Link href="https://www.youtube.com" target='_blank'>
                        <Image src="/youtube.png" alt="" width={18} height={18} />
                    </Link>
                </div>
            </div>
            <div className="fLinks">
                <div className="fList">
                    <span className="fListTitle">Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/blog">Blog</Link>
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
                    <Link href="https://www.facebook.com" target='_blank' >Facebook</Link>
                    <Link href="https://www.instagram.com" target='_blank'>Instagram</Link>
                    <Link href="https://www.tiktok.com" target='_blank'>Tiktok</Link>
                    <Link href="https://www.youtube.com" target='_blank'>Youtube</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer