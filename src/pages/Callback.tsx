import { useAuthorization } from "../hooks/useAuthorization";


const Callback = () => {
  const { userInfo, isAuthenticated, logout } = useAuthorization();
  const handleLogout = () => {
    logout();
  }

  if (isAuthenticated === true && userInfo) {
    return (
      <div className="user">
        <h2>Welcome, {userInfo.profile.name}!</h2>
        <p className="description">Your ZITADEL Profile Information</p>
        <p>Name: {userInfo.profile.name}</p>
        <p>Email: {userInfo.profile.email}</p>
        <p>Email Verified: {userInfo.profile.email_verified ? "Yes" : "No"}</p>
        <p>
          Roles:{" "}
          {JSON.stringify(
            userInfo.profile[
            "urn:zitadel:iam:org:project:roles"
            ]
          )}
        </p>

        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Callback;