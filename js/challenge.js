function main(){
    createPauseListener()
    createIncrementListener()
    createDecrementListener()
    createLikeListener()
    commentListener()
}

const counter = document.getElementById('counter')
let tickerId = window.setInterval(uptick, 1000);

function uptick(){
        counter.innerText = parseInt(counter.innerText, 10) + 1
        // console.log("counter increased by one")
}

function createPauseListener(){
    const pause = document.getElementById("pause")
    const plus = document.getElementById("plus")
    const minus = document.getElementById("minus")
    const likeButton = document.getElementById("heart");


    pause.addEventListener('click', function(e){
        if (pause.id==="pause"){
            clearInterval(tickerId);
            plus.disabled = true
            minus.disabled = true
            likeButton.disabled = true
            pause.innerText="resume";
            pause.id="resume";
        } else {
            tickerId = window.setInterval(uptick, 1000);
            plus.disabled = false
            minus.disabled = false
            likeButton.disabled = false

            pause.innerText="pause";
            pause.id="pause";
        }
    })
}

function createIncrementListener(){
    const plus = document.getElementById("plus")

    plus.addEventListener('click', function(e){
        counter.innerText = parseInt(counter.innerText, 10) + 1
        // console.log("counter increased by one using button")
    })
}

function createDecrementListener(){
    const minus = document.getElementById("minus")

    minus.addEventListener('click', function(e){
        counter.innerText = parseInt(counter.innerText, 10) - 1
        // console.log("counter decreased by one using button")
    })
}

function createLikeListener(){
    const likeButton = document.getElementById("heart");
    const ulLikes = document.getElementsByClassName("likes")[0];

    likeButton.addEventListener('click', function(e){
        // console.log("hit like button")
        let currentNumber = parseInt(document.getElementById("counter").innerText, 10)

        if (document.getElementById(`like-${currentNumber}`)){
            const li = document.getElementById(`like-${currentNumber}`)
            li.value = parseInt(li.value, 10) + 1
            li.innerText= `${currentNumber}'s like Counter: ${li.value}`
        } else {
            const li = document.createElement('li')
            li.innerText = `${currentNumber}'s like Counter: 1`
            li.value = 1
            li.id = `like-${currentNumber}`
            ulLikes.appendChild(li)
        }
        
    })
}

function commentListener(){
    const divComments = document.getElementById("list")
    const form = document.getElementById("comment-form")

    form.addEventListener('submit', function(e){
        e.preventDefault()
        // console.log("pressed submit")

        const p = document.createElement('p')

        p.innerText= `comment: ${e.target["comment"].value}`
        divComments.appendChild(p)
        form.reset()
    })
}

main()