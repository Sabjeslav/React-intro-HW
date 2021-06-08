import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Aloha (props) {
  const { name = 'React' } = props;

  const [isGreeting, setIsGreeting] = useState(true);
  const switchState = () => setIsGreeting(!isGreeting);

  const deleteUser = () => {
    const { users, setUsers, id } = props;
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <h1 className='heading'>
        {isGreeting ? 'Hello' : 'Bye'}, {name}!
      </h1>
      <button onClick={switchState}>Switch</button>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

Aloha.propTypes = {
  name: PropTypes.string,
};

export default Aloha;

/*class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: true,
    };
  }
  switchState = () => {
    const { isGreeting } = this.state;
    this.setState({
      isGreeting: !isGreeting,
    });
  };

  deleteUser = () => {
    const { users, setUsers, id } = this.props;
    setUsers(users.filter((user) => user.id !== id));
  };

  render() {
    const { name = "React" } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <h1 className="heading">
          {isGreeting ? "Hello" : "Bye"}, {name}!
        </h1>
        <button onClick={this.switchState}>Switch</button>
        <button onClick={this.deleteUser}>Delete</button>
      </>
    );
  }
}*/
