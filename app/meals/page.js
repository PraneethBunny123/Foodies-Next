import Link from "next/link";

export default function Meals() {
    return (
        <main>
            <h1>Meals menu</h1>
            <p>
                <Link href='/meals/share'>Share</Link>
            </p>
        </main>
    )
}