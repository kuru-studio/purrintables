import Atom from "@atom";
import Organism from "@organism";

const Header = () => {
  return (
    <header className="bg-[#b0abcb]">
      <nav className="text-white">
        <div className="container mx-auto flex p-3 items-center justify-between gap-3">
          <div className="flex-1"><Organism.Navigation type="main" /></div>
          <div className="flex-1 flex justify-center"><Atom.Logo width={150} /></div>
          <div className="flex-1"><Organism.Navigation type="user" /></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
