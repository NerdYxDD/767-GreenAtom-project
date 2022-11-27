import React, { useEffect, useState } from 'react';
import { Button, Modal, Input, Radio, Card } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './CreateQuizModal.module.scss'

interface QuizCardAdminProps {
    name: string
}

const { TextArea } = Input;

const CreateQuizModal: React.FC<QuizCardAdminProps> = ({ name }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    const addQuestion = () => {
        if (questions.length !== 0) {
            setQuestions([...questions, {
                id: questions[questions.length - 1].id + 1,
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
            }
            ])
        } else {
            setQuestions([...questions, {
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
            }
            ])
        }
    }

    const addAnswer = (idx: number) => {
        if (questions[idx].answers.length < 4) {
            setQuestions([...questions.slice(0, idx),
                { ...questions[idx], answers: [...questions[idx].answers, {
                        id: questions[idx].answers[questions[idx].answers.length - 1].id + 1,
                        text: '',
                        isRight: false
                    }
                    ] },
                ...questions.slice(idx + 1)
            ])
        }
    }

    const deleteQuestion = (idx: number) => {
        // @ts-ignore
        setQuestions(questions.filter((question: object) => question.id !== idx ))
    }

    const deleteAnswer = (questionIdx: number, answerIdx: number) => {
        if (questions[questionIdx].answers.length > 2) {
            setQuestions([...questions.slice(0, questionIdx),
                {
                    ...questions[questionIdx], answers: questions[questionIdx].answers.filter(
                        // @ts-ignore
                        (answer: object) => answer.id !== answerIdx)
                },
                ...questions.slice(questionIdx + 1)
            ])
        }
    }

    const changeQuestions = (value: string, idx: number) => {
        setQuestions([...questions.slice(0, idx),
            { ...questions[idx], text: value },
            ...questions.slice(idx + 1)
        ])
    }

    const changeRadio = (questionIdx: number, answerIdx: number) => {
        setQuestions(questions.map(question => {
            return ({
                ...question,
                answers: question.answers.map(answer => {
                    if (answer.id.toString() === answerIdx.toString() &&
                        question.id.toString() === questionIdx.toString()) {
                        return { id: answer.id, text: answer.text, isRight: true }
                    }
                    return { id: answer.id, text: answer.text, isRight: false }
                })
            })
        }))
    }

    const changeRadioText = (value: string, questionIdx: number, answerIdx: number) => {
        setQuestions(questions.map(question => {
            return ({
                ...question,
                answers: question.answers.map(answer => {
                    if (answer.id.toString() === answerIdx.toString() &&
                        question.id.toString() === questionIdx.toString()) {
                        return { id: answer.id, text: value, isRight: answer.isRight }
                    }
                    return { id: answer.id, text: answer.text, isRight: answer.isRight }
                })
            })
        }))
    }

    useEffect(() => {
        console.log(questions[0].answers[0].text)
    }, [questions])

    return (
        <>
            <Button type='primary' onClick={showModal}>
                Создать квиз
            </Button>
            <Modal title='Создание квиза' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                <Input className={styles.Margin}
                       placeholder='Название квиза'
                />
                <div>
                    <Button type='primary' onClick={() => addQuestion()}>Добавить вопрос</Button>
                </div>
                <br/>
                {questions.length !== 0 &&
                    questions.map(question =>
                        <Card title={`Вопрос №${ (questions.indexOf(question) + 1).toString()}`} key={question.id} >
                            <div>
                                <TextArea onChange={(event) => changeQuestions(event.target.value, (questions.indexOf(question))) } placeholder='Текст вопроса' autoSize />
                            </div>
                            {question.answers.length < 4 &&
                                <Button type='primary'
                                        className={styles.Margin}
                                        onClick={() => addAnswer(questions.indexOf(question))}
                                >
                                    Добавить ответ
                                </Button>
                            }
                            <Button type='primary'
                                    className={styles.Delete}
                                    icon={<DeleteOutlined />}
                                    danger
                                    onClick={() => deleteQuestion(question.id)}
                            />
                            <br/>
                            <Radio.Group onChange={(event) =>
                                changeRadio(question.id, event.target.value)
                            }>
                            {
                                question.answers.map(answer =>
                                    <div className={styles.Radio} key={answer.id} >
                                        <Radio value={answer.id} >
                                            <TextArea onChange={(event) => changeRadioText(
                                                event.target.value,
                                                question.id,
                                                answer.id)}
                                                      placeholder='Текст ответа' autoSize />
                                        </Radio>
                                        {question.answers.length > 2 &&
                                            <Button
                                                type='primary'
                                                icon={<DeleteOutlined/>}
                                                danger
                                                onClick={() => deleteAnswer(questions.indexOf(question), answer.id)}
                                            />
                                        }
                                    </div>
                                )
                            }
                            </Radio.Group>
                        </Card>
                    )
                }
            </Modal>
        </>
    );
};

export default CreateQuizModal;