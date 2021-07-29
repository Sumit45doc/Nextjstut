function UserList(props) {
    const { users } = props;
    return (
        <div>
            {users.map((val) => {
                return (
                    <h1 key={val.id}>{val.email}</h1>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    return {
        props: {
            users: data
        }
    }

}

export default UserList
