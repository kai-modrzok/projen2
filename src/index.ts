import { Stack, StackProps } from 'aws-cdk-lib';
import { BlockPublicAccess, Bucket, BucketEncryption, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class CdkThreeTierServerlessStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const s3props: BucketProps = {
        blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
        bucketKeyEnabled: true,
        encryption: BucketEncryption.KMS,
        enforceSSL: true,
    }
    new Bucket(this, 'S3Bucket', s3props);
  }
}
