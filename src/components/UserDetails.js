import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  return <div>User Details {userId}</div>;
};

export default UserDetails;
