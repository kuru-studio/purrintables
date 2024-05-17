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

export default Navigation;
