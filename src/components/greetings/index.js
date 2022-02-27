import UserName from "../user-name";
import "./style.css";

function Greetings({ user }) {
  return (
    <div className="greetings-wrapper">
      <div className="hello-text">Hello,</div>
      <UserName user={user} customClass="greetings-text" />
    </div>
  );
}

export default Greetings;
