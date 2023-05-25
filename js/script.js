import Router from "./router.js"

const router = new Router() //criou uma instancia (OU UMA FOTOGRAFIA da classe criada)
router.add('/',"pages/home.html")
router.add("/about","pages/about.html",)
router.add("/exploration","pages/exploration.html")
router.add(404,"pages/404.html")





router.handle()

window.onpopstate = () => router.handle() //para que ao clicar no botão voltar, a função seja execultada.
window.route = () => router.route()
