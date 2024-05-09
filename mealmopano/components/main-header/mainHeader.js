import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./mainHeader.module.css";
import Image from "next/image";

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt="logo" priority />
                Nextlevel Food
            </Link>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browser Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
