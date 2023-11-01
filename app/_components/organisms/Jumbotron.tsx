const Jumbotron = ({ title, children }: any) => {
  return (
    <div className="bg-[#f8efe6]">
      <div className="container mx-auto text-2xl py-10 px-5">
        <h4 className="font-bold text-center mb-5">{title}</h4>
        <div className="font-light">{children}</div>
      </div>
    </div>
  );
}

export default Jumbotron;
