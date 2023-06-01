import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'kai',
  authorAddress: 'kai.modrzok@gmx.de',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'projen2',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/kai.modrzok/projen2.git',

  deps: [
    //'@aws-solutions-constructs/aws-s3-sns'
  ],            
  publishToMaven: {
    mavenRepositoryUrl: 'https://maven.pkg.github.com/kai.modrzok/projen2',
    mavenGroupId: 'kai.modrzok',
    mavenArtifactId: 'projen2',
    javaPackage: 'com.kai.projen2'
  }    
  
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();