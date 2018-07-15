import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPosts } from "../actions/actions_index.jsx";

class PostsNew extends Component {
  renderField(field) {
    //This is the shorthand of field.meta.touched
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPosts(values, () => {
      setTimeout(() => this.props.history.push("/"), 800);
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="m-t-3">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField} />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <Link to="/" className="btn btn-danger m-l-3">
            Cancel
          </Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  //Validate the inputs from 'vales'
  if (values.length < 3) {
    //! not working
    errors.title = "Enter a title more than 3 characters";
  }
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  //If errors is empty, the form will be submitted
  //If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(
  connect(
    null,
    { createPosts }
  )(PostsNew)
);
