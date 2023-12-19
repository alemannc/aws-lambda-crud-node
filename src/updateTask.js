const AWS = require("aws-sdk");

const updateTask = async (event) => {
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    const {done}=JSON.parse(event.body)

    await dynamodb.update({
        TableName:"TaskTable",
        Key:{id},
        UpdateExpression: "SET done = :done",
        ExpressionAttributeValues:{
            ":done": done
        },
        ReturnValues: "ALL_NEW"
    }).promise()

    return{
        status:200,
        body:JSON.stringify({
            message:"Task update succesfully"
        })
    };
};

module.exports = {
    updateTask
};