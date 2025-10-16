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
        placeholder="Search Pizza's"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
