import React, { useState } from 'react';
import { Button, Modal, Input } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EditOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './EditQuizModal.module.scss';

interface QuizCardAdminProps {
  name: string
}

const EditQuizModal: React.FC<QuizCardAdminProps> = ({ name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizName, setQuizName] = useState(name);

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
      <Button type='primary' onClick={showModal} icon={<EditOutlined />} />
      <Modal
        title='Изменение квиза'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          className={styles.Input}
          placeholder='Название квиза'
          value={quizName}
        />
      </Modal>
    </>
  );
};

export default EditQuizModal;
