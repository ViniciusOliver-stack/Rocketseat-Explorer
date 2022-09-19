import { Router } from './route.js'

const routes = new Router()

routes.add('/', '/assets/pages/home.html')
routes.add('/universe', '/assets/pages/universe.html')
routes.add('/explorer', '/assets/pages/explorer.html')
routes.add(404, '/assets/pages/404.html')


routes.handle()
window.onpopstate = () => routes.handle()
window.route = () => routes.route()
