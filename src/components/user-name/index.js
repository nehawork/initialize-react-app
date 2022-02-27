function UserName({ user, customClass }) {
  function formatUserName(user) {
    if (user) {
      return user.firstName + " " + user.lastName;
    }

    return "Stranger";
  }

  return <div className={customClass}>{formatUserName(user)}</div>;
}

export default UserName;
