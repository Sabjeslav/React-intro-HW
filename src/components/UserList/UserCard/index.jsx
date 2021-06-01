const UserCard = (props) => {
  const {
    user: { id, firstName, secondName, isSelected },
    toggleUserSelection,
  } = props;

  const style = {
    border: isSelected ? "5px solid black" : undefined,
    color: isSelected ? "gray" : "black",
  };

  return (
    <article
      onClick={() => toggleUserSelection(id)}
      style={style}
      className={`userCard ${isSelected ? "selected" : ""}`}
    >
      <p>ID: {id}</p>
      <h1>
        User Name: {firstName} {secondName}
      </h1>
    </article>
  );
};

export default UserCard;
