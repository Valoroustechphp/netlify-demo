import React from "react"
// import { Link }  from "react-router-dom"
import Markdown from "react-markdown"
import postlist from "../post.json"

// import "./components.css"

const PostList = () => {
    const excerptList = postlist.map(post => {
        return post.content.split(" ").slice(0, 20).join(" ") + "..."
    })
    return (
        <div className="postlist">
            <h1 className="title">All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    console.log(post)
                    return (
                        <div key={i} className="post-card">
                             <div className="img-container">
                                {post.thumbnail && <img className="thumbnail" width={80} src={post.thumbnail} alt=""/> }
                                <h2 className="post-title">
                                    {/* <Link className="links" to={`/post/${post.id}`}>{post.title}</Link> */}
                                    <a href={`/post/${post.id}`}  className="links">{post.title}</a>
                                    </h2>
                            </div>
                            <small>Published on {post.date} by {post.author}</small>
                            <hr/>
                            <Markdown source={excerptList[i]} escapeHtml={false} />
                            <small> <a href={`/post/${post.id}`}  className="links">Read more</a></small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList