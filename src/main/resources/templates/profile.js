import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { RecList } from './recList';
export class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1 className="h1">hello {this.props.name}, these are your reccomendations: </h1>
                <RecList name={this.props.name}/>
            </div>
        );
    }
}