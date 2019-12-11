import React from 'react';
import axios from 'axios';
import CardContent from './CardContent';
import "./Container.css";

class Container extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            listArray: []
        }
    }

    // 첫 로딩 시 등록되어 있는 데이터베이스 호출
    componentDidMount(){
        axios.get('http://localhost:4000/')
            .then(response => {
                const { listArray } = this.state;
                this.setState({
                    listArray: listArray.concat(...response.data)
                })
                console.log(this.state.listArray);
            }).catch(err => {
                console.error('fetch failed', err);
            });
    }

    render(){
        return(
            <div className = "containerStyle">
                {
                    this.state.listArray.map((obj, index) => {
                        return(
                            <CardContent key = {index} title = {obj.title} content = {obj.content} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Container;