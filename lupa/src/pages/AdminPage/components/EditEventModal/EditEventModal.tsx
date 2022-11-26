import React, { useState } from 'react';
import { Modal, Button, Input  } from 'antd';
import QuizCardAdmin from './components/QuizCardAdmin/QuizCardAdmin';
import CreateQuizModal from './components/QuizCardAdmin/components/CreateQuizModal/CreateQuizModal'
// @ts-ignore
import styles from './EditEventModal.module.scss'

const EditEventModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const quizNames = [
        'Какой ты прогаммист',
        'name2',
        'name3',
        'name4',
        'name5'
    ]

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
            <Button type='primary' onClick={showModal} >
                Изменить
            </Button>
            <Modal title='Изменение события' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Input className={styles.Input} placeholder='Название события' />
                <CreateQuizModal name='name'/><br/>
                <span className={styles.Span}>Квизы события: </span><br/>
                {
                    quizNames.map(quiz =>
                        <QuizCardAdmin name={quiz} />
                    )
                }
            </Modal>
        </>
    );
};

export default EditEventModal;
