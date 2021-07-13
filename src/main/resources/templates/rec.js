import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
export class Rec extends React.Component {
    render(){
        return(
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{this.props.movieName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Review By: {this.props.name}</h6>
                    <p className="card-text">{this.props.fullRec}</p>
                </div>
            </div>
        );
    }
}