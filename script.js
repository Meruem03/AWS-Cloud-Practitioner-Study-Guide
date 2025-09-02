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

    { type: 'category', label: 'Practice & Review' },
    // MODIFICATION: Added a direct link to our new quizzes.html page.
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

  // NOTE: The huge markdownContent object is not included here for brevity,
  // but it would still exist in your actual file.
  const markdownContent = {
    'home': `
# AWS Certified Cloud Practitioner (CLF-C02) Guide
Welcome! This guide is designed to provide a quick yet comprehensive reference for the core concepts and services covered in the exam. Use the navigation on the left to explore the topics.

## Key Services Quick Reference

| Service Logo | Service Name | Category | Scope | Core Use Case |
|:---:|---|---:|---:|---|
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/Compute/ec2.47a213331006b52862a9539a061d4793e50661iko.svg" alt="EC2 Logo"> | **EC2** | Compute | Regional | Provides resizable compute capacity in the cloud. Essentially, a virtual server. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/Storage/s3-glacier.a292d3c9c91f422956c34890c2393c0af591e1d2.svg" alt="S3 Logo"> | **S3** | Storage | Regional* | Scalable object storage suitable for backups, data lakes, and static website hosting. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/RDS/rds.b92bb133f82de46d32822a16cc53112a20e258ed.svg" alt="RDS Logo"> | **RDS** | Database | Regional | A managed service for relational databases like MySQL, PostgreSQL, simplifying setup and operations. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/Lambda/lambda.82b6b0631f3cde08f1b672727ef0585a973a8133.svg" alt="Lambda Logo"> | **Lambda** | Compute | Regional | A serverless compute service that runs code in response to events without provisioning servers. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/VPC/vpc.5262eb865fd17a35e2fac2414e32d03b2b7336f3.svg" alt="VPC Logo"> | **VPC** | Networking | Regional | Creates a logically isolated section of the AWS Cloud to launch resources in a virtual network. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/IAM/iam.52a2334d70c4b2f5188f0d3b6a2b252069b2ead7.svg" alt="IAM Logo"> | **IAM** | Security | Global | Securely manages access to AWS services by controlling users, groups, and permissions. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/Route-53/route-53.79c198f1236526182811a46e102e3b123869d06b.svg" alt="Route 53 Logo"> | **Route 53** | Networking | Global | A scalable and highly available Domain Name System (DNS) web service. |
| <img class="service-logo" src="https://d1.awsstatic.com/product-marketing/CloudFront/cloudfront.864c3a268f9a2e6f1f4335061b58531980313f83.svg" alt="CloudFront Logo"> | **CloudFront** | Networking | Global | A Content Delivery Network (CDN) that securely delivers content with low latency and high speed. |

*Bucket names are globally unique, but the buckets themselves are created in a specific region.*
`,
    // ... all other markdown content from your original file would go here ...
    'exam_overview': `# Exam Overview & Strategy...`, 'domain1': `# Domain 1: Cloud Concepts...`, 'domain2': `# Domain 2: Security & Compliance...`, 'domain3': `# Domain 3: Cloud Technology...`, 'domain4': `# Domain 4: Billing & Pricing...`, 'iam': `# IAM & Identity Center...`, 'compute': `# Compute Services...`, 'storage': `# Storage Services...`, 'databases': `# Databases & Analytics...`, 'networking': `# Networking & Content Delivery...`, 'messaging': `# Messaging & Integration...`, 'elb': `# Elastic Load Balancing...`, 'route53_routing': `# Route 53 Routing Policies...`, 'vpc_endpoints': `# VPC Endpoints...`, 'dr_ha': `# Disaster Recovery...`, 'governance': `# Governance & Cost Management...`, 'hybrid': `# Hybrid & Edge Computing...`, 'advanced_networking': `# Advanced Networking...`, 'caching': `# Caching & Performance...`, 'cost_protections': `# Free Tier & Cost Protections...`, 'data_transfer': `# Data Transfer Basics...`, 'deployment': `# Deployment & CI/CD...`, 'monitoring': `# Monitoring & Auditing...`, 'developer_tools': `# Developer Productivity...`, 'security': `# In-Depth Security Tools...`, 'ml': `# Machine Learning Services...`, 'migration': `# Migration & Transfer...`, 'frameworks': `# Frameworks & Strategies...`, 'specialty': `# Specialty & Emerging Services...`,
  };

  /* MODIFICATION: The 'quizzes' object has been removed from this file.
    It now lives in 'questions.js' and is loaded globally.
  */

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
        // Handle both internal hashes and external file links
        const href = item.file ? item.file : `#${item.topic}`;
        const dataAttr = item.topic ? `data-topic="${item.topic}"` : '';
        navHtml += `<li data-label="${item.label.toLowerCase()}"><a href="${href}" ${dataAttr}>${item.label}</a></li>`;
      } else if (item.type === 'category') {
        navHtml += `<li class="nav-category" data-label="${item.label.toLowerCase()}">${item.label}</li>`;
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

    document.getElementById('btn-copy-link').addEventListener('click', () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            toast('Link copied!');
        }).catch(() => {
            toast('Could not copy link', true);
        });
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
    contentDisplay.scrollTop = 0; 
    
    const links = navLinksContainer.querySelectorAll('a');
    links.forEach(link => {
        if(link.dataset.topic) {
            link.classList.toggle('active', link.dataset.topic === topic);
        }
    });

    if (window.innerWidth < 768) {
      sidebar.classList.remove('open');
    }
    
    insertContentToolbar(topic);
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
    // Shuffle questions and take the first 10 for the topic quiz
    quizState.questions = (quizzes[topic] || quizzes['default'])
        .map(q => ({ ...q }))
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);
    quizState.index = 0;
    quizState.answers = Array(quizState.questions.length).fill(-1);

    document.getElementById('quiz-title').textContent = `${quizState.title} — Quiz`;
    document.getElementById('quiz-retake').style.display = 'none';
    document.getElementById('quiz-submit').style.display = 'none';
    document.getElementById('quiz-next').style.display = 'block';
    
    // Handle case with only one question
    if (quizState.questions.length <= 1) {
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
    
    const q = quizState.questions[quizState.index];
    const selected = quizState.answers[quizState.index];

    body.innerHTML = `<div class="quiz-q">${q.q}</div><ul class="quiz-choices" id="quiz-choices"></ul>`;
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
    document.getElementById('quiz-retake').style.display = 'none';
  }
  
  function gradeQuiz() {
    const total = quizState.questions.length;
    const score = quizState.questions.filter((q, idx) => quizState.answers[idx] === q.answer).length;

    const body = document.getElementById('quiz-body');
    body.innerHTML = `
      <div style="text-align:center;">
        <h4 style="margin:0 0 10px 0; color: var(--aws-orange); font-size: 1.5rem;">Score: ${score}/${total}</h4>
      </div>
      <div style="max-height: 40vh; overflow-y: auto; padding-right: 10px;">
        ${quizState.questions.map((r, i) => {
          const userChoiceIndex = quizState.answers[i];
          const correct = userChoiceIndex === r.answer;
          const color = correct ? '#10b981' : '#ef4444';
          return `
            <div style="margin-bottom:14px; border-top: 1px solid var(--aws-hover-blue); padding-top: 10px;">
              <div style="font-weight:600;">Q${i+1}. ${r.q}</div>
              <div style="margin-top:6px;">Your answer: <span style="color:${color}">${userChoiceIndex >= 0 ? r.choices[userChoiceIndex] : '(no answer)'}</span></div>
              ${!correct ? `<div>Correct answer: <strong>${r.choices[r.answer]}</strong></div>` : ''}
              <div class="quiz-explain" style="margin-top:8px;">${r.explain}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    document.getElementById('quiz-progress').textContent = `Completed • ${score}/${total}`;
    document.getElementById('quiz-next').style.display = 'none';
    document.getElementById('quiz-prev').style.display = 'none';
    document.getElementById('quiz-submit').style.display = 'none';
    document.getElementById('quiz-retake').style.display = '';
  }

  /* ==========
     WIRING UI
     ========== */

  buildNav();
  
  function handleHashChange() {
    const topic = location.hash.substring(1) || 'home';
    if (markdownContent[topic]) {
      showContent(topic);
    } else {
      showContent('home');
    }
  }

  navLinksContainer.addEventListener('click', (event) => {
    const target = event.target.closest('a');
    // Only handle hash links, not the link to quizzes.html
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
  
  window.addEventListener('hashchange', handleHashChange);
  
  ensureQuizModal();

  handleHashChange();
});
