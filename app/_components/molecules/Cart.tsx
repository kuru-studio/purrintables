import { Drawer, Empty } from 'antd';

const Cart = ({ isOpen, setIsOpen }) => {
  return (
    <Drawer title="Cart" onClose={() => setIsOpen(false)} open={isOpen}>
      <Empty description="Your cart is empty." />
    </Drawer>
  );
}

export default Cart;
