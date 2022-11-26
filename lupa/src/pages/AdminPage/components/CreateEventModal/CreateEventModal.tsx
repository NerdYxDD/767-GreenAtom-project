import React, { useState } from 'react';
import { Modal, Button, Input  } from 'antd';

const CreateEventModal: React.FC = () => {
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
            <Button type='primary' onClick={showModal}>
                Создать событие
            </Button>
            <Modal title='Создание события' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Input placeholder='Название события' />
            </Modal>
        </>
    );
};

export default CreateEventModal;
