// Dados
const proffys = [{
  name: 'Diego Fernandes',
  avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
  whatsapp: '9276-5012',
  bio: 'Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
  subject: 'Química',
  cost: '20',
  weekday: [0],
  time_from:[720],
  time_to: [1220]

},
{
  name: "Gabriel Bagalho",
  avatar: 'https://avatars3.githubusercontent.com/u/63831619?s=400&u=dc15840dc9cd2d413d5ee341be7bd6626625806d&v=4',
  whatsapp: '9276-5012',
  bio: 'Formado em Sistemas de Informação,  Desenvolvedor Full Stack, estudando no GoStack da Rocketseat. <br><br>Sou apaixonado por tecnologias e games. ',
  subject: 'Desenvolvedor Full Stack',
  cost: '20',
  weekday: [1],
  time_from:[720],
  time_to: [1220]
},
{
  name: "Fernanda Targa",
  avatar: 'https://tribunaonline.com.br/thumbs/body/2017-09/102985-17Ec76analisep01-150x150.jpg',
  whatsapp: '9276-5012',
  bio: 'Formado em Sistemas de Informação,  Desenvolvedor Full Stack, estudando no GoStack da Rocketseat. <br><br>Sou apaixonado por tecnologias e games. ',
  subject: 'Psicologa',
  cost: '20',
  weekday: [1],
  time_from:[720],
  time_to: [1220]
}

]

const subjects = [
 "Artes",
 "Biologia",
 "Ciências",
 "Educação Física",
 "Física",
 "Geografia",
 "História",
 "Matemática",
 "Portugues",
 "Quimica",
]

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
]

// Funcionalidades

function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", { proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
  const data = req.query

  const isNotEmpty = Object.keys(data).length > 0

  // Se estiver dados (data)
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)

    // adicionar data a lista de proffys
    proffys.push(data)

    return res.redirect("/study")
  }

  // se não, mostrar a página
  return res.render("give-classes.html", { subjects, weekdays})

}

// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar o nunjucks (templete engine)
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})
// Inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500);
