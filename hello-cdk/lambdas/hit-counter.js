const { DynamoDB, Lambda } = require("aws-sdk");

exports.handler = async (event) => {
  console.log(JSON.stringify(event, undefined, 2));

  const dynamoDb = new DynamoDB();
  const lambda = new Lambda();

  await dynamoDb
    .updateItem({
      TableName: process.env.HIT_COUNTER_TABLE_NAME,
      Key: {
        path: {
          S: event.path,
        },
      },
      UpdateExpression: "ADD hits :incr",
      ExpressionAttributeValues: { ":incr": { N: "1" } },
    })
    .promise();

  const downstreamResponse = await lambda
    .invoke({
      FunctionName: process.env.DOWNSTREAM_FUNCTION_NAME,
      Payload: JSON.stringify(event),
    })
    .promise();

  return JSON.parse(downstreamResponse.Payload);
};
