const AWS= require("aws-sdk");

const getTasks = async(event)=>{

    try {
        
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result= await dynamodb.scan({
        TableName:"TaskTable",
    }).promise()

    const task = result.Items
    console.log(task)
    return{
        status:200,
        body:{
            task
        }
    };
    } catch (error) {
       console.log(error); 
    }

};


module.exports={
    getTasks
};