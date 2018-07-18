import React, { Component } from 'react';
import axios from 'axios';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      username: '',
      email: '',
    };

    this.addUser = this.addUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  };

  getUsers() {
    axios.get('http://localhost:81/users')
      .then((res) => { this.setState({ users: res.data.data.users }); })
      .catch((err) => { console.log(err); });
  };

  addUser(event) {
    event.preventDefault();

    const data = {
      username: this.state.username,
      email: this.state.email
    };

    axios.post('http://localhost:81/users', data)
      .then((res) => { 
        this.getUsers();
        this.setState({ username: '', email: '' });
       })
      .catch((err) => { console.log(err); });
  };

  handleChange(event) {
    const obj = {};

    obj[event.target.name] = event.target.value;
    this.setState(obj);
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
              <AddUser 
                addUser={this.addUser} 
                username={this.state.username}
                email={this.state.email}
                handleChange={this.handleChange}
              />
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
