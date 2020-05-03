/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// Adding Five random Quotes
// Dates are not exact
let quotes = []
quotes.push(
  { quote : "Victory goes to the player who makes the next-to-last mistake." ,
    source :  "Chessmaster Savielly Grigorievitch Tartakower",
    tags : "Motivation", 
    citation : "web",
    link : "https://www.cs.virginia.edu/~robins/quotes.html"
},
{ quote : "You can avoid reality, but you cannot avoid the consequences of avoiding reality." ,
    source :  "Ayn Rand",
    tags : "Life", 
    year : "1950",
    citation : "google",
    
},
{ quote : "Not everything that can be counted counts, and not everything that counts can be counted." ,
    source :  "Albert Einstein",
    
    year : "1945",
    citation : "internet",
    link : "https://www.cs.virginia.edu/~robins/quotes.html"
},
{ quote : "The full use of your powers along lines of excellence." ,
    source :  "John F. Kennedy",
    tags : "Happiness", 
    year : "1957",
    citation : "web",
    
},
{ quote : "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity." ,
    source :  "Martin Luther King Jr",
    tags : "Reality", 
    year : "1960",
    citation : "web",
    link : "https://www.cs.virginia.edu/~robins/quotes.html"
}
)




/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    
    
    // my_randome :- to hold the random value between 0-4( in this case)
    let my_randome = Math.floor(Math.random()* quotes.length)

    // to Check the random number
    console.log(`Random number : ${my_randome}`)
    // to Check the random number quote
    console.log(`Random number generated Quote : ${quotes[my_randome]}`)
    
    // Returing the random Quote
    return  quotes[my_randome]


}



/***
 * `printQuote` function
***/
//Reading the 2nd div of the htlml page using the ID to send the random Quote data
// <p class="source">Patrick McKenzie<span class="citation">Twitter</span><span class="year">2016</span></p>
function printQuote()
{
    const my_obj = getRandomQuote();
    
    // Creating the string to send into inner HTML
    let my_str = `<p class="quote">${my_obj.quote}</p><p class="source">${my_obj.source}` 
    if(my_obj.tags) {
      my_str = my_str + `<span class="citation">${my_obj.tags}</span>`
    }
    if(my_obj.citation) {
      if(my_obj.link) {
        my_str = my_str + `<span class="citation"><a href=${my_obj.link} style="color:white">${my_obj.citation}</a></span>`
      }
      else {
        
        my_str = my_str + `<span class="citation">${my_obj.citation}</span>`
      }
    }
    if(my_obj.year){
      my_str = my_str + `<span class="year">${my_obj.year}</span>` 
    }
    my_str = my_str + '</p>' 

  // to Check in case of error in the string html
  console.log(my_str)
  document.getElementById('quote-box').innerHTML = my_str
  
  // Reference from CSS W3 Schools : https://www.w3schools.com/cssref/func_rgb.asp
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  document.body.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;



} 

function timing_refresh( print_function , time_in_sec){

// Reference from W3 Schools :- https://www.w3schools.com/js/js_timing.asp 
//setInterval(function, milliseconds)
// 10 sec = 10 * 1000 milisec
setInterval(print_function,time_in_sec*1000)


}


/* Main  Code of Execution */
let display_quote = getRandomQuote();
printQuote()
timing_refresh(printQuote,10);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);




