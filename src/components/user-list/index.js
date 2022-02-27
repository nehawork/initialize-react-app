import "./style.css";
import APP_CONSTANTS from "../../app-constants";
import UserName from "../user-name";
import { useState } from "react";

function UsersList() {
  const users = APP_CONSTANTS.USERS_LIST;

  const [isVisibleUsers, setIsVisibleUsers] = useState(true);

  return (
    <div className="users-wrapper">
      <h3><span className="user-count">{users.length} users</span> visited our website.</h3>

      <div className="visiblity-link" onClick={() => setIsVisibleUsers(!isVisibleUsers)}>
        {isVisibleUsers ? "Hide All" : "Show All"}
      </div>

      {isVisibleUsers && <ul>
        {users.map((user, index) => {
          return <UserName key={index} user={user} />;
        })}
      </ul>}
    </div>
  );
}

export default UsersList;
