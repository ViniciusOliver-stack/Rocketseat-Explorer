export class Router{

  routes = {}
  add(routeName, pageLink){
    this.routes[routeName] = pageLink
  }

  route(e){
    e = e || window.event
    e.preventDefault()

    window.history.pushState("", {}, e.target.href)

    this.handle()
  }

 

  handle(){
    const {pathname} = window.location
    const route = this.routes[pathname] || hvthis.routes[404]

    fetch(route)
    .then(data => data.text())
    .then(resp => {
      document.querySelector('#app').innerHTML = resp
    })
  }
}