import "./App.css";

function App() {
  const user = {
    firstName: "Neha",
    lastName: "Ramchandani",
  };

  function formatUserName(user) {
    if (user) {
      return user.firstName + " " + user.lastName;
    }

    return "Stranger";
  }

  return (
    <div>
      <h1 className="greetings">Hello {formatUserName(user)}!</h1>
      <h1 className="greetings-stranger">Hello {formatUserName()}!</h1>
    </div>
  );
}

export default App;
