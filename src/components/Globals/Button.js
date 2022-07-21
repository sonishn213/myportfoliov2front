const Button = ({ text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className="tracking-wider cursor-pointer select-none text-base font-slab uppercase text-teal-300 border-2 border-teal-400 px-6 py-2 rounded-full transition-all bg-teal-900 hover:bg-teal-900/50 active:bg-teal-400/50 disabled:opacity-20 hidehighlight"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
