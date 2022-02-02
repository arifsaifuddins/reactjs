import React, { Component, Fragment } from "react";
import Post from "../../components/post/Post";
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends Component {
  state = {
    data: []
  }

  dataAPI = () => {
    axios.get('http://localhost:3004/posts')
      .then(result => {
        console.log(result)
        this.setState({
          data: result.data
        })
      })
  }

  removeData = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`)
      .then(res => {
        this.dataAPI();
        console.log(res);
      })
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     this.setState({
    //       data: json
    //     })
    //   })

    // menggunakan local api dummy
    this.dataAPI();
  }

  render() {
    return (
      <Fragment>
        <h1 className="header">Blog Post</h1><hr />
        <div className="grid">
          {
            this.state.data.map(post => {
              return <Post data={post} key={post.id} remove={this.removeData} />
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default BlogPost;