import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-sm inline-block rounded-full bg-green-400 font-semibold tracking-wide uppercase transition-colors duration-300 text-shadow-stone-800 hover:cursor-pointer hover:bg-green-300 focus:bg-red-300 focus:ring focus:ring-amber-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3  sm:px-6 sm:py-4",
    small: base + " px-2 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      base +
      " px-4 py-3 sm:px-6 sm:py-3.5 bg-transparent border-2 border-red-300 hover:bg-red-300 text-stone-800",
    round: base + "px-2.5 py-1 rounded-full text-sm md:px-3.5 md:py-2 ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
