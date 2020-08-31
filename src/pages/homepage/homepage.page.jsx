import React from "react";

import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";

export const Homepage = ({history}) => (
  <div className="homepage">
    <h1 onClick = {()=>history.push(``)}>Shop</h1>
    <Directory/>
  </div>
);

export default Homepage;
