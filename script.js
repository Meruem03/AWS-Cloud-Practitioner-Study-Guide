document.addEventListener('DOMContentLoaded', () => {
  /* =========================
     NAVIGATION + CONTENT DATA
     ========================= */

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
    { type: 'link', label: 'Compute (EC2, Lambda, Containers)', topic: 'compute' },
    { type: 'link', label: 'Storage (S3, EBS, EFS, FSx)', topic: 'storage' },
    { type: 'link', label: 'Databases & Analytics', topic: 'databases' },
    { type: 'link', label: 'Networking & Content Delivery', topic: 'networking' },
    { type: 'link', label: 'Messaging & Integration', topic: 'messaging' },
    { type: 'link', label: 'Load Balancers (ALB/NLB/GWLB)', topic: 'elb' },
    { type: 'link', label: 'Route 53 Routing Policies', topic: 'route53_routing' },
    { type: 'link', label: 'VPC Endpoints (Gateway vs Interface)', topic: 'vpc_endpoints' },
    { type: 'category', label: 'Management & Developer Tools' },
    { type: 'link', label: 'Deployment & CI/CD', topic: 'deployment' },
    { type: 'link', label: 'Monitoring & Auditing', topic: 'monitoring' },
    { type: 'link', label: 'Developer Productivity', topic: 'developer_tools' },
    { type: 'link', label: 'CloudTrail Lake (Auditing)', topic: 'cloudtrail_lake' },
    { type: 'link', label: 'X-Ray (Tracing)', topic: 'xray' },
    { type: 'category', label: 'Key Topics' },
    { type: 'link', label: 'In-Depth Security', topic: 'security' },
    { type: 'link', label: 'Machine Learning', topic: 'ml' },
    { type: 'link', label: 'Migration & Transfer', topic: 'migration' },
    { type: 'link', label: 'Frameworks & Strategies', topic: 'frameworks' },
    { type: 'link', label: 'Disaster Recovery & HA', topic: 'dr_ha' },
    { type: 'link', label: 'Governance & Cost Management', topic: 'governance' },
    { type: 'link', label: 'Trusted Advisor & Health', topic: 'trusted_advisor' },
    { type: 'link', label: 'Hybrid & Edge Computing', topic: 'hybrid' },
    { type: 'link', label: 'Advanced Networking', topic: 'advanced_networking' },
    { type: 'link', label: 'Caching & Performance', topic: 'caching' },
    { type: 'link', label: 'Kinesis & Streaming', topic: 'streaming' },
    { type: 'link', label: 'OpenSearch Service', topic: 'opensearch' },
    { type: 'link', label: 'AWS Glue (ETL) & Data Catalog', topic: 'glue' },
    { type: 'link', label: 'Lake Formation (Fine-Grained Access)', topic: 'lake_formation' },
    { type: 'link', label: 'App Runner (Managed Web Apps)', topic: 'app_runner' },
    { type: 'link', label: 'Identity Center (SSO)', topic: 'identity_center' },
    { type: 'link', label: 'Amazon Bedrock (GenAI)', topic: 'bedrock' },
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
This domain spans many services. See the "Core Services" and added topics for drill-downs.

## 3.4 Global vs. Regional Services
### Key Global Services
- **IAM**, **Route 53**, **CloudFront**, **WAF**, **AWS Organizations**.  
*Note on S3: bucket names are globally unique, but buckets live in a single Region.*

### Key Regional Services
- **EC2, VPC, RDS/DynamoDB, Lambda, Beanstalk,** etc.—provisioned within a specific Region for latency and data residency.
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
- **Basic:** Free; account & billing support.
- **Developer:** Business-hours email to Cloud Support Associates.
- **Business:** 24x7 phone/chat/email; < 1 hour for prod down.
- **Enterprise On‑Ramp:** Between Business and Enterprise; for business/mission‑critical workloads; < 30‑minute response for business‑critical; access to a pool of TAMs and proactive programs.
- **Enterprise:** Designated **TAM**, < 15‑minute response for mission‑critical, proactive reviews/workshops.
`,
    'iam': `
# IAM (Identity & Access Management)

### 1. Purpose & Use Cases
IAM is the bedrock of AWS security. It allows you to specify who can access which services and resources, and under what conditions.
- **Use Cases:** Creating user accounts for employees, granting applications running on EC2 access to S3, enforcing MFA for sensitive operations.

### 2. Key Features
- **Users, Groups, Roles, Policies**
- **Fine-Grained Permissions**
- **MFA**
- **Identity Federation**

### 3. Best Practices
- **Never use the root user for daily work.**
- Enforce **least privilege**.
- Use **IAM Roles** for apps/services (not long-term keys).
- Enable **MFA** widely.

### 4. Alternatives
- **IAM Identity Center (formerly AWS SSO):** Higher-level service for workforce SSO across multiple AWS accounts and apps.

### 5. Pricing
- IAM is **no additional charge**.
`,
    'compute': `
# Compute Services

## Amazon EC2 (Elastic Compute Cloud)

### 1. Purpose & Use Cases
EC2 provides virtual servers ("instances") in the cloud.
- **Use Cases:** Web apps, enterprise software, batch, HPC.

### 2. Key Features
- **Instance families** (general, compute, memory, etc.)
- **AMIs**
- **Auto Scaling Groups**
- **Elastic Load Balancing**

### 3. Best Practices
- Use **Auto Scaling** for spikes and resiliency.
- Use **IAM Roles** on instances.
- **CloudWatch** for monitoring.
- Pick the **right instance type** for cost/perf.

### 4. Alternatives
- **Lambda** for serverless.
- **ECS/EKS with Fargate** for containers.

### 5. Pricing
- **On‑Demand**, **Reserved**, **Spot**, **Savings Plans**.

## EC2 – exam-useful details
- **Placement groups:** Cluster (low-latency), Spread (AZ-level separation), Partition (big data, failure domains).
- **Tenancy:** Shared / Dedicated / Dedicated Hosts.
- **Capacity options:** **Capacity Reservations** and Zonal RIs.
- **Lifecycle:** Stop vs **Hibernate** (retains RAM to EBS, supported families/OS).

---

## AWS Lambda
### 1. Purpose & Use Cases
Serverless, event-driven compute for code without servers.
- **Use Cases:** S3 triggers (e.g., image thumbnails), API backends, scheduled tasks.

### 2. Key Features
- **Event-driven** (S3, API Gateway, DynamoDB, etc.)
- **Auto-scaling**
- **No server management**
- **Sub-second metering**

### 3. Best Practices
- Keep functions **small/single-purpose**.
- Manage **dependencies** in the package.
- **Least-privilege** IAM.

### 4. Limitations & Alternatives
- **Limits:** Up to 15 minutes runtime.
- **Alternatives:** EC2 for long-running; Fargate for containers.

### 5. Pricing
- **Pay-per-request & duration**; free tier exists.

---

## Containers
- **ECS:** Orchestrates Docker containers.
- **EKS:** Managed Kubernetes.
- **Fargate:** Serverless compute for ECS/EKS.
- **ECR:** Managed container registry.
`,
    'storage': `
# Storage Services

## Amazon S3 (Simple Storage Service)

### 1. Purpose & Use Cases
Highly durable, scalable object storage.
- **Use Cases:** Backups, data lakes, static site hosting, app assets.

### 2. Key Features
- **Storage Classes** (Standard → Glacier Deep Archive)
- **Versioning**
- **Lifecycle Policies**
- **Replication** (CRR/SRR)

### 3. Best Practices
- Use **Bucket Policies & IAM** (prefer over ACLs).
- **Enable Versioning**.
- Use **Lifecycle** policies for cost.
- Consider **MFA Delete**.

### 4. Alternatives
- **EBS** for block storage on a single EC2.
- **EFS** for shared POSIX file storage.

### 5. Pricing
- Storage (GB-month), requests, and data transfer out; free tier for new accounts.

### Security & Consistency updates
- **Default encryption:** All **new S3 objects are encrypted by default (SSE‑S3)**.
- **Strong consistency:** S3 provides **strong read‑after‑write** for PUT/overwrite/delete **and list operations**.

---

## Amazon EBS (Elastic Block Store)
### 1. Purpose & Use Cases
Persistent block storage for EC2 (like a virtual disk).
- **Use Cases:** Boot volumes, transactional DBs, throughput-intensive workloads.

### 2. Key Features
- Multiple volume types
- **Snapshots**
- **Encryption**
- Resize/change type

### 3. Best Practices
- Regular **snapshots**
- Right **volume type**
- **Encrypt** sensitive data

### 4. Alternatives
- **S3** for object data
- **Instance Store** for ephemeral high-perf scratch

---

## File Storage
- **EFS:** Elastic, serverless file system for Linux; multi‑AZ.
- **FSx:** Managed high‑performance file systems:
  - FSx for Windows File Server (SMB)
  - FSx for Lustre (HPC/ML)
`,
    'databases': `
# Databases & Analytics

## Amazon RDS
### 1. Purpose & Use Cases
Managed relational DBs (MySQL, PostgreSQL, etc.)
- **Use Cases:** Traditional apps, ecommerce, CRM.

### 2. Key Features
- Managed ops (patching, backups)
- **High Availability (Multi‑AZ)**
- **Read Replicas**
- **Encryption**

### 3. Best Practices
- Use **Multi‑AZ** for prod HA.
- Use **Read Replicas** to scale reads.
- Encrypt with KMS.

### 4. Alternatives
- **Aurora** (cloud-native, high-performance)
- **DynamoDB** (NoSQL)
- **Self‑managed on EC2** (more control, more ops)

### 5. Pricing
- Instance hours, storage, I/O, transfer; RIs exist.

#### RDS exam notes
- Multi‑AZ (instance vs. DB cluster model)
- Cross‑Region Read Replicas
- **RDS Proxy** for connection pooling

---

## Amazon DynamoDB
### 1. Purpose & Use Cases
Serverless NoSQL key‑value DB with single‑digit ms latency.
- **Use Cases:** Web/mobile/gaming/IoT, high scale.

### 2. Key Features
- **Serverless**
- **Consistent low latency**
- **Auto scaling**
- **HA & durability** (3 AZs)

### 3. Best Practices
- Design **access patterns first**.
- Fine‑grained **IAM**.
- **CloudWatch** to monitor.

### 4. Alternatives
- **RDS/Aurora** (relational)
- **DocumentDB** (MongoDB compatibility)

### 5. Pricing
- **On‑demand** or **Provisioned** capacity; free tier exists.

#### DynamoDB exam notes
- **On‑demand vs provisioned**
- **Global Tables**
- **TTL**
- **DAX** (see Caching)

---

## Analytics Services Comparison

| Service | Purpose | Type | Use Case |
|---|---|---|---|
| **Athena** | Interactive Query | Serverless SQL | Query S3 data without loading. |
| **Redshift** | Data Warehouse | Provisioned | BI & complex analytics on large structured data. |
| **EMR** | Big Data Processing | Managed Cluster | Spark/Hadoop at scale. |
| **QuickSight** | Business Intelligence | Serverless BI | Dashboards & visualizations. |
`,
    'networking': `
# Networking & Content Delivery

## VPC (Virtual Private Cloud)

### 1. Purpose & Use Cases
Provision an isolated virtual network for your resources.
- **Use Cases:** Foundation for EC2, RDS, etc.

### 2. Key Features
- **Subnets** (public/private)
- **Security Groups** (stateful)
- **NACLs** (stateless)
- **Connectivity**: Internet/NAT Gateway, Peering, VPN, Direct Connect

### 3. Best Practices
- Use multiple **AZs** for HA.
- Use **private subnets** for backends/DBs.
- Security Groups as primary firewall; NACLs as secondary stateless layer.

### 4. Alternatives
- None (VPC is fundamental)

### 5. Pricing
- VPC is free; pay for NAT GW, VPN, etc.

---

## Core Networking Services
- **Route 53**: DNS + routing policies (latency, weighted, failover, geolocation, geoproximity, IP-based, multivalue).
- **CloudFront**: CDN with edge security; pairs with Shield/WAF.

(See **ELB**, **Route 53 Routing Policies**, and **VPC Endpoints** pages for deeper dives.)
`,
    'messaging': `
# Messaging & Integration

## SQS vs. SNS vs. EventBridge

| Service | Type | Key Feature | Use Case Example |
|---|---|---|---|
| **SQS** | Queue | **Decoupling** | Orders queued for async processing. |
| **SNS** | Pub/Sub | **Fan‑out** | One message → email/SMS/Lambda. |
| **EventBridge** | Event Bus | **Event‑driven** | SaaS event → Lambda workflow. |

## API Gateway
Acts as a front door for Lambda/EC2 or public endpoints; supports throttling, auth, and monitoring.

## Step Functions
Serverless orchestration with visual workflows, retries, and error handling.
`,
    'deployment': `
# Deployment & CI/CD

## AWS CloudFormation
IaC service using YAML/JSON templates to model and deploy infrastructure.

### Key Features
- **Templates**, **Stacks**
- **Change Sets**
- Broad service coverage
- Free (pay for created resources)

### Best Practices
- Version control (e.g., CodeCommit/Git)
- Use **Change Sets** for prod
- Break into **nested stacks**

### Alternatives
- Terraform, **AWS CDK**

---

## Other Deployment Services
- **Elastic Beanstalk**: PaaS for traditional web apps.
- **Code Suite**:
  - **CodeCommit** (Git)
  - **CodeBuild** (build/test)
  - **CodeDeploy** (deploy)
  - **CodePipeline** (orchestrate)
`,
    'monitoring': `
# Monitoring, Auditing, & Management

## Amazon CloudWatch
Central monitoring for metrics, logs, alarms, dashboards.

### Best Practices
- Enable **Detailed Monitoring** (1‑min) for prod EC2
- Alarms for key health metrics
- Billing alarms

---

## CloudTrail vs. Config vs. GuardDuty

| Service | What It Answers | Core Function |
|---|---|---|
| **CloudTrail** | "Who did what, when, and from where?" | **Auditing & API Logging** |
| **AWS Config** | "What does my resource look like and how has it changed?" | **Resource Config & Compliance** |
| **GuardDuty** | "Is anything malicious happening?" | **Threat Detection** |
`,
    'governance': `
# Governance & Cost Management

## AWS Control Tower
Automates a secure multi‑account **landing zone** with guardrails and Account Factory.

## AWS Service Catalog
Curate approved products and configurations for self‑service.

## Deeper Cost Management
- **AWS Budgets**: thresholds & actions
- **Cost Explorer**: visualize and forecast
- **Compute Optimizer**: ML‑based right‑sizing
- **AWS License Manager**: BYOL tracking

### Savings Plans vs RIs (quick)
- **Compute SP** – most flexible; covers **EC2, Fargate, Lambda**
- **EC2 Instance SP** – lowest price; tied to **family+Region**
- **RIs** – capacity reservation options; Standard vs Convertible
`,
    'advanced_networking': `
# Advanced Networking

## Direct Connect vs. Global Accelerator vs. CloudFront

| Service | Primary Purpose | How It Works | Use Case |
|---|---|---|---|
| **Direct Connect** | Hybrid Connectivity | Dedicated private link from on‑prem to AWS | Consistent, high‑bandwidth private connectivity |
| **Global Accelerator** | Perf & Availability | Routes user traffic over AWS global network | Improve global app performance (TCP/UDP) |
| **CloudFront** | Content Delivery | CDNs cache at edge | Speed static/dynamic site delivery |

## Transit Gateway
Hub‑and‑spoke routing for many VPCs and on‑prem.

## PrivateLink
Private access to AWS services/SaaS without exposing to the public internet.
`,
    'hybrid': `
# Hybrid & Edge Computing

## AWS Outposts
Run AWS services on‑prem with managed racks.

## AWS Local Zones
Compute/storage closer to major metros for low latency.

## AWS Wavelength
5G edge for ultra‑low‑latency mobile apps.

## Snow Family
- **Snowcone** – small/edge
- **Snowball Edge** – petabyte migrations/edge compute
- **Snowmobile** – exabyte‑scale transfers
`,
    'security': `
# In-Depth Security

## Encryption Services Comparison

| Service | What It Manages | Key Control | Use Case |
|---|---|---|---|
| **KMS** | Keys | Customer-managed, AWS-operated HSMs | General-purpose encryption |
| **CloudHSM** | Keys | Customer controls dedicated HSMs | Strict compliance (e.g., FIPS 140-2 L3) |
| **ACM** | TLS certs | N/A | Manage TLS for ELB/CloudFront |

---

## Threat Detection, Vulnerability & Compliance
- **GuardDuty** – ML-based threat detection
- **Inspector** – vulnerability & network exposure scans (EC2, ECR images, Lambda)
- **Macie** – PII discovery in S3
- **Security Hub** – centralizes findings
- **Audit Manager** – automates evidence collection

---

## Network & Application Protection
- **Shield** – DDoS protection (Standard/Advanced)
- **WAF** – web app firewall (OWASP)
- **Secrets Manager vs Parameter Store:**
  - **Parameter Store** – config/params; standard tier free
  - **Secrets Manager** – secret rotation & lifecycle (paid)
`,
    'ml': `
# Machine Learning Services
Know primary use cases:
- **SageMaker** – build/train/deploy ML
- **Rekognition** – image/video analysis
- **Transcribe** – speech to text
- **Polly** – text to speech
- **Translate** – text translation
- **Lex** – chatbots
- **Comprehend** – NLP insights
- **Kendra** – intelligent enterprise search

> FYI: **Amazon Bedrock** is AWS’s managed generative AI platform (see the Bedrock page).
`,
    'migration': `
# Migration & Transfer

## Six "R's" of Migration Strategies
- **Rehost (Lift & Shift)**
- **Replatform (Lift, Tinker, Shift)**
- **Repurchase (SaaS)**
- **Refactor/Re‑architect**
- **Retire**
- **Retain**

## Migration Services
- **Application Migration Service (MGN)**
- **DataSync**
- **Migration Hub**
- **Database Migration Service (DMS)**
`,
    'frameworks': `
# Frameworks & Strategies

## AWS Well-Architected Framework
- **Operational Excellence**
- **Security**
- **Reliability**
- **Performance Efficiency**
- **Cost Optimization**
- **Sustainability**

## Cloud Adoption Framework (CAF)
- **Business**
- **People**
- **Governance**
- **Platform**
- **Security**
- **Operations**
`,
    'dr_ha': `
# Disaster Recovery & High Availability

## Key Metrics
- **RTO** – time to recover
- **RPO** – how much data loss

## DR Strategies (high RTO/RPO → low)
| Strategy | Description | RTO | RPO |
|---|---|---|---|
| **Backup/Restore** | Restore backups to new env | Hours–Days | Hours |
| **Pilot Light** | Minimal core always on | Tens of minutes | Minutes |
| **Warm Standby** | Scaled-down full env | Minutes | Seconds–Minutes |
| **Multi‑site (Hot)** | Active‑active | Seconds | Near‑zero |

## AWS Backup
Centralized backups across services (EBS, RDS, DynamoDB, EFS, etc.).
`,
    'caching': `
# Caching & Performance

## In‑Memory: ElastiCache
- **Redis** – rich features, HA, backups
- **Memcached** – simple, multi‑threaded, easy horizontal scale

## Edge Caching: CloudFront
Reduce origin load & latency; control with cache behaviors and TTLs.

## Database Caching: DAX
In‑memory cache for DynamoDB (API‑compatible), up to 10x faster reads.
`,
    'developer_tools': `
# Developer Productivity
## Cloud9
Cloud IDE for consistent, collaborative dev environments.

## Amplify
Frontend‑friendly stack for auth/data/serverless APIs.

## AppConfig
Manage and deploy app configuration safely (feature flags, staged rollouts).
`,
    'elb': `
# Elastic Load Balancing (ELB)
**ALB** — Layer 7 HTTP/HTTPS, path/host rules, WebSockets.  
**NLB** — Layer 4 TCP/UDP/TLS, ultra‑low latency, millions of req/s, static IP/Elastic IP.  
**Gateway Load Balancer** — Deploy/scale virtual appliances (firewalls/IDS/IPS).  
**Choose:** ALB for web APIs/microservices; NLB for extreme performance & TCP/UDP; GWLB for traffic inspection.
`,
    'route53_routing': `
# Route 53 — Routing Policies
- **Simple** – single target  
- **Weighted** – A/B or gradual shift  
- **Latency‑based** – best RTT Region  
- **Failover** – active/passive  
- **Geolocation** – by user location  
- **Geoproximity** – bias traffic among resources  
- **IP‑based** – by client CIDR  
- **Multivalue** – up to 8 healthy answers
`,
    'vpc_endpoints': `
# VPC Endpoints (Private Access to AWS Services)
- **Gateway endpoints** – for **S3** and **DynamoDB**; route‑table entries; *no hourly charge*.  
- **Interface endpoints (AWS PrivateLink)** – ENIs in your subnets; support many AWS/SaaS services; per‑hour + data processing.

Use endpoints to keep traffic on AWS’s network and avoid NAT GW data processing.
`,
    'cloudtrail_lake': `
# CloudTrail Lake (Queryable Audit Store)
Create **event data stores**, control **retention**, and run **SQL** queries over management/data events. Athena federation supported. Useful for investigations/compliance beyond classic Trails.
`,
    'xray': `
# AWS X‑Ray (Distributed Tracing)
Trace requests across microservices (Lambda/API Gateway/ECS/EKS/RDS), visualize **service maps**, find latency spikes and faults. Complements CloudWatch metrics/logs.
`,
    'streaming': `
# Kinesis & Streaming
- **Kinesis Data Streams** – build real‑time consumer apps; control shards, checkpoints.  
- **Amazon Data Firehose** – fully managed **delivery** to S3/Redshift/OpenSearch/Splunk with optional transforms; no consumer code.
`,
    'opensearch': `
# Amazon OpenSearch Service
Managed **search & analytics** for **log analytics**, app search, observability; features like **UltraWarm**, **Serverless collections**, fine‑grained security, snapshots.
`,
    'glue': `
# AWS Glue (Serverless ETL) & Data Catalog
Serverless **data integration**: crawlers to discover schemas, a central **Data Catalog**, and visual/scripted ETL jobs (Glue Studio). Often paired with Athena, Redshift, and Lake Formation.
`,
    'lake_formation': `
# AWS Lake Formation (Fine‑Grained Data Lake Access)
Centrally manage **column/row‑level** permissions across analytics services (Athena/EMR/QuickSight/Redshift Spectrum) over data in S3 and beyond. Augments IAM with granular data‑lake controls.
`,
    'app_runner': `
# AWS App Runner (Managed Web Apps/APIs)
Deploy from **source code or container image** to a secure, auto‑scaling web service—no servers/clusters.
`,
    'identity_center': `
# IAM Identity Center (formerly AWS SSO)
Centralized **SSO** and **multi‑account** access with **permission sets** and SCIM directory sync; integrates with AWS Organizations.
`,
    'bedrock': `
# Amazon Bedrock (Generative AI)
Fully managed platform to access **foundation models** (e.g., Anthropic, Meta, Mistral, Amazon Titan) via a single API; supports **RAG**, **fine‑tuning**, and **agents**.
`,
    'trusted_advisor': `
# Trusted Advisor & AWS Health

## AWS Trusted Advisor
Best‑practice **checks** across **Cost Optimization, Performance, Security, Fault Tolerance, Service Limits, Operational Excellence**.  
- **Basic/Developer**: limited checks (service limits + a few security).  
- **Business/Enterprise/On‑Ramp**: **all checks** + API/EventBridge.

## AWS Health Dashboard (Personal/Account Health)
Account‑specific **events** and **scheduled changes** affecting your resources; programmatic access via API/EventBridge.
`,
    'specialty': `
# Specialty & Emerging Services
## IoT Core
Securely connect devices to the cloud.

## Ground Station
Control satellite communications and downlink to S3.

## RoboMaker
Develop/test/deploy robotics applications in the cloud.
`,
  };

  /* ==============
     DOM REFERENCES
     ============== */
  const contentDisplay = document.getElementById('content-display');
  const navLinksContainer = document.getElementById('nav-links');
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  /* =====================
     NAV BUILD + RENDERING
     ===================== */
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
      <div class="toolbar-left">
        <span class="toolbar-title">${titleText}</span>
        <span class="topic-pill">${topic}</span>
      </div>
      <div class="toolbar-right">
        <button class="btn btn-outline" id="btn-copy-link" title="Copy link to this section">Copy link</button>
        <button class="btn" id="btn-open-quiz" title="Open quiz for this topic">Quiz</button>
      </div>
    `;

    contentDisplay.prepend(toolbar);

    // Copy link
    document.getElementById('btn-copy-link').addEventListener('click', async () => {
      const url = window.location.href;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(url);
          toast('Link copied!');
        } else {
          const temp = document.createElement('textarea');
          temp.value = url; document.body.appendChild(temp);
          temp.select(); document.execCommand('copy'); temp.remove();
          toast('Link copied!');
        }
      } catch {
        toast('Could not copy link', true);
      }
    });

    // Quiz
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
    const content = markdownContent[topic] || '# Not found';
    contentDisplay.innerHTML = marked.parse(content);
    contentDisplay.scrollTop = 0;

    const links = navLinksContainer.querySelectorAll('a');
    links.forEach(link => {
      link.classList.toggle('active', link.dataset.topic === topic);
    });

    if (window.innerWidth < 768) {
      sidebar.classList.remove('open');
    }

    if (location.hash.replace('#', '') !== topic) {
      location.hash = topic;
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
      <div class="quiz-card" role="dialog" aria-modal="true" aria-labelledby="quiz-title">
        <div class="quiz-header">
          <h3 id="quiz-title">Topic Quiz</h3>
          <button class="btn btn-outline" id="quiz-close">Close</button>
        </div>
        <div class="quiz-body" id="quiz-body"></div>
        <div class="quiz-footer">
          <div class="quiz-progress" id="quiz-progress"></div>
          <div>
            <button class="btn btn-outline" id="quiz-prev">Back</button>
            <button class="btn" id="quiz-next">Next</button>
            <button class="btn" id="quiz-submit" style="display:none;">Submit</button>
            <button class="btn" id="quiz-retake" style="display:none;">Retake</button>
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
    quizState.questions = (quizzes[topic] || quizzes.default).map(q => ({ ...q }));
    quizState.index = 0;
    quizState.answers = Array(quizState.questions.length).fill(-1);

    document.getElementById('quiz-title').textContent = `${quizState.title} — Quiz`;
    document.getElementById('quiz-retake').style.display = 'none';
    document.getElementById('quiz-submit').style.display = quizState.questions.length === 1 ? '' : 'none';
    document.getElementById('quiz-next').style.display = quizState.questions.length > 1 ? '' : 'none';
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
      <div class="quiz-q">${q.q}</div>
      <ul class="quiz-choices" id="quiz-choices"></ul>
      <div class="quiz-explain" id="quiz-explain" style="display:none;"></div>
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
        }
      });
      list.appendChild(li);
    });

    prog.textContent = `Question ${quizState.index + 1} of ${quizState.questions.length}`;
    prevBtn.disabled = quizState.index === 0;
    nextBtn.style.display = quizState.index < quizState.questions.length - 1 ? '' : 'none';
    submitBtn.style.display = quizState.index === quizState.questions.length - 1 ? '' : 'none';
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
        <div style="margin-bottom:14px;">
          <div style="font-weight:600;">Q${i+1}. ${r.q.q}</div>
          <div style="margin-top:6px;">Your answer: <span style="color:${color}">${userText}</span></div>
          <div>Correct answer: <strong>${correctText}</strong></div>
          <div class="quiz-explain" style="margin-top:8px;">${r.q.explain}</div>
        </div>
      `;
    }).join('');

    body.innerHTML = `
      <div style="margin-bottom:10px;">
        <h4 style="margin:0 0 6px 0; color: var(--aws-orange);">Score: ${score}/${total}</h4>
        <div style="color: var(--aws-text-light);">Review explanations below and try again if needed.</div>
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

  navLinksContainer.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.closest('a');
    if (target && target.dataset.topic) {
      showContent(target.dataset.topic);
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  window.addEventListener('hashchange', () => {
    const t = location.hash.replace('#', '') || 'home';
    if (markdownContent[t]) showContent(t);
  });

  // Ensure modal node exists at startup (created once)
  ensureQuizModal();

  // initial load (honor hash)
  const initialTopic = location.hash ? location.hash.replace('#', '') : 'home';
  showContent(markdownContent[initialTopic] ? initialTopic : 'home');
});
