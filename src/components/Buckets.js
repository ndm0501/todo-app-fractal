import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBucket } from "../actions/actions";
import TodoList from "./TodoList";
import PropTypes from "prop-types";

class Buckets extends Component {
  render() {
    //button list toselect a bucket
    const bucketButtons = this.props.todos.buckets.map((bucket, i) => (
      <button
        key={i}
        className="btn"
        onClick={() => {
          this.props.selectBucket(bucket);
        }}
      >
        {bucket.toUpperCase()}
      </button>
    ));

    //filter todos with bucket value
    const selectedBucket = this.props.todos.selectedBucket;
    const todos = this.props.todos.todos.filter(
      todo => todo.bucket === selectedBucket
    );

    return (
      <div className="bucket-list mb-3 text-center">
        <h5 className="my-2">YOUR BUCKET LIST</h5>
        {bucketButtons}
        <TodoList todos={todos} bucket={selectedBucket} />
        <hr />
      </div>
    );
  }
}
//check prop types
Buckets.propTypes = {
  todos: PropTypes.object.isRequired,
  selectBucket: PropTypes.func.isRequired
};
//map state as props to component
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};
export default connect(
  mapStateToProps,
  { selectBucket }
)(Buckets);
