'use strict';

const apiurl = "https://api.tvmaze.com/search/shows?q=";

let apiQuery;

const searchButton = document.getElementById("searchButton");
const main = document.querySelector('main');

searchButton.addEventListener('click', makeQuery);

function makeQuery() {

    let search = document.getElementById('searchText').value;
    apiQuery = apiurl + search;
    console.log("Sent query: " + apiQuery);
    makeSearch(apiQuery);
}

function makeSearch(apiQuery)  {

    fetch(apiQuery).then(function(response) {
        return response.json();
    }).then(function(json) {
        showResults(json);
    }).catch(function(error){
        console.log(error);
    });
}

function showResults(jsonData) {

    main.innerHTML=`
    <header>
    <h3> Search results </h3>
    </header>`;

    for( let i = 0; i < jsonData.length; i++) {
        let img;
        if(jsonData[i].show.image == null || jsonData[i].show.image.medium == null){
            img = 'img/img.png';
        }
        else {
            img = jsonData[i].show.image.medium;
        }

        console.log(i + 1 + " TV-shows name: " + jsonData[i].show.name);
        console.log(i + 1 + " Pictures address: " + jsonData[i].show.image);
        console.log(i + 1 + " TV-shows official site: " + jsonData[i].show.officialSite);
        console.log(i + 1 + " TV-shows genre: " + jsonData[i].show.genres);

        let article =`
        <article>
            <header>
                <h2>${jsonData[i].show.name}</h2>
            </header>
            <figure>
                <img src = '${img}' >
                <figcaption>
                    <a href = "${jsonData[i].show.officialSite}">link</a>
                </figcaption>
            </figure>
            <p id="sum">${jsonData[i].show.summary}</p>
            <p id="genre">${jsonData[i].show.genres}</p>
            <p class="separator">|</p>
        </article>`;
        main.innerHTML += article;
    }
}



