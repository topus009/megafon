import React from 'react';
import Form from '../common/Form';
import { FMessage } from '../hoc/IntlComponents';

const Home = () => (
  <Form title="home.form.title" classNames="home">
    <div className="description">
      <p>
        <FMessage id="home.part.1" />
      </p>
      <p>
        <FMessage id="home.part.2" />
      </p>
      <ol>
        <li>
          <FMessage id="home.part.3" />
        </li>
        <li>
          <FMessage id="home.part.4" />
        </li>
        <li>
          <FMessage id="home.part.5" />
        </li>
        <li>
          <FMessage id="home.part.6" />
        </li>
      </ol>
    </div>
  </Form>
);

export default Home;
