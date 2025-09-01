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
| Service Logo | Service Name | Category | Scope | Core Use Case |
| :---: | :--- | :--- | :---: | :--- |
| <img class="service-logo" src="logos/ec2.svg" alt="EC2 Logo"> | **EC2** | Compute | Regional | Provides resizable compute capacity in the cloud. Essentially, a virtual server. |
| <img class="service-logo" src="logos/s3.svg" alt="S3 Logo"> | **S3** | Storage | Regional* | Scalable object storage suitable for backups, data lakes, and static website hosting. |
| <img class="service-logo" src="logos/rds.svg" alt="RDS Logo"> | **RDS** | Database | Regional | A managed service for relational databases like MySQL, PostgreSQL, simplifying setup and operations. |
| <img class="service-logo" src="logos/lambda.svg" alt="Lambda Logo"> | **Lambda** | Compute | Regional | A serverless compute service that runs code in response to events without provisioning servers. |
| <img class="service-logo" src="logos/vpc.svg" alt="VPC Logo"> | **VPC** | Networking | Regional | Creates a logically isolated section of the AWS Cloud to launch resources in a virtual network. |
| <img class="service-logo" src="logos/iam.svg" alt="IAM Logo"> | **IAM** | Security | Global | Securely manages access to AWS services by controlling users, groups, and permissions. |
| <img class="service-logo" src="logos/route53.svg" alt="Route 53 Logo"> | **Route 53** | Networking | Global | A scalable and highly available Domain Name System (DNS) web service. |
| <img class="service-logo" src="logos/cloudfront.svg" alt="CloudFront Logo"> | **CloudFront** | Networking | Global | A Content Delivery Network (CDN) that securely delivers content with low latency and high speed. |

*S3 bucket names are globally unique, but the buckets themselves are created in a specific region.*
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
- **On-Demand:** The most flexible option with no long-term commitment. Best for unpredictable workloads.
- **Reserved Instances (RI):** Provide a significant discount for a commitment to a specific instance type in a particular region. Best for steady-state workloads.
- **Spot Instances:** Offer the largest discounts (up to 90%) by allowing you to use spare EC2 capacity, which can be interrupted. Best for fault-tolerant, non-critical batch jobs.
- **Savings Plans:** A flexible pricing model that offers discounts in exchange for a commitment to a consistent amount of usage (measured in $/hour). More flexible than RIs.

## 4.2 Cost Management Tools
- **AWS Organizations:** Allows you to centrally manage multiple accounts and use **Consolidated Billing** to get a single bill and aggregate usage for volume discounts.
- **AWS Cost Explorer:** A tool to visualize, understand, and manage your AWS costs and usage over time.
- **AWS Budgets:** Set custom alerts for when your costs or usage exceed (or are forecasted to exceed) a set threshold.
- **AWS Cost and Usage Report (CUR):** Provides the most detailed set of cost and usage data.
- **AWS Pricing Calculator:** Estimate the cost of your solution before building it.
- **Cost Allocation Tags:** Use tags to categorize and track your AWS costs on a detailed level.

## 4.3 AWS Support Plans
- **Basic:** Free. Access to billing and account support.
- **Developer:** Business hours access to Cloud Support Associates via email.
- **Business:** 24x7 access to Cloud Support Engineers via email, chat, and phone. Offers < 1-hour response for production system failures.
- **Enterprise:** Includes all Business plan features plus a designated Technical Account Manager (TAM) and < 15-minute response for business-critical system failures.
`,
        'iam': `
# IAM (Identity & Access Management)

### 1. Purpose & Use Cases
IAM is the bedrock of AWS security. It allows you to specify who can access which services and resources, and under what conditions.
- **Use Cases:** Creating user accounts for employees, granting applications running on EC2 access to S3, enforcing MFA for sensitive operations.

### 2. Key Features
- **Users, Groups, Roles, Policies:** The core components for managing identities and permissions.
- **Fine-Grained Permissions:** You can control access down to the specific API action and resource level.
- **Multi-Factor Authentication (MFA):** Adds an extra layer of security for user sign-ins and sensitive operations.
- **Identity Federation:** Integrates with corporate directories like Active Directory for single sign-on (SSO).

### 3. Best Practices
- **Never use the root user for daily work.** Secure it with a strong password and MFA.
- **Enforce the Principle of Least Privilege:** Grant only the permissions required to perform a task.
- **Use IAM Roles for applications and AWS services,** not long-term access keys.
- **Enable MFA** for all users, especially those with significant permissions.

### 4. Alternatives
- **IAM Identity Center (formerly AWS SSO):** A higher-level service built on IAM that is preferred for managing SSO access for human users across multiple AWS accounts and applications.

### 5. Pricing
- IAM is a global service and is offered at **no additional charge**.
`,
        'compute': `
# Compute Services

## Amazon EC2 (Elastic Compute Cloud)

### 1. Purpose & Use Cases
EC2 is the core AWS service for scalable compute, providing virtual servers (called instances) in the cloud.
- **Use Cases:** Hosting websites and web applications, running enterprise software, performing batch processing, high-performance computing (HPC).

### 2. Key Features
- **Wide Range of Instance Types:** Optimized for different tasks (General Purpose, Compute Optimized, Memory Optimized, etc.).
- **Amazon Machine Images (AMIs):** Pre-configured templates for your instances that include the operating system and additional software.
- **Auto Scaling Groups (ASGs):** Automatically adjust the number of EC2 instances to meet demand.
- **Elastic Load Balancing (ELB):** Distributes incoming traffic across multiple instances for high availability and fault tolerance.

### 3. Best Practices
- **Use Auto Scaling** to handle traffic spikes and improve fault tolerance.
- **Use IAM Roles** to grant EC2 instances permissions to other AWS services.
- **Monitor instances with CloudWatch** to track performance and set alarms.
- **Select the right instance type** for your workload to optimize cost and performance.

### 4. Alternatives
- **AWS Lambda:** For event-driven, serverless applications where you don't need a full server.
- **Amazon ECS/EKS with Fargate:** For running containerized applications without managing the underlying EC2 instances.

### 5. Pricing
- **On-Demand:** Pay by the second with no long-term commitment. Most flexible, highest cost.
- **Reserved Instances:** Commit to a 1 or 3-year term for a significant discount. Best for steady-state workloads.
- **Spot Instances:** Bid on spare EC2 capacity for the largest discounts (up to 90%). Can be terminated with a 2-minute warning.
- **Savings Plans:** A flexible pricing model offering discounts for a usage commitment ($/hour).

---
## AWS Lambda

### 1. Purpose & Use Cases
Lambda is a serverless, event-driven compute service that lets you run code without provisioning or managing servers.
- **Use Cases:** Data processing (e.g., creating image thumbnails when an image is uploaded to S3), building serverless backends for web/mobile apps, running scheduled tasks.

### 2. Key Features
- **Event-Driven:** Code is triggered by events from over 200 AWS services (like S3, API Gateway, DynamoDB) or can be invoked directly.
- **Automatic Scaling:** Scales out automatically and seamlessly based on the number of incoming requests.
- **No Server Management:** AWS handles all the infrastructure, patching, and scaling.
- **Sub-second Metering:** You pay only for the compute time you consume, metered in milliseconds.

### 3. Best Practices
- **Keep functions small and single-purpose.**
- **Manage dependencies within the deployment package.**
- **Use IAM roles with least-privilege permissions** for each function.

### 4. Limitations & Alternatives
- **Limitations:** Limited execution time (max 15 minutes), limited temporary storage. Not suitable for long-running, stateful applications.
- **Alternatives:** **Amazon EC2** for long-running applications that require full control over the environment. **AWS Fargate** for long-running containerized applications.
`,
        'storage': `
# Storage Services

## Amazon S3 (Simple Storage Service)

### 1. Purpose & Use Cases
S3 is a highly durable and scalable object storage service, designed for storing and retrieving any amount of data from anywhere.
- **Use Cases:** Backup and archival, data lakes for analytics, static website hosting, hosting application assets (images, videos).

### 2. Key Features
- **Storage Classes:** A range of options from S3 Standard for frequently accessed data to S3 Glacier Deep Archive for long-term archival, allowing cost optimization.
- **Versioning:** Automatically keeps multiple versions of an object, providing protection against accidental overwrites and deletions.
- **Lifecycle Policies:** Automate the migration of objects to more cost-effective storage classes as they age.
- **Replication:** Automatically copy objects to other buckets in the same or different regions for backup and low-latency access.

### 3. Best Practices
- **Use Bucket Policies and IAM** to enforce strict access controls.
- **Enable Versioning** on buckets to protect against accidental data loss.
- **Use Lifecycle Policies** to automatically move data to lower-cost storage tiers.
- **Enable MFA Delete** to add another layer of security against accidental deletions.

### 4. Alternatives
- **Amazon EBS:** Provides block storage for use with a single EC2 instance (like a virtual hard drive).
- **Amazon EFS:** Provides a scalable file system for use with multiple EC2 instances (like a network file share).

### 5. Pricing
- **Primary Factors:** Storage (GB per month), number of requests (GET, PUT, COPY), and data transfer out of AWS.
- **Free Tier:** Includes a generous free tier for new accounts.

---
## Amazon EBS (Elastic Block Store)

### 1. Purpose & Use Cases
EBS provides high-performance, persistent block storage volumes for use with Amazon EC2 instances. It's analogous to a virtual hard drive.
- **Use Cases:** Boot volumes for EC2 instances, storing data for transactional and NoSQL databases, throughput-intensive workloads.

### 2. Key Features
- **Multiple Volume Types:** Optimized for different workloads (General Purpose SSD, Provisioned IOPS SSD, Throughput Optimized HDD).
- **Snapshots:** Point-in-time backups of your volumes, which are stored durably in S3.
- **Encryption:** EBS volumes can be encrypted to protect your data.
- **Elasticity:** You can dynamically increase the size of your volumes or change the volume type.

### 3. Best Practices
- **Take regular snapshots** for backup and disaster recovery.
- **Choose the right volume type** based on the performance needs of your application.
- **Encrypt sensitive data** using EBS encryption.

### 4. Alternatives
- **Amazon S3:** For object storage, not block storage.
- **EC2 Instance Store:** Provides temporary, high-performance block-level storage that is directly attached to the EC2 host. Data is lost if the instance is stopped or terminated.
`,
        'databases': `
# Databases & Analytics

## Amazon RDS (Relational Database Service)

### 1. Purpose & Use Cases
RDS is a managed service that simplifies the setup, operation, and scaling of relational databases in the cloud.
- **Use Cases:** Powering traditional applications, e-commerce platforms, and CRM systems that require a relational database like MySQL, PostgreSQL, or SQL Server.

### 2. Key Features
- **Managed Service:** Automates time-consuming tasks like hardware provisioning, patching, and backups.
- **High Availability (Multi-AZ):** Creates a synchronous standby replica in a different Availability Zone for automatic failover.
- **Read Replicas:** Allows you to create read-only copies of your database to increase read scalability.
- **Security:** Provides encryption at rest and in transit.

### 3. Best Practices
- **Use Multi-AZ** for production workloads to ensure high availability.
- **Use Read Replicas** to offload read traffic from your primary database.
- **Encrypt data** using KMS keys.

### 4. Alternatives
- **Amazon Aurora:** A cloud-native relational database offering higher performance.
- **Amazon DynamoDB:** A NoSQL database for applications that require flexible schemas and single-digit millisecond latency.
- **Running a database on EC2:** Provides full control but requires you to manage everything yourself.

### 5. Pricing
- **Factors:** Database instance hours, storage (GB per month), I/O requests, and data transfer.
- **Reserved Instances** are available for significant cost savings.

---
## Amazon DynamoDB

### 1. Purpose & Use Cases
DynamoDB is a fully managed, serverless, key-value NoSQL database designed for high-performance applications at any scale.
- **Use Cases:** Web, mobile, gaming, ad tech, and IoT applications that need low-latency data access.

### 2. Key Features
- **Serverless:** No servers to provision, patch, or manage.
- **Single-Digit Millisecond Performance:** Delivers consistent low latency regardless of scale.
- **Automatic Scaling:** Automatically scales tables up and down to adjust for capacity and maintain performance.
- **Highly Available & Durable:** Data is synchronously replicated across three facilities in a region.

### 3. Best Practices
- **Design your access patterns first.** DynamoDB schema design is based on how you will query the data.
- **Use IAM policies** for fine-grained access control to tables and items.
- **Monitor with CloudWatch** to track performance and costs.

### 4. Alternatives
- **Amazon RDS/Aurora:** For applications that require a relational model with complex joins and transactions.
- **DocumentDB:** For applications that need MongoDB compatibility.

### 5. Pricing
- **Pay-per-request:** Billed for the read and write requests you make.
- **Provisioned Capacity:** Pay for a certain amount of read/write capacity per second.
- **Free Tier:** Includes a generous free tier.
`,
        'networking': `
# Networking & Content Delivery

## VPC (Virtual Private Cloud)

### 1. Purpose & Use Cases
A VPC allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- **Use Cases:** Essential for creating any AWS infrastructure. It provides the networking foundation for services like EC2 and RDS.

### 2. Key Features
- **Subnets:** Segments of a VPC's IP address range where you can place groups of isolated resources. Can be public (with internet access) or private.
- **Security Groups:** Act as a stateful firewall for your EC2 instances to control inbound and outbound traffic.
- **Network ACLs (NACLs):** Act as a stateless firewall for your subnets, controlling traffic in and out of one or more subnets.
- **Connectivity Options:** Internet Gateway, NAT Gateway, VPC Peering, Direct Connect, and VPN connections.

### 3. Best Practices
- **Use multiple Availability Zones** and place subnets in each for high availability.
- **Use private subnets for backend resources** like databases to protect them from the public internet.
- **Use Security Groups as the primary firewall** for instances, and NACLs as a secondary, stateless defense layer.

### 4. Alternatives
- None. VPC is the fundamental networking service for provisioning isolated resources.

### 5. Pricing
- The VPC service itself is **free of charge**. You pay for the resources you run within it and for optional components like NAT Gateways and VPN connections.
`,
        'messaging': `
# Messaging Services

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

## AWS CloudFormation

### 1. Purpose & Use Cases
CloudFormation is the primary Infrastructure as Code (IaC) service on AWS. It allows you to model your infrastructure in a template file, enabling automated and repeatable deployments.
- **Use Cases:** Creating a new environment for an application (VPC, subnets, EC2, RDS), standardizing components across an organization, automating disaster recovery setup.

### 2. Key Features
- **Templates:** Uses declarative YAML or JSON files to define the desired state of your infrastructure.
- **Stacks:** The set of resources created from a single template is managed as a single unit called a stack.
- **Change Sets:** Allows you to preview how proposed changes to a stack might impact your running resources before you implement them.
- **Broad Service Support:** Works with almost all AWS services.

### 3. Best Practices
- **Use version control** (like Git with CodeCommit) for your templates.
- **Use Change Sets** in production to prevent unexpected changes.
- **Break down large templates** into smaller, nested stacks for better management.

### 4. Alternatives
- **Third-party IaC tools** like Terraform.
- **AWS CDK (Cloud Development Kit):** An abstraction layer that lets you define infrastructure in a programming language, which then synthesizes to CloudFormation.

### 5. Pricing
- CloudFormation itself is **free of charge**. You only pay for the AWS resources it creates.
`,
        'monitoring': `
# Monitoring, Auditing, & Management

## Amazon CloudWatch

### 1. Purpose & Use Cases
CloudWatch is the central monitoring and observability service for AWS resources and applications.
- **Use Cases:** Monitoring EC2 CPU utilization, tracking Lambda function invocations, collecting application logs, setting billing alarms.

### 2. Key Features
- **Metrics:** A time-ordered set of data points. AWS services automatically send metrics to CloudWatch.
- **Alarms:** Automatically perform actions (like sending a notification or scaling an EC2 fleet) based on a metric crossing a threshold.
- **Logs:** Centralize and monitor logs from EC2, Lambda, and other services.
- **Dashboards:** Create customizable views of the metrics and alarms for your resources.

### 3. Best Practices
- **Enable Detailed Monitoring (1-minute intervals)** for production EC2 instances for faster response times.
- **Create alarms for key performance metrics** and operational health.
- **Set up a billing alarm** to be notified before your spending exceeds your budget.

### 4. Alternatives
- Third-party monitoring solutions, which often integrate with CloudWatch to pull metric data.

### 5. Pricing
- **Free Tier:** Includes a generous free tier for metrics, alarms, and logs.
- **Pay-as-you-go:** You pay for what you use beyond the free tier (e.g., custom metrics, detailed monitoring, data ingestion for logs).
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

