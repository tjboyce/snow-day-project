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
})}