import { Button, Modal } from "antd";
import { Fragment, useState } from "react";

const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Fragment>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Enter Otp"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input type="text" />
      </Modal>
    </Fragment>
  );
};
export default ModalExample;
