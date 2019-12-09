import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddMemo from './AddMemo';
import axios from 'axios';
import "./Container.css";

export default class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }

        this.showPopup = this.showPopup.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/')
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.error('fetch failed', err);
            });
    }

    showPopup(){
        this.setState({ 
            show: true
        });
    }

    hidePopup(){
        this.setState({ 
            show: false
        });
    }

    render(){
        return(
            <div className = "containerStyle">
                <Fab color="primary" aria-label="add" onClick = {this.showPopup} >
                    <AddIcon />
                </Fab>
            <div>
                { this.state.show ? <AddMemo open = {this.state.show} close = {this.hidePopup}/> : null }
            </div>
            </div>
        )
    }
}