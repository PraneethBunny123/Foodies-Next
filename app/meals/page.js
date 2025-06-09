import Link from "next/link";
import classes from './page.module.css'
import MealGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";


export const metadata = {
  title: 'All Meals',
  description: 'Browse Delicious meals, shared by our foodies community.',
};

async function Meals() {
    const meals = await getMeals()

    return <MealGrid meals={meals}/>
}
 
export default async function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {' '}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p className={classes.cta}>
                    <Link href='/meals/share'>
                        Share your favorite recipe
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                    <Meals />
                </Suspense>
            </main>        
        </>

    )
}