import React, { Component } from "react";
import { connect } from "react-redux";
import { addBucket } from "../actions/actions";

class EditBucket extends Component {
  constructor() {
    super();
    this.state = {
      bucket: "",
      successMessage: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.bucket !== "") {
      this.props.addBucket(this.state.bucket);
      this.setState({ successMessage: "Bucket Added Successfully!" });
    } else {
      this.setState({ successMessage: "" });
    }
    this.setState({ bucket: "" });
  };
  render() {
    return (
      <form className="edit-bucket my-3" onSubmit={this.onSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Add Bucket</div>
          </div>
          <input
            type="text"
            name="bucket"
            value={this.state.bucket}
            className="form-control"
            onChange={e => this.setState({ bucket: e.target.value })}
            required
          />
          <div className="input-group-append">
            <input type="submit" className="btn" value="ADD BUCKET" />
          </div>
        </div>
        {this.state.successMessage !== "" ? (
          <div className="text text-success pt-2 pb-2">
            {this.state.successMessage}
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
    );
  }
}
export default connect(
  null,
  { addBucket }
)(EditBucket);
