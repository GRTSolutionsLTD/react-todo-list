/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import messages from './messages';
import './index.scss';

export default function HomePage() {
  return (
    <Jumbotron class="home">
      <h1>Hello, ourApp!</h1>
      <FormattedMessage class="mx-auto" {...messages.header} />
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}


