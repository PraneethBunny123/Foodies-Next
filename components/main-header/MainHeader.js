import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import Link from 'next/link';
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/'>
                <Image src={logoImg} alt="A food plate" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href='/meals'>Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href='/community'>Community</NavLink>
                    </li>                    
                </ul>
            </nav>
        </header>
    )
}