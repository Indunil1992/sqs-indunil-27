let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        let data = await sqs.receiveMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil.fifo`,
            MaxNumberOfMessages: 1,
            VisibilityTimeout: 30,
            WaitTimeSeconds: 0,
            AttributeNames: ['SequenceNumber']
        }).promise();

    } catch (err) {
        // error handling goes here
    };


    return { "message": "Successfully executed" };
};