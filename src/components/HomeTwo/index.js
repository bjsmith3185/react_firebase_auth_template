import React from 'react';

import { withAuthorization } from '../Session';

const HomePageToo = () => (
  <div>
    <h1>Home Page Too</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePageToo);