import { Drawer, Empty } from 'antd';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer title="Cart" onClose={() => setIsOpen(false)} open={isOpen}>
      <Empty description="Your cart is empty." />
    </Drawer>
  );
}

export default Cart;
