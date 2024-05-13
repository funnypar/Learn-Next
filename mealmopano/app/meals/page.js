import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/services/meals";
import { Suspense } from "react";
import LoadingMeals from "./loadingMeals";

async function FetchMeals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}
const Meals = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={styles.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy
                    and fun!
                </p>
                <p className={styles.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={styles.main}>
                <Suspense fallback={<LoadingMeals />}>
                    <FetchMeals />
                </Suspense>
            </main>
        </>
    );
};

export default Meals;
