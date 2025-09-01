document.addEventListener('DOMContentLoaded', () => {

    const navigationStructure = [
        { type: 'link', label: 'Home / Key Services', topic: 'home' },
        { type: 'category', label: 'About the Exam' },
        { type: 'link', label: 'Exam Overview & Strategy', topic: 'exam_overview' },
        { type: 'category', label: 'Exam Domains' },
        { type: 'link', label: '1: Cloud Concepts', topic: 'domain1' },
        { type: 'link', label: '2: Security & Compliance', topic: 'domain2' },
        { type: 'link', label: '3: Cloud Technology', topic: 'domain3' },
        { type: 'link', label: '4: Billing & Pricing', topic: 'domain4' },
        { type: 'category', label: 'Core Services' },
        { type: 'link', label: 'IAM (Identity)', topic: 'iam' },
        { type: 'link', label: 'Compute (EC2, Lambda)', topic: 'compute' },
        { type: 'link', label: 'Storage (S3, EBS)', topic: 'storage' },
        { type: 'link', label: 'Databases & Analytics', topic: 'databases' },
        { type: 'link', label: 'Networking & Content Delivery', topic: 'networking' },
        { type: 'link', label: 'Messaging (SQS, SNS)', topic: 'messaging' },
        { type: 'category', label: 'Management & Developer Tools' },
        { type: 'link', label: 'Deployment & CI/CD', topic: 'deployment' },
        { type: 'link', label: 'Monitoring & Auditing', topic: 'monitoring' },
        { type: 'link', label: 'Advanced Identity', topic: 'advanced_identity' },
        { type: 'category', label: 'Key Topics' },
        { type: 'link', label: 'In-Depth Security', topic: 'security' },
        { type: 'link', label: 'Machine Learning', topic: 'ml' },
        { type: 'link', label: 'Migration & Transfer', topic: 'migration' },
        { type: 'link', label: 'Frameworks & Strategies', topic: 'frameworks' },
        { type: 'link', label: 'Other Key Services', topic: 'other' },
    ];

    const markdownContent = {
        'home': `
# AWS Certified Cloud Practitioner (CLF-C02) Guide
Welcome! This guide is designed to provide a quick yet comprehensive reference for the core concepts and services covered in the exam. Use the navigation on the left to explore the topics.

## Key Services Quick Reference
| Service Logo | Service Name | Category | Core Use Case |
| :---: | :--- | :--- | :--- |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-ec2/asset-29_Amazon-EC2_Instance_light-bg.792c39121a227891d310652a9c3364f26e5f3964.png" alt="EC2 Logo"> | **EC2** | Compute | Provides resizable compute capacity in the cloud. Essentially, a virtual server. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-s3/asset-2_Amazon-S3-Standard_light-bg.d9a4b277eabf434a5f4503b4184a4417a82229a4.png" alt="S3 Logo"> | **S3** | Storage | Scalable object storage suitable for backups, data lakes, and static website hosting. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/asset-1_Amazon-RDS_light-bg.10f850b4a44c601443422a59239a5c8982f80165.png" alt="RDS Logo"> | **RDS** | Database | A managed service for relational databases like MySQL, PostgreSQL, simplifying setup and operations. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/aws-lambda/asset-4_AWS-Lambda_light-bg.108d4b35e07a23c509b552e4682057d29c29805d.png" alt="Lambda Logo"> | **Lambda** | Compute | A serverless compute service that runs code in response to events without provisioning servers. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-vpc/asset-10_Amazon-VPC_light-bg.78f303f135b37f48b11baf782c5f111516e53401.png" alt="VPC Logo"> | **VPC** | Networking | Creates a logically isolated section of the AWS Cloud to launch resources in a virtual network. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/aws-identity-access-management/asset-6_AWS-Identity-Access-Management_light-bg.31ae0b230856d539a2d6105c3c1374d75d56241e.png" alt="IAM Logo"> | **IAM** | Security | Securely manages access to AWS services by controlling users, groups, and permissions. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-route-53/asset-7_Amazon-Route-53_light-bg.24522955f05a1099684784a3ad30cadb09841f4f.png" alt="Route 53 Logo"> | **Route 53** | Networking | A scalable and highly available Domain Name System (DNS) web service. |
| <img class="service-logo" src="https://d1.awsstatic.com/asset-repository/products/amazon-cloudfront/asset-3_Amazon-CloudFront_light-bg.7b2a63283a30c51121c7d27e2a9a3b615b1356f0.png" alt="CloudFront Logo"> | **CloudFront** | Networking | A Content Delivery Network (CDN) that securely delivers content with low latency and high speed. |
`,
        'exam_overview': `
# Exam Overview & Strategy
This section summarizes the AWS Certified Cloud Practitioner (CLF-C02) exam and provides a strategy for success.

## About the Exam
- **Target Audience:** Individuals with up to 6 months of exposure to the AWS Cloud, including those in non-IT roles (sales, marketing, finance) or those starting a cloud career.
- **Format:** 65 questions (50 scored, 15 unscored) with multiple-choice and multiple-response formats.
- **Duration:** 90 minutes.
- **Passing Score:** 700 out of 1000.
- **Key Abilities Validated:**
    - Explain the value of the AWS Cloud.
    - Understand and explain the AWS Shared Responsibility Model.
    - Understand security best practices.
    - Understand AWS Cloud costs, economics, and billing practices.
    - Describe and position core AWS services (compute, network, database, storage).
    - Identify AWS services for common use cases.

## Topics Explicitly Out of Scope
The exam **does not** require hands-on skills in:
- Coding
- Cloud architecture design
- Troubleshooting
- Implementation
- Load and performance testing

## Strategy for a High Score
1.  **Master the High-Weight Domains:** **Security and Compliance (30%)** and **Cloud Technology and Services (34%)** account for 64% of your score. Deeply understand the core services and security principles within these domains.
2.  **Focus on the "Why" and Use Cases:** Don't just memorize what a service is. Understand *why* a business would choose it. The exam tests your ability to match a service to a specific scenario. For example, know when to use S3 (object storage for files) versus EBS (block storage for EC2).
3.  **Drill Down on Security Fundamentals:** The Shared Responsibility Model is crucial. Be able to clearly articulate what AWS is responsible for (e.g., physical data center security) versus what the customer is responsible for (e.g., patching guest OS, configuring security groups).
4.  **Understand Cost Implications:** Be very clear on the differences between On-Demand, Reserved Instances, Spot Instances, and Savings Plans. Know which pricing model is best for different scenarios (e.g., steady-state workloads vs. fault-tolerant batch jobs).
5.  **Use Official AWS Resources:** The official AWS Exam Guide and the "Overview of AWS" whitepaper are the most accurate sources for exam content.
6.  **Maintain a High-Level View:** This is a foundational exam. You need to know the purpose of services like Amazon Kendra (intelligent search) or AWS Glue (ETL service) but not the technical details of their implementation. Focus on the one-line description and primary use case.
`,
        'domain1': `
# Domain 1: Cloud Concepts (24%)
This domain focuses on the fundamental ideas behind cloud computing and the value it brings.

## 1.1 The Six Advantages of Cloud Computing
1.  **Trade Capital Expense for Variable Expense:** Pay for IT as you use it (operational expense or OPEX) instead of making large upfront investments in hardware (capital expense or CAPEX).
2.  **Benefit from Massive Economies of Scale:** AWS's large scale means they can achieve lower costs, which are passed on to customers as lower prices.
3.  **Stop Guessing Capacity:** Scale resources up or down automatically, avoiding the costs of idle resources or the performance issues of under-provisioning.
4.  **Increase Speed and Agility:** Provision new resources in minutes, allowing for faster innovation and development cycles.
5.  **Stop Spending Money on Undifferentiated Heavy Lifting:** AWS manages the data centers, servers, and networking, so you can focus on your own products and customers.
6.  **Go Global in Minutes:** Deploy applications in multiple AWS Regions worldwide to provide low latency for a global user base.

## 1.2 AWS Cloud Economics
- **Pay-as-you-go:** The core pricing model. You pay only for what you use, for the duration you use it, with no long-term contracts.
- **TCO (Total Cost of Ownership) Calculator:** A tool to compare the cost of running workloads on-premises versus on AWS. It helps quantify the benefits of avoiding costs like data center security and hardware procurement.
- **AWS Compute Optimizer:** A service that uses machine learning to analyze resource utilization and recommend optimal configurations to reduce costs and improve performance.

## 1.3 Cloud Architecture Design Principles
The **Well-Architected Framework** provides a consistent approach for customers and partners to evaluate architectures and implement designs that can scale over time.
- **Operational Excellence:** Running and monitoring systems to deliver business value.
- **Security:** Protecting information, systems, and assets.
- **Reliability:** Ensuring a workload performs its intended function correctly and consistently.
- **Performance Efficiency:** Using IT and computing resources efficiently.
- **Cost Optimization:** Avoiding unnecessary costs.
- **Sustainability:** Minimizing the environmental impacts of running cloud workloads.
`,
        'domain2': `
# Domain 2: Security & Compliance (30%)
This is the most heavily weighted domain. It covers how security is managed in the cloud and how AWS helps with compliance.

## 2.1 The AWS Shared Responsibility Model
This model delineates what you are responsible for and what AWS is responsible for. It varies depending on the service used.
- **AWS Responsibility (Security OF the Cloud):**
  - **Hardware & Global Infrastructure:** Regions, Availability Zones, Edge Locations.
  - **Software:** The foundational compute, storage, database, and networking services.
- **Customer Responsibility (Security IN the Cloud):**
  - **Customer Data:** The security and encryption of your own data.
  - **Platform, Applications, IAM:** Managing user access, roles, and permissions.
  - **Operating System & Firewall:** Patching the guest OS and configuring firewalls like Security Groups and NACLs.
  - **Data Encryption:** Configuring both client-side and server-side encryption.

!

## 2.2 Security and Compliance Concepts
- **Least Privilege Principle:** A core security concept where you only grant the minimum permissions necessary for a user or service to perform its function.
- **Encryption:** Protecting data in transit (as it travels over a network) and at rest (while it is stored).
- **Compliance:** AWS helps customers meet compliance requirements for various standards like PCI DSS, HIPAA, and GDPR.
- **AWS Artifact:** A self-service portal that provides on-demand access to AWS's security and compliance reports (e.g., PCI, ISO, SOC reports).
`,
        'domain3': `
# Domain 3: Cloud Technology & Services (34%)
This domain covers the core technology and services available on the AWS platform.

## 3.1 Methods of Deploying and Operating
- **AWS Management Console:** A web-based, graphical user interface.
- **AWS CLI (Command Line Interface):** A unified tool to manage services from the command line, useful for scripting and automation.
- **AWS SDKs (Software Development Kits):** Language-specific libraries to interact with AWS services programmatically from your applications.
- **Infrastructure as Code (IaC):** Services like **AWS CloudFormation** allow you to provision and manage your infrastructure in a declarative, automated way using template files.

## 3.2 AWS Global Infrastructure
- **Region:** A physical geographic location in the world with multiple, isolated, and physically separate Availability Zones.
- **Availability Zone (AZ):** One or more discrete data centers with redundant power, networking, and connectivity. They are interconnected with high-bandwidth, low-latency networking. Using multiple AZs is the primary strategy for high availability.
- **Edge Location:** A site where **CloudFront** caches content to deliver it to users with lower latency. These are more numerous than Regions.

## 3.3 Core AWS Services
This domain covers the broad set of services on AWS. See the "Core Services" section in the navigation for detailed breakdowns.

## 3.4 Global vs. Regional Services
It is critical to understand the scope of AWS services. Some services operate globally, while most are tied to a specific AWS Region.

### Key Global Services
Global services are operated from a single, central point and are not tied to a specific region. When you interact with a global service, you don't need to select a region.

- **Identity and Access Management (IAM):** Users, groups, roles, and policies are defined globally. You don't create a user in one region; you create a user that can be granted access to resources in any region.
- **Route 53:** As a DNS service, Route 53 is inherently global. It routes traffic to your resources regardless of their region.
- **CloudFront:** A Content Delivery Network (CDN) that uses a global network of edge locations to cache and deliver content.
- **WAF (Web Application Firewall):** While you can deploy WAF on regional resources like an Application Load Balancer, it is also a global service when integrated with CloudFront.
- **AWS Organizations:** This service for managing multiple AWS accounts is global.

*Note on S3: S3 bucket names are globally unique, but the buckets themselves are created and exist in a specific AWS Region that you select.*

### Key Regional Services
Most AWS services are regional. This means that the resources you create are tied to the specific region where you created them. You must select a region before provisioning these services.

- **Amazon EC2:** Virtual servers (instances) are launched within a specific region and Availability Zone.
- **Amazon VPC:** Virtual networks are created within a single region.
- **Amazon RDS & DynamoDB:** Databases are provisioned in a specific region.
- **AWS Lambda:** Serverless functions are deployed to a specific region.
- **Elastic Beanstalk:** Application environments are region-specific.
- **Essentially, most services you provision to run your applications (compute, storage, databases) are regional.** This allows you to place your resources close to your users and meet data sovereignty requirements.
`,
        'domain4': `
# Domain 4: Billing, Pricing, & Support (12%)
This domain covers how AWS pricing works, how to manage costs, and the support options available.

## 4.1 AWS Pricing Policies & Models
- **Pay-as-you-go:** Pay for what you use, when you use it.
- **Save when you reserve:** Commit to a 1 or 3-year term for significant discounts.
- **Pay less by using more:** Receive volume-based discounts as your usage increases.

### Key Pricing Models
- **On-Demand:** The most flexible option with no long-term commitment.
- **Reserved Instances (RI):** Provide a significant discount for a commitment to a specific instance type in a particular region.
- **Spot Instances:** Offer the largest discounts (up to 90%) by allowing you to use spare EC2 capacity, which can be interrupted.
- **Savings Plans:** A flexible pricing model that offers discounts in exchange for a commitment to a consistent amount of usage (measured in $/hour).

## 4.2 Cost Management Tools
- **AWS Organizations:** Allows you to centrally manage multiple accounts and use **Consolidated Billing** to get a single bill and aggregate usage for volume discounts.
- **AWS Cost Explorer:** A tool to visualize, understand, and manage your AWS costs and usage over time.
- **AWS Budgets:** Set custom alerts for when your costs or usage exceed (or are forecasted to exceed) a set threshold.
- **AWS Cost and Usage Report (CUR):** Provides the most detailed set of cost and usage data.
- **AWS Pricing Calculator:** Estimate the cost of your solution before building it.
- **Cost Allocation Tags:** Use tags to categorize and track your AWS costs on a detailed level.

## 4.3 AWS Support Plans
All plans offer 24/7 access to customer service, documentation, and forums.
- **Basic:** Free. Access to billing and account support.
- **Developer:** Business hours access to Cloud Support Associates via email.
- **Business:** 24x7 access to Cloud Support Engineers via email, chat, and phone. Offers < 1-hour response for production system failures.
- **Enterprise:** Includes all Business plan features plus a designated Technical Account Manager (TAM) and < 15-minute response for business-critical system failures.
`,
        'iam': `
# IAM (Identity & Access Management)
IAM is a global service that is fundamental to securing your AWS account. It is provided at no additional charge.

### Core Components
- **Users:** An entity that represents a person or application interacting with AWS.
- **Groups:** A collection of IAM users. Permissions applied to a group are inherited by all users in that group.
- **Policies:** A JSON document that defines one or more permissions. Policies can be attached to users, groups, or roles.
- **Roles:** An identity with specific permissions that can be assumed temporarily by an authenticated entity (like a user, an application running on EC2, or another AWS service).

### Security Best Practices
- **Secure the Root User:** The root user has unrestricted access. Do not use it for daily tasks. Lock it down with a strong password and Multi-Factor Authentication (MFA). Never create access keys for the root user.
- **Enforce Least Privilege:** Grant only the minimum permissions required for a user or service to perform its tasks.
- **Use Roles for AWS Services:** Grant permissions to AWS services (like EC2 instances) by assigning them a role. This is more secure than storing long-term credentials on the instance.
- **Rotate Credentials:** Regularly rotate passwords and access keys to reduce the risk of compromised credentials.
`,
        'compute': `
# Compute Services

## EC2 (Elastic Compute Cloud)
EC2 provides resizable compute capacity (virtual servers) in the cloud.

### Scaling & Availability
- **Vertical Scaling (Scale Up):** Increasing the size and power of a single instance (e.g., more CPU, RAM).
- **Horizontal Scaling (Scale Out):** Adding more instances to a resource pool.
- **Auto Scaling Group (ASG):** Automatically adds or removes EC2 instances based on demand, defined by scaling policies. This provides elasticity.
- **Elastic Load Balancer (ELB):** Distributes traffic across multiple instances to ensure no single instance is overwhelmed and to provide high availability.

### EC2 Instance Types
- **General Purpose:** A balance of compute, memory, and networking. Ideal for web servers and code repositories.
- **Compute Optimized:** For compute-intensive tasks like batch processing, media transcoding, and high-performance computing (HPC).
- **Memory Optimized:** For workloads that process large data sets in memory, like in-memory databases.
- **Storage Optimized:** For workloads needing high, sequential read/write access to large datasets, like data warehousing.
- **Accelerated Computing:** Utilizes hardware accelerators (GPUs, FPGAs) for tasks like machine learning and graphics processing.

## Containers
- **ECS (Elastic Container Service):** A highly scalable, high-performance container orchestration service that supports Docker containers.
- **EKS (Elastic Kubernetes Service):** A managed service for running Kubernetes on AWS.
- **Fargate:** A serverless compute engine for containers that works with both ECS and EKS. It removes the need to provision and manage servers.
- **ECR (Elastic Container Registry):** A fully managed Docker container registry to store, manage, and deploy container images.

## Serverless
- **Lambda:** A serverless compute service that lets you run code without managing servers. Code is executed in response to triggers, and you pay only for the compute time you consume.
`,
        'storage': `
# Storage Services

## S3 (Simple Storage Service)
S3 is a highly durable and scalable object storage service. It is not suitable for installing an operating system.
- **Buckets & Objects:** Data is stored as objects in containers called buckets. Bucket names must be globally unique.
- **Consistency Model:**
  - **Read-after-write consistency** for new object PUTS (you can immediately read an object after it's created).
  - **Eventual consistency** for overwrite PUTS and DELETES (changes may take a short time to propagate).
- **Key Features:**
  - **Versioning:** Automatically keeps multiple versions of an object, protecting against accidental deletions.
  - **Replication (CRR & SRR):** Asynchronously copies objects to another bucket in a different region (Cross-Region Replication) or the same region (Same-Region Replication).
  - **Lifecycle Management:** Automatically transitions objects to more cost-effective storage classes over time.
  - **S3 Transfer Acceleration:** Speeds up long-distance uploads and downloads to S3 buckets.

### S3 Storage Classes
- **S3 Standard:** For frequently accessed data requiring low latency.
- **S3 Standard-IA (Infrequent Access):** For data that is accessed less frequently but requires rapid access when needed. Lower storage cost but has a retrieval fee.
- **S3 One Zone-IA:** Similar to Standard-IA but stores data in a single AZ, offering lower cost at the expense of resilience.
- **S3 Glacier:** For long-term data archival.
  - **Glacier Instant Retrieval:** For archives that need millisecond access.
  - **Glacier Flexible Retrieval:** For archives that can be retrieved in minutes to hours.
  - **Glacier Deep Archive:** The lowest-cost storage class for long-term retention (12+ hours retrieval).
- **S3 Intelligent-Tiering:** Automatically moves data between access tiers based on changing access patterns.

## Block & File Storage
- **EBS (Elastic Block Store):** Provides persistent block storage volumes for use with EC2 instances. An EBS volume must be in the same AZ as the instance it is attached to.
  - **Volume Types:** General Purpose SSD (gp2/gp3), Provisioned IOPS SSD (io1/io2), Throughput Optimized HDD (st1), Cold HDD (sc1).
  - **Snapshots:** Point-in-time backups of EBS volumes, which are stored in S3.
- **EFS (Elastic File System):** A simple, scalable, elastic file system for Linux-based workloads for use with AWS Cloud services and on-premises resources.
- **FSx:** Provides fully managed third-party file systems, such as FSx for Windows File Server and FSx for Lustre.

## Hybrid & Data Transfer
- **Storage Gateway:** A hybrid service that connects on-premises environments with AWS cloud storage.
- **Snow Family:** Physical devices (Snowcone, Snowball, Snowmobile) to securely and quickly transfer large amounts of data into and out of AWS.
`,
        'databases': `
# Databases & Analytics

## Relational Databases (OLTP)
- **RDS (Relational Database Service):** A managed service for popular relational databases like MySQL, PostgreSQL, Oracle, MariaDB, and SQL Server. It automates tasks like patching, backups, and failover.
  - **Multi-AZ Deployment:** Creates a synchronous standby replica in another AZ for high availability.
  - **Read Replicas:** Creates asynchronous, read-only copies of the database to increase read scalability.
- **Aurora:** AWS's cloud-native relational database that is compatible with MySQL and PostgreSQL. It offers higher performance and availability than standard RDS.

## Non-Relational & In-Memory Databases
- **DynamoDB:** A fully managed, serverless, key-value NoSQL database designed for high performance at any scale.
- **ElastiCache:** A managed in-memory caching service that supports Redis and Memcached. It's used to improve the performance of web applications.
- **DocumentDB:** A managed NoSQL document database service that is compatible with MongoDB.
- **Neptune:** A managed graph database service used for highly connected datasets, like social networks or fraud detection.

## Data Warehousing & Analytics
- **Redshift:** A fully managed, petabyte-scale data warehouse service used for large-scale data analytics (OLAP).
- **Athena:** A serverless, interactive query service that allows you to analyze data directly in Amazon S3 using standard SQL.
- **Glue:** A fully managed extract, transform, and load (ETL) service to prepare and load data for analytics.
- **Kinesis:** A service for collecting, processing, and analyzing real-time, streaming data.
- **QuickSight:** A scalable, serverless, business intelligence (BI) service to create interactive dashboards.
`,
        'networking': `
# Networking & Content Delivery

## VPC (Virtual Private Cloud)
A VPC is your own logically isolated section of the AWS Cloud. This service itself is free, but you pay for the resources you launch within it.

### VPC Security
| Component | Scope | Function | State | Rules |
| :--- | :--- | :--- | :--- | :--- |
| **Security Group** | EC2 Instance | A stateful firewall for instances. | Stateful | Allow only. Deny by default. |
| **Network ACL** | Subnet | A stateless firewall for subnets. | Stateless | Has explicit Allow & Deny rules. |

- **Stateful vs. Stateless:** Stateful means if you allow inbound traffic, the corresponding outbound traffic is automatically allowed. Stateless means you must explicitly create rules for both inbound and outbound traffic.

### Connectivity
- **Subnets:** A range of IP addresses within your VPC, confined to a single Availability Zone.
- **Internet Gateway:** Enables access to the internet from your VPC.
- **NAT Gateway:** Allows instances in a private subnet to initiate outbound traffic to the internet while preventing inbound traffic.
- **VPC Peering:** Connects two VPCs privately.
- **Direct Connect:** A dedicated private physical network connection from your on-premises data center to AWS.

## ELB (Elastic Load Balancer)
- **Application Load Balancer (ALB):** Layer 7 (HTTP/HTTPS). Best for flexible application-level routing.
- **Network Load Balancer (NLB):** Layer 4 (TCP/UDP/TLS). Best for extreme performance and static IP addresses.
- **Gateway Load Balancer (GLB):** Layer 3. For deploying third-party virtual network appliances.

## Global Networking
- **Route 53:** A highly available DNS web service that can also perform health checks and route traffic based on various policies.
- **CloudFront:** A Content Delivery Network (CDN) that caches content in Edge Locations to reduce latency for users worldwide.
- **Global Accelerator:** Improves application availability and performance by directing traffic over the highly available AWS global network.
`,
        'messaging': `
# Messaging Services
These services help build decoupled and resilient applications.

## SQS (Simple Queue Service)
A fully managed message queuing service used to decouple application components.
- **How it works:** A component sends a message to a queue. Another component can then retrieve and process that message independently. This ensures that if one component fails, the message is not lost and can be processed later.
- **Use Case:** Decoupling a web front-end from a back-end processing service. When a user submits an order, the web server places a message in an SQS queue, and a separate processing service picks up the order from the queue to fulfill it.

## SNS (Simple Notification Service)
A fully managed pub/sub (publish/subscribe) messaging service.
- **How it works:** A publisher sends a single message to an SNS "topic." The topic then immediately pushes that message to all subscribed endpoints.
- **Use Case:** Sending an email notification, an SMS alert, and triggering a Lambda function all at the same time in response to a critical event.

## SES (Simple Email Service)
A highly scalable email sending and receiving service.
- **Use Cases:** Sending transactional emails (like order confirmations), marketing communications, or mass email campaigns.
`,
        'deployment': `
# Deployment & CI/CD

## Infrastructure as Code (IaC)
- **CloudFormation:** The primary IaC service on AWS. It allows you to model your entire infrastructure in a declarative template file (YAML or JSON). This enables automated, consistent, and repeatable deployments.
  - **Change Sets:** Allow you to preview the impact of proposed changes to a stack before they are executed.
- **CDK (Cloud Development Kit):** An open-source framework to define cloud infrastructure using familiar programming languages, which then synthesizes into CloudFormation templates.

## Platform as a Service (PaaS)
- **Elastic Beanstalk:** An easy-to-use service for deploying and scaling web applications. You simply upload your code, and Elastic Beanstalk handles the deployment, capacity provisioning, load balancing, and health monitoring.

## CI/CD Services (The "Code" Suite)
- **CodeCommit:** A managed, secure Git-based source control service.
- **CodeBuild:** A managed service that compiles source code, runs tests, and produces software packages.
- **CodeDeploy:** An automated deployment service for applications on EC2 instances, on-premises servers, Lambda, or ECS.
- **CodePipeline:** A managed continuous delivery service that automates your release pipelines (e.g., CodeCommit -> CodeBuild -> CodeDeploy).
- **CodeStar:** A unified UI that provides a complete development toolchain for coding, building, and deploying applications on AWS.
`,
        'monitoring': `
# Monitoring, Auditing, & Management

## Monitoring & Tracing
- **CloudWatch:** The central monitoring and observability service.
  - **Metrics:** Collects performance data from AWS services. Standard monitoring is every 5 minutes; Detailed monitoring is every 1 minute.
  - **Alarms:** Automatically trigger actions (e.g., send an SNS notification, scale an ASG) based on metric thresholds.
  - **Logs:** Centralizes log files from EC2 instances, Lambda functions, and other sources.
- **CloudTrail:** Records a history of all API calls made in your AWS account. It is essential for security auditing and tracking user activity. It logs who made the call, when, from what IP address, and what action was taken.
- **X-Ray:** Helps developers analyze and debug distributed applications by tracing user requests as they travel through different services.

## Advising & Health
- **Trusted Advisor:** An online tool that provides real-time guidance to help you provision your resources following AWS best practices. It checks across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits.
- **Personal Health Dashboard:** Gives you a personalized view into the performance and availability of the AWS services underlying your resources.

## Configuration
- **AWS Config:** A service that enables you to assess, audit, and evaluate the configurations of your AWS resources over time. It is a key tool for compliance and governance.
`,
        'advanced_identity': `
# Advanced Identity Services

- **STS (Security Token Service):** A web service that enables you to request temporary, limited-privilege credentials for IAM users or for users that you authenticate (federated users).
- **Cognito:** Provides a managed user directory (**User Pools**) and enables you to grant temporary, secure access to your AWS resources for your application users (**Identity Pools**). It's the go-to service for managing user sign-up and sign-in for mobile and web apps.
- **Directory Service:** A managed service for Microsoft Active Directory.
- **IAM Identity Center (formerly AWS SSO):** A service that makes it easy to centrally manage single sign-on (SSO) access to multiple AWS accounts and business applications.
- **AWS Organizations:** Helps you centrally govern your environment as you scale. You can use it for consolidated billing and to apply **Service Control Policies (SCPs)**, which act as guardrails to restrict permissions for member accounts.
`,
        'security':`
# In-Depth Security Services

- **Shield:** A managed Distributed Denial of Service (DDoS) protection service.
  - **Standard:** Automatically enabled for all AWS customers at no additional cost. Protects against most common network and transport layer attacks.
  - **Advanced:** A paid service that provides additional, more sophisticated protections, near real-time visibility into attacks, and 24x7 access to the AWS DDoS Response Team (DRT).
- **WAF (Web Application Firewall):** A firewall that helps protect your web applications from common web exploits like SQL injection and cross-site scripting by filtering traffic based on rules you define.
- **KMS (Key Management Service):** A managed service for creating and controlling the encryption keys used to encrypt your data.
- **CloudHSM (Hardware Security Module):** A cloud-based hardware security module that allows you to generate and use your own encryption keys on dedicated, tamper-resistant hardware.
- **Inspector:** An automated vulnerability management service that scans AWS workloads for software vulnerabilities and unintended network exposure.
- **GuardDuty:** A threat detection service that uses machine learning to continuously monitor for malicious activity and unauthorized behavior.
- **Macie:** A data security service that uses machine learning to discover, classify, and protect sensitive data (like PII and financial information) stored in Amazon S3.
`,
        'ml':`
# Machine Learning Services
For the exam, you should know the primary use case for each of these services.

- **SageMaker:** A fully managed service for the entire machine learning workflow: build, train, and deploy ML models.
- **Rekognition:** For adding image and video analysis to your applications.
- **Transcribe:** For converting speech into text (transcription).
- **Polly:** For converting text into lifelike speech (text-to-speech).
- **Translate:** For translating text between languages.
- **Lex:** For building conversational interfaces (chatbots) using voice and text. It's the technology that powers Alexa.
- **Comprehend:** A natural language processing (NLP) service to extract insights and relationships from unstructured text.
- **Kendra:** An intelligent enterprise search service powered by machine learning, allowing users to search across multiple content repositories.
`,
        'migration':`
# Migration & Transfer

## Six "R's" of Migration Strategies
These are common strategies for moving applications to the cloud.
- **Rehost (Lift and Shift):** Moving applications without changes.
- **Replatform (Lift, Tinker, and Shift):** Making some cloud optimizations without changing the core architecture.
- **Repurchase:** Moving to a different product, often a SaaS model.
- **Refactor / Re-architect:** Reimagining how the application is architected and developed using cloud-native features.
- **Retire:** Decommissioning applications that are no longer needed.
- **Retain:** Keeping applications on-premises that are not ready to be migrated.

## Migration Services
- **Application Migration Service (MGN):** The primary AWS service for rehosting (lift-and-shift) servers into AWS.
- **DataSync:** An online data transfer service that simplifies, automates, and accelerates moving data between on-premises storage systems and AWS Storage services.
- **Migration Hub:** Provides a single location to track the progress of application migrations across multiple AWS and partner solutions.
- **Database Migration Service (DMS):** Helps you migrate databases to AWS easily and securely. The source database remains fully operational during the migration, minimizing downtime.
`,
        'frameworks':`
# Frameworks & Strategies

## AWS Well-Architected Framework
This framework provides guidance to help you build and operate secure, high-performing, resilient, and efficient infrastructure. It is built on six pillars:
- **Operational Excellence:** The ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures. *Key principle: Perform operations as code.*
- **Security:** The ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies. *Key principle: Implement a strong identity foundation.*
- **Reliability:** The ability of a workload to perform its intended function correctly and consistently when it’s expected to. *Key principle: Automatically recover from failure.*
- **Performance Efficiency:** The ability to use computing resources efficiently to meet system requirements. *Key principle: Use serverless architectures.*
- **Cost Optimization:** The ability to run systems to deliver business value at the lowest price point. *Key principle: Adopt a consumption model.*
- **Sustainability:** The ability to continually improve sustainability outcomes by reducing energy consumption and increasing efficiency.

## Cloud Adoption Framework (CAF)
The AWS CAF provides guidance to help you plan and execute a successful cloud adoption journey. It organizes guidance into six perspectives:
- **Business Perspective:** Ensures that IT aligns with business needs.
- **People Perspective:** Helps stakeholders understand and adapt to change.
- **Governance Perspective:** Provides guidance on managing and measuring cloud investments to evaluate business outcomes.
- **Platform Perspective:** Helps you design, implement, and optimize the AWS architecture.
- **Security Perspective:** Helps you achieve the confidentiality, integrity, and availability of your data and cloud workloads.
- **Operations Perspective:** Helps you ensure that your cloud operations are efficient and reliable.

## Disaster Recovery Strategies
- **Backup and Restore:** Low cost, but higher recovery time (RTO).
- **Pilot Light:** A small version of the environment is always running and can be scaled up.
- **Warm Standby:** A scaled-down but fully functional copy of your production environment.
- **Multi-site/Hot-site:** A full-scale, active-active configuration with the lowest recovery time.
`,
        'other':`
# Other Key Services

- **WorkSpaces:** A managed, secure Desktop-as-a-Service (DaaS) solution for provisioning virtual Windows or Linux desktops.
- **AppStream 2.0:** A service that centrally manages desktop applications and securely streams them to a web browser.
- **IoT Core:** A managed cloud service that lets connected devices (like sensors and smart appliances) easily and securely interact with cloud applications and other devices.
- **Step Functions:** A serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into visual workflows.
- **Pinpoint:** A service you can use to engage with your customers across multiple messaging channels, such as email, SMS, and push notifications.
- **Fault Injection Simulator (FIS):** A managed service for running fault injection experiments on AWS. This is part of the practice of Chaos Engineering, which helps improve an application's resilience.
- **Device Farm:** An application testing service that lets you test your web and mobile apps on a large collection of real physical devices.
`
    };

    const contentDisplay = document.getElementById('content-display');
    const navLinksContainer = document.getElementById('nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    function buildNav() {
        let navHtml = '';
        navigationStructure.forEach(item => {
            if (item.type === 'link') {
                navHtml += `<li><a href="#" data-topic="${item.topic}">${item.label}</a></li>`;
            } else if (item.type === 'category') {
                navHtml += `<li class="nav-category">${item.label}</li>`;
            }
        });
        navLinksContainer.innerHTML = navHtml;
    }

    function showContent(topic) {
        const content = markdownContent[topic];
        contentDisplay.innerHTML = marked.parse(content);
        contentDisplay.scrollTop = 0; // Scroll to top
        
        const links = navLinksContainer.querySelectorAll('a');
        links.forEach(link => {
            link.classList.toggle('active', link.dataset.topic === topic);
        });

        if (window.innerWidth < 768) {
            sidebar.classList.remove('open');
        }
    }

    buildNav();

    navLinksContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.closest('a');
        if (target && target.dataset.topic) {
            showContent(target.dataset.topic);
        }
    });

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Show home page by default
    showContent('home');
});

