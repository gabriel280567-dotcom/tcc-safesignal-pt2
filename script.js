document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Toast helper ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ---------- Modal de login ---------- */
  const loginModal = document.getElementById('loginModal');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const closeLoginBtn = document.getElementById('closeLoginBtn');
  const modalSignupLink = document.getElementById('modalSignupLink');
  const openSignupLink = document.getElementById('openSignupLink');

  function openModal() {
    loginModal.classList.add('open');
    loginModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalEmail').focus();
  }
  function closeModal() {
    loginModal.classList.remove('open');
    loginModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  openLoginBtn.addEventListener('click', openModal);
  closeLoginBtn.addEventListener('click', closeModal);
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('open')) closeModal();
  });

  [modalSignupLink, openSignupLink].forEach(link => {
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'cadastro.html';
      });
    }
  });

  /* ---------- Formulários de login (placeholders) ---------- */
  document.getElementById('modalLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login em breve — integração com o back-end pendente.');
    closeModal();
  });

  document.getElementById('footerLoginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Login em breve — integração com o back-end pendente.');
  });

  /* ---------- Carrossel "Nossos Programas" ---------- */
  const programs = [
    {
      title: 'Movimente-se com segurança e propósito',
      img: 'https://images.pexels.com/photos/8497647/pexels-photo-8497647.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Idoso correndo no parque',
      items: [
        'Fortalecimento Muscular',
        'Equilíbrio e Prevenção de Quedas',
        'Mobilidade Articular',
        'Alongamento e Flexibilidade',
        'Exercícios Funcionais',
        'Condicionamento Físico',
        'Treinos Personalizados'
      ]
    },
    {
      title: 'Equilíbrio e prevenção de quedas',
      img: 'https://images.pexels.com/photos/7500321/pexels-photo-7500321.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Idosos alongando em tapete de yoga',
      items: [
        'Exercícios de estabilidade',
        'Fortalecimento do core',
        'Coordenação motora',
        'Percepção corporal',
        'Treino de marcha segura',
        'Apoio e postura',
        'Acompanhamento profissional'
      ]
    },
    {
      title: 'Mobilidade e flexibilidade para o dia a dia',
      img: 'https://images.pexels.com/photos/6974989/pexels-photo-6974989.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Casal de idosos alongando juntos',
      items: [
        'Alongamento guiado',
        'Amplitude articular',
        'Respiração e relaxamento',
        'Exercícios de baixo impacto',
        'Rotina para o lar',
        'Prevenção de dores',
        'Ritmo respeitando seu corpo'
      ]
    },
    {
      title: 'Condicionamento físico completo',
      img: 'https://images.pexels.com/photos/7530436/pexels-photo-7530436.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'Casal de idosos se exercitando',
      items: [
        'Resistência cardiovascular',
        'Fortalecimento progressivo',
        'Treinos personalizados',
        'Acompanhamento contínuo',
        'Metas alcançáveis',
        'Evolução acompanhada',
        'Mais autonomia no dia a dia'
      ]
    }
  ];

  let currentProgram = 0;
  const programImg = document.getElementById('programImg');
  const programTitle = document.getElementById('programTitle');
  const programList = document.getElementById('programList');
  const carouselCount = document.getElementById('carouselCount');
  const prevBtn = document.getElementById('prevProgram');
  const nextBtn = document.getElementById('nextProgram');

  function renderProgram() {
    const p = programs[currentProgram];
    programImg.src = p.img;
    programImg.alt = p.alt;
    programTitle.textContent = p.title;
    programList.innerHTML = p.items
      .map(item => `<li><span class="check">✓</span>${item}</li>`)
      .join('');
    carouselCount.textContent = `${currentProgram + 1} / ${programs.length}`;
  }

  prevBtn.addEventListener('click', () => {
    currentProgram = (currentProgram - 1 + programs.length) % programs.length;
    renderProgram();
  });
  nextBtn.addEventListener('click', () => {
    currentProgram = (currentProgram + 1) % programs.length;
    renderProgram();
  });

  /* ---------- Header com sombra ao rolar ---------- */
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 8 ? '0 6px 20px rgba(0,0,0,.15)' : 'none';
  });
});

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Toast helper ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  /* ---------- Modal de login ---------- */
  const loginModal = document.getElementById('loginModal');
  const openLoginBtn = document.getElementById('openLoginBtn');
  const closeLoginBtn = document.getElementById('closeLoginBtn');

  function openModal() {
    if (!loginModal) return;
    loginModal.classList.add('open');
    loginModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const emailField = document.getElementById('modalEmail');
    if (emailField) emailField.focus();
  }
  function closeModal() {
    if (!loginModal) return;
    loginModal.classList.remove('open');
    loginModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openLoginBtn) openLoginBtn.addEventListener('click', openModal);
  if (closeLoginBtn) closeLoginBtn.addEventListener('click', closeModal);
  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal && loginModal.classList.contains('open')) closeModal();
  });

  // Se a página foi aberta com #login (ex.: vindo da tela de cadastro),
  // abre o modal de login automaticamente.
  if (window.location.hash === '#login') {
    openModal();
  }

  
  /* ---------- Formulários de login conectados ao backend ---------- */

  async function realizarLogin(email, senha) {
    if (!email || !senha) {
      showToast('Preencha o e-mail e a senha.');
      return false;
    }

    try {
      const resposta = await fetch(
        'http://localhost:8080/usuarios/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, senha })
        }
      );

      if (resposta.ok) {
        showToast('Login realizado com sucesso!');
        return true;
      }

      if (resposta.status === 401) {
        showToast('E-mail ou senha inválidos.');
      } else {
        showToast('Não foi possível realizar o login.');
      }

      return false;

    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
      showToast('Não foi possível conectar ao servidor.');
      return false;
    }
  }

  const modalLoginForm = document.getElementById('modalLoginForm');

  if (modalLoginForm) {
    modalLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('modalEmail').value.trim();
      const senha = document.getElementById('modalPassword').value;

      const sucesso = await realizarLogin(email, senha);

      if (sucesso) {
        closeModal();
        modalLoginForm.reset();
      }
    });
  }

  const footerLoginForm = document.getElementById('footerLoginForm');

  if (footerLoginForm) {
    footerLoginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = document.getElementById('footerEmail').value.trim();
      const senha = document.getElementById('footerPassword').value;

      const sucesso = await realizarLogin(email, senha);

      if (sucesso) {
        footerLoginForm.reset();
      }
    });
  }


  /* ---------- Carrossel "Nossos Programas" (somente na Home) ---------- */
  const programImg = document.getElementById('programImg');
  const programTitle = document.getElementById('programTitle');
  const programList = document.getElementById('programList');
  const carouselCount = document.getElementById('carouselCount');
  const prevBtn = document.getElementById('prevProgram');
  const nextBtn = document.getElementById('nextProgram');

  if (programImg && programTitle && programList && carouselCount && prevBtn && nextBtn) {
    const programs = [
      {
        title: 'Movimente-se com segurança e propósito',
        img: 'https://images.pexels.com/photos/8497647/pexels-photo-8497647.jpeg?auto=compress&cs=tinysrgb&w=1000',
        alt: 'Idoso correndo no parque',
        items: [
          'Fortalecimento Muscular',
          'Equilíbrio e Prevenção de Quedas',
          'Mobilidade Articular',
          'Alongamento e Flexibilidade',
          'Exercícios Funcionais',
          'Condicionamento Físico',
          'Treinos Personalizados'
        ]
      },
      {
        title: 'Equilíbrio e prevenção de quedas',
        img: 'https://images.pexels.com/photos/7500321/pexels-photo-7500321.jpeg?auto=compress&cs=tinysrgb&w=1000',
        alt: 'Idosos alongando em tapete de yoga',
        items: [
          'Exercícios de estabilidade',
          'Fortalecimento do core',
          'Coordenação motora',
          'Percepção corporal',
          'Treino de marcha segura',
          'Apoio e postura',
          'Acompanhamento profissional'
        ]
      },
      {
        title: 'Mobilidade e flexibilidade para o dia a dia',
        img: 'https://images.pexels.com/photos/6974989/pexels-photo-6974989.jpeg?auto=compress&cs=tinysrgb&w=1000',
        alt: 'Casal de idosos alongando juntos',
        items: [
          'Alongamento guiado',
          'Amplitude articular',
          'Respiração e relaxamento',
          'Exercícios de baixo impacto',
          'Rotina para o lar',
          'Prevenção de dores',
          'Ritmo respeitando seu corpo'
        ]
      },
      {
        title: 'Condicionamento físico completo',
        img: 'https://images.pexels.com/photos/7530436/pexels-photo-7530436.jpeg?auto=compress&cs=tinysrgb&w=1000',
        alt: 'Casal de idosos se exercitando',
        items: [
          'Resistência cardiovascular',
          'Fortalecimento progressivo',
          'Treinos personalizados',
          'Acompanhamento contínuo',
          'Metas alcançáveis',
          'Evolução acompanhada',
          'Mais autonomia no dia a dia'
        ]
      }
    ];

    let currentProgram = 0;

    function renderProgram() {
      const p = programs[currentProgram];
      programImg.src = p.img;
      programImg.alt = p.alt;
      programTitle.textContent = p.title;
      programList.innerHTML = p.items
        .map(item => `<li><span class="check">✓</span>${item}</li>`)
        .join('');
      carouselCount.textContent = `${currentProgram + 1} / ${programs.length}`;
    }

    prevBtn.addEventListener('click', () => {
      currentProgram = (currentProgram - 1 + programs.length) % programs.length;
      renderProgram();
    });
    nextBtn.addEventListener('click', () => {
      currentProgram = (currentProgram + 1) % programs.length;
      renderProgram();
    });
  }

  /* ---------- Página de cadastro (Crie sua conta) ---------- */
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    const otherCheck = document.getElementById('otherConditionCheck');
    const otherText = document.getElementById('otherConditionText');

    if (otherCheck && otherText) {
      otherCheck.addEventListener('change', () => {
        if (otherCheck.checked) otherText.focus();
      });
    }

    // Fallback visual para navegadores sem suporte a :has()
    document.querySelectorAll('.condition-card input[type="checkbox"]').forEach(input => {
      input.addEventListener('change', () => {
        input.closest('.condition-card').classList.toggle('is-checked', input.checked);
      });
    });

    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nomeCompleto = document.getElementById('fullName').value.trim();
      const dataNascimento = document.getElementById('birthDate').value;
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('password').value;
      const telefone = document.getElementById('phone').value.trim();

      const condicoesSelecionadas = Array.from(
        document.querySelectorAll('input[name="condicoes"]:checked')
      ).map(input => input.value);

      const outraCondicao = document.getElementById('otherConditionText').value.trim();

      if (!nomeCompleto || !dataNascimento || !email || !senha) {
        showToast('Preencha todos os campos obrigatórios.');
        return;
      }

      if (senha.length < 6) {
        showToast('A senha deve ter pelo menos 6 caracteres.');
        return;
      }

      const usuario = {
        nomeCompleto: nomeCompleto,
        dataNascimento: dataNascimento,
        email: email,
        senha: senha,
        telefone: telefone || null,
        condicoesFisicas: [
          ...condicoesSelecionadas,
          ...(outraCondicao ? [outraCondicao] : [])
        ].join(', ') || null
      };

      try {
        const resposta = await fetch('http://localhost:8080/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(usuario)
        });

        if (resposta.ok) {
          showToast('Conta criada com sucesso!');

          setTimeout(() => {
            window.location.href = 'index.html#login';
          }, 1200);

        } else {
          const erro = await resposta.json().catch(() => ({}));

          const mensagem = Object.values(erro).find(
            valor => typeof valor === 'string'
          );

          showToast(
            mensagem ||
            (resposta.status === 409
              ? 'E-mail ou telefone já cadastrado.'
              : 'Não foi possível criar a conta.')
          );
        }

      } catch (erro) {
        console.error('Erro ao cadastrar usuário:', erro);
        showToast('Não foi possível conectar ao servidor.');
      }
    });
  }

  /* ---------- Produtos (roupas esportivas) — placeholder de carrinho ---------- */
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Produto adicionado — carrinho em breve.');
    });
  });

  /* ---------- Header com sombra ao rolar ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 6px 20px rgba(0,0,0,.15)' : 'none';
    });
  }
});