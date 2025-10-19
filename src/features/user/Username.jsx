import { useSelector } from "react-redux";

function UserName() {
  //To get any state from Redux we use useSelector hook
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default UserName;
