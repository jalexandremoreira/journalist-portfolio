import React, { Component } from "react";

import { getPosts } from "./../services/blogPosts";

class Blog extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: getPosts() });
  }

  render() {
    return (
      <div id="blog-div">
        <h1 className="page-header">Updates & News</h1>

        {this.state.posts.map(item => (
          <div key={item.title}>
            <h2 className="blog-title">{item.title}</h2>
            <p className="blog-date">{item.date}</p>

            <div dangerouslySetInnerHTML={{__html: item.content }} className="blog-content" />
          </div>
        ))}
      </div>
    );
  }
}
export default Blog;
