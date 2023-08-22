import React from 'react';

const About = () => {
  return (
    <section id="about">
    <p id="para" className='par'>Welcome To <br /> About Us Page</p>
    <img src={require("../Assets/3.png")} id='img' alt="" />
    </section>
  );
}

export default About;