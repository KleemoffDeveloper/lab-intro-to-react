import Post from "./Post"

function Posts() {
    return <div className="section">
        <ul className="post-list">
            <h2>Posts</h2>
            <Post />
            <Post />
            <Post />
        </ul>
    </div>
}

export default Posts;