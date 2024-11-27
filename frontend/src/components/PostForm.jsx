import { useState } from "react"

const PostForm = ({submitPost}) => {
    const [ postContent, setPostContent ] = useState('')

    const handleInputChanges = (event) => {
        setPostContent(event.target.value)
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            submitPost(postContent)
        }}>
            <label>Create Post</label>
            <textarea
            value={postContent} 
            onChange={handleInputChanges}
            placeholder="Start typing ..."
            />
            <button
            type='submit'
            >Post</button>
        </ form>
    )
}

export default PostForm