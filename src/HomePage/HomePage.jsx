import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hola{user.firstName}!</h1>
        <p>Felicidades! </p>
        <h3></h3>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}

        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
  };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
