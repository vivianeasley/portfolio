import { render, html } from 'lighterhtml';
import { repoCardArea } from './features/card-area'
import { aboutSection } from './features/about'




export function renderDOM (state:any) {
  const routes = {
    "/": function renderhome () {

      let profileNode = document.querySelector(".profile");


      render(profileNode, html`
        ${aboutSection(state)}
      `);

    },
    "/projects/": function renderprojects () {

      let reposNode = document.querySelector(".repos");


      render(reposNode, html`
        ${repoCardArea(state)}
      `);
    }
  }

  if (routes[state.currentPage]) {
    routes[state.currentPage]()
  }


}