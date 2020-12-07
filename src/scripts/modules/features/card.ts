import { html } from 'lighterhtml';
import { placeholder } from './placeholder';

export function repoCard (cardData:any, i) {

    function doesDemoExist (name:string) {
        const demos = ["preact-snake-game","pet-parade-bingo","robotss","lighterHTML-stress-test","starlight","npc-character-gen","decipher-rpg-system","horde","order-grocery-lists","space-madness","moles","lodestone","tine","spite","string-snake-game"];


        if (demos.includes(name)) {
            return html` | <a href="${"https://robertpage.github.io/"+name+"/"}" rel="noopener noreferrer nofollow" target="_blank">Demo</a>`
        }
        return '';
    }

    return html`
        <div class="re-repo-card" data-i=${i}>
            ${
                cardData.name
                ? html`<img class="re-repo-img" src="${"/portfolio/images/repo-icons/"+cardData.name+".svg"}" alt="Repo icon">`
                : placeholder('1rem', '1rem')
            }
            ${
                cardData.name
                ? html`<h2 class="re-margin-none re-display-ib re-capitalize">${cardData.name.replace(/-/g, ' ')}</h2>`
                : placeholder('30%', '0.8rem')
            }
            ${
                cardData.html_url
                ? html`<div class="re-links-wrapper"><a href="${cardData.html_url}" rel="noopener noreferrer nofollow" target="_blank">Repository</a>${doesDemoExist(cardData.name)}</div>`
                : ``
            }
            <p>${cardData.description ? cardData.description : placeholder('70%', '0.8rem')}</p>
        </div>
    `;
}