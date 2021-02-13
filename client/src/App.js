import React from 'react';
import './App.css';

import axios from 'axios';

// import { Upload, message, Button  } from 'antd';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file: null
        }
    }

    changeFile = (e) => {
        this.setState({file: e.target.files[0]})
    }

    formSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('avatar', this.state.file);
        formData.append('email', 'zmmsayeed@gmail.com');
        formData.append('password', 'newPaassworrrdd');

        axios({
            method: 'post',
            url: "http://localhost:4000/api/signup",
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <form onSubmit={this.formSubmit}>
                    <input type="file" onChange={this.changeFile}/>

                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default App;
