import React, { useState, useEffect } from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Footer from "../../components/Footer";
import LoadSpinner from "../../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";

const EditHarvest = () => {
  const [harvestType, setHarvestType] = useState("");
  const [harvestAmount, setHarvestAmount] = useState("");
  const [harvestDate, setHarvestDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/harvest/${id}`)
      .then((res) => {
        setHarvestAmount(res.data.harvestAmount);
        setHarvestType(res.data.harvestType);
        setHarvestDate(res.data.harvestDate);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error fetching data:", error);
        alert("An error has occurred. Please check Console");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditHarvest = (e) => {
    e.preventDefault();
    const data = {
      harvestAmount,
      harvestType,
      harvestDate,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/harvest/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/harvest");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error has occurred. Please Check Console");
        console.log(error);
      });
  };
  return (
    <>
      <CustomNavbar />
      {loading && <LoadSpinner />}
      <Container style={{ maxWidth: "700px" }}>
        <Card className="text-michgold text-center mt-2 mb-5">
          {/* Include your partial title here */}

          {/* Forms */}
          <Form onSubmit={handleEditHarvest} id="harvest-form">
            <div className="m-3 fs-3 mt-0 fw-semibold">
              <Form.Label htmlFor="harvestAmount">Harvest Amount</Form.Label>
              <Form.Control
                type="number"
                className="text-center bg-inputgrey text-white border-3 border-michgold rounded-4 opacity-85 fw-bold"
                name="harvestAmount"
                id="harvestAmount"
                value={harvestAmount}
                onChange={(e) => setHarvestAmount(e.target.value)}
                aria-describedby="harvestAmount"
              />
            </div>
            <div className="m-3 mt-0 fs-3 fw-semibold">
              <Form.Label htmlFor="harvestType">Harvest Type</Form.Label>
              <Form.Select
                id="harvestType"
                className="text-center bg-inputgrey text-white border-3 border-michgold rounded-4 opacity-85 fw-bold"
                aria-label="select example"
                name="harvestType"
                value={harvestType}
                onChange={(e) => setHarvestType(e.target.value)}
              >
                <option selected>---</option>
                <option value="Honey">Honey</option>
                <option value="Wax">Wax</option>
              </Form.Select>
            </div>
            <div className="m-3 fs-3 mt-0 fw-semibold">
              <Form.Label htmlFor="harvestDate">Date</Form.Label>
              <Form.Control
                type="date"
                className="text-center bg-inputgrey text-white border-3 border-michgold rounded-4 opacity-85 fw-bold"
                id="harvestDate"
                name="harvestDate"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
              />
            </div>
          </Form>
          {/* Form end */}

          <div className="d-flex justify-content-around mb-3">
            <Button
              type="submit"
              form="harvest-form"
              className="btn px-5 btn-michgold btn-gold fw-bold rounded-pill"
            >
              ADD
            </Button>
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default EditHarvest;
