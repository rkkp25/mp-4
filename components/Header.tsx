import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-x1 hover:underline";
    return (
        <header className="flex-justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4">Harvard Art API</h2>
            <nav className="p-2 m-4 text-black">
                <Link className={linkStyling} href="/">
                    Home
                </Link>
                <Link className={linkStyling} href="/artists">
                    Artist Search
                </Link>
            </nav>
        </header>
    );
}
