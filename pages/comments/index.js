import {useState} from "react"
function CommentsPage() {
    const [comments,setComments] = useState([])
    async function fetchComments() {
        const response = await fetch("/api/comments");
        const data = await response.json();
        setComments(data);
    }
    return (
        <div>
            <button onClick={() => fetchComments()}>load comments</button>
            <br />
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id}. <h3>{comment.text}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsPage
