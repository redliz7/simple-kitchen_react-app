import React from 'react';
import styles from './Description.module.css';
import bgImage from '../../../assets/desc_bg_img.jpg';
import Card from '../../UI/Card';

const Description = () => {
  return (
    <React.Fragment>
      <section className={styles.description}>
        <div className={styles['description-image']}>
          <img src={bgImage} />
        </div>
        <div className={styles.description__wrap}>
          <h2>Онлайн Ресторан "Простая Кухня"</h2>
          <p>
            Простая Кухня - это онлайн кухня для заказа любой еды. Здесь вы
            можете выбрать как Ваш любымый сет суш, так и просто заказать столик
            в нашем заведении
          </p>
          <p>
            У нас №1 поставищк еды! Продукция всегда свежая и не хранится более
            1 дня в ресторане. Заказ происходит мгновенно и доставка
            осуществаляется в течении 30 минут по всему городу.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Description;
