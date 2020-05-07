//https://www.thesportsdb.com/api.php

const search = document.getElementById('search'),
    submit = document.getElementById('submit'),
    resultsHeading = document.getElementById('results-heading'),
    teams = document.getElementById('teams');


// Search and fetch team from the API
function searchTeam(e) {
    e.preventDefault();

    // searched term
    const term = search.value;

    if (term.trim()) {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${term}`)
            .then(res => res.json())
            .then(data => {
                resultsHeading.innerHTML = `<h2>Results for: ${term}</h2>`;

                if (data.teams === null) {
                    resultsHeading.innerHTML = `<p>There were no search results, try another team.</p>`
                } else {
                    console.log(data.teams);
                    data.teams.forEach(element => console.log(element.strTeam));
                    teams.innerHTML = data.teams.map(teams => `
                        <div class="results-container">  
                        <img src="${teams.strTeamBadge}">
                        <div class="team-list">
                            <div class="team-info" data-teamsID="${teams.idTeam}">${teams.idTeam}</div>
                        </div>
                        </div>
                    `)
                }

            });
        search.value = '';
    } else {
        alert('Please enter a search term')
    }
}

// Event listener
submit.addEventListener('submit', searchTeam);



