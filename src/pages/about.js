
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function About() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className="About">
            <header className="About-header">
            </header>
            <body>

                <center><h2> Woah</h2></center>


            </body>

            <footer className="footer">

                <Button variant="primary" onClick={handleShow}>
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
        </div>
    );
}

export default About;
