"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = () => {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link
                        href="/meals"
                        className={
                            path.startsWith("/meals")
                                ? styles.active
                                : undefined
                        }
                    >
                        Browser Meals
                    </Link>
                </li>
                <li>
                    <Link
                        href="/community"
                        className={
                            path.startsWith("/community")
                                ? styles.active
                                : undefined
                        }
                    >
                        Foodies Community
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavLink;
