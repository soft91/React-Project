import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddMemo from './AddMemo';
import "./Container.css";

export default class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showPopup: false
        }

        console.log(`init showPopup : ${this.state.showPopup}`)

        this.togglePopup = this.togglePopup.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:4000/')
            .then(response => response.text())
            .then(text => {
                console.log(text);
            }).catch(err => {
            console.error('fetch failed', err);
        });
    }

    togglePopup() {
        this.setState({ 
            showPopup: !this.state.showPopup
        });
        console.log(`showPopup : ${this.state.showPopup}`)
    }

    render(){
        return(
            <div className = "containerStyle">
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick = {this.togglePopup} />
                </Fab>
                { this.state.showPopup ? <AddMemo open = {this.state.showPopup} /> : null }
            </div>
        )
    }
}