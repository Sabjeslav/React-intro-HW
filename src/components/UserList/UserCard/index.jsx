import PropTypes from 'prop-types';

function UserCard (props) {
  const {
    user: { id, firstName, lastName, isSelected },
    toggleUserSelection,
  } = props;

  const style = {
    border: isSelected ? '5px solid black' : undefined,
    color: isSelected ? 'gray' : 'black',
  };

  return (
    <article
      onClick={() => toggleUserSelection(id)}
      style={style}
      className={`userCard ${isSelected ? 'selected' : ''}`}
    >
      <p>ID: {id}</p>
      <h1>
        User Name: {firstName} {lastName}
      </h1>
    </article>
  );
}

UserCard.defaultProps = {
  user: {
    id: null,
    firstName: 'unknown',
    lastName: 'unknown',
  },
  toggleUserSelection: () => {
    console.warn('ToggleUserSelection is not assigned!');
  },
};

export const userPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}).isRequired;

UserCard.propTypes = {
  user: userPropType,
  toggleUserSelection: PropTypes.func.isRequired,
};

export default UserCard;
