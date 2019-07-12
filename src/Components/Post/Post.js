import React, { Component } from "react";
import posts from "./../../post_data.json";
import "./Post.css";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be filtering an array of dummy data
    // we 'filtered' for where the id in our target object in the array MATCHES 
    let post = posts.find(post => post.id === parseInt(this.props.match.params.id));
    this.setState({
      title: post.title,
      content: post.content
    });
  }
  render() {
    const { title, content } = this.state;
    // don't need to map since we only need one title and one content and since we are viewing parts of one object
    // and not an array of objects.
    return (
      <div className="Post">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

export default Post;
