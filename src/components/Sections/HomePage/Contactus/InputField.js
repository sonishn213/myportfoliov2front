const InputField = ({ label, id, type, onChange, ph, name, value }) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={id} className="text-zinc-300 text-lg font-light mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={ph}
        onChange={onChange}
        name={name}
        value={value}
        className="w-full py-3 px-6 bg-transparent border-2 hover:border-teal-300 focus:border-teal-300 border-teal-700 outline-none text-zinc-300 text-lg transition-all caret-teal-400"
      />
    </div>
  );
};

export default InputField;
