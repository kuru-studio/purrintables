"use client";
import { Modal, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({ isOpen, setIsOpen }) => {
  const handleOk = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal title="Search" open={isOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <Input size="large" placeholder="Search Product" prefix={<FontAwesomeIcon icon={faMagnifyingGlass} className="w-3 h-3 mr-3 text-gray-400" />} />
    </Modal>
  );
}

export default Search;
