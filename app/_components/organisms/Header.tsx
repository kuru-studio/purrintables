import Atom from "@atom";
import Organism from "@organism";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-[#b0abcb]">
      <nav className="text-white">
        <div className="container mx-auto flex p-3 items-center justify-between gap-3">
          <div className="flex-1"><Organism.Navigation /></div>
          <div className="flex-1 flex justify-center">
            <Atom.Logo width={150} />
          </div>
          <div className="flex-1 flex justify-end gap-5">
            <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-white" />
            <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 text-white" />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 text-white" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
