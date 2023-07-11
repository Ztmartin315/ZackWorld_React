import '../styles/home.css';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {

  const projects = [
    {
      title: 'Flutter Portfolio App',
      description: '•Using Flutter, developed a mobile application which contained a portfolio including a resume page, an about page, a gallery, as well as a guest list.',
      image: require('../images/Zack.jpg'),
    },
    {
      title: 'Chruch ManagementApplication',
      description: 'This is the description of Project 2.',
      image: require('../images/eat.jpg'),
    },
    {
      title: 'Location Tracker Application',
      description: '•Using Flutter, developed an app that measured distance from current location to other locations, and permitted the user to add other locations into the database. Integrated with the server using a REST API.',
      image: require('../images/eat.jpg'),
    },
    {
      title: 'Media Management Application',
      description: '•Using Vue.js including Pinia and Axios, developed a browser-based application to manage member data, including donations and event participation.  Provided detailed and summary views of each member.',
      image: require('../images/pittsburgh.jpg'),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">


        <div class="jumbotron jumbotron-fluid">
          <div class="title">
            <h1>Hello, World!</h1>
            <h2>Welcome to ZackWorld!</h2>
            <a class="btn btn-primary" href="/about" role="button">About Zack</a>
          </div>
        </div>

      </header>

      <body className="App-body">


        <div class="row">
          <div class="column">
            <div class="subtitle">
              <h1>Hi, I'm Zack!</h1>
              <h2>Take a look around!</h2>
            </div>
          </div>

          <div class="column">
            <div class="profile-pic">
              <img class="pic" src={require("../images/Zack.jpg")} alt="zack" />
            </div>
          </div>
        </div>
        <div class="project-title">
          <h1>My Projects</h1>
        </div>

        <div classname="carousel">
          <Carousel>
            {projects.map((project, index) => (
              <Carousel.Item key={index}>
                <img className="itm" src={project.image} alt={project.title} />
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

      </body>
    </div>
  );
}

export default Home;
