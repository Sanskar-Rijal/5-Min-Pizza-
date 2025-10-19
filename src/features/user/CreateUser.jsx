import { useState } from "react";
import Button from "./Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-5 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-3 w-full md:w-2xl"
      />

      {username !== "" && (
        <div>
          <Button type="primary" to={"/menu"}>
            Start ordering
          </Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
