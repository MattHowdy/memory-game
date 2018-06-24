// functions:
    // main function - calls the other functions, that starts the software, defines global variables
    // shuffle- shuffles imgs
    // tagging - adds eventListeners to imgs

    // business logic - evalutes clicks (first click, second click) if matches two images removes, else returns the images
    //

// const imagesArray = ['1.jpg', '2.jpg', "3.jpg", "4.jpg","5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", '12.jpg']
// var cards = document.getElementsByClassName('card');
// var numberOfCards = cards.length;
// const deck = document.getElementsByClassName("deck");


//Shuffle cards
// function shuffle(array, card_number) {
//     // Include the desired number of cards and duplicate the cards
//     array = array.slice(0, card_number/2);
//     array = array.concat(array)
//
//   var currentIndex = array.length, temporaryValue, randomIndex;
//
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//
//   return array;
// }


//
// // you can select elements by multiple ways, for example by their class
var cards = document.getElementsByClassName('cards');
for(let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener('click', function() {
        alert('My number is: ' + i)
    });
}

//
// //Display cards
// function displayCard(){
//    this.classList.toggle("open");
//    this.classList.toggle("show");
//    this.classList.toggle("disabled");
// }

//
// // click on the cards
// function clickOnTheCards(){
//     var cells = document.getElementsByClassName('card');
//     for(let i = 0; i < cells.length; i++) {
//     // we uses classic for loop to have the "indexes" of the elements
//         let cell = cells[i];
//         cell.addEventListener('click', function() {
// //         alert('My number is: ' + i)
//     });
// }


// deck of all cards in game

// function startGame(){
//    var shuffledCards = shuffle(imagesArray, numberOfCards);
//    for (var i= 0; i < shuffledCards.length; i++){
//       [].forEach.call(shuffledCards, function(item){
//          deck.appendChild(item);
//       });
//    }
// }
//
// window.onload = clickOnTheCards();
// window.onload = startGame();
// document.body.onload = startGame();

// document.getElementsByClassName("card").classList.add("crow-card");





// // get the images
// function getRandomImages(imgAr, path){
//     path = path || 'static/img/';
//     var num = Math.floor(Math.random() * imgAr.length);
//     var img = imgAr[num];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); doument.close();
// }
//
// // getRandomImage([5], '/static/img/')
//
//
// alert(document.images[0].src);
//