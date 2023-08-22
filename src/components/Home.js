import React from 'react';

const Home = () => {
  return (
 <div className="container-fluid bg-dark" expand="lg">
    <p id='para' >Welcome To <br />Home Page</p>

    <img src={require("../Assets/1.jpg")} alt="developer" id='img' />
 </div>
    

  
  );
}

export default Home;