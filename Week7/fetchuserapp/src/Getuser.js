
import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const fetchedUser = data.results[0];

      this.setState({
        user: {
          title: fetchedUser.name.title,
          firstName: fetchedUser.name.first,
          picture: fetchedUser.picture.large
        }
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>👤 Random User</h2>
        {user ? (
          <div>
            <img
              src={user.picture}
              alt="User"
              style={{ borderRadius: '50%', width: '150px', height: '150px' }}
            />
            <h3>{user.title} {user.firstName}</h3>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    );
  }
}

export default Getuser;
