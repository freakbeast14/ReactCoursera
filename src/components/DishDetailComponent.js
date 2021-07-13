import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardText,
  CardTitle,
} from "reactstrap";

export default class DishDetailComponent extends Component {
  renderDish(dish){
    if(dish != null){
      return (
      <div className="row">
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg
                top
                src={dish.image}
                alt={dish.name}
              />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(dish.comments)}
            </ul>
          </div>
        </div>
      );
    } else {
      return(<div></div>)
      
    }
  }

  renderComments(comments){
    if(comments != null){
        return (comments.map((comment) => {
          return (
            // <div key={comment.id}>
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            // </div>
          );
        }));
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {

    return (
      <div className="container">
        {this.renderDish(this.props.dish)}
      </div>
    );
  }
}