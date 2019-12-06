import React from 'react';
import Container from './Components/Container';
import AppBar from './Components/AppBar';

export default class App extends React.Component {
    render(){
        return(
            <div>
                <AppBar>
                    <Container />
                </AppBar>
            </div>
        )
    }
}