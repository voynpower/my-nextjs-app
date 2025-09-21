"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../../styles/navigation.module.css";
export default function Navigation() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav className={styles["nav"]}>
      <ul>
        <li>
          <Link href="/">Home</Link> {pathname === "/" ? "👆" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {pathname === "/about-us" ? "👆" : ""}
        </li>
          </ul>
         </nav>
  );
}