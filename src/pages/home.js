import '../styles/home.css';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {

  const projects = [
    {
      title: 'Mobile Portfolio Application',
      description: '•Using Flutter, developed a mobile application which contained a portfolio including a resume page, an about page, a gallery, as well as a guest list.', title: 'Flutter Portfolio App',
      image: require('../images/flutter.png'),
    },
    {
      title: 'Chruch Management Application',
      description: '•Using Vue.js including Pinia and Axios, and HTML/CSS with Bulma, developed a browser-based application to manage member data, including donations and event participation.  Provided detailed and summary views of each member.',
      image: require('../images/364.png'),
    },
    {
      title: 'Media Management Application',
      description: '•Using Python/Django, HTML/CSS with Bootstrap, MariaDB, and AWS (EC2, RDS, S3), developed a content management application that allowed users to upload media. The media was organized into playlists for media players to use to update their content. Implemented security measures for accessing website by requiring the creation of an account and log in information for individual users.',
      image: require('../images/django.png'),
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
                <Carousel.Caption class="cap">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div class='rick-btn'>
          <a class="btn btn-primary btn-lg" href="https://youtu.be/dQw4w9WgXcQ" role="button">The Promised Land</a>
        </div>

      </body>
    </div>
  );
}

export default Home;
