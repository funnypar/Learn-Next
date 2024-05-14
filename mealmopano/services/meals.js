import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // For set delay for experiment Loading page
        return db.prepare("SELECT * FROM meals").all();
    } catch {
        throw new Error("An Error accured");
    }
}

export async function getMeal(slug) {
    try {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // For set delay for experiment Loading page
        return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
    } catch {
        throw new Error("An Error accured");
    }
}
