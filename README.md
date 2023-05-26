# DevOps Roadmap for AWS deploy

- Setup IAM users, groups, roles and policies;
- Enforce password safety practices

## AWS RDS

- Create RDS instance;
- Configure networking;
- Setup SSH authentication;
- Configure automatic backups;
- Create the database, its users and privileges;
- Enfoce IAM access to instance terminal;
- Setup connections to the CloudFare and EC2 instances;
- Create the database based on the model;
- Setup indexes, functions and SPs;
- Create and setup views and privileges according to bussness rules;
- Setup EC2 instance permissions and optimizations;
- Populate the database;
- Test connectivity and deploy.

## AWS EC2

- Create EC2 instance;
- Configure networking;
- Setup ELBs;
- Setup public access interface;
- Enforce IAM acess to instance terminal;
- Configure automatic backups;
- Install requirements for the Node instance;
- Setup the base Node instance;
- Configure system variables;
- Setup script for automatic deploys;
- Point DNS to cloudfront;
- Test connectivity and deploy.

## AWS CloudFront

- Create S3 bucket
- Create CloudFront distribution;
- Create AWS public Certificate;
- Create base React app and static files;
- Dump files in S3;
- Point Cloudfront distribution at files;
- Point Route 53 DNS at distribution endpoint;
- Configure SSL Certificate;
- Test connectivity and deploy.

