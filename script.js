(() => {
  'use strict';

  /* =========================================================
     TRANSLATIONS
     ========================================================= */
  const translations = {
    pt: {
      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.projects': 'Projetos',
      'nav.education': 'Formação',
      'nav.skills': 'Skills',
      'nav.contact': 'Contato',

      'hero.badge': 'Disponível para oportunidades',
      'hero.role': 'Desenvolvedor Back-end · APIs RESTful · Microsserviços · ERP',
      'hero.bio': 'Desenvolvedor Back-end especializado em APIs RESTful, microsserviços, sistemas ERP corporativos e integrações ponta a ponta. Experiência sólida com Node.js/TypeScript, C#/.NET (ASP.NET Core), Java/Spring Boot e bancos de dados SQL.',
      'hero.location': 'São Paulo, SP',
      'hero.ctaProjects': 'Ver Projetos',
      'hero.cvCsharp': 'Currículo C# .NET',
      'hero.cvJava': 'Currículo Java',
      'hero.cvTypescript': 'Currículo TypeScript',
      'hero.pillAi': 'IA & RAG',

      'term.file': 'resposta.json — 200 OK',
      'term.copy': 'Copiar',
      'term.copied': 'Copiado!',
      'term.route': '/desenvolvedor/matheus-rafael',
      'term.kRole': '"cargo"',
      'term.vRole': '"Desenvolvedor Back-end"',
      'term.kExp': '"experiencia"',
      'term.kFocus': '"foco"',
      'term.vFocus': '"APIs RESTful, Microsserviços, ERP, IA & Infraestrutura"',
      'term.kLoc': '"localizacao"',
      'term.vLoc': '"São Paulo, SP"',
      'term.vStatus': '"disponível para oportunidades"',

      'about.title': 'Quem sou',
      'about.lead': 'Sou Desenvolvedor Back-end com sólida atuação no desenvolvimento, manutenção e evolução de sistemas ERP corporativos, APIs RESTful e microsserviços, trabalhando com Node.js, TypeScript, C#/.NET (ASP.NET Core), Java/Spring Boot e SQL Server. Na PWI Sistemas, conduzo soluções para processos críticos de pagamento, financeiro e contabilidade, além da automação de operações internas.',
      'about.p2': 'Atuo no mapeamento e implementação de integrações ponta a ponta com plataformas de terceiros como CargoWise e Magento, investigação de causa raiz em falhas críticas, otimização de consultas e rotinas SQL, documentação técnica e evolução contínua de sistemas legados. Aplico Clean Architecture, SOLID, MVC, autenticação JWT/OAuth2, testes automatizados (JUnit/Jest), Docker, CI/CD (GitHub Actions), cloud (AWS e Azure) e soluções com IA Generativa (LLMs, RAG, AI Agents, LangChain/LangGraph e MCP).',

      'exp.title': 'Experiência',
      'exp.role1': 'Desenvolvedor Back-end',
      'exp.r1b1': 'Análise e desenvolvimento de integrações ponta a ponta com APIs de terceiros, mapeando fluxos de negócio, regras e dependências para propor e implementar soluções completas.',
      'exp.r1b2': 'Desenvolvimento de APIs RESTful e microsserviços para processos de pagamento, financeiro e contabilidade em sistemas ERP utilizando Node.js, TypeScript e C#/.NET.',
      'exp.r1b3': 'Desenvolvimento e manutenção de integrações entre ERP e plataformas como CargoWise e Magento, garantindo consistência e sincronização confiável dos dados.',
      'exp.r1b4': 'Investigação de causa raiz e resolução de problemas críticos em integrações, APIs e processos financeiros, além de otimização de consultas SQL e performance em rotinas críticas do ERP.',
      'exp.r1b5': 'Automação de processos internos reduzindo tarefas manuais, documentação técnica traduzindo requisitos de negócio em especificações e evolução contínua de sistemas legados, arquitetura e qualidade de código.',
      'exp.role2': 'Desenvolvedor Back-end Júnior',
      'exp.r2b1': 'Desenvolvimento e manutenção de APIs RESTful em Node.js e TypeScript integradas ao ERP Volpe e a sistemas internos.',
      'exp.r2b2': 'Implementação de integrações entre sistemas, atuando no fluxo de dados, regras de negócio e comunicação via APIs.',
      'exp.r2b3': 'Modelagem, manutenção e otimização de bancos de dados SQL, incluindo consultas e rotinas críticas utilizadas pelo ERP.',
      'exp.r2b4': 'Análise técnica de demandas ponta a ponta, correção de falhas críticas e implementação de melhorias evolutivas em sistemas legados e ferramentas internas, conciliando novas funcionalidades às regras do ERP.',
      'exp.role3': 'Estagiário de TI',
      'exp.r3b1': 'Manutenção evolutiva e suporte ao ERP Volpe, desenvolvido em FoxPro, e aos bancos de dados SQL.',
      'exp.r3b2': 'Correção de bugs e inconsistências no sistema e nos processos internos, além do desenvolvimento de novas funcionalidades e ferramentas de apoio.',
      'exp.r3b3': 'Atendimento e suporte técnico a clientes na análise e resolução de problemas, apoiando também no levantamento de demandas, testes e validação de entregas.',

      'projects.title': 'Projetos',
      'projects.sub': 'Sistemas completos que projetei e desenvolvi do zero, da modelagem de dados e APIs à interface.',
      'projects.tabAll': 'Todos',
      'projects.tabPersonal': 'Projetos Pessoais',
      'projects.tabAcademic': 'Projetos Acadêmicos',
      'projects.demo': 'Ver Aplicação',
      'projects.imovplan': 'Planejamento financeiro para aquisição de imóveis com simulação comparativa SAC e PRICE, cálculo de rendimento líquido com CDI e IR regressivo, aportes extras (13º, férias e FGTS) e composição de renda individual ou em casal.',
      'projects.casalplanner': 'Organização financeira e montagem da casa a dois por cômodos, com controle de orçamento em tempo real, metas e compras sincronizadas, separação VR/VA e assistente de IA (Groq/Llama 3.1) para recomendações.',
      'projects.saudememora': 'Gestão inteligente de documentos médicos com processamento assíncrono em .NET 9, OCR duplo, extração clínica estruturada com Gemini/Groq, alertas de interações medicamentosas e chat assistente com Tool Calling e RAG Híbrido (busca vetorial e lexical no MongoDB).',
      'projects.ragTag': 'RAG Híbrido',
      'projects.pitiquinhoMeta': 'E-commerce · 2023',
      'projects.pitiquinho': 'E-commerce completo desenvolvido no padrão MVC com cadastro e autenticação de usuários, gerenciamento de catálogo de produtos, carrinho de compras, controle de sessão HTTP com JSP e persistência relacional via Spring Data JPA.',
      'projects.dateofloveMeta': 'Plataforma Web · 2023',
      'projects.dateoflove': 'Plataforma web para organização de casamentos com catálogo de serviços e fornecedores, cálculo automático de orçamento personalizado, envio automatizado de propostas por e-mail e persistência de dados em SQL Server.',
      'projects.rodobusMeta': 'Líder Técnico · 2022',
      'projects.rodobus': 'Sistema desktop de reserva e venda de passagens rodoviárias, com controle de rotas e assentos, persistência em MySQL e disparo automático de comprovantes via JavaMail. Atuei como gerente de projeto e líder técnico da equipe.',

      'edu.title': 'Formação',
      'edu.c1': 'Análise e Desenvolvimento de Sistemas',
      'edu.desc1': 'Desenvolvi competências em programação, banco de dados, engenharia de software e metodologias ágeis. O curso proporcionou uma base sólida em tecnologia da informação, preparando-me para atuar no desenvolvimento e manutenção de sistemas, integração de soluções e resolução de problemas técnicos.',
      'edu.c2': 'Inglês — Pré-avançado',
      'edu.desc2': 'Curso de Inglês (Básico a Pré-Avançado), com foco em conversação, leitura, escrita e compreensão auditiva, incluindo vocabulário técnico e comunicação aplicada ao ambiente profissional e acadêmico. Práticas de conversação, exercícios de compreensão oral, leitura de textos em inglês e atividades em grupo.',
      'edu.c3': 'Ensino Técnico em Informática',
      'edu.desc3': 'Formação técnica em Tecnologia da Informação, com foco em lógica de programação, desenvolvimento de sistemas e banco de dados. Desenvolvimento de projeto prático utilizando JavaScript, C#, HTML, CSS e MySQL, aplicando conceitos de front-end, back-end e persistência de dados, além de vivência em análise de problemas, criação de soluções, testes e organização de código.',

      'skills.title': 'Skills',
      'skills.backend': 'Back-end',
      'skills.integration': 'APIs, Integrações & Segurança',
      'skills.db': 'Banco de Dados & ORM',
      'skills.ai': 'Inteligência Artificial',
      'skills.genai': 'IA Generativa',
      'skills.cloud': 'Testes, Cloud & DevOps',
      'skills.arch': 'Arquitetura & Front-end',

      'contact.title': 'Contato',
      'contact.sub': 'Aberto a novas oportunidades como desenvolvedor backend. Vamos conversar.',
      'contact.phone': 'Telefone',
      'footer.verse': '"Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos." — Provérbios 16:3',
    },
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.education': 'Education',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.badge': 'Available for opportunities',
      'hero.role': 'Backend Developer · RESTful APIs · Microservices · ERP',
      'hero.bio': 'Backend Developer specialized in RESTful APIs, microservices, corporate ERP systems, and end-to-end integrations. Solid experience with Node.js/TypeScript, C#/.NET (ASP.NET Core), Java/Spring Boot, and SQL databases.',
      'hero.location': 'São Paulo, Brazil',
      'hero.ctaProjects': 'View Projects',
      'hero.cvCsharp': 'Resume — C# .NET',
      'hero.cvJava': 'Resume — Java',
      'hero.cvTypescript': 'Resume — TypeScript',
      'hero.pillAi': 'AI & RAG',

      'term.file': 'response.json — 200 OK',
      'term.copy': 'Copy',
      'term.copied': 'Copied!',
      'term.route': '/developer/matheus-rafael',
      'term.kRole': '"role"',
      'term.vRole': '"Backend Developer"',
      'term.kExp': '"experience"',
      'term.kFocus': '"focus"',
      'term.vFocus': '"RESTful APIs, Microservices, ERP, AI & Infrastructure"',
      'term.kLoc': '"location"',
      'term.vLoc': '"São Paulo, Brazil"',
      'term.vStatus': '"available for opportunities"',

      'about.title': 'About me',
      'about.lead': 'I am a Backend Developer with solid experience building, maintaining, and evolving corporate ERP systems, RESTful APIs, and microservices using Node.js, TypeScript, C#/.NET (ASP.NET Core), Java/Spring Boot, and SQL Server. At PWI Sistemas, I deliver solutions for critical payment, financial, and accounting workflows as well as internal process automation.',
      'about.p2': 'I lead end-to-end third-party integrations with platforms such as CargoWise and Magento, root-cause investigation of critical failures, SQL query and database performance optimization, technical documentation, and legacy modernization. I apply Clean Architecture, SOLID, MVC, JWT/OAuth2 authentication, automated testing (JUnit/Jest), Docker, CI/CD (GitHub Actions), cloud platforms (AWS & Azure), and Generative AI solutions (LLMs, RAG, AI Agents, LangChain/LangGraph, and MCP).',

      'exp.title': 'Experience',
      'exp.role1': 'Backend Developer',
      'exp.r1b1': 'End-to-end analysis and development of third-party API integrations, mapping business workflows, rules, and dependencies to design and deliver complete solutions.',
      'exp.r1b2': 'Development of RESTful APIs and microservices for payment, financial, and accounting processes in ERP systems using Node.js, TypeScript, and C#/.NET.',
      'exp.r1b3': 'Development and maintenance of integrations between ERP and platforms such as CargoWise and Magento, ensuring reliable data consistency and synchronization.',
      'exp.r1b4': 'Root-cause investigation and resolution of critical failures across integrations, APIs, and financial workflows, alongside SQL query and performance optimization in core ERP routines.',
      'exp.r1b5': 'Internal process automation reducing manual effort, technical documentation translating business requirements into specifications, and continuous evolution of legacy systems, architecture, and code quality.',
      'exp.role2': 'Junior Backend Developer',
      'exp.r2b1': 'Development and maintenance of RESTful APIs in Node.js and TypeScript integrated with Volpe ERP and internal systems.',
      'exp.r2b2': 'Cross-system integration development, handling data flows, business rules, and API communication.',
      'exp.r2b3': 'Modeling, maintenance, and optimization of SQL databases, including critical queries and routines used by the ERP.',
      'exp.r2b4': 'End-to-end technical requirement analysis, bug investigation and fixes, and evolutionary improvements across legacy systems and internal tools while preserving core ERP rules.',
      'exp.role3': 'IT Intern',
      'exp.r3b1': 'Evolutionary maintenance and support for Volpe ERP (built in FoxPro) and SQL databases.',
      'exp.r3b2': 'Bug and data inconsistency fixes across internal processes, plus development of new features and internal support tools.',
      'exp.r3b3': 'Customer technical support for issue analysis and troubleshooting, assisting with requirement analysis, testing, and release validation.',

      'projects.title': 'Projects',
      'projects.sub': 'End-to-end systems I designed and built from scratch, from data modeling and APIs to the user interface.',
      'projects.tabAll': 'All',
      'projects.tabPersonal': 'Personal Projects',
      'projects.tabAcademic': 'Academic Projects',
      'projects.demo': 'View Application',
      'projects.imovplan': 'Real estate financial planning platform featuring SAC vs. PRICE amortization comparison, net CDI yield calculation with regressive income tax, extra contributions (13th salary, vacation, FGTS), and individual or couple income composition.',
      'projects.casalplanner': 'Home setup and financial planning for couples organized by room, with real-time budget tracking, synced shopping goals, meal/food voucher separation, and an AI assistant (Groq/Llama 3.1) for recommendations.',
      'projects.saudememora': 'Intelligent medical document platform with async .NET 9 processing, dual-engine OCR, structured clinical extraction via Gemini/Groq, drug-interaction alerts, and an AI chat assistant powered by Tool Calling and Hybrid RAG (vector & lexical search in MongoDB).',
      'projects.ragTag': 'Hybrid RAG',
      'projects.pitiquinhoMeta': 'E-commerce · 2023',
      'projects.pitiquinho': 'Full-featured MVC e-commerce platform with user registration and authentication, product catalog management, shopping cart, HTTP session control with JSP, and relational persistence via Spring Data JPA.',
      'projects.dateofloveMeta': 'Web Platform · 2023',
      'projects.dateoflove': 'Wedding planning web platform featuring a vendor and service catalog, automated custom budget calculation, email proposal delivery, and SQL Server database persistence.',
      'projects.rodobusMeta': 'Tech Lead · 2022',
      'projects.rodobus': 'Desktop bus ticket reservation and sales system with route and seat management, MySQL persistence, and automated email receipts via JavaMail. Served as project manager and technical team lead.',

      'edu.title': 'Education',
      'edu.c1': 'Systems Analysis and Development',
      'edu.desc1': 'Developed expertise in programming, databases, software engineering, and agile methodologies. The program provided a solid foundation in IT, preparing me for systems development, maintenance, system integration, and technical problem-solving.',
      'edu.c2': 'English — Upper-Intermediate',
      'edu.desc2': 'English Course (Basic to Upper-Intermediate), focusing on conversation, reading, writing, and listening comprehension, including technical vocabulary and applied communication for professional and academic environments.',
      'edu.c3': 'Technical Degree in Information Technology',
      'edu.desc3': 'Technical training in IT focused on programming logic, systems development, and relational databases. Built practical projects using JavaScript, C#, HTML, CSS, and MySQL, applying front-end, back-end, persistence, testing, and clean code organization.',

      'skills.title': 'Skills',
      'skills.backend': 'Back-end',
      'skills.integration': 'APIs, Integrations & Security',
      'skills.db': 'Databases & ORM',
      'skills.ai': 'Artificial Intelligence',
      'skills.genai': 'Generative AI',
      'skills.cloud': 'Testing, Cloud & DevOps',
      'skills.arch': 'Architecture & Front-end',

      'contact.title': 'Contact',
      'contact.sub': "Open to new opportunities as a backend developer. Let's talk.",
      'contact.phone': 'Phone',
      'footer.verse': '"Commit to the Lord whatever you do, and he will establish your plans." — Proverbs 16:3',
    }
  };

  /* =========================================================
     DYNAMIC DATE & EXPERIENCE CALCULATIONS
     ========================================================= */
  const CAREER_START_YM = '2022-10';
  const today = new Date();
  const currentYear = today.getFullYear();

  const monthNames = {
    pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  function parseYearMonth(ym) {
    if (!ym || ym === 'present') {
      return { year: today.getFullYear(), month: today.getMonth() + 1 };
    }
    const [y, m] = ym.split('-').map(Number);
    return { year: y, month: m };
  }

  function calcDuration(startYM, endYM) {
    const start = parseYearMonth(startYM);
    const end = parseYearMonth(endYM);
    const rawMonths = (end.year - start.year) * 12 + (end.month - start.month);
    const totalMonths = Math.max(1, rawMonths);
    return {
      years: Math.floor(totalMonths / 12),
      months: totalMonths % 12,
      totalMonths
    };
  }

  function formatDuration(diff, lang) {
    const parts = [];
    if (lang === 'pt') {
      if (diff.years > 0) parts.push(`${diff.years} ${diff.years === 1 ? 'ano' : 'anos'}`);
      if (diff.months > 0) parts.push(`${diff.months} ${diff.months === 1 ? 'mês' : 'meses'}`);
      return parts.join(' e ');
    }
    if (diff.years > 0) parts.push(`${diff.years} ${diff.years === 1 ? 'year' : 'years'}`);
    if (diff.months > 0) parts.push(`${diff.months} ${diff.months === 1 ? 'month' : 'months'}`);
    return parts.join(' ');
  }

  function formatYearMonth(ym, lang) {
    if (ym === 'present') {
      return lang === 'pt' ? 'Presente' : 'Present';
    }
    const { year, month } = parseYearMonth(ym);
    return `${monthNames[lang][month - 1]} ${year}`;
  }

  const careerDiff = calcDuration(CAREER_START_YM, 'present');

  translations.pt['footer.made'] = `Feito por Matheus Rafael · São Paulo, SP · ${currentYear}`;
  translations.en['footer.made'] = `Made by Matheus Rafael · São Paulo, Brazil · ${currentYear}`;

  let currentLang = 'pt';

  function updateDynamicMetrics(lang) {
    // 1. Terminal JSON experience localized in PT/EN
    const termExpEl = document.getElementById('term-exp');
    if (termExpEl) {
      termExpEl.textContent = `"${formatDuration(careerDiff, lang)}"`;
    }

    // 2. Experience section total experience subtitle
    const expTotalEl = document.getElementById('exp-total');
    if (expTotalEl) {
      const totalFormatted = formatDuration(careerDiff, lang);
      expTotalEl.textContent = lang === 'pt'
        ? `Trajetória profissional · ${totalFormatted} de experiência`
        : `Career path · ${totalFormatted} of experience`;
    }

    // 3. Individual experience timeline periods & durations
    document.querySelectorAll('[data-exp-period]').forEach((el) => {
      const startYM = el.getAttribute('data-start');
      const endYM = el.getAttribute('data-end') || 'present';
      const diff = calcDuration(startYM, endYM);
      const startLabel = formatYearMonth(startYM, lang);
      const endLabel = formatYearMonth(endYM, lang);
      el.textContent = `${startLabel} — ${endLabel} · ${formatDuration(diff, lang)}`;
    });

    // 4. Education periods localized in PT/EN
    document.querySelectorAll('[data-edu-period]').forEach((el) => {
      const startYM = el.getAttribute('data-start');
      const endYM = el.getAttribute('data-end') || 'present';
      const startLabel = formatYearMonth(startYM, lang);
      const endLabel = formatYearMonth(endYM, lang);
      el.textContent = `${startLabel} – ${endLabel}`;
    });
  }

  /* =========================================================
     LANGUAGE SWITCHING
     ========================================================= */
  const htmlEl = document.documentElement;
  const langButtons = document.querySelectorAll('.lang button');

  function applyLang(lang) {
    const dict = translations[lang];
    if (!dict) return;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    htmlEl.lang = lang === 'pt' ? 'pt-BR' : 'en';
    updateDynamicMetrics(lang);

    try {
      localStorage.setItem('preferredLang', lang);
    } catch (_) {
      // Ignore storage restrictions
    }
  }

  /* =========================================================
     TERMINAL COPY BUTTON
     ========================================================= */
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const copyCodeLabel = document.getElementById('copyCodeLabel');
  let copyResetTimer = null;

  function buildTerminalSnippet(lang) {
    const expStr = formatDuration(careerDiff, lang);
    if (lang === 'en') {
      return [
        'GET /developer/matheus-rafael',
        '→ 200 OK · 41ms',
        '{',
        '  "role": "Backend Developer",',
        `  "experience": "${expStr}",`,
        '  "stack": ["Node.js", "TypeScript", "C#/.NET", "Java"],',
        '  "focus": "RESTful APIs, Microservices, ERP, AI & Infrastructure",',
        '  "location": "São Paulo, Brazil",',
        '  "status": "available for opportunities"',
        '}'
      ].join('\n');
    }
    return [
      'GET /desenvolvedor/matheus-rafael',
      '→ 200 OK · 41ms',
      '{',
      '  "cargo": "Desenvolvedor Back-end",',
      `  "experiencia": "${expStr}",`,
      '  "stack": ["Node.js", "TypeScript", "C#/.NET", "Java"],',
      '  "foco": "APIs RESTful, Microsserviços, ERP, IA & Infraestrutura",',
      '  "localizacao": "São Paulo, SP",',
      '  "status": "disponível para oportunidades"',
      '}'
    ].join('\n');
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
  }

  if (copyCodeBtn && copyCodeLabel) {
    copyCodeBtn.addEventListener('click', async () => {
      try {
        await copyTextToClipboard(buildTerminalSnippet(currentLang));
        const dict = translations[currentLang] || translations.pt;
        copyCodeBtn.classList.add('copied');
        copyCodeLabel.textContent = dict['term.copied'];
        if (copyResetTimer) clearTimeout(copyResetTimer);
        copyResetTimer = setTimeout(() => {
          copyCodeBtn.classList.remove('copied');
          const activeDict = translations[currentLang] || translations.pt;
          copyCodeLabel.textContent = activeDict['term.copy'];
        }, 2000);
      } catch (_) {
        // Ignore clipboard errors
      }
    });
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
    });
  });

  let initialLang = 'pt';
  try {
    const saved = localStorage.getItem('preferredLang');
    if (saved === 'pt' || saved === 'en') initialLang = saved;
  } catch (_) {
    // Default to pt
  }
  applyLang(initialLang);

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  function closeMobileNav() {
    if (hamburger && mobileNav) {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        closeMobileNav();
      }
    });
  }

  /* =========================================================
     PROJECT TABS FILTER (STAGGERED + CLEAN HOVER HANDOFF)
     ========================================================= */
  const tabButtons = document.querySelectorAll('.tabs .tab-btn');
  const projectCards = document.querySelectorAll('#projectGrid .card');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');

      const filter = btn.dataset.filter;
      let visibleIndex = 0;

      projectCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category === filter;
        if (matches) {
          const delay = visibleIndex * 65;
          visibleIndex += 1;
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px) scale(0.985)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.42s cubic-bezier(0.22, 1, 0.36, 1), transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            setTimeout(() => {
              card.style.opacity = '';
              card.style.transform = '';
              card.style.transition = '';
            }, 440);
          }, 16 + delay);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px) scale(0.98)';
          setTimeout(() => {
            card.style.display = 'none';
            card.style.opacity = '';
            card.style.transform = '';
          }, 190);
        }
      });
    });
  });

  /* =========================================================
     STAGGERED SCROLL REVEAL & INTERACTIVE CARD SPOTLIGHT
     ========================================================= */
  const staggerGroups = document.querySelectorAll('.about, .tl, .grid, .edu, .skills, .cg');
  staggerGroups.forEach((group) => {
    const items = group.querySelectorAll(':scope > .reveal');
    items.forEach((el, idx) => {
      el.style.setProperty('--stagger-delay', `${Math.min(idx * 85, 425)}ms`);
    });
  });

  const revealEls = document.querySelectorAll('.reveal');
  function markRevealIn(el) {
    el.classList.add('in');
    const delayStr = el.style.getPropertyValue('--stagger-delay') || '0ms';
    const delayMs = parseInt(delayStr, 10) || 0;
    setTimeout(() => {
      el.classList.add('settled');
    }, 680 + delayMs);
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            markRevealIn(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => {
      el.classList.add('in', 'settled');
    });
  }

  // Interactive cursor spotlight on cards
  const spotlightCards = document.querySelectorAll('.card, .tl-i, .ec, .cc');
  spotlightCards.forEach((card) => {
    let rafId = 0;
    card.addEventListener('pointermove', (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${(e.clientX - rect.left).toFixed(1)}px`);
        card.style.setProperty('--my', `${(e.clientY - rect.top).toFixed(1)}px`);
        rafId = 0;
      });
    }, { passive: true });
  });

  /* =========================================================
     ACTIVE NAV LINK & FIXED HEADER ON SCROLL
     ========================================================= */
  const siteHeader = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id], header[id], footer[id]');
  const desktopLinks = document.querySelectorAll('.links a');
  const mobileLinks = document.querySelectorAll('.mobile-nav a');

  function updateActiveNav() {
    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', window.scrollY > 12);
    }

    let currentId = 'top';
    const scrollPos = window.scrollY + 140;
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40;

    if (nearBottom) {
      currentId = 'contato';
    } else {
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop) {
          currentId = sec.id;
        }
      });
    }

    desktopLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isMatch = href === `#${currentId}` || (currentId === 'top' && href === '#sobre');
      link.classList.toggle('on', isMatch);
    });

    mobileLinks.forEach((link) => {
      const href = link.getAttribute('href');
      const isMatch = href === `#${currentId}`;
      link.classList.toggle('active', isMatch);
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
})();
