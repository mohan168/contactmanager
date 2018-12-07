import React from 'react';

function About(props) {
  return (

    <div>

      <h1 className="display-4">{props.match.params.id}</h1>
      <p className="lead">Simple app to manager </p>
      <p className="text-secondary">version 1.0.0</p>
    </div>
  )
}

export default About;