import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block rounded-full bg-green-400 font-semibold tracking-wide uppercase transition-colors duration-300 text-shadow-stone-800 hover:cursor-pointer hover:bg-green-300 focus:bg-red-300 focus:ring focus:ring-amber-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3  sm:px-6 sm:py-4',
    small: base + ' px-1 py-2 md:px-5 md:py-2.5 text-xs',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
