import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as dynamoDb from "@aws-cdk/aws-dynamodb";

export interface HitCounterProps {
  downstream: lambda.IFunction;
}

export class HitCounter extends cdk.Construct {
  public readonly handler: lambda.Function;

  constructor(scope: cdk.Construct, id: string, props: HitCounterProps) {
    super(scope, id);

    const hitCounterTable = new dynamoDb.Table(this, "HitCounterTable", {
      partitionKey: {
        name: "path",
        type: dynamoDb.AttributeType.STRING,
      },
    });

    this.handler = new lambda.Function(this, "HitCounterHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambdas"),
      handler: "hit-counter.handler",
      environment: {
        DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
        HIT_COUNTER_TABLE_NAME: hitCounterTable.tableName,
      },
    });
  }
}
