import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, addBucket } from "../actions/actions";
import PropTypes from "prop-types";
import AddBucket from "./AddBucket";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      bucket: "",
      errorMessage: "",
      successMessage: "",
      checked: false
    };
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate = (todo, bucket) => {
    if (todo === "" || bucket === "") {
      this.setState({ errorMessage: "All fields are mandatory!" });
      return false;
    } else {
      this.setState({ errorMessage: "" });
      return true;
    }
  };
  onSubmit = e => {
    e.preventDefault();

    //validate fields
    if (this.validate(this.state.todo, this.state.bucket)) {
      //create a new todo object
      const todo = {
        id: Math.random(),
        todo: this.state.todo.trim(),
        bucket: this.state.bucket.trim(),
        isDone: false
      };
      //dipatch todo to add in the list
      this.props.addTodo(todo);
      //add the newly created bucket to state
      this.props.addBucket(this.state.bucket.trim());
      this.setState({
        todo: "",
        bucket: "",
        successMessage: "To-Do added successfully!"
      });
    }
  };
  onCheckboxChange = e => {
    this.setState({ checked: e.target.checked });
  };
  render() {
    
    const bucketOptions = this.props.todos.buckets.map((bucket, i) => (
      <option key={i} value={bucket}>
        {bucket.toUpperCase()}
      </option>
    ));
    return (
      <div className="my-5">
        <h5 className="text-left">ADD TO-DO</h5>
        <form className="new-todo" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="todo">New Todo</label>
            <input
              type="text"
              className="form-control"
              id="todo"
              name="todo"
              placeholder="Add A New To-Do"
              onChange={this.onChange}
              value={this.state.todo}
            />
            <label htmlFor="bucket">Choose Bucket </label> <br />
            <select
              className="form-control"
              id="bucket"
              name="bucket"
              value={this.state.bucket}
              onChange={this.onChange}
              disabled={this.state.checked}
            >
              <option value="">-- Select --</option>
              {bucketOptions}
            </select>
            <div className="form-check my-1">
              <input
                className="form-check-input"
                type="checkbox"
                value={false}
                id="bucketCheck"
                checked={this.state.checked}
                onChange={this.onCheckboxChange}
              />
              <label className="form-check-label" htmlFor="bucketCheck">
                Create A New Bucket Instead?
              </label>
            </div>
            {this.state.checked ? (
              <input
                type="text"
                className="form-control"
                name="bucket"
                placeholder="Create A New Bucket"
                onChange={this.onChange}
                value={this.state.bucket}
              />
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
          <br />
          {this.state.errorMessage !== "" ? (
            <div>
              <span className="text text-danger">
                {this.state.errorMessage}
              </span>
            </div>
          ) : null}
          {this.state.successMessage !== "" ? (
            <div>
              <span className="text text-success">
                {this.state.successMessage}
              </span>
              <br />
              <button
                className="btn"
                onClick={() => this.props.history.push("/")}
              >
                Go Home
              </button>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

//check for prop types
AddTodo.propTypes = {
  todos: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired,
  addBucket: PropTypes.func.isRequired
};
//map states as props to the component
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, addBucket }
)(AddTodo);
