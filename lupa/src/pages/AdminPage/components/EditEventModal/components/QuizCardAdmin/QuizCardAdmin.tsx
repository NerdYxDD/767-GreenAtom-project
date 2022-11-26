import React from 'react';
import { Card, Button } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DeleteOutlined } from '@ant-design/icons';
// @ts-ignore
import styles from './QuizCardAdmin.module.scss'
import EditQuizModal from './components/EditQuizModal/EditQuizModal'


interface QuizCardAdminProps {
    name: string
}

const QuizCardAdmin: React.FC<QuizCardAdminProps> = ({ name }) => {
    return (
        <Card className={styles.Background}>
            <span className={styles.Tittle}>{name}</span>
            <div className={styles.Card}>
                <EditQuizModal name={name} />
                <Button type='primary' icon={<DeleteOutlined />} danger />
            </div>
        </Card>
    );
};

export default QuizCardAdmin;