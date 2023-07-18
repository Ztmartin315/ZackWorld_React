import '../styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Home() {

  const projects = [
    {
      title: 'Mobile Portfolio Application',
      description: 'Using Flutter, developed a mobile application which contained a portfolio including a resume page, an about page, a gallery, as well as a guest list.',
      image: require('../images/flutter.png'),
    },
    {
      title: 'Church Management Application',
      description: 'Using Vue.js including Pinia and Axios, and HTML/CSS with Bulma, developed a browser-based application to manage member data, including donations and event participation. Provided detailed and summary views of each member.',
      image: require('../images/364.png'),
    },
    {
      title: 'Media Management Application',
      description: 'Using Python/Django, HTML/CSS with Bootstrap, MariaDB, and AWS (EC2, RDS, S3), developed a content management application that allowed users to upload media. The media was organized into playlists for media players to use to update their content. Implemented security measures for accessing website by requiring the creation of an account and log in information for individual users.',
      image: require('../images/django.png'),
    },
  ];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="App">
      <header className="App-header">


        <div className="jumbotron jumbotron-fluid">
          <div className="title">
            <img className="srcPic" src={require('../images/logo1.jpg')} alt="logo" />
            <h1>Hello, World!</h1>
            <h2>Welcome to ZackWorld!</h2>
            <a className="btn btn-primary" href="/about" role="button">About Zack</a>
          </div>
        </div>

      </header>

      <body className="App-body">


        <div className="row">
          <div className="column">
            <div className="subtitle">
              <h1>Hi, I'm Zack!</h1>
              <h2>Take a look around!</h2>
            </div>
          </div>

          <div className="column">
            <div className="profile-pic">
              <img className="pic" src={require("../images/Zack.jpg")} alt="zack" />
            </div>
          </div>
        </div>


        <div className="column">
          <div className="rick-btn">
            <a className="btn btn-success btn-lg" href="https://youtu.be/dQw4w9WgXcQ" role="button">A Gift For You!</a>
          </div>
        </div>


        <div className="project-title">
          <h1><b>My Projects</b></h1>
        </div>

        <div className="carousel">
          <Carousel>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <img className="carousel-image" src={project.image} alt={project.title} />
                <Carousel.Caption className="cap">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>


      </body>
      <footer className="footer">

        <Button variant="dark" onClick={handleShow}>
          Created By Zack Martin
        </Button>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="modalTitle">Welcome to ZackWorld!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This Website Was Created Solely By Zack Martin Using React.js and AWS
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </footer>
    </div>

  );
}

export default Home;