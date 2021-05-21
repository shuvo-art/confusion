import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    renderDish(clickedDish) {
        if (clickedDish != null){
            return(
                <Card>
                    <CardImg width="100%" src={clickedDish.image} alt={clickedDish.name} />
                    <CardBody>
                        <CardTitle>{clickedDish.name}</CardTitle>
                        <CardText>{clickedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    renderComments(commentedDish) {
        if(commentedDish != null) {
            const allComment = commentedDish.comments.map((cmt) => {
                return (
                    <div key={cmt.id} className="col-12 m-1">
                        <ul className="list-unstyled">
                            <li>
                                <blockquote className="blockquote">
                                    <p className="mb-1">{cmt.comment}</p>
                                    <p className="m-2">
                                        <ul className="list-inline">
                                            <footer className="blockquote-footer"> 
                                                <li className="list-inline-item">{cmt.author}</li>
                                                <li className="list-inline-item">,</li>
                                                <li className="list-inline-item">{cmt.date}</li>
                                            </footer>    
                                        </ul>
                                    </p>
                               </blockquote>
                           </li>
                       </ul>  
                   </div>
                );
            });

            return (
                <div>
                    <h4>Comments</h4>
                    {allComment}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;