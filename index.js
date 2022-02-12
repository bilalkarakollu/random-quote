const newBtn = document.getElementById('new-quote');
var text = document.getElementById('text');
var quoteText = document.getElementById('quote-text');
var author = document.getElementById('author');
var tweetBtn = document.getElementById('tweet-quote');
var tumblrBtn = document.getElementById('tumblr-quote');
var body = document.getElementsByTagName('body')[0];

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  var quotes = [];

  fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => response.json())
    .then(data => quotes = data.quotes).finally(()=>{
        randomQuotes()
    })

newBtn.addEventListener('click',()=>{
    randomQuotes();
})

function randomNumber(){
    return Math.floor(Math.random() * quotes.length)
}

function randomColorNumber(){
    return Math.floor(Math.random() * colors.length)
}

function randomQuotes(){
    const getQuotes = quotes[randomNumber()];
    const getColor = colors[randomColorNumber()];
    body.style.backgroundColor = getColor;
    tweetBtn.style.backgroundColor = getColor;
    tumblrBtn.style.backgroundColor = getColor;
    newBtn.style.backgroundColor = getColor;
    author.style.color = getColor;
    quoteText.style.color = getColor;

    const currentQuote = getQuotes.quote;
    const currentAuthor = getQuotes.author;

    text.innerHTML = currentQuote;
    author.innerHTML = currentAuthor;

    tweetBtn.setAttribute("href", `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(currentQuote+currentAuthor)}`);
    tumblrBtn.setAttribute("href", `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(currentQuote+currentAuthor)}`);
}