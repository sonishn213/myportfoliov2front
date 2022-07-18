const SectionTitle = ({ children }) => {
  return (
    <div className="inline-block">
      <h2 className="uppercase tracking-wide mb-2">{children}</h2>
      <div className="w-full h-0.5 bg-teal-300"></div>
    </div>
  );
};

export default SectionTitle;
