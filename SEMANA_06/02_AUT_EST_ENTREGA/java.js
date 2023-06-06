$(document).ready(function() {
    function escreverTexto(elemento, textoCompleto, intervalo) {
      var i = 0;
      var textoAtual = "";
      var intervaloId = setInterval(function() {
        textoAtual += textoCompleto.charAt(i);
        $(elemento).text(textoAtual);
        i++;
        if (i >= textoCompleto.length) {
          clearInterval(intervaloId);
        }
      }, intervalo);
    }

    var textos = [
      { elemento: '.s', texto: 'Sobre Mim', intervalo: 100 },
      { elemento: '.eu', texto: 'Graduando Engenharia da Computação no Inteli -\nfaculdade que, além de estudar T.I, proporciona\naula de Negócios e UX -, quero adquirir experiência\nprofissional nas três áreas que estudo.', intervalo: 20 },
      { elemento: '.f', texto: 'Formação', intervalo: 100 },
      { elemento: '.e', texto: 'Ensino Médio\nSeb Dom Bosco | 2019 - 2022', intervalo: 50 },
      { elemento: '.eng', texto: 'Engenharia da Computação\nInteli | 2023 - 2026', intervalo: 50 },
      { elemento: '.c', texto: 'Cursos e outros', intervalo: 100 },
      { elemento: '.E', texto: 'Excel\nBom Aluno | Junho de 2019', intervalo: 50 },
      { elemento: '.l', texto: 'Língua Inglesa\nLegacy | Setembro de 2017 - Dezembro de 2021', intervalo: 50 },
      { elemento: '.d', texto: 'Desenvolvimento de um game\nInteli | Março de 2023', intervalo: 50 },
      { elemento: '.con', texto: 'Contatos', intervalo: 100 },
      { elemento: '.co', texto: '41 99764-8921\nlaurapadilhabueno@hotmail.com\nlaura.bueno@sou.inteli.edu.br', intervalo: 50 },
      { elemento: '.idiomas', texto: 'Idiomas', intervalo: 100 },
      { elemento: '.idio', texto: 'Português: Nativo\nInglês: Fluente', intervalo: 50 },
      { elemento: '.habil', texto: 'Habilidades', intervalo: 100 },
      { elemento: '.ha', texto: 'Pacote Office - Intermediário\nSony Vegas - Avançado', intervalo: 50 },
      { elemento: '.rede', texto: 'Rede Social', intervalo: 100 },
      { elemento: '.lin', texto: 'Linkedin: https://www.linkedin.com/in/laura-padilha-bueno-b358419a/', intervalo: 50 },
      { elemento: '.seb', texto:'Formação em instituição privada com bolsa integral', intervalo: 50},
      { elemento: '.inteli', texto:'Formação em instituição privada com bolsa integral', intervalo: 50},
      { elemento: '.aprendizados', texto: 'Aprendizados de conceitos intermediários de Excel', intervalo: 50},
      { elemento: '.fluencia', texto: 'Certificado Toefl', intervalo: 50},
      { elemento: '.git', texto: 'https://github.com/2023M1T7-Inteli/grupo1', intervalo: 50},
    
    ];
  
    textos.forEach(function(item) {
      escreverTexto(item.elemento, item.texto, item.intervalo);
    });
});


  
  