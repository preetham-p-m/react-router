import { Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <div>User 1</div>
        <div>User 2</div>
        <div>User 3</div>
        <Outlet />
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Aactive filter
        </button>
        <button onClick={() => setSearchParams({})}>Remove filter</button>
      </div>
      {activeUsers ? <div>Active users</div> : <div>All users</div>}
    </>
  );
};

export default Users;
