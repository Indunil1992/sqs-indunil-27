let AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {

    try {
        let data = await ses.sendEmail({
            Source: "indunil@adroitlogic.com",
            Destination: {
                ToAddresses: ['indunil@adroitlogic.com']
            },
            Message: {
                Subject: {
                    Data: "lp"
                },
                Body: {
                    Text: {}
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};