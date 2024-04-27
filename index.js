let container = document.querySelector('#country-data--container')
let sort = document.querySelector('.sort')

function getData(url){
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        showData(res.data)
    })
}

function showData(arr){
    container.innerHTML = ""
    arr.forEach((ele, i)=> {
        let div = document.createElement('div')
        div.setAttribute('class', 'country-data')

        let name = document.createElement('div')
        name.setAttribute('class', 'country-name')
        name.innerHTML = `<h2>${ele.country}</h2>` 

        let population = document.createElement('div')
        population.setAttribute('class', 'country-population')
        population.innerHTML =  `<p> <b>Population</b> : ${ele.population} </p>`

        let rank = document.createElement('div')
        rank.setAttribute('class', 'country-rank')
        rank.innerHTML = `<p> <b>Rank</b> : ${ele.Rank} </p>`

        div.append(name, population, rank)
        container.append(div)
    })
}

function sortByPopulation(){
    getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?sort=population&order=desc")
}

sort.addEventListener('click', sortByPopulation)

getData("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")