import Link from "next/link";
import logoImg from '@/assets/logo.png';

export default function MainHeader() {
    return (
        <header>
            <Link href='/'>
                <img src={logoImg.src} alt="A food plate"/>
                NextLevel Food
            </Link>
        </header>
    )
}