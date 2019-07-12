import React, { Component } from "react";
import { Link } from 'react-router-dom';
//topic list will utilize properties of the posts object in Linking and in Displaying/rendering in HTML page
import posts from "./../../post_data.json";
import "./TopicList.css";

class TopicList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  //getting data from server and setting it to state (see below)
  componentDidMount() {
    // This is where you would make an axios call to a server in a fullstack application
    // but for today we'll be just be using an array of dummy data
    this.setState({
      posts: posts
    });
  }
  render() {
    // destructure the object so we can use the data we just got from the server that was recently saved to state
    const { posts } = this.state;
    // display data by using a map fn on the destructured data
    let displayTopics = posts.map(post => {
      // for each post element in posts, have each title in the post be a link that references the id of each post
      return <li key={post.id}>
              {/* template literals are useful to get data value read as string into link */}
              <Link to={`/topics/${post.id}`}>{post.title}</Link>
            </li>
    });
    return (
      <div className="TopicList">
        <h1>Latest Blog Posts...</h1>
        {/* call the mapped posts in JSX notation so it shows up in HTML */}
        <ul>{displayTopics}</ul>
      </div>
    );
  }
}

export default TopicList;
