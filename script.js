document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on the main page by looking for a specific element
  if (!document.getElementById('content-display')) {
      return;
  }

  /* =========================
     NAVIGATION + CONTENT DATA
     ========================= */
  const navigationStructure = [
    { type: 'link', label: 'Home / Key Services', topic: 'home' },

    // Added a category and a link to the new quizzes.html page.
    { type: 'category', label: 'Practice & Review' },
    { type: 'link', label: 'Practice Quizzes', file: 'quizzes.html' },
    
    { type: 'category', label: 'About the Exam' },
    { type: 'link', label: 'Exam Overview & Strategy', topic: 'exam_overview' },

    { type: 'category', label: 'Exam Domains' },
    { type: 'link', label: '1: Cloud Concepts', topic: 'domain1' },
    { type: 'link', label: '2: Security & Compliance', topic: 'domain2' },
    { type: 'link', label: '3: Cloud Technology', topic: 'domain3' },
    { type: 'link', label: '4: Billing & Pricing', topic: 'domain4' },

    { type: 'category', label: 'Core Services' },
    { type: 'link', label: 'IAM & Identity Center', topic: 'iam' },
    { type: 'link', label: 'Compute (EC2, Lambda, Containers)', topic: 'compute' },
    { type: 'link', label: 'Storage (S3, EBS, EFS, FSx)', topic: 'storage' },
    { type: 'link', label: 'Databases & Analytics', topic: 'databases' },
    { type: 'link', label: 'Networking & Content Delivery', topic: 'networking' },
    { type: 'link', label: 'Messaging & Integration', topic: 'messaging' },

    { type: 'category', label: 'Key Topics & Scenarios' },
    { type: 'link', label: 'Load Balancers (ALB/NLB/GWLB)', topic: 'elb' },
    { type: 'link', label: 'Route 53 Routing Policies', topic: 'route53_routing' },
    { type: 'link', label: 'VPC Endpoints (Private Access)', topic: 'vpc_endpoints' },
    { type: 'link', label: 'Disaster Recovery & HA', topic: 'dr_ha' },
    { type: 'link', label: 'Governance & Cost Management', topic: 'governance' },
    { type: 'link', label: 'Hybrid & Edge Computing', topic: 'hybrid' },
    { type: 'link', label: 'Advanced Networking', topic: 'advanced_networking' },
    { type: 'link', label: 'Caching & Performance', topic: 'caching' },
    
    { type: 'category', label: 'Exam Boosters' },
    { type: 'link', label: 'Free Tier & Cost Protections', topic: 'cost_protections' },
    { type: 'link', label: 'Data Transfer Basics', topic: 'data_transfer' },

    { type: 'category', label: 'Management & Developer Tools' },
    { type: 'link', label: 'Deployment & CI/CD', topic: 'deployment' },
    { type: 'link', label: 'Monitoring & Auditing', topic: 'monitoring' },
    { type: 'link', label: 'Developer Productivity', topic: 'developer_tools' },
    { type: 'link', label: 'In-Depth Security Tools', topic: 'security' },

    { type: 'category', label: 'Advanced & Specialty' },
    { type: 'link', label: 'Machine Learning', topic: 'ml' },
    { type: 'link', label: 'Migration & Transfer', topic: 'migration' },
    { type: 'link', label: 'Frameworks (CAF & Well-Architected)', topic: 'frameworks' },
    { type: 'link', label: 'Specialty & Emerging Services', topic: 'specialty' },
  ];
  
  const markdownContent = {
    'home': `
# AWS Certified Cloud Practitioner (CLF-C02) Guide
Welcome! This guide is designed to provide a quick yet comprehensive reference for the core concepts and services covered in the exam. Use the navigation on the left to explore the topics.

## Key Services Quick Reference

| Service Logo | Service Name | Category | Scope | Core Use Case |
|:---:|---|---:|---:|---|
| <img class="service-logo" src="logos/ec2.svg" alt="EC2 Logo"> | **EC2** | Compute | Regional | Provides resizable compute capacity in the cloud. Essentially, a virtual server. |
| <img class="service-logo" src="logos/s3.svg" alt="S3 Logo"> | **S3** | Storage | Regional* | Scalable object storage suitable for backups, data lakes, and static website hosting. |
| <img class="service-logo" src="logos/rds.svg" alt="RDS Logo"> | **RDS** | Database | Regional | A managed service for relational databases like MySQL, PostgreSQL, simplifying setup and operations. |
| <img class="service-logo" src="logos/lambda.svg" alt="Lambda Logo"> | **Lambda** | Compute | Regional | A serverless compute service that runs code in response to events without provisioning servers. |
| <img class="service-logo" src="logos/vpc.svg" alt="VPC Logo"> | **VPC** | Networking | Regional | Creates a logically isolated section of the AWS Cloud to launch resources in a virtual network. |
| <img class="service-logo" src="logos/iam.svg" alt="IAM Logo"> | **IAM** | Security | Global | Securely manages access to AWS services by controlling users, groups, and permissions. |
| <img class="service-logo" src="logos/route53.svg" alt="Route 53 Logo"> | **Route 53** | Networking | Global | A scalable and highly available Domain Name System (DNS) web service. |
| <img class="service-logo" src="logos/cloudfront.svg" alt="CloudFront Logo"> | **CloudFront** | Networking | Global | A Content Delivery Network (CDN) that securely delivers content with low latency and high speed. |

*Bucket names are globally unique, but the buckets themselves are created in a specific region.*
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
1. **Master the High-Weight Domains:** **Security and Compliance (30%)** and **Cloud Technology and Services (34%)** account for 64% of your score. Deeply understand the core services and security principles within these domains.
2. **Focus on the "Why" and Use Cases:** Don’t just memorize what a service is. Understand *why* a business would choose it. The exam tests your ability to match a service to a specific scenario. For example, know when to use S3 (object storage for files) versus EBS (block storage for EC2).
3. **Drill Down on Security Fundamentals:** The Shared Responsibility Model is crucial. Be able to clearly articulate what AWS is responsible for (e.g., physical data center security) versus what the customer is responsible for (e.g., patching guest OS, configuring security groups).
4. **Understand Cost Implications:** Be very clear on the differences between On-Demand, Reserved Instances, Spot Instances, and Savings Plans. Know which pricing model is best for different scenarios (e.g., steady-state workloads vs. fault-tolerant batch jobs).
5. **Use Official AWS Resources:** The official AWS Exam Guide and the "Overview of AWS" whitepaper are the most accurate sources for exam content.
6. **Maintain a High-Level View:** This is a foundational exam. You need to know the purpose of services like Amazon Kendra (intelligent search) or AWS Glue (ETL service) but not the technical details of their implementation. Focus on the one-line description and primary use case.
`,

    'domain1': `
# Domain 1: Cloud Concepts (24%)
This domain focuses on the fundamental ideas behind cloud computing and the value it brings.

## 1.1 The Six Advantages of Cloud Computing
1. **Trade Capital Expense for Variable Expense:** Pay for IT as you use it (operational expense or OPEX) instead of making large upfront investments in hardware (capital expense or CAPEX).
2. **Benefit from Massive Economies of Scale:** AWS's large scale means they can achieve lower costs, which are passed on to customers as lower prices.
3. **Stop Guessing Capacity:** Scale resources up or down automatically, avoiding the costs of idle resources or the performance issues of under-provisioning.
4. **Increase Speed and Agility:** Provision new resources in minutes, allowing for faster innovation and development cycles.
5. **Stop Spending Money on Undifferentiated Heavy Lifting:** AWS manages the data centers, servers, and networking, so you can focus on your own products and customers.
6. **Go Global in Minutes:** Deploy applications in multiple AWS Regions worldwide to provide low latency for a global user base.

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
- **Least Privilege Principle:** Grant only the minimum permissions necessary.
- **Encryption:** Protect data in transit and at rest.
- **Compliance:** AWS supports standards like PCI DSS, HIPAA, GDPR.
- **AWS Artifact:** Self-service portal for AWS’s compliance reports.
`,

    'domain3': `
# Domain 3: Cloud Technology & Services (34%)
This domain covers the core technology and services available on the AWS platform.

## 3.1 Methods of Deploying and Operating
- **AWS Management Console:** Web-based GUI.
- **AWS CLI:** Command-line automation.
- **AWS SDKs:** Language-specific libraries to interact programmatically.
- **Infrastructure as Code (IaC):** **AWS CloudFormation** templates for declarative provisioning.

## 3.2 AWS Global Infrastructure
- **Region:** Geographic area with multiple isolated AZs.
- **Availability Zone (AZ):** One or more discrete data centers connected with low-latency networking.
- **Edge Location:** **CloudFront** caches content at the edge for lower latency.

## 3.3 Core AWS Services
This domain spans many services. See the other sections for detailed breakdowns.

## 3.4 Global vs. Regional Services
### Key Global Services
- **IAM & IAM Identity Center**, **Route 53**, **CloudFront**, **WAF**, **AWS Organizations**.  
*Note on S3: bucket names are globally unique, but buckets live in a single Region.*

### Key Regional Services
- **EC2, VPC, RDS/DynamoDB, Lambda, Beanstalk,** etc.—provisioned within a specific Region.
`,

    'domain4': `
# Domain 4: Billing, Pricing, & Support (12%)
This domain covers how AWS pricing works, how to manage costs, and the support options available.

## 4.1 AWS Pricing Policies & Models
- **Pay-as-you-go**, **Save when you reserve**, **Pay less by using more**.

### Key Pricing Models
- **On-Demand:** Most flexible.
- **Reserved Instances (RI):** Commit to instance attributes for discount.
- **Spot Instances:** Use spare capacity with interruption risk.
- **Savings Plans:** Commit to $/hour usage for discount (more flexible than RIs).

## 4.2 Cost Management Tools
- **AWS Organizations (Consolidated Billing)**
- **Cost Explorer**
- **AWS Budgets**
- **Cost and Usage Report (CUR)**
- **Pricing Calculator**
- **Cost Allocation Tags**

## 4.3 AWS Support Plans
| Plan | Key Features |
|:---|:---|
| **Basic** | Free; account & billing support, forums. |
| **Developer** | Business-hours email support. |
| **Business** | 24x7 phone/chat/email; full Trusted Advisor checks. |
| **Enterprise On-Ramp** | For business-critical workloads; < 30-min response for business-critical issues. |
| **Enterprise** | Designated **TAM**, < 15-min response for mission-critical issues, proactive reviews. |
`,

    'iam': `
# IAM & Identity Center

### 1. Purpose & Use Cases
IAM is the bedrock of AWS security, controlling access to services and resources.
- **Use Cases:** Creating users for employees, granting EC2 instances access to S3, enforcing MFA.

### 2. IAM vs. IAM Identity Center
- **IAM:** Best for managing service-to-service permissions (e.g., an EC2 instance's role) and defining fine-grained, resource-level policies.
- **IAM Identity Center (formerly AWS SSO):** The recommended service for managing human user access. It simplifies SSO setup across multiple AWS accounts and business applications, manages permission sets centrally, and can sync with external identity providers (like Azure AD).

> For the exam, if the scenario involves managing access for a *workforce* (i.e., people), **IAM Identity Center** is often the preferred, modern answer. If it involves permissions for an *application or service*, **IAM Roles** are the answer.

### 3. Best Practices
- **Never use the root user for daily work.**
- **Enforce least privilege**.
- **Use IAM Roles** for apps/services, not long-term access keys.
- **Enable MFA** for all users.

### 4. Pricing
- IAM and IAM Identity Center are global services offered at **no additional charge**.
`,

    'compute': `
# Compute Services

## Amazon EC2 (Elastic Compute Cloud)
### 1. Purpose & Use Cases
EC2 provides virtual servers ("instances") in the cloud.
- **Use Cases:** Web apps, enterprise software, batch processing, HPC.

### 2. Key Features
- **Instance families**, **AMIs**, **Auto Scaling Groups**, **Elastic Load Balancing**.

> #### Nice to Know: Deeper EC2 Concepts
> - **Placement groups:** Control how instances are placed on physical hardware. **Cluster** for low-latency networking in one AZ; **Spread** across distinct hardware to reduce correlated failures; **Partition** for big data workloads like HDFS.
> - **Tenancy:** **Shared** (default), **Dedicated Instance** (your instances on dedicated hardware), or **Dedicated Host** (an entire physical server for you, for compliance or licensing).
> - **Lifecycle:** **Stop** an instance to keep the root volume but clear RAM; **Hibernate** to save RAM state to disk for a faster start.

### 3. Best Practices & Alternatives
- **Best Practices:** Use Auto Scaling, IAM Roles, and CloudWatch.
- **Alternatives:** **Lambda** for serverless, **ECS/EKS with Fargate** for containers.

## AWS Lambda
### 1. Purpose & Use Cases
Serverless, event-driven compute.
- **Use Cases:** S3 triggers, API backends, scheduled tasks.

> #### Nice to Know: Lambda Concurrency
> - **Concurrency** is the number of executions of your function at the same time.
> - If requests come in too fast, Lambda **throttles** them (rejects them).
> - **Reserved Concurrency** guarantees a specific number of executions are always available for your function, preventing it from being throttled by other functions in your account.

## Containers
- **ECS:** AWS-opinionated container orchestrator.
- **EKS:** Managed Kubernetes.
- **Fargate:** Serverless compute for ECS/EKS.
- **ECR:** Managed container registry.
- **App Runner:** The simplest way to deploy a containerized web app. It's a higher-level PaaS-like service that handles everything from the load balancer to scaling.
`,

    'storage': `
# Storage Services

## Amazon S3 (Simple Storage Service)

### 1. Purpose & Use Cases
Highly durable, scalable object storage.
- **Use Cases:** Backups, data lakes, static site hosting, app assets.

### 2. S3 Security Quick Wins
- **Default Encryption:** All **new S3 objects are encrypted by default (SSE-S3)**.
- **Block Public Access (BPA):** A bucket- and account-level setting that overrides policies/ACLs to prevent accidental public exposure. Best practice is to enable this at the account level.
- **Object Ownership:** Modern best practice is to disable ACLs (Access Control Lists) and use bucket policies exclusively for simpler, more robust access control.

### 3. Key Features
- **Storage Classes:** A range of tiers from S3 Standard to Glacier Deep Archive.
- **Versioning, Lifecycle Policies, Replication (CRR/SRR).**
- **Consistency:** Provides **strong read-after-write consistency** for all PUT, DELETE, and LIST operations.

> #### Nice to Know: S3 Object Lock
> - **S3 Object Lock** provides Write-Once-Read-Many (WORM) protection to prevent objects from being deleted or overwritten.
> - It's useful for regulatory compliance and ransomware protection. It requires versioning to be enabled.

### 4. Best Practices
- Use **Bucket Policies & IAM** for access control.
- **Enable Versioning** and consider **MFA Delete**.

## Amazon EBS (Elastic Block Store)
- **Purpose:** Persistent block storage for a single EC2 instance.
- **Features:** Multiple volume types, Snapshots (stored in S3), Encryption.

## File Storage
- **EFS:** Elastic, serverless file system for Linux, accessible from thousands of instances across multiple AZs.
- **FSx:** Managed high-performance file systems for Windows (FSx for Windows) and HPC/ML (FSx for Lustre).
`,

    'databases': `
# Databases & Analytics

## Amazon RDS
- **Purpose:** Managed relational DBs (MySQL, PostgreSQL, etc.).
- **Features:** Managed ops, **High Availability (Multi-AZ)**, **Read Replicas** for read scaling.
> #### Nice to Know: RDS Proxy
> - **RDS Proxy** is a managed database proxy that pools and shares database connections, improving application scalability and resilience, especially for serverless applications like Lambda that can open many connections.

## Amazon DynamoDB
- **Purpose:** Serverless NoSQL key-value DB with single-digit ms latency.
- **Features:** **On-demand or Provisioned** capacity, **Global Tables** for multi-region active-active setups.
> #### Nice to Know: DynamoDB TTL & DAX
> - **TTL (Time to Live)** automatically expires and deletes old items.
> - **DAX (DynamoDB Accelerator)** is an in-memory cache for DynamoDB.

---
## Analytics Services Comparison
| Service | Purpose | Type | Use Case |
|:---|:---|:---|:---|
| **Athena** | Interactive Query | Serverless SQL | Query S3 data without loading. |
| **Redshift** | Data Warehouse | Provisioned | BI & complex analytics on structured data. |
| **OpenSearch** | Search & Log Analytics | Managed Cluster | Interactive log analytics, application search. |
| **EMR** | Big Data Processing | Managed Cluster | Spark/Hadoop at scale. |
| **Glue** | ETL & Data Catalog | Serverless | Discover, prepare, and integrate data. |
| **Kinesis** | Data Streaming | Real-time | Ingest real-time data. **Streams** for custom apps, **Firehose** for direct delivery to destinations like S3/Redshift. |
| **Lake Formation**| Data Lake Security| Managed Permissions| Centralize and manage fine-grained permissions for your data lake. |
`,
    'networking': `
# Networking & Content Delivery

## VPC (Virtual Private Cloud)
- **Purpose:** Your private, isolated section of the AWS Cloud.
- **Key Components:** Subnets, Security Groups (stateful firewall for instances), NACLs (stateless firewall for subnets), Internet/NAT Gateways.

## Core Networking Services
- **Route 53:** DNS service. See the **Route 53 Routing Policies** page for a detailed breakdown.
- **CloudFront:** A global CDN that caches content at Edge Locations.
- **Elastic Load Balancing (ELB):** See the **Load Balancers** page for a comparison.
- **VPC Endpoints:** See the **VPC Endpoints** page for a comparison.
`,

    'messaging': `
# Messaging & Integration

## SQS vs. SNS vs. EventBridge

| Service | Type | Key Feature | Use Case Example |
|:---|:---|:---|:---|
| **SQS** | Queue | **Decoupling:** Holds messages for later processing. | An application places an order message in a queue for a separate service to process. |
| **SNS** | Pub/Sub | **Fan-out:** Pushes one message to many subscribers at once. | A critical alarm sends a single message to an SNS topic, which then triggers an email, SMS, and Lambda. |
| **EventBridge**| Event Bus | **Event-driven architecture:** Reacts to events from many sources with advanced filtering. | A new user signs up in a SaaS app, which generates an event that EventBridge routes to a Lambda. |

## API Gateway
Acts as a front door for Lambda/EC2 or other backend services. Manages traffic, authorization, throttling, and monitoring.

## Step Functions
A serverless orchestration service to create visual workflows that coordinate multiple AWS services. Manages sequencing, error handling, and retries.
`,

    'deployment': `
# Deployment & CI/CD

## AWS CloudFormation
- **Purpose:** An Infrastructure as Code (IaC) service using YAML/JSON templates to provision resources in a repeatable way.
- **Features:** Manages resources as a single unit (**Stack**), allows you to preview changes (**Change Sets**).

## Other Deployment Services
- **Elastic Beanstalk**: A PaaS for deploying traditional web apps. You provide the code, Beanstalk handles the rest.
- **Code Suite**:
  - **CodeCommit** (Git), **CodeBuild** (build/test), **CodeDeploy** (deploy), **CodePipeline** (orchestrate CI/CD).
`,

    'monitoring': `
# Monitoring, Auditing, & Management

## Amazon CloudWatch
The central monitoring and observability service.
- **Features:** **Metrics** (performance data), **Alarms** (automated actions), **Logs** (centralized log files), **Dashboards**.

---
## CloudTrail vs. Config vs. GuardDuty
| Service | What It Answers | Core Function |
|:---|:---|:---|
| **CloudTrail** | "Who did what, when, and from where?" | **Auditing & API Logging** |
| **AWS Config** | "What does my resource look like and how has it changed?" | **Resource Config & Compliance** |
| **GuardDuty** | "Is anything malicious happening?" | **Threat Detection** |

> #### Nice to Know: Advanced Auditing & Tracing
> - **CloudTrail Lake** is an advanced feature that lets you aggregate, immutably store, and query your audit logs using SQL for deeper, more complex investigations.
> - **AWS X-Ray** is a service for tracing user requests through distributed applications to identify bottlenecks and errors.

## Other Key Tools
- **AWS Health Dashboard & Trusted Advisor:** See the **Governance & Cost Management** page for more details.
`,

    'governance': `
# Governance & Cost Management

## AWS Organizations & SCPs
- **Organizations:** Centrally manage multiple AWS accounts. Enables consolidated billing.
- **Service Control Policies (SCPs):** Provide central control over the maximum available permissions for all accounts in your organization. SCPs act as "guardrails" – they do not grant permissions but can restrict what users and roles in member accounts can do.

## AWS Control Tower
- **Purpose:** Automates the setup of a secure, multi-account AWS environment (a "landing zone") based on best practices, using services like Organizations and SCPs.

## AWS Service Catalog
- **Purpose:** Allows organizations to create and manage catalogs of IT services that are approved for use on AWS.

## Cost Tools & Support
- **AWS Budgets**, **Cost Explorer**, **Compute Optimizer**, **AWS License Manager**.
- **Trusted Advisor:** Provides real-time guidance. The number of checks available depends on your **Support plan** (Business and Enterprise get all checks).
- **AWS Health Dashboard:**
    - **Service Health Dashboard:** Public status of all AWS services.
    - **Personal Health Dashboard (Account Health):** A personalized view of events and scheduled changes that may affect *your specific* AWS resources.
`,

    'advanced_networking': `
# Advanced Networking

## Direct Connect vs. Global Accelerator vs. CloudFront
| Service | Primary Purpose | How It Works | Use Case |
|:---|:---|:---|:---|
| **Direct Connect** | Hybrid Connectivity | Dedicated private physical link from on-prem to AWS. | Consistent, high-bandwidth private connectivity. |
| **Global Accelerator**| Performance & Availability| Directs user traffic over the AWS global network to the optimal endpoint using Anycast IPs. | Improving performance of global dynamic applications (e.g., gaming, VoIP). |
| **CloudFront** | Content Delivery | Caches content at global Edge Locations. | Speeding up delivery of static and dynamic web content. |

> #### Nice to Know: Transit Gateway
> - **Transit Gateway** acts as a central hub to connect your VPCs and on-premises networks. It simplifies your network architecture in a **hub-and-spoke model**, which is much cleaner than complex VPC peering meshes.

`,

    'hybrid': `
# Hybrid & Edge Computing
> This content is generally "nice to know" and less critical for the exam, but shows awareness of the breadth of AWS.

## AWS Outposts
- **Purpose:** A fully managed service that extends AWS infrastructure and services to virtually any on-premises data center.

## AWS Local Zones
- **Purpose:** Places AWS compute, storage, and database services closer to large population centers for low-latency applications.

## AWS Wavelength
- **Purpose:** Embeds AWS compute and storage services within 5G networks for mobile edge computing.

## Snow Family Use Cases
- **Snowcone:** Small-scale data transfer (up to 14 TB) or edge computing in rugged environments.
- **Snowball Edge:** Petabyte-scale data migrations or as a powerful edge computing device.
- **Snowmobile:** Exabyte-scale data transfer (up to 100 PB per truck).
`,

    'security': `
# In-Depth Security Tools

## Encryption Services Comparison
| Service | What It Manages | Key Control | Use Case |
|:---|:---|:---|:---|
| **KMS** | Encryption Keys | Customer manages, AWS handles hardware | General-purpose encryption for most AWS services. |
| **CloudHSM** | Encryption Keys | Customer has full control of keys on dedicated hardware | Meeting strict compliance requirements (e.g., FIPS 140-2 Level 3). |
| **ACM** | SSL/TLS Certificates | N/A (manages public certificates) | Provisioning public SSL/TLS certificates for ELB and CloudFront. |

---
## Threat Detection, Vulnerability & Compliance
- **GuardDuty:** ML-based threat detection.
- **Inspector:** Automated vulnerability scanning.
- **Macie:** Sensitive data discovery in S3.
- **Security Hub:** Centralized security findings.
- **Audit Manager:** Automates evidence collection for audits.

---
## Network & Application Protection
- **Shield:** DDoS protection (**Standard** is free; **Advanced** is paid).
- **WAF (Web Application Firewall):** Protects web apps from common exploits.
- **Secrets Manager vs. Parameter Store:**
  - **Parameter Store:** Secure storage for configuration data and secrets.
  - **Secrets Manager:** A dedicated secret management service with automatic secret rotation.
`,

    'ml': `
# Machine Learning Services
- **SageMaker:** Build/train/deploy ML models.
- **Rekognition:** Image/video analysis.
- **Transcribe:** Speech to text.
- **Polly:** Text to speech.
- **Translate:** Text translation.
- **Lex:** Chatbots.
- **Comprehend:** NLP insights.
- **Kendra:** Intelligent enterprise search.
> #### Nice to Know: Amazon Bedrock
> - **Bedrock** is AWS's fully managed service for accessing high-performing foundation models (FMs) from leading AI companies via a single API. It's the go-to service for building generative AI applications.
`,

    'migration': `
# Migration & Transfer

## Six "R's" of Migration Strategies
- **Rehost (Lift & Shift)**, **Replatform (Lift, Tinker, Shift)**, **Repurchase (SaaS)**, **Refactor/Re-architect**, **Retire**, **Retain**.

## Migration Services
- **Application Migration Service (MGN):** The primary service for rehosting servers into AWS.
- **DataSync:** For online data transfer from on-premises to AWS storage.
- **Migration Hub:** A single location to track the progress of migrations.
- **Database Migration Service (DMS):** Migrates databases to AWS with minimal downtime.
`,

    'frameworks': `
# Frameworks & Strategies

## AWS Well-Architected Framework
Based on six pillars:
- **Operational Excellence**, **Security**, **Reliability**, **Performance Efficiency**, **Cost Optimization**, **Sustainability**.

## Cloud Adoption Framework (CAF)
Organizes guidance into six perspectives:
- **Business, People, Governance** (Business Capabilities)
- **Platform, Security, Operations** (Technical Capabilities)
`,

    'dr_ha': `
# Disaster Recovery & High Availability

## Key Metrics
- **RTO (Recovery Time Objective):** How quickly must we recover?
- **RPO (Recovery Point Objective):** How much data can we lose?

## DR Strategies (from highest RTO/RPO to lowest)
| Strategy | Description | RTO Example | RPO Example |
|:---|:---|:---|:---|
| **Backup and Restore** | Restore data from backups after a disaster. | **Hours to Days** | **Hours** |
| **Pilot Light** | A minimal version of the environment is always running. | **Tens of Minutes** | **Minutes** |
| **Warm Standby** | A scaled-down but functional copy is always running. | **Minutes** | **Seconds to Minutes** |
| **Multi-site (Hot-site)**| A full-scale, active-active configuration. | **Seconds / Near-zero**| **Near-zero** |

## AWS Backup
A centralized service to manage and automate backups across AWS services.
`,

    'caching': `
# Caching & Performance
## In-Memory Caching: ElastiCache
A managed in-memory caching service supporting:
- **Redis:** For advanced data structures and high availability.
- **Memcached:** For simple object caching.
- **Use Case:** An e-commerce site caches popular product data to reduce load on its RDS database.

---
## Edge Caching: CloudFront
A CDN that caches content at Edge Locations to reduce latency.

---
## Database Caching: DAX
> #### Nice to Know: DynamoDB Accelerator (DAX)
> - DAX is a fully managed, in-memory cache for DynamoDB, delivering microsecond read performance. It's API-compatible with DynamoDB, so you often don't need to change your application code to use it.
`,

    'developer_tools': `
# Developer Productivity
## Cloud9
- A cloud-based IDE for writing, running, and debugging code in a browser.

## Amplify
- A set of tools to build and deploy full-stack web and mobile applications on AWS.

## AppConfig
- A service for managing and deploying application configurations safely and dynamically.
`,

    'specialty': `
# Specialty & Emerging Services
> This content is generally "nice to know" and less critical for the exam, but shows awareness of the breadth of AWS.

## IoT Core
- A managed cloud service that lets connected devices securely interact with cloud applications.

## Ground Station
- A fully managed service that lets you control satellite communications and process satellite data.

## RoboMaker
- A cloud-based simulation service to develop, test, and deploy robotics applications.
`,
    'elb': `
# Elastic Load Balancing (ELB)
| Balancer Type | Layer | Use Case | Key Feature |
|:---|:---:|:---|:---|
| **Application (ALB)** | 7 (HTTP/S)| Web applications, microservices | Path-based & host-based routing. |
| **Network (NLB)** | 4 (TCP/UDP)| High-performance, low-latency applications | Can handle millions of requests/sec, provides a static IP. |
>| **Gateway (GWLB)** | 3 (IP) | Deploying third-party virtual appliances | Acts as a transparent bump-in-the-wire for security inspection. |
`,

    'route53_routing': `
# Route 53 — Routing Policies
- **Simple:** The default policy, used for a single resource.
- **Weighted:** Splits traffic across multiple resources based on assigned weights (e.g., 90% to one, 10% to another for A/B testing).
- **Latency-based:** Routes users to the AWS region that provides the lowest latency.
- **Failover:** Used for active-passive disaster recovery. Routes traffic to a primary resource, and to a secondary if the primary is unhealthy.
- **Geolocation:** Routes users based on their geographic location (e.g., country or continent).
- **Multivalue Answer:** Responds to DNS queries with up to eight healthy records selected at random.
`,
    'vpc_endpoints': `
# VPC Endpoints (Private Access to AWS Services)
- **Gateway Endpoints:** A gateway that you specify as a target for a route in your route table to access **S3 and DynamoDB**. It has **no hourly charge**.
- **Interface Endpoints (powered by PrivateLink):** An elastic network interface (ENI) with a private IP that serves as an entry point for traffic to most other AWS services and third-party SaaS applications. It has a **per-hour cost** plus data processing charges.
`,
    'cost_protections': `
# Free Tier & Cost Protections

## AWS Free Tier
AWS offers a Free Tier to help you get hands-on experience.
- **12-Month Free Trial:** For new AWS accounts, many popular services like EC2 (750 hours/month of t2.micro) and S3 (5 GB Standard Storage) have a free usage allowance for the first year.
- **Always Free:** Some services have a free tier that does not expire. This includes services like Lambda (1 million free requests/month) and DynamoDB (25 GB storage).

## Proactive Cost Management
- **AWS Budgets:** Set custom budgets that alert you when your costs or usage exceed your budgeted amount.
- **Cost Anomaly Detection:** A feature that uses machine learning to monitor your spending patterns, identify unusual spend, and provide root-cause analysis to help you catch unexpected cost spikes.
`,
    'data_transfer': `
# Data Transfer Cost Basics
Understanding data transfer costs is key for cost optimization. The general rules are:
- **Data Transfer IN to AWS:** Free from the internet into any AWS Region.
- **Data Transfer OUT of AWS:** Charged per GB. The price varies by Region and amount of data. This is a common source of cloud costs.
- **Data Transfer within the same Region:**
    - **Between Availability Zones:** There is a cost per GB for data transferred between AZs.
    - **Within a single Availability Zone:** Data transfer between services in the same AZ using private IPs is free.
- **CloudFront Data Transfer:** Data transfer from an AWS origin (like S3) to a CloudFront Edge Location is free. You pay for data transfer from the Edge Location to the user.
`
  };

  const quizzes = {
    iam: [
        { q: "What is the best practice for the AWS account root user?", choices: ["Use it for daily admin tasks", "Create access keys for it", "Secure it with MFA and never use it for daily tasks", "Share its credentials with your team"], answer: 2, explain: "The root user should be secured with MFA and used only for tasks that absolutely require it. IAM users should be used for all other tasks." },
        { q: "For managing SSO access for your company's employees to multiple AWS accounts, you should use:", choices: ["IAM Users and Groups", "IAM Roles", "IAM Identity Center", "Service Control Policies"], answer: 2, explain: "IAM Identity Center (formerly AWS SSO) is the recommended service for managing workforce access across multiple accounts." },
        { q: "What is an IAM Policy?", choices: ["A user who can access AWS", "A JSON document that defines permissions", "A collection of users", "A temporary credential"], answer: 1, explain: "An IAM Policy is a JSON document that explicitly lists permissions." },
        { q: "An EC2 instance needs to access an S3 bucket. What is the most secure way to grant it permissions?", choices: ["Store access keys on the instance", "Assign an IAM Role to the instance", "Create a new IAM user for the instance", "Make the S3 bucket public"], answer: 1, explain: "Using an IAM Role is the most secure method as it provides temporary credentials automatically, avoiding the need to store long-term keys on the instance." },
        { q: "What does the principle of least privilege mean?", choices: ["Granting all users administrator access", "Granting only the permissions required to perform a task", "Denying all permissions by default", "Using MFA for all users"], answer: 1, explain: "The principle of least privilege is a security best practice that involves giving a user or service only the access that is essential for it to perform its intended function." },
        { q: "Which of the following is a task that ONLY the root user can perform?", choices: ["Create an S3 bucket", "Launch an EC2 instance", "Change the account's support plan", "Create an IAM user"], answer: 2, explain: "Certain account-level operations, like changing the support plan or closing the account, are restricted to the root user." },
        { q: "What is the primary function of an IAM Role?", choices: ["To define a user's password policy", "To be a container for IAM users", "To be an identity with permissions that can be assumed by a trusted entity", "To audit API calls"], answer: 2, explain: "An IAM Role is an identity that you can create in your account that has specific permissions. It is not uniquely associated with one person, but is assumable by anyone who needs it." },
        { q: "MFA in IAM stands for:", choices: ["Multi-Factor Authentication", "Managed Federation Access", "Multiple-Form Authorization", "Manual Federation-Audit"], answer: 0, explain: "MFA (Multi-Factor Authentication) adds an extra layer of security by requiring a second form of verification." },
        { q: "How are permissions for an IAM Group applied to users within it?", choices: ["Users must explicitly assume the group's permissions", "Permissions are inherited by all users in the group", "Permissions are only suggestions", "Only the first user in the group gets the permissions"], answer: 1, explain: "Users in an IAM group automatically inherit all the permissions that are attached to that group, simplifying permission management." },
        { q: "Which service is GLOBAL, not regional?", choices: ["Amazon EC2", "Amazon VPC", "Amazon S3", "AWS IAM"], answer: 3, explain: "IAM resources (users, groups, roles, policies) are global and not tied to a specific region. S3 buckets are regional, though their names are globally unique." }
    ],
    compute: [
        { q: "A workload requires extremely low latency between instances. Which placement group should you use?", choices: ["Spread", "Partition", "Cluster", "Dedicated"], answer: 2, explain: "Cluster placement groups pack instances close together inside an AZ for low-latency network performance." },
        { q: "Which service provides a serverless compute engine for containers?", choices: ["Amazon EC2", "AWS Lambda", "AWS Fargate", "Amazon EKS"], answer: 2, explain: "AWS Fargate works with both ECS and EKS to run containers without you having to manage the underlying EC2 instances." },
        { q: "What is an AMI?", choices: ["A type of EC2 instance", "A firewall rule", "A template for an EC2 instance, including the OS", "A load balancer"], answer: 2, explain: "An Amazon Machine Image (AMI) is a pre-configured template that contains the software configuration (operating system, application server, and applications) required to launch your instance." },
        { q: "Which EC2 pricing option is best for a fault-tolerant batch processing job that can be interrupted?", choices: ["On-Demand", "Reserved Instances", "Spot Instances", "Dedicated Hosts"], answer: 2, explain: "Spot Instances offer the largest discounts but can be terminated if AWS needs the capacity back, making them ideal for workloads that can handle interruptions." },
        { q: "A company wants to run a web application that scales automatically based on traffic. Which service should they use?", choices: ["A single large EC2 instance", "EC2 instances in an Auto Scaling Group", "AWS Lambda", "AWS Batch"], answer: 1, explain: "Auto Scaling Groups are designed to automatically add or remove EC2 instances to meet the current demand, providing elasticity." },
        { q: "What is the maximum execution time for an AWS Lambda function?", choices: ["5 minutes", "15 minutes", "1 hour", "Unlimited"], answer: 1, explain: "As of now, the maximum timeout for a Lambda function is 15 minutes." },
        { q: "Which service is an AWS-managed container orchestration service?", choices: ["Docker Swarm", "Amazon ECR", "Amazon ECS", "Kubernetes"], answer: 2, explain: "Amazon ECS (Elastic Container Service) is AWS's proprietary, fully managed container orchestration service." },
        { q: "A developer wants the simplest way to deploy a web application from a container image without thinking about servers or clusters. Which service is the best fit?", choices: ["Amazon EC2", "Amazon ECS with EC2 launch type", "AWS App Runner", "AWS Elastic Beanstalk"], answer: 2, explain: "App Runner is the highest-level abstraction, designed for maximum simplicity in deploying containerized web apps." },
        { q: "Hibernating an EC2 instance does what?", choices: ["Deletes the instance and its storage", "Stops the instance and clears the RAM", "Saves the contents of the RAM to the EBS root volume", "Creates a snapshot of the instance"], answer: 2, explain: "Hibernation saves the in-memory state, allowing for a much faster startup compared to a full stop/start cycle." },
        { q: "What is the primary benefit of AWS Lambda?", choices: ["Full control over the operating system", "Running long, stateful applications", "Running code without provisioning or managing servers", "The lowest cost for predictable, 24/7 workloads"], answer: 2, explain: "Lambda is a serverless service, which means its main benefit is abstracting away the underlying server infrastructure." }
    ],
    storage: [
      { q: "All new S3 objects are encrypted by default using:", choices: ["SSE-KMS", "SSE-S3", "Client-side", "None"], answer: 1, explain: "S3 applies SSE-S3 by default for new objects." },
      { q: "To prevent accidental deletion of critical compliance data in S3, you should use:", choices: ["Versioning and MFA Delete", "S3 Object Lock", "A restrictive bucket policy", "All of the above"], answer: 3, explain: "While all are good security measures, S3 Object Lock provides WORM protection, which is specifically designed for compliance and data retention." },
      { q: "A shared file system that can be mounted by thousands of Linux EC2 instances across multiple AZs is:", choices: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon FSx for Lustre"], answer: 2, explain: "Amazon EFS provides a scalable, shared file system for Linux instances, accessible across AZs." },
      { q: "Which S3 storage class is designed for long-term archival of data that is rarely accessed and has a retrieval time of several hours?", choices: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Instant Retrieval", "S3 Glacier Deep Archive"], answer: 3, explain: "S3 Glacier Deep Archive is the lowest-cost storage class and is intended for archiving data that is accessed very infrequently." },
      { q: "What is an EBS Snapshot?", choices: ["A real-time replica of a volume", "A point-in-time backup of an EBS volume stored in S3", "A type of EBS volume", "A mounted file system"], answer: 1, explain: "EBS Snapshots are backups of your volumes that are stored durably in Amazon S3." },
      { q: "You need a high-performance, shared file system for a Windows-based application. Which service should you choose?", choices: ["Amazon EFS", "Amazon EBS", "Amazon S3", "Amazon FSx for Windows File Server"], answer: 3, explain: "FSx for Windows File Server is specifically designed to provide a fully managed native Windows file system." },
      { q: "What is the primary difference between Amazon EBS and EC2 Instance Store?", choices: ["EBS is object storage, Instance Store is block storage", "EBS is persistent, while Instance Store is ephemeral (temporary)", "EBS is free, Instance Store is not", "EBS is slower than Instance Store"], answer: 1, explain: "EBS volumes persist independently from the life of an EC2 instance. Instance Store data is lost if the instance is stopped or terminated." },
      { q: "S3 Lifecycle policies are used to:", choices: ["Automatically move objects between storage classes based on age", "Replicate objects to another region", "Encrypt objects by default", "Block public access to buckets"], answer: 0, explain: "Lifecycle policies automate the process of transitioning objects to more cost-effective storage tiers or deleting them as they age." },
      { q: "What does S3 Block Public Access (BPA) do?", choices: ["It encrypts all public objects", "It's a setting that overrides policies and ACLs to prevent public access", "It analyzes objects for sensitive data", "It speeds up access to public objects"], answer: 1, explain: "BPA provides a central way to block all public access to your S3 buckets and objects, acting as a critical safety feature." },
      { q: "S3 provides strong read-after-write consistency. What does this mean?", choices: ["You might read stale data after writing a new object", "After a successful write of a new object, any subsequent read will retrieve the latest version", "Writes are eventually consistent", "Data is only consistent within a single Availability Zone"], answer: 1, explain: "Strong read-after-write consistency guarantees that once an object is written or updated, any immediate read request will receive the new data." }
    ],
    databases: [
        { q: "Which AWS service is a managed relational database service?", choices: ["Amazon DynamoDB", "Amazon Redshift", "Amazon RDS", "Amazon ElastiCache"], answer: 2, explain: "Amazon RDS (Relational Database Service) is used for relational databases like MySQL, PostgreSQL, etc." },
        { q: "A company needs a fully managed, serverless NoSQL database that provides single-digit millisecond latency. Which service is the best fit?", choices: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"], answer: 2, explain: "DynamoDB is a NoSQL key-value database designed for high performance at any scale." },
        { q: "To improve the read performance of an RDS database, you should use:", choices: ["Multi-AZ deployments", "Read Replicas", "EBS Snapshots", "RDS Proxy"], answer: 1, explain: "Read Replicas are used to offload read traffic from the primary database instance, thereby improving read scalability." },
        { q: "Which service is a petabyte-scale data warehouse used for business intelligence and analytics?", choices: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Athena"], answer: 2, explain: "Amazon Redshift is a fully managed data warehouse service designed for large-scale data analytics (OLAP)." },
        { q: "You want to run SQL queries directly on data stored in Amazon S3 without loading it into a database. Which service should you use?", choices: ["Amazon Redshift", "Amazon RDS", "Amazon EMR", "Amazon Athena"], answer: 3, explain: "Amazon Athena is a serverless query service that allows you to analyze data directly in S3 using standard SQL." },
        { q: "What is the primary purpose of Amazon ElastiCache?", choices: ["To provide a relational database", "To act as an in-memory cache to improve application performance", "To store long-term data archives", "To orchestrate data workflows"], answer: 1, explain: "ElastiCache is used to create an in-memory cache, which reduces latency and eases the load on backend databases." },
        { q: "What is the key benefit of an RDS Multi-AZ deployment?", choices: ["It improves read scalability", "It provides high availability and automatic failover", "It lowers the cost of the database", "It encrypts the database by default"], answer: 1, explain: "Multi-AZ deployments create a synchronous standby replica in a different AZ, which the database automatically fails over to in case of an outage." },
        { q: "Which service is used for processing vast amounts of data using big data frameworks like Apache Spark and Hadoop?", choices: ["Amazon Kinesis", "Amazon Glue", "Amazon EMR", "Amazon Redshift"], answer: 2, explain: "EMR (Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks." },
        { q: "A developer needs to prepare and transform data from various sources before loading it into a data warehouse. Which serverless service is designed for this ETL (Extract, Transform, Load) process?", choices: ["Amazon Kinesis", "AWS Glue", "AWS Data Pipeline", "Amazon EMR"], answer: 1, explain: "AWS Glue is a fully managed, serverless ETL service that includes a data catalog and job authoring." },
        { q: "What is the primary difference between Amazon RDS and Amazon Aurora?", choices: ["RDS is relational, Aurora is NoSQL", "Aurora is a cloud-native database with higher performance and availability than standard RDS engines", "RDS supports MySQL, but Aurora does not", "Aurora is serverless, RDS is not"], answer: 1, explain: "Aurora is a custom-built database engine by AWS, compatible with MySQL and PostgreSQL, that is designed for the cloud and offers superior performance, scalability, and availability." }
    ],
    networking: [
        { q: "Which component of a VPC acts as a stateful firewall for an EC2 instance?", choices: ["Network ACL", "Security Group", "Internet Gateway", "Route Table"], answer: 1, explain: "Security Groups are stateful and operate at the instance level." },
        { q: "To allow an EC2 instance in a private subnet to access the internet for software updates, you should use a:", choices: ["Internet Gateway", "NAT Gateway", "VPC Peering Connection", "Direct Connect"], answer: 1, explain: "A NAT Gateway allows instances in a private subnet to initiate outbound traffic to the internet while remaining private." },
        { q: "Which service is a global DNS web service?", choices: ["Amazon VPC", "Amazon CloudFront", "Elastic Load Balancing", "Amazon Route 53"], answer: 3, explain: "Amazon Route 53 is AWS's highly available and scalable Domain Name System (DNS) service." },
        { q: "A stateless firewall that operates at the subnet level is called a:", choices: ["Security Group", "Network ACL", "AWS WAF", "AWS Shield"], answer: 1, explain: "Network Access Control Lists (NACLs) are stateless and control traffic in and out of subnets." },
        { q: "What is the primary function of Amazon CloudFront?", choices: ["To provide a private connection to AWS", "To distribute traffic across multiple EC2 instances", "To act as a Content Delivery Network (CDN) to reduce latency", "To translate domain names to IP addresses"], answer: 2, explain: "CloudFront is a CDN that caches content in edge locations around the world, delivering it to users with lower latency." },
        { q: "What is the difference between a Security Group and a Network ACL?", choices: ["Security Groups are stateless, NACLs are stateful", "Security Groups only support allow rules, NACLs support allow and deny rules", "Security Groups operate at the subnet level, NACLs at the instance level", "There is no difference"], answer: 1, explain: "Security Groups are stateful and only have 'allow' rules. NACLs are stateless and have separate 'allow' and 'deny' rules for both inbound and outbound traffic." },
        { q: "To establish a dedicated, private network connection from your on-premises data center to AWS, you should use:", choices: ["VPC Peering", "AWS VPN", "AWS Direct Connect", "Internet Gateway"], answer: 2, explain: "AWS Direct Connect provides a private, dedicated physical connection, offering more consistent bandwidth and lower latency than an internet-based VPN." },
        { q: "You want to privately connect two VPCs in different AWS accounts. Which feature enables this?", choices: ["VPC Peering", "AWS Transit Gateway", "VPC Endpoints", "Both A and B are possible"], answer: 3, explain: "Both VPC Peering (for a 1:1 connection) and Transit Gateway (for a hub-and-spoke model) can be used to connect VPCs, including across accounts." },
        { q: "Which service can help improve the performance of a global application by routing traffic over the AWS backbone network?", choices: ["Amazon CloudFront", "AWS Global Accelerator", "An Application Load Balancer", "VPC Peering"], answer: 1, explain: "AWS Global Accelerator uses the AWS global network to direct traffic to the optimal endpoint, improving performance for TCP and UDP traffic." },
        { q: "What does a NAT Gateway allow?", choices: ["It allows inbound traffic from the internet to instances in a private subnet", "It allows instances in a private subnet to initiate outbound traffic to the internet", "It allows two VPCs to communicate with each other", "It provides a dedicated connection to AWS"], answer: 1, explain: "A NAT (Network Address Translation) Gateway is a managed service that enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances." }
    ],
    elb: [
      { q: "Which load balancer supports path-based routing (e.g., /users vs /orders)?", choices: ["Network Load Balancer", "Application Load Balancer", "Gateway Load Balancer", "Classic Load Balancer"], answer: 1, explain: "ALB operates at Layer 7 and can inspect the URL path to make routing decisions." },
      { q: "You need to handle millions of requests per second for a TCP-based application and require a static IP. Which ELB is best?", choices: ["ALB", "NLB", "GWLB", "CloudFront"], answer: 1, explain: "NLB is designed for extreme performance at Layer 4 and can be assigned an Elastic IP." },
    ],
    route53_routing: [
      { q: "To configure an active-passive disaster recovery site, you would use which routing policy?", choices: ["Latency-based", "Failover", "Weighted", "Geolocation"], answer: 1, explain: "Failover routing is specifically designed for active-passive DR setups, routing traffic to a secondary site if the primary is unhealthy." },
      { q: "You want to test a new version of your application with 5% of your users. Which routing policy supports this?", choices: ["Weighted", "Simple", "Latency-based", "Multivalue"], answer: 0, explain: "Weighted routing allows you to split traffic by percentages, which is ideal for canary deployments and A/B testing." },
    ],
    vpc_endpoints: [
      { q: "Which VPC endpoint type is free of hourly charges and supports S3 and DynamoDB?", choices: ["Interface (PrivateLink)", "Gateway", "Transit", "Edge"], answer: 1, explain: "Gateway endpoints use a route table target and have no hourly charge, but only support S3 and DynamoDB." },
      { q: "To privately connect your VPC to a third-party service hosted on AWS, you would use:", choices: ["Gateway endpoint", "Interface endpoint (AWS PrivateLink)", "VPC Peering", "Direct Connect"], answer: 1, explain: "Interface endpoints powered by AWS PrivateLink are the standard for secure, private connectivity to services, including those from third-party vendors." },
    ],
    governance: [
        { q: "Which service helps you create a secure, multi-account AWS environment based on best practices, often called a 'landing zone'?", choices: ["AWS Organizations", "AWS Control Tower", "AWS Config", "Service Catalog"], answer: 1, explain: "AWS Control Tower automates the setup of a landing zone with guardrails and an account factory." },
        { q: "A Service Control Policy (SCP) can:", choices: ["Grant new permissions to users", "Restrict the maximum permissions for member accounts", "Only be applied to IAM users, not roles", "Replace the need for IAM policies"], answer: 1, explain: "SCPs act as guardrails. They don't grant permissions but can restrict what actions are allowed in an account, even for the root user." }
    ],
    cost_protections: [
        { q: "Which part of the AWS Free Tier expires after 12 months for a new account?", choices: ["Always Free offers", "The 12-Month Free Trial", "All services", "Only EC2"], answer: 1, explain: "The 12-Month Free Trial provides a specific allowance on services like EC2 and S3 for one year. 'Always Free' offers do not expire." },
        { q: "What is the primary function of AWS Cost Anomaly Detection?", choices: ["To recommend cheaper instance types", "To enforce spending limits", "To automatically detect unusual spending using machine learning", "To provide a detailed billing report"], answer: 2, explain: "Cost Anomaly Detection uses ML to monitor your spending patterns and alert you to unusual spikes that deviate from your normal baseline." }
    ],
    default: [
        { q: "Which AWS model lets you avoid large CAPEX?", choices: ["On-prem", "Cloud pay-as-you-go", "Colocation", "Bare metal"], answer: 1,
          explain: "Cloud shifts CAPEX to OPEX with pay-as-you-go." },
        { q: "Multi-AZ primarily improves:", choices: ["Latency", "Security", "Availability", "Cost"], answer: 2,
          explain: "Multi-AZ is a core high-availability pattern." },
        { q: "Which helps reduce costs for predictable steady workloads?", choices: ["On-Demand", "Savings Plans/Reserved options", "Spot only", "Dedicated Hosts only"], answer: 1,
          explain: "Savings Plans and Reserved Instances are ideal for steady, predictable usage, offering significant discounts over On-Demand." }
      ]
  };

  /* ==============
     DOM REFERENCES
     ============== */
  const contentDisplay = document.getElementById('content-display');
  const navLinksContainer = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const searchInput = document.getElementById('search-input');

  /* =====================
     NAV BUILD + RENDERING
     ===================== */
  function buildNav() {
    let navHtml = '';
    navigationStructure.forEach(item => {
      if (item.type === 'link') {
        navHtml += `<li data-label=\"${item.label.toLowerCase()}\"><a href=\"#${item.topic}\" data-topic=\"${item.topic}\">${item.label}</a></li>`;
      } else if (item.type === 'category') {
        navHtml += `<li class=\"nav-category\" data-label=\"${item.label.toLowerCase()}\">${item.label}</li>`;
      }
    });
    navLinksContainer.innerHTML = navHtml;
  }
  
  function getTopicLabel(topic) {
    const item = navigationStructure.find(i => i.type === 'link' && i.topic === topic);
    return item ? item.label : topic;
  }

  function insertContentToolbar(topic) {
    const toolbar = document.createElement('div');
    toolbar.className = 'content-toolbar';

    const titleEl = contentDisplay.querySelector('h1');
    const titleText = titleEl ? titleEl.textContent.trim() : getTopicLabel(topic);

    toolbar.innerHTML = `
      <div class=\"toolbar-left\">
        <span class=\"toolbar-title\">${titleText}</span>
        <span class=\"topic-pill\">${topic}</span>
      </div>
      <div class=\"toolbar-right\">
        <button class=\"btn btn-outline\" id=\"btn-copy-link\" title=\"Copy link to this section\">Copy link</button>
        <button class=\"btn\" id=\"btn-open-quiz\" title=\"Open quiz for this topic\">Quiz</button>
      </div>
    `;

    contentDisplay.prepend(toolbar);

    document.getElementById('btn-copy-link').addEventListener('click', async () => {
        const url = window.location.href;
        try {
            // Using execCommand as a fallback for iframe environments
            const temp = document.createElement('textarea');
            temp.value = url;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            temp.remove();
            toast('Link copied!');
        } catch (err) {
            toast('Could not copy link', true);
        }
    });

    document.getElementById('btn-open-quiz').addEventListener('click', () => openQuiz(topic, titleText));
  }
  
  function toast(msg, isError = false) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = 'fixed';
    t.style.right = '16px';
    t.style.top = '14px';
    t.style.zIndex = '3000';
    t.style.background = isError ? '#b91c1c' : '#065f46';
    t.style.color = '#fff';
    t.style.padding = '8px 12px';
    t.style.borderRadius = '6px';
    t.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1600);
  }

  function showContent(topic) {
    const content = markdownContent[topic] || '# Content Not Found';
    contentDisplay.innerHTML = marked.parse(content);
    contentDisplay.scrollTop = 0; // Scroll to top on content change
    
    const links = navLinksContainer.querySelectorAll('a');
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.topic === topic);
    });

    if (window.innerWidth < 768) {
      sidebar.classList.remove('open');
    }
    
    insertContentToolbar(topic);

    if (window.hljs) {
      document.querySelectorAll('pre code').forEach(block => window.hljs.highlightElement(block));
    }
  }

  /* ==========
     QUIZ MODAL
     ========== */
  let quizState = {
    topic: null,
    title: null,
    questions: [],
    index: 0,
    answers: []
  };

  function ensureQuizModal() {
    if (document.getElementById('quiz-modal')) return;

    const modal = document.createElement('div');
    modal.className = 'quiz-modal';
    modal.id = 'quiz-modal';
    modal.innerHTML = `
      <div class=\"quiz-card\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"quiz-title\">
        <div class=\"quiz-header\">
          <h3 id=\"quiz-title\">Topic Quiz</h3>
          <button class=\"btn btn-outline\" id=\"quiz-close\">Close</button>
        </div>
        <div class=\"quiz-body\" id=\"quiz-body\"></div>
        <div class=\"quiz-footer\">
          <div class=\"quiz-progress\" id=\"quiz-progress\"></div>
          <div>
            <button class=\"btn btn-outline\" id=\"quiz-prev\">Back</button>
            <button class=\"btn\" id=\"quiz-next\">Next</button>
            <button class=\"btn\" id=\"quiz-submit\" style=\"display:none;\">Submit</button>
            <button class=\"btn\" id=\"quiz-retake\" style=\"display:none;\">Retake</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'quiz-modal') closeQuiz();
    });
    document.getElementById('quiz-close').addEventListener('click', closeQuiz);

    document.getElementById('quiz-prev').addEventListener('click', () => {
      if (quizState.index > 0) { quizState.index--; renderQuestion(); }
    });
    document.getElementById('quiz-next').addEventListener('click', () => {
      if (quizState.index < quizState.questions.length - 1) {
        quizState.index++; renderQuestion();
      }
    });
    document.getElementById('quiz-submit').addEventListener('click', gradeQuiz);
    document.getElementById('quiz-retake').addEventListener('click', () => openQuiz(quizState.topic, quizState.title));
  }

  function openQuiz(topic, titleText) {
    ensureQuizModal();
    const modal = document.getElementById('quiz-modal');

    quizState.topic = topic;
    quizState.title = titleText || getTopicLabel(topic);
    quizState.questions = (quizzes[topic] || quizzes['default']).map(q => ({ ...q }));
    quizState.index = 0;
    quizState.answers = Array(quizState.questions.length).fill(-1);

    document.getElementById('quiz-title').textContent = `${quizState.title} — Quiz`;
    document.getElementById('quiz-retake').style.display = 'none';
    const isSingleQuestion = quizState.questions.length === 1;
    document.getElementById('quiz-submit').style.display = 'none';
    document.getElementById('quiz-next').style.display = 'block';
    if(isSingleQuestion) {
        document.getElementById('quiz-submit').style.display = 'block';
        document.getElementById('quiz-next').style.display = 'none';
    }
    document.getElementById('quiz-prev').disabled = true;

    renderQuestion();
    modal.classList.add('open');

    setTimeout(() => document.getElementById('quiz-next').focus(), 60);
  }

  function closeQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.classList.remove('open');
  }

  function renderQuestion() {
    const body = document.getElementById('quiz-body');
    const prog = document.getElementById('quiz-progress');
    const prevBtn = document.getElementById('quiz-prev');
    const nextBtn = document.getElementById('quiz-next');
    const submitBtn = document.getElementById('quiz-submit');
    const retakeBtn = document.getElementById('quiz-retake');

    const q = quizState.questions[quizState.index];
    const selected = quizState.answers[quizState.index];

    body.innerHTML = `
      <div class=\"quiz-q\">${q.q}</div>
      <ul class=\"quiz-choices\" id=\"quiz-choices\"></ul>
      <div class=\"quiz-explain\" id=\"quiz-explain\" style=\"display:none;\"></div>
    `;

    const list = document.getElementById('quiz-choices');
    q.choices.forEach((c, i) => {
      const li = document.createElement('li');
      li.textContent = c;
      if (i === selected) li.classList.add('selected');
      li.addEventListener('click', () => {
        quizState.answers[quizState.index] = i;
        list.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
        if (quizState.index === quizState.questions.length - 1) {
          submitBtn.style.display = '';
          nextBtn.style.display = 'none';
        }
      });
      list.appendChild(li);
    });

    prog.textContent = `Question ${quizState.index + 1} of ${quizState.questions.length}`;
    prevBtn.disabled = quizState.index === 0;
    const isLastQuestion = quizState.index === quizState.questions.length - 1;
    nextBtn.style.display = !isLastQuestion ? '' : 'none';
    submitBtn.style.display = isLastQuestion ? '' : 'none';
    retakeBtn.style.display = 'none';
  }
  
  function gradeQuiz() {
    const total = quizState.questions.length;
    const results = quizState.questions.map((q, idx) => {
      const user = quizState.answers[idx];
      return { correct: user === q.answer, user, q };
    });
    const score = results.filter(r => r.correct).length;

    const body = document.getElementById('quiz-body');
    const nextBtn = document.getElementById('quiz-next');
    const prevBtn = document.getElementById('quiz-prev');
    const submitBtn = document.getElementById('quiz-submit');
    const retakeBtn = document.getElementById('quiz-retake');

    const html = results.map((r, i) => {
      const correctText = r.q.choices[r.q.answer];
      const userText = r.user >= 0 ? r.q.choices[r.user] : '(no answer)';
      const color = r.correct ? '#10b981' : '#ef4444';
      return `
        <div style=\"margin-bottom:14px;\">
          <div style=\"font-weight:600;\">Q${i+1}. ${r.q.q}</div>
          <div style=\"margin-top:6px;\">Your answer: <span style=\"color:${color}\">${userText}</span></div>
          <div>Correct answer: <strong>${correctText}</strong></div>
          <div class=\"quiz-explain\" style=\"margin-top:8px;\">${r.q.explain}</div>
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div style=\"margin-bottom:10px;\">
        <h4 style=\"margin:0 0 6px 0; color: var(--aws-orange);\">Score: ${score}/${total}</h4>
        <div style=\"color: var(--aws-text-light);\">Review explanations below and try again if needed.</div>
      </div>
      ${html}
    `;

    document.getElementById('quiz-progress').textContent = `Completed • ${score}/${total}`;
    nextBtn.style.display = 'none';
    prevBtn.disabled = true;
    submitBtn.style.display = 'none';
    retakeBtn.style.display = '';
  }

  /* ==========
     WIRING UI
     ========== */

  buildNav();
  
  // Handle URL hash changes (for deep linking and back/forward buttons)
  function handleHashChange() {
    const topic = location.hash.substring(1) || 'home';
    if (markdownContent[topic]) {
      showContent(topic);
    } else {
      showContent('home'); // Fallback to home if hash is invalid
    }
  }

  navLinksContainer.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    if (target && target.dataset.topic) {
        event.preventDefault();
        location.hash = target.dataset.topic;
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
  
  if(searchInput) {
      searchInput.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase();
          const links = navLinksContainer.querySelectorAll('li');
          links.forEach(li => {
              const label = li.dataset.label;
              if (label) {
                  li.style.display = label.includes(query) ? '' : 'none';
              }
          });
      });
  }

  window.addEventListener('hashchange', handleHashChange);
  
  // Ensure modal node exists at startup (created once)
  ensureQuizModal();

  // Initial load (honor hash)
  handleHashChange();
});\n\" in the canvas and the user's query is \"I need what is in this file to be the same, all the information\
" in the canvas and the user's query is "I have selected the script.js file. I need what is in this file to be the same, all the information
