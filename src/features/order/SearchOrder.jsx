import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!query) return;
    //navigate to order details page
    navigate("/order/" + query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="placeholder:stone-400 transition:all focus:ring-opacity-50 w-35 rounded-full bg-green-100 px-3 py-2 text-sm duration-300 focus:ring focus:ring-red-200 focus:outline-none sm:w-62 md:focus:w-72"
        placeholder="Search Order #"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
