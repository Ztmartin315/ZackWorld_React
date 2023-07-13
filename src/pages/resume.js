
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';
import Accordion from 'react-bootstrap/Accordion';

function Resume() {



  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>
        <div class="container">
          <div class="row">
            <div class="col" id="column1">
              <img class="self" src={require("../images/Zack.jpg")} />
              <h1>Zachary Martin</h1>
            </div>
            <div class="col" id="column2">
              <p>ex</p>
            </div>
          </div>
        </div>

      </body>

      <footer>
        <p>Created by Zack Martin</p>
      </footer>


    </div>
  );
}

export default Resume;
