import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AddMemo from './AddMemo';
import "./Container.css";

export default class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listbox : [],
            showPopup: false
        }

        this.togglePopup = this.togglePopup.bind(this);
    }

    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        
        console.log(this.state.showPopup);
    }

    render(){
        return(
            <div className = "containerStyle">
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick = {this.togglePopup}/>
                </Fab>
                { this.state.showPopup ? <AddMemo open = {this.state.showPopup}/> : null }
            </div>
        )
    }
}