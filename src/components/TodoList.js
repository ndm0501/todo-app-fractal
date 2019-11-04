import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo, completeTodo } from "../actions/actions";
import PropTypes from "prop-types";

class TodoList extends Component {
  state = {
    showForm: this.props.showForm,
    newValue: "",
    editId: null
  };

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({ showForm: false });
  }

  onDelete = id => {
    console.log("Delete clicked", id);
    this.props.deleteTodo(id);
  };

  onEditClick = id => {
    console.log("Edit clicked!");
    this.setState({ showForm: true, editId: id });
  };

  onSubmit = (e, newValue) => {
    e.preventDefault();
    this.props.editTodo(newValue, this.state.editId);
    this.setState({ showForm: false });
  };

  onComplete = id => {
    this.props.completeTodo(id);
  };

  render() {
    console.log(this.props, "tdl");
    const listItems = this.props.todos.map((todo, i) => (
      <li
        className="list-group-item text-left d-flex justify-content-between mt-1"
        key={i}
      >
        <div onClick={() => this.onComplete(todo.id)}>
          {todo.isDone ? (
            <span className="todo-done">{todo.todo}</span>
          ) : (
            todo.todo
          )}
        </div>

        <div className="icons text-right">
          <button className="mr-5" onClick={() => this.onEditClick(todo.id)}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={() => this.onDelete(todo.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
    ));

    return listItems.length > 0 ? (
      <div className="todo-window text-center m-5">
        <h5 className="text-left">
          TO-DOs - {this.props.bucket.toUpperCase()}
        </h5>
        <ul className="todo-list list-group mb-5" id="list-group">
          {listItems}
        </ul>
        {this.state.showForm ? (
          <form
            className="form-group"
            onSubmit={e => this.onSubmit(e, this.state.newValue)}
          >
            <label>Enter New Value</label>
            <input
              className="form-control"
              name="newValue"
              id="newValue"
              type="text"
              onChange={e => this.setState({ newValue: e.target.value })}
            />
            <input type="submit" value="Save" className="btn" />
          </form>
        ) : null}
      </div>
    ) : this.props.bucket === "" ? (
      <h5 className="todo-window text-center m-5">
        Choose bucket to see To-Dos!
      </h5>
    ) : (
      <h5 className="todo-window text-center m-5">Nothing Here!</h5>
    );
  }
}

//checking prop types
TodoList.propTypes = {
  selectedBucket: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

//map state as props to the component
const mapStateToProps = state => {
  return {
    selectedBucket: state.todos.selectedBucket
  };
};

export default connect(
  mapStateToProps,
  { deleteTodo, editTodo, completeTodo }
)(TodoList);
