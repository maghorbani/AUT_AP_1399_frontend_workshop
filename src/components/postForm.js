import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: { title: "", body: "" },
    };
  }

  onChange = (e) => {
    let { postData } = this.state;
    postData[e.target.name] = e.target.value;
    this.setState({ postData });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { postData } = this.state;

    this.props.newPost(postData);
  };

  render() {
    const { title, body } = this.state.postData;
    return (
      <div>
        <h3>insert new post</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <br />
            <input
              type="text"
              value={title}
              onChange={this.onChange}
              name="title"
              placeholder="the post title"
            />
          </div>
          <div>
            <label htmlFor="body">Body: </label>
            <br />
            <textarea
              onChange={this.onChange}
              placeholder="the body of post"
              name="body"
              rows="5"
              cols="150"
              defaultValue={body}
            ></textarea>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  newPost: PropTypes.func.isRequired,
};

export default connect(null, { newPost })(PostForm);
