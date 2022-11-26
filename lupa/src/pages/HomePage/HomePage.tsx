import React from 'react';
// @ts-ignore
import styles from './HomePage.module.scss';
// @ts-ignore
import greenLabIcon from '../../UI/icons/green_lab_icon.png'
// @ts-ignore
import image1 from '../../UI/images/image1.png'


const HomePage = () => (
    <div className={styles.background}>
        <div className={styles.greenAtom}>
            <div className={styles.textBlock}>
                <span style={{ left: '-53px', top: 'calc(50% - 42px)' }}>IT</span><br/>
                <div className={styles.stazhirovka}>
                    <span>СТАЖИРОВКИ</span>
                </div>
                <span style={{ left: '13px' }}>РОСАТОМА</span>
            </div>
        </div>
        {/* <div className={styles.gradient} /> */}
        <div className={styles.forLogo}>
            <img className={styles.greenLabIcon} src={greenLabIcon} alt=''/>
        </div>
        <div className={styles.infoBlocks}>
            <div className={styles.textBlock1}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px' }}>
                    Some text...
                </div>
            </div>
            <div className={styles.textBlock2}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px', display: 'flex' }}>
                    <img src={image1} className={styles.image1} alt=''/>
                        <span id='1'>Мы готовим IT-кадры
                        <br/>для атомной отрасли</span>

                </div>
            </div>
            <div className={styles.textBlock3}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px' }}>
                    Студентов и выпускников без опыта работы приглашаем пройти программы подготовки Case Lab. По итогу программы лучшие участники получат приглашение на оплачиваемую стажировку в компанию.
                    Специалистов с опытом приглашаем пройти стажировку в компании.
                    Актуальные программы подготовки и стажировки на нашем сайте
                </div>
            </div>
            <div className={styles.textBlock2}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px' }}>
                    Some text...
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;