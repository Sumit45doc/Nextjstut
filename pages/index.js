import Link from "next/link"
import { useRouter } from "next/router";
import Head from "next/head";
function Home() {
    const router = useRouter();
    // const handleClick = () => {
    //     router.push("/product");
    // }
    return (
        <>
            <Head>
                <title>Nextjs</title>
                <meta name="description" content="home page"/>
            </Head>
            {/* <h1>home page</h1>
            <Link href="/profile">
                <a>profile</a>
            </Link>
            <br />
            <Link href="/product">
                <a>product</a>
            </Link>
            <br />
            <button onClick={handleClick}>
                order now
            </button>
            <br />
            <Link href="/dashboard">
                <a>404.js will be render if page not found</a>
            </Link> */}
            <Link href="/users" prefetch={false}>
                <a>user</a>
            </Link>
            <br />
            <br />
            <Link href="/posts">
                <a>posts</a>
            </Link>
            <br />
            <br />
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link>
            <br />
            <Link href="/dashboard-swr">
                <a>Dashboard-swr</a>
            </Link>  <br />
            <Link href="/gallery">
                <a>Gallery</a>
            </Link>
        </>
    )
}

export default Home;