let AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = async (event) => {
    try {
        let data = await sqs.sendMessage({
            QueueUrl: `https://sqs.${process.env.AWS_REGION}.amazonaws.com/${process.env.SIGMA_AWS_ACC_ID}/indunil-message-queue`,
            MessageBody: "Test from testcafe",
            DelaySeconds: 0,
            MessageAttributes: {
                'x': {
                    'DataType': "String",
                    'StringValue': "1"
                }
            }
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