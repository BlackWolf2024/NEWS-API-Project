import { getNews } from "../api.js"
import { getSearchNews } from "./API.js"

const contentwrapper = document.getElementById('contentWrapper')
const newsSearchInput = document.getElementById('newsSearchInput')
const messageText = document.getElementById('messageText')


getNews().then(data => renderNews(data.articles))

function renderNews(newsData) {

    newsData.forEach(news => {

        const defaultImage = 'https://picsum.dev/400/300'

        const data = {
            urlImage: news.image ?? defaultImage,
            date: news.publishedAt,
            title: news.title,
            description: news.description ?? '',
            url: news.url
        }

        const card = `
            <div class="card">
                <div class="card-image-wrapper">
                    <img src="${data.urlImage}">
                </div>
                <div class="card-content">
                    <span class="card-date">${data.date}</span>
                    <h2 class="card-title">
                        <a href="${data.url}">${data.title}</a>
                        <p class="card-description">${data.description}</p>
                    </h2>
                </div>
            </div>
        `;

        contentwrapper.insertAdjacentHTML('beforeend', card)
    });

    messageText.style.display = 'none'
}

newsSearchInput.addEventListener('input', event => {
    const inputSearchValue = event.target.value;

    contentwrapper.innerHTML = ''

    if (inputSearchValue == ''){
        getNews().then(data => renderNews(data.articles))
    }
    else {
        getSearchNews(inputSearchValue).then(
            data => renderNews(data.articles))
    }
})

export function showMessage (message) {
    messageText.style.display = 'flex'
    messageText.textContent = message
}