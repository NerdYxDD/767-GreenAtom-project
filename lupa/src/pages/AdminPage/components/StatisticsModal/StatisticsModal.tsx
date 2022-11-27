import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
// @ts-ignore
import styles from './StatisticsModal.module.scss';

const StatisticsModal: React.FC = () => {
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
    <>
      <Button className={styles.Button} type='default' onClick={showModal}>
        Статистика
      </Button>
      <Modal
        title='Статистика'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Statistics
      </Modal>
    </>
  );
};

export default StatisticsModal;
