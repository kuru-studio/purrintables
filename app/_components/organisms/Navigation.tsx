"use client";
import { useState } from "react";
import { Badge, Dropdown, MenuProps } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Molecule from "@molecule";
import Atom from "@atom";
import _ from "lodash";
import { useAtom } from "jotai";
import { shopCartAtom } from "@/app/_contexts/shopCart";
import Organism from ".";

interface NavigationProps {
  type: string;
}

const Navigation: React.FC<NavigationProps> = ({ type }) => {
  const [isAuthenticateModalOpen, setIsAuthenticateModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [shopCart, setShopCart] = useAtom(shopCartAtom);

  const shopItems: MenuProps["items"] = [
    "Shop All",
    "Prints",
    "Books",
    "Stickers",
    "Keychains",
    "Standee",
    "Tumbler / Mugs",
    "Tshirts / Hoodies",
    "Paocat Merch",
  ].map((label, index) => ({
    key: index + 1,
    label: <a href={`/shop/${_.snakeCase(label)}`}>{label}</a>,
  }));

  const infoItems: MenuProps["items"] = [
    "About Purrintables",
    "News & FAQ",
    "Shopee",
    "Convention Schedule",
    "Contact Us",
  ].map((label, index) => ({
    key: index + 1,
    label,
  }));

  const MainNavigation = () => {
    return (
      <div className="md:flex items-center text-white gap-5">
        <div>
          <Dropdown menu={{ items: shopItems }}>
            <a onClick={(e) => e.preventDefault()}>Shop</a>
          </Dropdown>
        </div>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Dropdown menu={{ items: infoItems }}>
            <a onClick={(e) => e.preventDefault()}>Info</a>
          </Dropdown>
        </div>
      </div>
    );
  };

  const UserNavigation = () => {
    return (
      <div className="flex-1 flex justify-end gap-5">
        <Atom.Visibility state={isAuthenticateModalOpen}>
          <Molecule.Authenticate
            isOpen={isAuthenticateModalOpen}
            setIsOpen={setIsAuthenticateModalOpen}
          />
        </Atom.Visibility>
        <Atom.Visibility state={isCartDrawerOpen}>
          <Organism.Cart isOpen={isCartDrawerOpen} setIsOpen={setIsCartDrawerOpen} />
        </Atom.Visibility>
        <Atom.Visibility state={isSearchModalOpen}>
          <Molecule.Search isOpen={isSearchModalOpen} setIsOpen={setIsSearchModalOpen} />
        </Atom.Visibility>
        <FontAwesomeIcon
          icon={faUser}
          className="w-5 h-5 text-white cursor-pointer"
          onClick={() => setIsAuthenticateModalOpen(true)}
        />
        <Badge count={shopCart.items.length}>
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-5 h-5 text-white cursor-pointer"
            onClick={() => setIsCartDrawerOpen(true)}
          />
        </Badge>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-5 h-5 text-white cursor-pointer"
          onClick={() => setIsSearchModalOpen(true)}
        />
      </div>
    );
  };

  switch (type) {
    case "user":
      return <UserNavigation />;
    case "main":
      return <MainNavigation />;
    default:
      return <div>Unknown Navigation</div>;
  }
};

export default Navigation;
