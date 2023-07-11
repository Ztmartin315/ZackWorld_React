
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Apps() {

  
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

<body>
      </body>
    </div>
  );
}

export default Apps;
