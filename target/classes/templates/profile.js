import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { RecommendationsList } from './recommendationsList';
export class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1 className="h1">hello {this.props.name}, these are your reccomendations: </h1>
                <RecommendationsList name={this.props.name}/>
            </div>
        );
    }
}