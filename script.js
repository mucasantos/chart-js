const ctx = document.getElementById('myChart');

const URL = "https://www.mercadobitcoin.net/api/MATIC/trades/"

fetch(URL).then(dados => dados.json()).then(result => getCriptoData(result));


function getCriptoData(result) {
    
    result.forEach(element => {
        console.log(element)
        
    });


}


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});