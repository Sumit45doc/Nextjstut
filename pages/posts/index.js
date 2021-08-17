import Link from "next/link";

function PostList({ posts }) {
    return (
        <div>
           USERNAME: {process.env.DB_USER}
            DB_PASSWORD: {process.env.DB_PASSWORD}
            ID: {process.env.NEXT_PUBLIC_ID}
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h2>{post.id} {post.title}</h2>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const username = process.env.DB_USER
    const password = process.env.DB_PASSWORD
    console.log(`username: ${username} & password: ${password}`)
    return {
        props: {
            posts: data.slice(0,3)
        }
    }
}



export default PostList
