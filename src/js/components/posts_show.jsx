import React, { Component } from "react";
import { connect } from "react-redux";
import { getPost, deletePost } from "../actions/actions_index.jsx";
import { Link } from "react-router-dom";
class PostsShow extends Component {
  //* I need getPost(id) statement for if a user directory goes to specific post without going through Index page
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.getPost(id);
    }
  }
  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div />;
    }
    return (
      <div className="m-t-3">
        <h3 className="m-b-2">{post.title}</h3>
        <h6 className="m-b-2">Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/">
          <button className="btn btn-primary d-block">Back to Index</button>
        </Link>
        <button
          className="btn btn-danger pull-xs-right d-block"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
      </div>
    );
  }
}

//this.props === ownProps
function mapStateToProps({ posts }, ownProps) {
  //posts[this.props.match.params.id]
  return { post: posts[ownProps.match.params.id] };
}
export default connect(
  mapStateToProps,
  { getPost, deletePost }
)(PostsShow);
