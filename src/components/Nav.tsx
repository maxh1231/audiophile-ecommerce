import Link from "next/link";

const Nav = () => {

    return (
        <>
            {/* TODO: Add Logo and shopping cart icon. Remove temp styles */}
            <ul>
                <li>
                    <Link href={"/"} className="px-6">Home</Link>
                </li>
                <li>
                    <Link href={"/headphones"} className="px-6">Headphones</Link>
                </li>
                <li>
                    <Link href={"/speakers"} className="px-6">Speakers</Link>
                </li>
                <li>
                    <Link href={"/earphones"} className="px-6">Earphones</Link>
                </li>
            </ul>
        </>
    )
}

export default Nav;