import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="row">
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <RenderComments comments={dish.comments} />
          </ul>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    return comments.map((comment) => {
      return (
        // <div key={comment.id}>
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author},{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
        // </div>
      );
    });
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <div className="container">
      <RenderDish dish={props.dish} />
    </div>
  );
};

export default DishDetail;
