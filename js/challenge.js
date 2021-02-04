function main(){
    createPauseListener()
    createIncrementListener()
    createDecrementListener()
}

const counter = document.getElementById('counter')
let tickerId = window.setInterval(uptick, 1000);

function uptick(){
        counter.innerText = parseInt(counter.innerText, 10) + 1
        console.log("counter increased by one")
}

function createPauseListener(){
    const pause = document.getElementById("pause")

    pause.addEventListener('click', function(e){
        if (pause.id==="pause"){
            clearInterval(tickerId);
            pause.innerText="resume";
            pause.id="resume";
        } else {
            tickerId = window.setInterval(uptick, 1000);
            pause.innerText="pause";
            pause.id="pause";
        }
    })
}

function createIncrementListener(){
    const plus = document.getElementById("plus")

    plus.addEventListener('click', function(e){
        counter.innerText = parseInt(counter.innerText, 10) + 1
        console.log("counter increased by one using button")
    })
}

function createDecrementListener(){
    const minus = document.getElementById("minus")

    minus.addEventListener('click', function(e){
        counter.innerText = parseInt(counter.innerText, 10) - 1
        console.log("counter decreased by one using button")
    })
}
main()