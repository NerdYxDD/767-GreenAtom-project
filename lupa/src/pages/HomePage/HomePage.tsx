import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import styles from './HomePage.module.scss';
// @ts-ignore
import greenLabIcon from '../../ui/icons/green_lab_icon.png';
// @ts-ignore
import image1 from '../../ui/images/image1.png';
// @ts-ignore
// import tiotya from '../../ui/images/Tiotya_img.png';

const HomePage = () => (
    <div className={ styles.Background }>
        <div className={ styles.GreenAtom }>
            <div id='textGreen'>
                <div className={ styles.TextBlock }>
                    <span id='1' >IT</span>
                    <div className={styles.Stazhirovka}>
                        <span>СТАЖИРОВКИ</span>
                    </div>
                    <span id='2' >РОСАТОМА</span>
                </div>
            </div>
        </div>
        <Link className={styles.ForLogo} to='/green_lab/'>
            <img className={styles.GreenLabIcon} src={greenLabIcon} alt=''/>
        </Link>
        <div className={styles.InfoBlocks}>
            <div className={styles.TextBlock1}>
                <div className={styles.block1}>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <span id='1'>GREEN</span><span id='2'>ATOM</span>
                </div>
            </div>
            <div className={styles.TextBlock2}>
                <div
                    style={{
                        width: 'calc(100% - 30px)',
                        maxWidth: '600px',
                        display: 'flex'
                    }}
                >
                    <img src={image1} className={styles.Image1} alt=''/>
                    <span id='1'>Мы готовим IT-кадры для атомной отрасли</span>
                </div>
            </div>
            <div className={styles.TextBlock3}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px' }}>
                    Студентов и выпускников без опыта работы приглашаем пройти программы
                    подготовки Case Lab. По итогу программы лучшие участники получат
                    приглашение на оплачиваемую стажировку в компанию. Специалистов с
                    опытом приглашаем пройти стажировку в компании. Актуальные программы
                    подготовки и стажировки на нашем сайте
                </div>
            </div>
            <div className={styles.TextBlock2}>
                <div style={{ width: 'calc(100% - 30px)', maxWidth: '600px' }}>
                    Some text...
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
