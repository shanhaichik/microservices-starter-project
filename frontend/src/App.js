import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  };

  getUsers() {
    axios.get('http://localhost:81/users')
      .then((res) => { this.setState({ users: res.data.data.users }); })
      .catch((err) => { console.log(err); });
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <br />
              <h1 className="title is-1">All Users</h1>
              <hr/><br/>
              <AddUser/>
              <br/><br/>
              <hr /><br />
              <UsersList users={this.state.users} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
