import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Divider } from 'antd';
// @ts-ignore
import styles from './HomePage.module.scss';
// @ts-ignore
import logoIT from '../../ui/icons/logo_IT.svg';
// @ts-ignore
import pmImg from '../../ui/icons/PM.png';
// @ts-ignore
import devopsImg from '../../ui/icons/devops.png';
// @ts-ignore
import hrImg from '../../ui/icons/hr.png';
// @ts-ignore
import softwareImg from '../../ui/icons/software-engineer.png';

const HomePage = () => (
  <div>
    <div className={styles.Header}>
      <a href='https://edu.greenatom.ru/'>
        <img src={logoIT} alt='logo' className={styles.Logo} />
      </a>
    </div>
    <div className={styles.Invitation}>
      <div className={styles.Container}>
        <div>
          Приглашаем студентов пройти программы подготовки в <b>GreenAtom</b>
        </div>
      </div>
    </div>
    <div className={styles.Internships}>
      <div className={styles.CardInfo}>
        <div className={styles.Container}>
          <p className={styles.Title}>Программы подготовки</p>
          <p>
            Для тех, кто только начинает свой путь в карьере, у нас есть
            бесплатные дистанционные программы предста­жировки. Лучшие участники
            получают приглашение на оплачиваемую стажировку.
          </p>
        </div>
      </div>
      <div className={styles.CardInfo}>
        <div className={styles.Container}>
          <p className={styles.Title}>Оплачиваемые стажировки</p>
          <p>
            Это реальные задачи, погружение в бизнес- процессы, масштабные
            проекты и профессиональная команда. Стажировка подойдет тем, у кого
            уже есть опыт и знания в профессии.
          </p>
        </div>
      </div>
    </div>
    <Divider>
      <p className={styles.DividerTitle}>Актуальные стажировки</p>
    </Divider>

    <div className={styles.InternshipsList}>
      <div className={styles.Container}>
        <div className={styles.List}>
          <Card>
            <div className={styles.CardWrapper}>
              <p>Project manager</p>
              <img src={pmImg} alt='icon' />
            </div>
          </Card>

          <Card>
            <div className={styles.CardWrapper}>
              <p>HR manager</p>
              <img src={hrImg} alt='icon' />
            </div>
          </Card>

          <Card>
            <div className={styles.CardWrapper}>
              <p>DevOps engineer</p>
              <img src={devopsImg} alt='icon' />
            </div>
          </Card>

          <Card>
            <div className={styles.CardWrapper}>
              <p>Software engineer</p>
              <img src={softwareImg} alt='icon' />
            </div>
          </Card>
        </div>
      </div>
    </div>

    <div className={styles.ButtonBlock}>
      <div className={styles.Container}>
        <p>
          Пройдите опрос и узнайте, какая стажировка вам подойдет больше всего
        </p>
        <Link className={styles.SubmitButton} to='/login'>
          Пройти опрос
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
