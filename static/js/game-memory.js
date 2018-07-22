
// start the memory game
function main( ) {
    let deckArray = ['1.jpg', '2.jpg', "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", '12.jpg'];
    let cards = $('.cards');
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
    let cards = $('.cards');
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.addEventListener('click', function (event){
            isThereaMatch(shuffledCards, event, i);
            });
        }
    }



    var openedCards = [];
    var flipCounter = 0;

//check matched cards
function isThereaMatch(shuffledcards, event, index) {
    let deck = shuffledcards;

    let card = event.currentTarget;

    if (openedCards.length < 2) {
        card.innerHTML = `<img class="${ deck[index] }" src="/static/img/${ deck[index] }" width="100" height="100"></img>`;
        if(openedCards.length === 0){
            openedCards.push(card);
        } else if(openedCards.length === 1){
            openedCards.push(card);

            if (openedCards[0].querySelector('img').src === openedCards[1].querySelector('img').src){
                flipCounter += 2;
                openedCards = [];

                if (flipCounter === shuffledcards.length){
                    alert('Congrats you won');
                }
            } else {
                function flipBack() {
                    openedCards[0].innerHTML = `<i class="icon fas fa-crow fa-7x"></i>`;
                    openedCards[1].innerHTML = `<i class="icon fas fa-crow fa-7x"></i>`;

                    openedCards = [];
                }

                setTimeout(flipBack, 700);
                    }
                }
            }
        }