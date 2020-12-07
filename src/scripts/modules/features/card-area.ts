import { html } from 'lighterhtml';
import { repoCard } from './card';
import {
    setProjectFilterAscending,
    setProjectFiltersOrdered
} from '../actions/projects'

export function repoCardArea (state:any) {
    const { repos, ui } = state;
    const { filters } = ui;
    if (repos === undefined) return;

    let sortedRepos = sortByDate(repos, filters.isAscending);
    if (filters.orderByInterestesting) {
        sortedRepos = sortByInteresting(sortedRepos);
    }

    return html`
        <div>
            Order by:
            <span
            onclick=${setProjectFiltersOrdered}
            tabindex="5"
            role="button"
            aria-pressed="false"
            class="${ filters.orderByInterestesting ? "re-link-button selected" : "re-link-button" }">
            interesting</span> |
            <span
            onclick=${setProjectFilterAscending}
            tabindex="6"
            role="button"
            aria-pressed="false"
            class="${ filters.isAscending ? "re-link-button selected" : "re-link-button" }"
            >recent</span> |
            <span
            onclick=${setProjectFilterAscending}
            tabindex="7"
            role="button"
            aria-pressed="false"
            class="${ !filters.isAscending ? "re-link-button selected" : "re-link-button" }">
            oldest</span>
            ${
                sortedRepos.map((cardData) => html`
                    ${repoCard(cardData, cardData.id)}
                `)
            }
        </div>
    `;
}

function sortByDate (repos:any, isAscending:boolean) {
    const newRepo = [...repos];
    newRepo.sort(function(a:any,b:any) {
        a = a.created_at.split("T");
        b = b.created_at.split("T");

        a = a[0].split('-').join('');
        b = b[0].split('-').join('');

        if (isAscending) {
            if (a < b) return 1;
            if (a > b) return -1;
            return 0;
        }

        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });

    return newRepo;
}

function sortByInteresting (repos:any) {
    const bestRepos = ["space-madness","horde","npc-character-gen","decipher-rpg-system","lighterHTML-stress-test","preact-snake-game"];
    const tmpArr = [];

    for (let i = 0; i < bestRepos.length; i++) {
        const index = getRepoIndex(repos, bestRepos[i]);
        if (index) {
            tmpArr.push(repos[index]);
            repos.splice(index, 1);
        }
    }

    return [...tmpArr, ...repos];

    function getRepoIndex (data:any, bestRepoName:string) {
        for (let j = 0; j < data.length; j++) {
            if (data[j].name === bestRepoName) return j;
        }

        return;
    }
}