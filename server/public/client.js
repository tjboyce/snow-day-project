console.log('js has been loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jQ has been loaded');
    $('#newPlayerSubmitButton').on('click', handleClick)
    $.ajax({
        url: '/players',
        method: 'GET'
    }).then(function (playerOne) {
        for (let i = 0; i < playerOne.length; i++) {
            $('#unorderedListUl').append(`
                
                <li>${playerOne[i].name}</li>
                `)

        }



    })
    $('#addGame').on('click', addGame)
    $.ajax({
        url: '/newGame',
        method: 'GET'
    }).then(function (gameOne) {
        for (let i = 0; i < gameOne.length; i++) {
            $('#tbody').append(`
              <tr>
                  <td>${gameOne[i].playerName}</td>
                  <td>${gameOne[i].playerScore}</td>
                  <td>${gameOne[i].opponentName}</td>
                  <td>${gameOne[i].opponentScore}</td>
                  <td>${gameOne[i].winner}</td>
                </tr>
          `)

        }
    })
}

function handleClick() {

    let newPlayer = $('#newPlayerIn').val();
    console.log(newPlayer);
    $.ajax({
        url: '/new',
        method: 'POST',
        data: {
            name: newPlayer
        }
    }).then(function () {
        $.ajax({
            url: '/players',
            method: 'GET'
        }).then(function (playerOne) {
            $('#unorderedListUl').empty();
            for (let i = 0; i < playerOne.length; i++) {
                $('#unorderedListUl').append(`
                
                <li>${playerOne[i].name}</li>
                `)

            }



        })
    })
}