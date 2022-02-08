import React, { Component } from "react";
import axios from "axios";

class Detail extends Component {
  state = {
    dataPost: {
      title: '',
      body: ''
    }
  }

  componentDidMount() {
    let postId = this.props.match.params.postId;
    axios.get(`http://localhost:3004/posts/${postId}`)
      .then(res => {
        console.log(res);
        this.setState({
          dataPost: {
            title: res.data.title,
            body: res.data.body
          }
        })
      })
  }

  render() {
    return (
      <>
        <h1 className="header">Detail page</h1>
        <hr /><br />
        <h2 id="tdetail">{this.state.dataPost.title}</h2>
        <p id="bdetail">{this.state.dataPost.body}</p>
      </>
    )
  }
}

export default Detail;