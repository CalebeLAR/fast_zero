const { formatString } = require( "./utils");

const indices = [
  'Ambiente de Desenvolvimento',
  'Instalação do Python',
  'Gerenciamento de Dependências com Poetry',
  'Criação do Projeto FastAPI e Instalação das Dependências',
  'Primeira Execução de um "Hello, World!"',
  'Instalando as ferramentas de desenvolvimento',
  'Configurando as ferramentas de desenvolvimento',
  'Introdução ao Pytest: Testando o "Hello, World!"',
  'Estrutura de um teste',
  'Criando nosso repositório no git',
  'Exercício',
  'Conclusão',
];

const lecture = 'aula01 Configurando o Ambiente de Desenvolvimento';

const mkdirLecture = (title, indices, extension) => {
    title = formatString(title);
    let mkdir = `mkdir ${title} && cd ${title}`;
    let typeNul = [] ;

    indices.forEach((indice, n) => {
        indice = formatString(indice)
        let parte = String(n + 1).padStart(2,'0')
        typeNul.push(`type nul > parte${parte}_${indice}.${extension}`);
    });

    console.log(mkdir + " && " + typeNul.join(" && "));
}

mkdirLecture(lecture, indices, 'py');

