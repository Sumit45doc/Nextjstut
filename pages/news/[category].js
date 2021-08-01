function News({ articles }) {
    return (
        <div>
            {articles.map(article => {
                const { id, title, category, description } = article;
                return (
                    <div key={id}>
                        <h1>{id}  {title}</h1>
                        <p>{description}</p>
                        <span>{category}</span>
                    </div>

                )
            })}
        </div>
    )
}

export default News


export async function getServerSideProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/news?category=${params.category}`);
    const data = await response.json();

    return {
        props: {
            articles: data
        }
    }
}