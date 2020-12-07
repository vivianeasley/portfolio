import { html } from 'lighterhtml';

export function placeholder (width:string, height:string) {

    const styleString = `width:${width};height:${height}`;

    return html`
        <div class="placeholder re-display-ib" style="${styleString}"></div>
    `;
}