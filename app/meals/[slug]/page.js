import Link from "next/link";

export default function MealDetailsPage({params}) {
    return (
        <main>
            <h3>Meals Details {params.slug}</h3>
            <Link href='/meals'>Meals menu</Link>
        </main>
    )
}