import React from 'react';
import Form from '../common/Form';

const Home = () => (
  <Form title="Описание">
    <div className="content">
      <div className="description">
        <p>
          Этот пример сделан для того, чтобы показать некоторые вещи, которые я умею делать. Также я собираюсь дополнять
          его новыми фишками.
        </p>
        <p>Основные особенности:</p>
        <ol>
          <li>Загрузка по API из базы данных MondoDB юзеров</li>
          <li>Методы POST, PUT, DELETE также реализованы</li>
          <li>Есть валидация четырех полей (фио, основной и рабочий номера, дата рождения)</li>
          <li>Поле ФИО обязательно для заполнения</li>
        </ol>
      </div>
    </div>
  </Form>
);

export default Home;
