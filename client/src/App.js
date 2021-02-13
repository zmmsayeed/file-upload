import React from 'react';
import './App.css';

import { Upload, message, Button  } from 'antd';

class App extends React.Component {
    render() {
        let props = {
            name: 'file',
            action: 'http://localhost:5000',
            onChange(info) {
                console.log("Info: ", info);
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };

        return (
            <>
                <div>Hi</div>
                <Upload {...props}>
                    <Button>Click to Upload</Button>
                </Upload>
            </>
        )
    }
}

export default App;
