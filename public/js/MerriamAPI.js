
// var Animal = ""

// function testApp () {
//     $.ajax({
//         type:"get", 
//         url:"https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+Animal+"?key=2f19cdcb-c4b2-4508-a21c-7b48e35dbd48",

//     }) .then(function(response){
//         console.log(response)
//     })

// }
// testApp() 

// var Animal = ""


function testApp () {
    $.ajax({
        type:"get", 
        url:"https://www.dictionaryapi.com/api/v3/references/collegiate/json/snake?key=2f19cdcb-c4b2-4508-a21c-7b48e35dbd48",

    }) .then(function(response){
        console.log(response)
        const definition = response[0].shortdef[2]
    })

}
testApp() 

function testApp1 () {
    $.ajax({
        type:"get", 
        url:"https://www.dictionaryapi.com/api/v3/references/collegiate/json/duck?key=2f19cdcb-c4b2-4508-a21c-7b48e35dbd48",

    }) .then(function(response){
        console.log(response)
        const definition = response[0].shortdef[2]
    })

}
testApp1() 

function testApp2 () {
    $.ajax({
        type:"get", 
        url:"https://www.dictionaryapi.com/api/v3/references/collegiate/json/pitbull?key=2f19cdcb-c4b2-4508-a21c-7b48e35dbd48",

    }) .then(function(response){
        console.log(response)
        const definition = response[0].shortdef[2]
    })

}
testApp2() 
