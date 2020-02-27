let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = async (event) => {
    try {
        let data = await sns.unsubscribe({
            SubscriptionArn: "arn:aws:sns:us-east-1:318300609668:TestSNS:bec16985-353e-42f0-8e40-952321c5e4fe"
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};