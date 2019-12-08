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
            showPopup: false
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/')
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.error('fetch failed', err);
            });
    }

    togglePopup() {
        this.setState({ 
            showPopup: !this.state.showPopup
        });
    }

    render(){
        return(
            <div className = "containerStyle">
                <Fab color="primary" aria-label="add" onClick = {this.togglePopup} >
                    <AddIcon />
                </Fab>
                { this.state.showPopup ? <AddMemo open = {this.state.showPopup} /> : null }
            </div>
        )
    }
}