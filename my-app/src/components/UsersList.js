import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg,
  Col,
  Container,
  Row,
} from "reactstrap";

export default function UsersList(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 4, offset: 4 }}>
            <Card>
              <CardBody>
                <CardTitle>{props.profile.name}</CardTitle>
                <CardText>Username: {props.profile.login}</CardText>
              </CardBody>
              <CardImg
                bottom
                width="100%"
                src={props.profile.avatar_url}
                alt="profile face"
              />
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row xs="3">
          {props.followers.map((item) => (
            // <div key={item.id} className="follower-div">
            <Col>
              <Card body inverse color="info">
                <CardBody>
                  <CardTitle>Username: {item.login}</CardTitle>
                </CardBody>
                <CardImg
                  bottom
                  width="100%"
                  src={item.avatar_url}
                  alt="Card image cap"
                />
              </Card>
            </Col>
            // </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}
