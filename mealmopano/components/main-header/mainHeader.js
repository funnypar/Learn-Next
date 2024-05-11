import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./mainHeader.module.css";
import Image from "next/image";
import NavLink from "./navLink";

const MainHeader = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image src={logo} alt="logo" priority />
                Nextlevel Food
            </Link>
            <NavLink />
        </header>
    );
};

export default MainHeader;
