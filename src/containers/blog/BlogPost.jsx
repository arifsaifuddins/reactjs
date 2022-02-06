import React, { Component, Fragment } from "react";
import Post from "../../components/post/Post";
import axios from 'axios';
import './BlogPost.css';

class BlogPost extends Component {
  state = {
    data: [],
    formBlog: {
      userId: 1,
      id: 1,
      title: '',
      body: ''
    }
  }

  getDataAPI = () => {
    axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
      .then(result => {
        console.log(result)
        this.setState({
          data: result.data
        })
      })
  }

  postDataAPI = () => {
    // dua params
    axios.post('http://localhost:3004/posts', this.state.formBlog)
      .then(res => {
        console.log(res);
        this.getDataAPI();
      })
  }

  removeData = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`)
      .then(res => {
        this.getDataAPI();
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
    this.getDataAPI();
  }

  changeForm = (event) => {
    console.log(event.target.name)
    let newFormValue = { ...this.state.formBlog }
    newFormValue['id'] = new Date().getTime();
    newFormValue[event.target.name] = event.target.value;
    this.setState({
      formBlog: newFormValue
    })
  }

  submitFormPost = () => {
    this.postDataAPI();
  }

  render() {
    return (
      <Fragment>
        <h1 className="header">Blog Post</h1><hr />
        <div className="form">
          <h2>add a post</h2>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={this.changeForm} />
          <label htmlFor="body">body</label>
          <textarea name="body" id="body" rows="10" onChange={this.changeForm}></textarea><br />
          <button type="submit" onClick={this.submitFormPost}>save</button>
        </div>
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