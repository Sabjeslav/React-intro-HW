import Aloha from "../Aloha";

function AlohaList({ users, setUsers }) {
  const createUser = (users) =>
    users.map(({ id, firstName, secondName }) => {
      return (
        <li key={id}>
          <Aloha name={`${firstName} ${secondName}`} users={users} id={id} setUsers={setUsers} />
        </li>
      );
    });
  return <ul>{createUser(users)}</ul>;
}

export default AlohaList;
