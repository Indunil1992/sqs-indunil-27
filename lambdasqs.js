let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        let data = await sqs.deleteMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil-message-queue`,
            ReceiptHandle: "gt"
        }).promise();
        console.log("data");
                console.log(data);
                
    } catch (err) {
        // error handling goes here
                console.log("err");
                console.log(err);
    };

    return { "message": "Successfully executed" };
};