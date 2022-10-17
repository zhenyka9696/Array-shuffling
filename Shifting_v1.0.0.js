//var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function Main(){
    while(deck.length>1){
      res.push(deck.shift());
      deck.push(deck.shift())
      }
    var draw=res.concat(deck);
    console.log(draw);
    document.write(draw);
    return draw;
  }
var deck=[];
var res=[];
var input=0;
alert('Hello, are we calculating our values or yours, today?');
var question= prompt("If you trust to author input letter 'y', please. Otherwise input letter 'n'.");
if (question=='y'){
  deck = [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140];
  Main(deck);
}
if(question==='n'){
  deck=[];
  addValue();
  Main(deck);
}
/*if(question!=='y'||question!=='n'&&deck==[]){
  alert('You did something wrong, please try again.');
  location.reload();
//only works with numbers
}*/
function addValue() {
  var deckContainer = document.getElementById('array');
  for(var i=0; i >= 0; i++) {
      deck[i] = prompt('Type any value', +i); // Заполняем массив
      if(deck[i] === null) { // если  нажимаем "Отмена"
          alert('Отмена');
          console.log('deck before maping= '+deck);
          deck.pop();//Убираем нуль из массива
          deck=deck.map(String);// At the same time this method more universal
          console.log('typeof= '+typeof deck);// Type of element always is an object. And no matter what I'm doing with it 
          deckContainer.innerHTML = deck;
          console.log('deck= '+deck);
          console.log('deck.length= '+deck.length);
          return deck;
      }
      if(deck[i] === '') {
          alert("You didn't enter a value");
          deck[i] =prompt('Type any value'); 
      }
  }
}
