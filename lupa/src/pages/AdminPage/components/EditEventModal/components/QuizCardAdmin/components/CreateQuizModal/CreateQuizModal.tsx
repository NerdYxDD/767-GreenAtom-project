import React, { useState } from 'react';
import { Button, Modal, Input, Radio } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './CreateQuizModal.module.scss'

interface QuizCardAdminProps {
    name: string
}

const CreateQuizModal: React.FC<QuizCardAdminProps> = ({ name }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [quizName, setQuizName] = useState(name)

    const [questions, setQuestions] = useState([{
        id: 0,
        text: '',
        answers: [
            {
                id: 0,
                text: '',
                isRight: false
            },
            {
                id: 1,
                text: '',
                isRight: false
            }
        ]
    }]);

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
                Создать квиз
            </Button>
            <Modal title='Создание квиза' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Input className={styles.Input}
                       placeholder='Название квиза'
                />
                {questions.length !== 0 &&
                    questions.map(question =>
                        <>
                            <Input placeholder='Текст вопроса' value={question.text}/>
                            <Button type='primary'>Добавить вопрос</Button>
                           <br/>
                            <Radio.Group>
                            {
                                question.answers.map(answer =>
                                    <Radio value={answer.id}>
                                        <Input placeholder='Текст ответа' value={answer.text}/>
                                        <Button type='primary' icon={<DeleteOutlined />} />
                                    </Radio>
                                )
                            }
                            </Radio.Group>
                        </>
                    )
                }
            </Modal>
        </>
    );
};

export default CreateQuizModal;