import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Profile } from './profile';
import React from 'react';
export class loginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={userName:"",password:"",ok:false};
        this.log=this.log.bind(this);
        this.setUName=this.setUName.bind(this);
        this.setPass=this.setPass.bind(this);
    }
    log(event){
        if(this.state.userName&&this.state.password){
            this.setState({ok:true});
        }
    }
    setUName(event){
        this.setState({ userName: event.target.value });
    }
    setPass(event){
        this.setState({ password: event.target.value });
    }
    render() {
    if(!this.state.ok){
        return (<form>
            <div className="form-group">
            <input className="form-control" id="userName"  placeholder="User Name" onChange={this.setUName}/>
            </div>
            <div className="form-group">
            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.setPass}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.log}>Login</button>
        </form>);
      }
      else{
          return(<Profile name={this.state.userName}/>);
      }
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<loginForm />, rootElement);

