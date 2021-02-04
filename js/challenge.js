function main(){
    createPauseListener()
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

main()