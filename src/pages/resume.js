
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/resume.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Resume() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="Resume">
      <header className="Resume-header">
      </header>

      <body class="body1">
        <div class="bodyContainer">
          <div class="row">
            <div class="col-3" id="column1">
              <img class="self" src={require("../images/Zack.jpg")} />
              <h1>Zachary Martin</h1>
              <p>Ztmartin315@gmail.com  |   (412) 818-2100  |  McKeesport, PA</p>
              <p><b>EDUCATION:</b></p>
              <p>Geneva College, Beaver Falls, PA </p>
              <p>Expected Graduation: May 2024</p>
              <p>B.S. Computer Science and Cybersecurity</p>
              <p>Minor in Web and Mobile Technology</p>
              <p>GPA: Current Semester 3.6 /3.5 Overall </p>
              <p>Dean’s List: Fall 2021 - Spring 2023 (4 Semesters)</p>

            </div>
            <div class="col-9" id="column2">

              <div class="cards">
                <div className="row-container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">OBJECTIVE</h5>
                          <p className="card-text">To leverage my passion for web development and newly acquired skills to secure a position where I can contribute to the creation of innovative web applications, while expanding my knowledge and expertise.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">PERSONAL GOALS</h5>
                          <p className="card-text">•Secure a position where I can showcase my skills.<br />•Gain practical experience through related positions.
                            <br />•Enhance technical knowledge and skills through experience.
                            <br />•Showcase my work through selfmade portfolio projects.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">AREAS OF INTEREST</h5>
                          <p className="card-text">•Web Development<br />
                            •Front-End Development<br />
                            •Back-End Development<br />
                            •Full Stack Developent<br />
                            •IT Specialists/Support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>





              <div class="accordion-container">
                <Accordion className="accordion" defaultActiveKey="0" flush>
                  <Accordion.Item className="help" eventKey="1">

                    <Accordion.Header className='accHead '>SKILLS </Accordion.Header>
                    <Accordion.Body className="accBod ">
                      <p><b>•Languages and Tools:</b> Python/Django, C#, JavaScript/Vue.js, C++, HTML, CSS, Linux, SQL, Dart(Flutter), Object-Oriented Programming, Visual Studio, VS Code, AWS, Virtual Box, GitHub, Balsamiq, LucidChart, Google Domains</p>
                      <p><b>•Personal:</b> Adaptability, Problem-Solving, Communication, Teamwork, Accountability, Time Management, Technical Writing</p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header className='accHead'>RELATED COURSES</Accordion.Header>
                    <Accordion.Body className="accBod">
                      <p><b>•</b>Web Engineering, Front-End Development, Web and Mobile Applications, Algorithms, Software Engineering, System Foundations, Database Systems, HTML, HCI</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className='accHead'>PERSONAL PROJECTS</Accordion.Header>
                    <Accordion.Body className="accBod">
                      <p><b>Media Management Website,</b> Oct. 2022 – Dec. 2022 </p>
                      <p><b>•</b>Using Python/Django, HTML/CSS with Bootstrap, MariaDB, and AWS (EC2, RDS, S3), developed a content management application that allowed users to upload media. The media was organized into playlists for media players to use to update their content. Implemented security measures for accessing website by requiring the creation of an account and log in information for individual users.                                                                                                                                                 </p>
                      <p><b>Location Tracker App, </b>April 2023 – May 2023 </p>
                      <p><b>•</b>Using Flutter and the Geolocation Package, developed an app that measured distance from current location to other locations, and permitted the user to add other locations into the database. Integrated with the server using a REST API.</p>
                      <p><b>Church Management Application,</b> April 2023 – May 2023 </p>
                      <p><b>•</b>Using Vue.js including Pinia and Axios, and HTML/CSS with Bulma, developed a browser-based application to manage member data, including donations and event participation.  Provided detailed and summary views of each member.</p>

                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header className='accHead'>WORK EXPERIENCE</Accordion.Header>
                    <Accordion.Body className="accBod">
                      <p><b>Game Dev/Programming Intern,</b> Jun. 2023 - Aug. 2023 </p>
                      <p>I.D.E.A.S Summer Camp, Pittsburgh, PA</p>
                      <p><b>•</b>Developed and implemented a comprehensive and engaging curriculum for teaching programming concepts to children aged 7-13. Introduced programming languages, such as Python, C# and Lua, as well as basic programming concepts such as algorithms, data structures, methods, functions, and recursion. Challenged campers to use tools and problem-solving to achieve goals by assigning specific projects aimed at developing targeted programming skills.</p>
                      <p><b>Cashier/Cook,</b> Nov. 2019 – Jun. 2023 </p>
                      <p>Big Shot Bob’s House of Wings, White Oak, PA</p>
                      <p><b>•</b>Provided customers with fast and friendly service through greeting customers, taking orders, and handling questions and concerns to exceed customer satisfaction. Worked in a team environment and handled payments and refunds while ensuring price and quantities were accurate.</p>


                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header className='accHead'>EXTRACURRICULAR ACTIVITIES</Accordion.Header>
                    <Accordion.Body className="accBod">
                      <p><b>Member,</b> Computer Science Club, Geneva College, Jan. 2022 – Present   </p>
                      <p><b>Member,</b> Geneva College Football Team, Geneva College, Aug.  2020 – Present</p>
                      <p><b>Volunteer,</b> Assistant Football Strength Coach, South Allegheny HS,Jun. 2021 – Aug 2021</p>
                    </Accordion.Body>
                  </Accordion.Item>

                </Accordion>
              </div>
            </div>
          </div>
        </div>

      </body >

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
            <Modal.Title className='modalTitle'>Welcome to ZackWorld!!!</Modal.Title>
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


    </div >
  );
}

export default Resume;
