
import { html } from 'lighterhtml';
import { placeholder } from './placeholder';

export function aboutSection (state:any) {
    const { profileData } = state;

    return html`
        <section>
            <div class="re-spacer-sm"></div>
            <div class="re-overflow-h">
                <div class="re-about-image re-float-l">
                    ${
                        profileData.avatar_url
                        ? html`<img class="re-image" src="${profileData.avatar_url}" alt="">`
                        : placeholder("70px", "70px")
                    }
                </div>
                <h1 class="re-margin-none">Robert Page Easley</h1>
                <h2 class="re-margin-none">Looking for community, challenges, and collaborations</h2>
            </div>
            <hr>
            <div>
                ${
                    profileData.avatar_url
                    ? html`<p>During my 15 years in the tech industry I have been a UI/UX designer, a front end developer, a project/product manager, and have consistently exceeded expectations while delivering beautiful, intuitive products. I have a wide range of skills, such as my thorough knowledge of cutting edge web standards as well as my deep understanding of UI design. These abilities, along with my congenial nature, dependability, and commitment to finding the best solutions (given the constraints) have resulted in every previous employer endorsing me and my outstanding work. I value small, close-knit work communities and being surrounded by people with diverse backgrounds. I am a <a href="https://topophobia.blogspot.com/" rel="noopener noreferrer nofollow" target="_blank">traveler</a>, <a href="https://boardgamegeek.com/boardgame/145197/space-madness-board-game" rel="noopener noreferrer nofollow" target="_blank">board game maker</a>, founder of the <a href="http://tubeduel.com/" rel="noopener noreferrer nofollow" target="_blank">Cardboard Tube Fighting League</a>, robot sympathizer, level 2 Bard, costume maker, artist working in the medium of balloons, <a href="https://youtu.be/tQIguHlW9UY" rel="noopener noreferrer nofollow" target="_blank">LARPer</a>, former fencing instructor, avid fly­ fisherman, social worker burnout, and <a href="https://youtu.be/YWprnIZsdxg" rel="noopener noreferrer nofollow" target="_blank">sandwich dancer</a>.</p>`
                    : html`<p>
                        ${placeholder("100%", "0.8rem")}
                        ${placeholder("90%", "0.8rem")}
                        ${placeholder("95%", "0.8rem")}
                        ${placeholder("100%", "0.8rem")}
                        ${placeholder("80%", "0.8rem")}
                    </p>`
                }

            </div>
        </section>
    `
}