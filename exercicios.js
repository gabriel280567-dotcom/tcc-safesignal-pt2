/* Comportamentos das páginas Exercícios Físicos e Vídeo.
   Links marcados com data-soon ainda não têm destino: mostram um aviso. */
document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  let timer;

  window.showSoon = function (message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('show'), 2800);
  };

  document.querySelectorAll('[data-soon]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      window.showSoon(el.dataset.soon);
    });
  });
});

document.addEventListener('DOMContentLoaded', async () => {
  const categorias = document.querySelectorAll(
    '#treinos [data-categoria]'
  );

  // Cria a área onde os exercícios serão exibidos.
  const lista = document.createElement('div');
  lista.className = 'workout-grid';
  lista.id = 'exercicios-lista';

  const secaoTreinos = document.querySelector('#treinos .container');

  if (!secaoTreinos) return;

  const titulo = document.createElement('div');
  titulo.className = 'ex-section-head';

  const textoTitulo = document.createElement('h2');
  textoTitulo.textContent = 'Exercícios disponíveis';

  titulo.appendChild(textoTitulo);
  titulo.style.marginTop = '40px';
  titulo.style.marginBottom = '10px';
  secaoTreinos.append(titulo, lista);

  const imagensCategorias = {
      'fortalecimento': 'https://images.pexels.com/photos/7530436/pexels-photo-7530436.jpeg?auto=compress&cs=tinysrgb&w=400',
      'alongamento': 'https://images.pexels.com/photos/7500321/pexels-photo-7500321.jpeg?auto=compress&cs=tinysrgb&w=400',
      'equilibrio': 'https://images.pexels.com/photos/8018962/pexels-photo-8018962.jpeg?auto=compress&cs=tinysrgb&w=400',
      'mobilidade': 'https://images.pexels.com/photos/8497647/pexels-photo-8497647.jpeg?auto=compress&cs=tinysrgb&w=400',
      'relaxamento': 'https://images.pexels.com/photos/6974989/pexels-photo-6974989.jpeg?auto=compress&cs=tinysrgb&w=400',
      'cardio': 'https://images.pexels.com/photos/8497647/pexels-photo-8497647.jpeg?auto=compress&cs=tinysrgb&w=400'
  };

  let exercicios = [];

  try {
    const resposta = await fetch('http://localhost:8080/exercicios');

    if (!resposta.ok) {
      throw new Error('Não foi possível buscar os exercícios.');
    }

    exercicios = await resposta.json();

    // Mostra todos os exercícios inicialmente.
    mostrarExercicios();
  } catch (erro) {
    console.error('Erro ao carregar exercícios:', erro);
    lista.textContent =
      'Não foi possível carregar os exercícios. Tente novamente mais tarde.';
  }

  function normalizar(texto) {
    return (texto || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim()
      .toLowerCase();
  }

  function mostrarExercicios(categoriaSelecionada = '') {
    lista.replaceChildren();

    const filtrados = exercicios.filter(exercicio => {
      // Não exibe exercícios marcados como indisponíveis.
      if (exercicio.ativo !== true) return false;

      if (!categoriaSelecionada) return true;

      return normalizar(exercicio.categoria) ===
        normalizar(categoriaSelecionada);
    });

    if (filtrados.length === 0) {
      lista.textContent = categoriaSelecionada
        ? 'Nenhum exercício disponível nesta categoria.'
        : 'Nenhum exercício disponível no momento.';
      return;
    }

    filtrados.forEach(exercicio => {
      const card = document.createElement('article');
      card.className = 'workout';

      const chaveCategoria = normalizar(exercicio.categoria);
      const imagemUrl = imagensCategorias[chaveCategoria];

      if (imagemUrl) {
        const areaImagem = document.createElement('div');
        areaImagem.className = 'workout-photo';

        const imagem = document.createElement('img');
        imagem.src = imagemUrl;
        imagem.alt = `Exercício de ${exercicio.categoria}`;
        imagem.loading = 'lazy';

        areaImagem.appendChild(imagem);
        card.appendChild(areaImagem);
      }

      const nome = document.createElement('h3');
      nome.textContent = exercicio.nome;

      const duracao = document.createElement('p');
      duracao.textContent = `Duração: ${exercicio.duracao} minutos`;

      const categoria = document.createElement('p');
      categoria.textContent = `Categoria: ${exercicio.categoria}`;

      card.append(nome, duracao, categoria);
      lista.appendChild(card);

    });
  }

  // Ao clicar numa categoria, filtra os exercícios.
  categorias.forEach(categoria => {
    categoria.addEventListener('click', evento => {
      evento.preventDefault();

      const nomeCategoria = categoria.dataset.categoria;

      mostrarExercicios(nomeCategoria);

      // Leva a pessoa até os exercícios filtrados.
      lista.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
