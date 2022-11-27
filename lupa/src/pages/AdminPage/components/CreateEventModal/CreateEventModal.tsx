import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
// @ts-ignore
import styles from './CreateEventModal.module.scss';

interface CreateEventModalProps {
  // eslint-disable-next-line react/no-unused-prop-types
  onCardAdd(title: string): void;
}

const CreateEventModal: React.FC<CreateEventModalProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState<string>('');

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    // eslint-disable-next-line react/destructuring-assignment
    props.onCardAdd(title);
    setIsModalOpen(false);
    // setTitle('')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className={styles.Button} type='primary' onClick={showModal}>
        Создать событие
      </Button>
      <Modal
        title='Создание события'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder='Название события'
          type='text'
          id='title'
          onChange={changeTitle}
          value={title}
        />
      </Modal>
    </>
  );
};

export default CreateEventModal;
