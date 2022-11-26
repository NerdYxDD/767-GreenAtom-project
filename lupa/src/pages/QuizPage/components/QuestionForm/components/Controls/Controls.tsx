import React from 'react';
import { Button, Typography } from 'antd';
// @ts-ignore
import styles from './Controls.module.scss';

const Controls = () => {
  return (
    <div className={styles.Controls}>
      <Button>Назад</Button>

      <Typography.Text>111/111</Typography.Text>

      <Button>Далее</Button>
    </div>
  );
};

export default Controls;
