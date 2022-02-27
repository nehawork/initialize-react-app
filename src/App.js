import APP_CONSTANTS from "./app-constants";
import "./App.css";
import Greetings from "./components/greetings";
import UsersList from "./components/user-list";

function App() {
  const admin = APP_CONSTANTS.ADMIN_USER;

  return (
    <div>
      <Greetings user={admin} />
      <UsersList />
    </div>
  );
}

export default App;
