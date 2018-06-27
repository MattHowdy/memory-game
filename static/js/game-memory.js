
// start the memory game
function main( ) {
    let deckArray = ['1.jpg', '2.jpg', "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", '12.jpg'];
    let cards = document.getElementsByClassName('cards');
    let numberOfCards = cards.length;

    let shuffledCards = shuffle(deckArray, numberOfCards);

    taggingCards(shuffledCards);
}

main();


//Shuffle cards
function shuffle(array, card_number) {
    // Include the desired number of cards and duplicate the cards
    array = array.slice(0, card_number/2);
    array = array.concat(array);

  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


//tags cards
function taggingCards(shuffledCards){
    let cards = document.getElementsByClassName('cards');
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.addEventListener('click',function(){ isThereaMatch(shuffledCards);});
            }
        }



    var openedCards = [];
    var openCardsID = [];
    var flipCounter = 0;

//check matched cards
function isThereaMatch(shuffledcards) {
    let deck = shuffledcards;

    let imgToChange = document.getElementById(event.target.id);

    if (openedCards.length < 2) {
        imgToChange.innerHTML = `<img class="${ deck[event.target.id-1] }" src="/static/img/${ deck[event.target.id-1] }" width="100" height="100"></img>`;
        // let changedImg = document.getElementById(event.target.id);
        if(openedCards.length === 0){
            openedCards.push(imgToChange.childNodes);
            openCardsID.push(event.target.id);
        } else if(openedCards.length === 1){
            openedCards.push(imgToChange.childNodes);
            openCardsID.push(event.target.id);

            if (openedCards[1][0].src === openedCards[0][0].src){
                flipCounter += 2;
                openedCards = [];
                openCardsID = [];

                if (flipCounter === shuffledcards.length){
                    alert('Congrats you won');
                }
            } else {
                function flipBack() {
                    var card1 = document.getElementById(openCardsID[0]);
                    card1.innerHTML = `<i class="icon fas fa-crow fa-7x" id="${ openCardsID[0] }"></i>`;

                    var card2 = document.getElementById(openCardsID[1]);
                    card2.innerHTML = `<i class="icon fas fa-crow fa-7x" id="${ openCardsID[1] }"></i>`;

                    openedCards = [];
                    openCardsID = [];
                }

                setTimeout(flipBack, 700);
                    }
                }
            }
        }