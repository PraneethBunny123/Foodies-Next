'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavLink({children, href}) {
    const path = usePathname()

    return (
        <Link 
            href={href}
            className={path.startsWith(href) ? classes.active : undefined}
        >
            {children}
        </Link>
    )
}