import useSwr from "swr"
const fetcher = url => fetch(url).then(res => res.json());
function DashboardSwr() {
    const { data, error } = useSwr("http://localhost:4000/dashboard", fetcher);
    if (!data) return <h1>Loading ...</h1>
    if (error) return <h1>An error occured</h1>

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>post: {data.post}</h2>
            <h2>Likes: {data.likes}</h2>
            <h2>Followers: {data.followers}</h2>
            <h2>Following: {data.following}</h2>
        </div>
    )
}

export default DashboardSwr
