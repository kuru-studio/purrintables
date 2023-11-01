const Shop = ({ title, children }) => {
  return (
    <div className="container mx-auto text-2xl py-10 px-5">
      <h4 className="font-bold text-center mb-5">{title}</h4>
      <div className="flex flex-wrap justify-center">{children}</div>
    </div>
  );
}

export default Shop;
