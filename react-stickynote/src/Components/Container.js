import React from 'react';
import AddCommentIcon from '@material-ui/icons/AddComment';
import "./Container.css";

export default class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listbox : []
        }

        this.addMemo = this.addMemo.bind(this);
    }

    addMemo(){
        console.log('Test');
    }

    render(){
        return(
            <div className = "containerStyle">
                <AddCommentIcon fontSize = "large" onClick = {this.addMemo}></AddCommentIcon>
            </div>
        )
    }
}