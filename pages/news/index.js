import Link from "next/link"


function NewsList({ news }) {
  
    return (
        <>
            {
                news.map(newpost => {
                    const { id, title, category, description } = newpost;
                    return (
                        <div key={id}>
                                <h1>{id}  {title}</h1>
                            <p>{description}</p>
                            <Link href={`/news/${category}`} passHref>
                                <span>{category}</span>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default NewsList


export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/news");
    const data = await response.json();

    return {
        props: {
            news: data
        }
    }
}