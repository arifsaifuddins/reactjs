import React from "react";
import './Blog.css'

const Blog = (props) => {
  return (
    <div className="post">
      {/* <img src="https://placeimg.com/300/300/tech" alt="img" className="gambar" /> */}
      <div className="desc">
        <div className="title" onClick={() => props.detail(props.data.id)}>{props.data.title}</div>
        <p className="text">{props.data.body}</p>
        <button className="remove" onClick={() => props.remove(props.data.id)}>delete</button>
        <button className="update" onClick={() => props.update(props.data)}>update</button>
      </div>
    </div>
  )
}

export default Blog;