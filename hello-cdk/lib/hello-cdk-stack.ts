import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as apiGateway from "@aws-cdk/aws-apigateway";
import { HitCounter } from "./hit-counter";

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("lambdas"), // directory to look for handler in
      handler: "hello.handler", // filename.functionname
    });

    const helloWithCounterLambda = new HitCounter(
      this,
      "HelloHitCounterHandler",
      {
        downstream: helloLambda,
      }
    );

    new apiGateway.LambdaRestApi(this, "HelloEndpoint", {
      handler: helloWithCounterLambda.handler,
    });
  }
}
