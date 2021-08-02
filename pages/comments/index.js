import { useState } from "react"
function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('');

    async function fetchComments() {
        const response = await fetch("/api/comments");
        const data = await response.json();
        setComments(data);
    }

    const submitCommit = async (e) => {
        const response = await fetch("api/comments", {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json',

            }
        })
        const data = response.json()
        console.log(data);
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`api/comments/${commentId}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data);
        fetchComments()
    }
    return (
        <div>
            <input type="text" value={comment} onChange={e => setComment(e.target.value)} />
            <button type="submit" onClick={submitCommit}>Submit comment</button>
            <br />
            <button onClick={() => fetchComments()}>load comments</button>
            <br />
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        {comment.id}. <h3>{comment.text}</h3>
                        <button onClick={() => deleteComment(comment.id)}>DELETE</button>
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsPage
