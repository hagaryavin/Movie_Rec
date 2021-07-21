import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Recommendation } from './recommendation';
export class RecommendationsList extends React.Component {
    constructor(props){
        super(props);
        this.state={recs:[
                {movieName:"first movie",fullRec:"this is the full rec..."},
                {movieName:"second movie",fullRec:"bla bla bla"}
            ]};
    }
    render(){
        var recsList ="";
        this.state.recs.map((rec) =>{
            recsList+=<Recommendation movieName={rec.movieName} name={this.props.name} fullRec={rec.fullRec}/>
        });
        return(
           {recsList}  
        );
    }
}