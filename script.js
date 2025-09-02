document.addEventListener('DOMContentLoaded', () => {
  // This check ensures this script only runs on the main page (index.html)
  if (!document.getElementById('content-display')) {
      return;
  }

  /* =================================
     NAVIGATION STRUCTURE (Complete)
     ================================= */
  const navigationStructure = [
    { type: 'link', label: 'Home / Key Services', topic: 'home' },

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
  
  /* ===================================
     MARKDOWN CONTENT DATA (Restored)
     =================================== */
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
- Enforce **least privilege**.
- Use **IAM Roles** for apps/services, not long-term access keys.
- Enable **MFA** for all users.

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

  /* ===========================
     QUIZ DATA (For Modal)
     =========================== */
  const quizzes = {
    iam: [
        { q: "What is the best practice for the AWS account root user?", choices: ["Use it for daily admin tasks", "Create access keys for it", "Secure it with MFA and never use it for daily tasks", "Share its credentials with your team"], answer: 2, explain: "The root user should be secured with MFA and used only for tasks that absolutely require it. IAM users should be used for all other tasks." },
        { q: "For managing SSO access for your company's employees to multiple AWS accounts, you should use:", choices: ["IAM Users and Groups", "IAM Roles", "IAM Identity Center", "Service Control Policies"], answer: 2, explain: "IAM Identity Center (formerly AWS SSO) is the recommended service for managing workforce access across multiple accounts." },
        { q: "What is an IAM Policy?", choices: ["A user who can access AWS", "A JSON document that defines permissions", "A collection of users", "A temporary credential"], answer: 1, explain: "An IAM Policy is a JSON document that explicitly lists permissions." },
        { q: "An EC2 instance needs to access an S3 bucket. What is the most secure way to grant it permissions?", choices: ["Store access keys on the instance", "Assign an IAM Role to the instance", "Create a new IAM user for the instance", "Make the S3 bucket public"], answer: 1, explain: "Using an IAM Role is the most secure method as it provides temporary credentials automatically, avoiding the need to store long-term keys on the instance." }
    ],
    compute: [
        { q: "A workload requires extremely low latency between instances. Which placement group should you use?", choices: ["Spread", "Partition", "Cluster", "Dedicated"], answer: 2, explain: "Cluster placement groups pack instances close together inside an AZ for low-latency network performance." },
        { q: "Which service provides a serverless compute engine for containers?", choices: ["Amazon EC2", "AWS Lambda", "AWS Fargate", "Amazon EKS"], answer: 2, explain: "AWS Fargate works with both ECS and EKS to run containers without you having to manage the underlying EC2 instances." },
        { q: "What is an AMI?", choices: ["A type of EC2 instance", "A firewall rule", "A template for an EC2 instance, including the OS", "A load balancer"], answer: 2, explain: "An Amazon Machine Image (AMI) is a pre-configured template that contains the software configuration (operating system, application server, and applications) required to launch your instance." }
    ],
    storage: [
      { q: "All new S3 objects are encrypted by default using:", choices: ["SSE-KMS", "SSE-S3", "Client-side", "None"], answer: 1, explain: "S3 applies SSE-S3 by default for new objects." },
      { q: "A shared file system that can be mounted by thousands of Linux EC2 instances across multiple AZs is:", choices: ["Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon FSx for Lustre"], answer: 2, explain: "Amazon EFS provides a scalable, shared file system for Linux instances, accessible across AZs." }
    ],
    databases: [
        { q: "Which AWS service is a managed relational database service?", choices: ["Amazon DynamoDB", "Amazon Redshift", "Amazon RDS", "Amazon ElastiCache"], answer: 2, explain: "Amazon RDS (Relational Database Service) is used for relational databases like MySQL, PostgreSQL, etc." },
        { q: "A company needs a fully managed, serverless NoSQL database that provides single-digit millisecond latency. Which service is the best fit?", choices: ["Amazon Aurora", "Amazon RDS", "Amazon DynamoDB", "Amazon Redshift"], answer: 2, explain: "DynamoDB is a NoSQL key-value database designed for high performance at any scale." }
    ],
    networking: [
        { q: "Which component of a VPC acts as a stateful firewall for an EC2 instance?", choices: ["Network ACL", "Security Group", "Internet Gateway", "Route Table"], answer: 1, explain: "Security Groups are stateful and operate at the instance level." },
        { q: "Which service is a global DNS web service?", choices: ["Amazon VPC", "Amazon CloudFront", "Elastic Load Balancing", "Amazon Route 53"], answer: 3, explain: "Amazon Route 53 is AWS's highly available and scalable Domain Name System (DNS) service." }
    ],
    default: [
        { q: "Which AWS model lets you avoid large CAPEX?", choices: ["On-prem", "Cloud pay-as-you-go", "Colocation", "Bare metal"], answer: 1, explain: "Cloud shifts CAPEX to OPEX with pay-as-you-go." }
    ]
  };

  /* ==================
     DOM REFERENCES
     ================== */
  const contentDisplay = document.getElementById('content-display');
  const navLinksContainer = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  /* =====================
     UI LOGIC
     ===================== */
  function buildNav() {
    navLinksContainer.innerHTML = navigationStructure.map(item => {
      if (item.type === 'link') {
        const href = item.file ? item.file : `#${item.topic}`;
        const dataAttr = item.topic ? `data-topic="${item.topic}"` : '';
        return `<li><a href="${href}" ${dataAttr}>${item.label}</a></li>`;
      }
      return `<li class="nav-category">${item.label}</li>`;
    }).join('');
  }
  
  function showContent(topic) {
    contentDisplay.innerHTML = marked.parse(markdownContent[topic] || '# Content Not Found');
    document.querySelectorAll('#nav-links a').forEach(link => {
        if(link.dataset.topic) link.classList.toggle('active', link.dataset.topic === topic);
    });
    if (window.innerWidth < 768) sidebar.classList.remove('open');
    insertContentToolbar(topic);
  }
  
  function insertContentToolbar(topic) {
    const title = navigationStructure.find(i => i.topic === topic)?.label || 'Topic';
    contentDisplay.insertAdjacentHTML('afterbegin', `<div class="content-toolbar"><span class="toolbar-title">${title}</span><button class="btn" id="btn-open-quiz">Topic Quiz</button></div>`);
    document.getElementById('btn-open-quiz').addEventListener('click', () => openQuiz(topic, title));
  }

  function openQuiz(topic, title) {
    const quizData = quizzes[topic] || quizzes.default;
    // For simplicity, this modal shows the first question of the topic quiz
    const q = quizData[0];
    document.getElementById('quiz-title').textContent = `${title} Quiz`;
    document.getElementById('quiz-body').innerHTML = `
        <div class="quiz-q">${q.q}</div>
        <ul class="quiz-choices">
            ${q.choices.map((c, i) => `<li data-index="${i}">${c}</li>`).join('')}
        </ul>
        <div class="quiz-explain" style="display:none; margin-top: 15px; padding: 10px; background-color: rgba(255,153,0,0.1); border-radius: 5px;">
            <strong>Explanation:</strong> ${q.explain}
        </div>
    `;
    document.getElementById('quiz-modal').classList.add('open');
  }

  function handleHashChange() {
    const topic = location.hash.substring(1) || 'home';
    if (markdownContent[topic]) showContent(topic);
    else showContent('home');
  }
  
  // Initial setup and event listeners
  buildNav();
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
  
  navLinksContainer.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (link && link.dataset.topic) {
      e.preventDefault();
      location.hash = link.dataset.topic;
    }
  });

  menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  
  // Create and configure quiz modal once on load
  document.body.insertAdjacentHTML('beforeend', `
    <div class="quiz-modal" id="quiz-modal">
        <div class="quiz-card">
            <div class="quiz-header">
                <h3 id="quiz-title">Quiz</h3>
                <button id="quiz-close" class="btn btn-outline">Close</button>
            </div>
            <div id="quiz-body" class="quiz-body"></div>
        </div>
    </div>`);
    
  document.getElementById('quiz-close').addEventListener('click', () => {
    document.getElementById('quiz-modal').classList.remove('open');
  });

  // Add event delegation for quiz choices
  document.getElementById('quiz-body').addEventListener('click', e => {
      if(e.target.tagName === 'LI') {
          document.querySelectorAll('#quiz-body li').forEach(li => li.classList.remove('selected'));
          e.target.classList.add('selected');
          document.querySelector('.quiz-explain').style.display = 'block';
      }
  });
});

