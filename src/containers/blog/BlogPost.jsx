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
    },
    isUpdate: false
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

  deleteDataAPI = (id) => {
    axios.delete(`http://localhost:3004/posts/${id}`)
      .then(res => {
        this.getDataAPI();
        console.log(res);
      })
  }

  updateDataAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlog.id}`, this.state.formBlog).then(res => {
      console.log(res)
      this.getDataAPI()
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

  updateForm = (data) => {
    console.log(data)
    this.setState({
      formBlog: data,
      isUpdate: true
    })
  }

  changeForm = (event) => {
    console.log(event.target.name)
    let newFormValue = { ...this.state.formBlog }
    if (!this.state.isUpdate) {
      newFormValue['id'] = new Date().getTime();
    }
    newFormValue[event.target.name] = event.target.value;
    this.setState({
      formBlog: newFormValue
    })
  }

  submitForm = () => {
    if (this.state.isUpdate) {
      this.updateDataAPI();
      this.setState({
        formBlog: {
          userId: 1,
          id: '',
          title: '',
          body: ''
        },
        isUpdate: false
      })
    } else {
      this.postDataAPI();
      this.setState({
        formBlog: {
          userId: 1,
          id: '',
          title: '',
          body: ''
        },
      })
    }

  }

  render() {
    return (
      <Fragment>
        <h1 className="header">Blog Post</h1><hr />
        <div className="form">
          <h2> post</h2>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={this.changeForm} value={this.state.formBlog.title} />
          <label htmlFor="body">body</label>
          <textarea name="body" id="body" rows="10" onChange={this.changeForm} value={this.state.formBlog.body}></textarea><br />
          <button type="submit" onClick={this.submitForm}>save</button>
        </div>
        <div className="grid">
          {
            this.state.data.map(post => {
              return <Post data={post} key={post.id} remove={this.deleteDataAPI} update={this.updateForm} />
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default BlogPost;