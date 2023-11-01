import Atom from "@atom";

const Product = ({
  thumbnail,
  title,
  price,
  isSoldOut,
  link,
}: any) => {
  return (
    <a className="inline-block m-5" href={link}>
      <div className="w-40 md:w-60 xl:w-80 aspect-square relative mb-4">
        <img src={thumbnail} className="w-full h-full" />
        <Atom.Visibility state={isSoldOut}>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center" style={{ backgroundColor: "rgba(255,255,255,.75)" }}>
            <div className="bg-[#df56c0] w-28 h-28 rounded-full text-white flex items-center flex-col justify-center uppercase">
              <div>Sold</div>
              <div>Out</div>
            </div>
          </div>
        </Atom.Visibility>
      </div>
      <div className="text-left">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="text-base text-gray-600">₱{price}</div>
      </div>
    </a>
  );
}

export default Product;
