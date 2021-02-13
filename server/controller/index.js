const Users = require('../model/userModel');
const aws = require('aws-sdk');
const fs = require('fs');

module.exports = {
    signup: function(req, res) {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: "ap-south-1"
        });

        const s3 = new aws.S3();
        let  params = {
            ACL: 'public-read',
            Bucket: "file-upload-zimam",
            Body: fs.createReadStream(req.file.path),
            Key: `userAvatar/${req.file.originalname-Date.now()})`
        };

        s3.upload(params, (err, data) => {
            if(err) {
                console.log("Error occured while trying to upload to s3 bucket", err);
            }

            if(data) {
                fs.unlinkSync(req.file.path);
                const locationUrl = data.Location;

                let newUser = new Users({
                    ...req.body,
                    avatar: locationUrl
                });

                // TODO: change it to async await
                newUser.save().then(user => {
                    res.json({
                        message: 'User created successfully!',
                        user
                    })
                })
                .catch(err => {
                    console.log("Error occurred while saving to the DB!");
                });
            }
        })
    }
}
