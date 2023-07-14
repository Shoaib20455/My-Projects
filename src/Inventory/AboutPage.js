import React from 'react';
import './AboutPage.css'; // Import a CSS file for custom styling

const AboutPage = () => {
  return (
    <div className="container">
      <h1 className="about-heading">About</h1>
      <p className="lead fw-bold">
        Welcome to our modern React Todo App! This app allows you to manage your tasks and stay organized.
      </p>
      <p>
        With our intuitive interface, you can easily add new tasks, mark them as complete, and delete tasks you no longer need. The app keeps your tasks saved, so you can access them even after closing the browser.
      </p>
      <p>
        Our goal is to provide you with a clean and efficient task management experience. Stay productive and organized with our React Todo App!
      </p>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Developed By</h2>
          <p className="card-text">M Shoaib</p>
          <p className="card-text">Web Developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
