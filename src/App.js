
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function App() {

  const projects = [
    {
      title: 'Flutter Portfolio App',
      description: 'This is the description of Project 1.',
      image: require('./images/Zack.jpg'),
    },
    {
      title: 'Mock Church Application',
      description: 'This is the description of Project 2.',
      image: require('./images/eat.jpg'),
    },
    {
      title: 'Media Management Application',
      description: 'This is the description of Project 3.',
      image: require('./images/pittsburgh.jpg'),
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        
      <div class = "navbar navbar-fixed-top">
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
             <a class="navbar-brand" href="#">ZackWorld</a>
             <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
                  
                  <li class="nav-item">
                    <a class="nav-link" href="#">Resume</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Gallery</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Guest List</a>
                  </li>
                </ul>
             </div>
          </nav>
         </div>

         <div class="jumbotron jumbotron-fluid">
       <div class="title">
          <h1>Hello, World!</h1>
          <h2>Welcome to ZackWorld!</h2>
          <a class="btn btn-primary" href="#" role="button">About Zack</a>
       </div>
       </div>

      </header>

      <body className="App-body">


      <div class="row">
            <div class="column">
              <div class = "subtitle">
                  <h1>Hi, I'm Zack!</h1>
                  <h2>Take a look around!</h2>
              </div>
            </div>

            <div class="column">
              <div class = "profile-pic">
                <img class = "pic" src={require("./images/Zack.jpg")} alt = "zack"/>
              </div>
            </div>
         </div>
          <div class="project-title">
            <h1>My Projects</h1>
          </div>

        <div classname = "carousel">
          <Carousel>
      {projects.map((project, index) => (
        <Carousel.Item  key={index}>
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

export default App;
