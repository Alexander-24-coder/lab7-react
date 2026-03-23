import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import FormContext from "./MultiStepFormContext";

const Review = () => {
  const { details, address, next, prev } = useContext(FormContext);

  return (
    <div className="details__wrapper">
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Name: {details.name}</p>
          <p>Age: {details.age}</p>
          <p>Profession: {details.profession}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>Address-1: {address.address1}</p>
          {address.address2 && <p>Address-2: {address.address2}</p>}
          <p>City: {address.city}</p>
          <Col span={24}>
          <h1>Hobbies</h1>
          {details.hobbies && details.hobbies.length > 0 ? (
            <ul>
              {details.hobbies.map((hobby) => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          ) : (
            <p>No hobbies selected.</p>
          )}
          </Col>
          <div className="form__item button__items d-flex justify-content-between">
            <Button type="default" onClick={prev}>Back</Button>
            <Button type="primary" onClick={next}>Confirm</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Review;