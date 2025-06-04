import Link from "next/link";

export default function Share({params}) {
    return (
        <main>
            <h3>Meals {params.slug}</h3>
            <Link href='/meals'>Meals menu</Link>
        </main>
    )
}