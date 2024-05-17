import { Dropdown, Menu } from 'antd';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ type }) => {
  const shopItems = [
    'Shop All',
    'Prints',
    'Books',
    'Stickers',
    'Keychains',
    'Standee',
    'Tumbler / Mugs',
    'Tshirts / Hoodies',
    'Paocat Merch',
  ].map((label, index) => ({
    key: index + 1,
    label,
  }));

  const infoItems = [
    'About Purrintables',
    'News & FAQ',
    'Shopee',
    'Convention Schedule',
    'Contact Us',
  ].map((label, index) => ({
    key: index + 1,
    label,
  }));

  const MainNavigation = () => {
    return (
      <div className="md:flex items-center text-white gap-5">
        <div>
          <Dropdown overlay={<Menu items={shopItems} />}>
            <a onClick={(e) => e.preventDefault()}>
              Shop
            </a>
          </Dropdown>
        </div>
        <div>
          <Link href="/">
            Home
          </Link>
        </div>
        <div>
          <Dropdown overlay={<Menu items={infoItems} />}>
            <a onClick={(e) => e.preventDefault()}>
              Info
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }

  const UserNavigation = () => {
    return (
      <div className="flex-1 flex justify-end gap-5">
        <FontAwesomeIcon icon={faUser} className="w-5 h-5 text-white" />
        <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 text-white" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5 text-white" />
      </div>
    );
  }

  switch(type) {
    case "user":
      return <UserNavigation />;
    case "main":
      return <MainNavigation />;
    default:
      return <div>Unknown Navigation</div>;
  }
}

export default Navigation;
