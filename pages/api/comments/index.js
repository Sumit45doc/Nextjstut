import { comments } from "../../../data/comments";
export default function handler(req, res) {
    if (req.method === "GET") {
        res.status(200).json(comments)
    } else if (req.method === "POST") {
        const len = comments.length
        const comment = {
            id: len + 1,
            text: req.body.comment
        }
        comments.push(comment);
        res.status(201).json(comments)
    }
}