import Link from "next/link";

export default function Header() {
    return (
        <header>
            <strong>webPage</strong>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    );
}