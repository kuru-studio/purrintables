import Atom from "@atom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from "antd";

const Header = () => {
  return (
    <header className="bg-[#b0abcb]">
      <nav className="text-white">
        <div className="container mx-auto flex p-3 items-center justify-between">
          <div><Atom.Logo width={150} /></div>
          <div>
            <Input
              className="!rounded-none"
              size="large"
              placeholder="Search"
              prefix={<FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 mr-3 text-gray-400" />}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
