import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../features/user/Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-5 text-center sm:my-20">
      <h1 className="mb-9 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-green-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button type="primary" to={"/menu"}>
          Continue Ordering
        </Button>
      )}
    </div>
  );
}

export default Home;
