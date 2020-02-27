let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

    try {
        let data = await ddb.get({
            TableName: "hirutest",
            Key: {
                price: "1",
                colour: "2"
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};