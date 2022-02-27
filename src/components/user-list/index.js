import "./style.css";
import APP_CONSTANTS from "../../app-constants";
import UserName from "../user-name";

function UsersList() {
  const users = APP_CONSTANTS.USERS_LIST;

  return (
    <div className="users-wrapper">
      <h3><span className="user-count">{users.length} users</span> visited our website.</h3>
      <ul>
        {users.map((user, index) => {
          return <UserName key={index} user={user} />;
        })}
      </ul>
    </div>
  );
}

export default UsersList;
