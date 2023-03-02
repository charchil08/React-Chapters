import axios from "axios";
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";

const App = () => {
    const [details, setDetails] = useState({})

    const fetchDetails = async () => {
        const { data } = await axios.get('https://randomuser.me/api/')
        // console.log("🚀   file: App.js   line 12   fetchDetails   response", response);
        const details = data.results[0];
        setDetails(details)
    }

    useEffect(() => {
        fetchDetails();
    }, [])

    return (
        <div>
            <Container fluid className="p-4 bg-primary App">
                <Row>
                    <Col md={4} className="offset-md-4 mt-4" >
                        <MyCard details={details} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default App;