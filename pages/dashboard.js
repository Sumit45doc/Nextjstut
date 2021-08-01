import {useState, useEffect} from 'react'

function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);
    useEffect(() => {
        async function fetchDashboardData() {
            const response = await fetch("http://localhost:4000/dashboard");
            const data = await response.json();
            setDashboardData(data);
            setIsLoading(false)
        }
        fetchDashboardData()
    }, [])

    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <div>
            post: {dashboardData.post} <br />   
            likes: {dashboardData.likes}
        </div>
    )
}

export default Dashboard
