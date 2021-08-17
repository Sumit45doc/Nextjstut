import Footer from "../components/footer";
import User from "../components/user";

function UserList(props) {
    const { users } = props;
    return (
        <div>
            {users.map((user) => <User user={user} key={user.id} />)}
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

UserList.getLayout = function PageLayout(page) {
    return (
        <>{page} <Footer/> </>
    )
}


export default UserList
