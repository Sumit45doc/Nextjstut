import Link from "next/link"

function Home() {
    return (
        <>
            <h1>home page</h1>
            <Link href="/profile">
                <a>profile</a>
            </Link>
            <br />
            <Link href="/product">
                <a>product</a>
            </Link>
        </>
    )
}

export default Home;