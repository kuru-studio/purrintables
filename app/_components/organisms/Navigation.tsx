import { Dropdown, Menu } from 'antd';
import Link from 'next/link';

const Navigation = () => {
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

  return (
    <div className="md:flex text-2xl items-center text-gray-700">
      <div className="px-7 uppercase">
        <Dropdown overlay={<Menu items={shopItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            Shop
          </a>
        </Dropdown>
      </div>
      <div className="w-[2px] h-5 bg-gray-700 hidden md:block"></div>
      <div className="px-7 uppercase">
        <Link href="/">
          Home
        </Link>
      </div>
      <div className="w-[2px] h-5 bg-gray-700 hidden md:block"></div>
      <div className="px-7 uppercase">
        <Dropdown overlay={<Menu items={infoItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            Info
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default Navigation;
