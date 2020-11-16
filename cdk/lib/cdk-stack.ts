import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const userPool = new cognito.UserPool(this, "UserPool", {
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
      signInCaseSensitive: false,
      // we want email only sign in
      signInAliases: {
        email: true,
        username: false,
      },
    });

    const userPoolWebClient = new cognito.UserPoolClient(
      this,
      "UserPoolWebClient",
      {
        userPool: userPool,
        // allow sign in with username (email) and password (https://docs.amplify.aws/cli/auth/import#import-an-existing-cognito-user-pool)
        authFlows: {
          userPassword: true,
        },
      }
    );

    const userPoolNativeClient = new cognito.UserPoolClient(
      this,
      "UserPoolNativeClient",
      {
        userPool: userPool,
        // generate a secret key to satisfy amplify requirements,
        generateSecret: true,
        // allow sign in with username (email) and password
        authFlows: {
          userPassword: true,
        },
      }
    );
  }
}
