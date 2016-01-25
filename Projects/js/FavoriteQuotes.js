$(document).ready(function(){
  var tweetQuote;
  var quotes = [
  "Success is the best revenge. -Unknown",
  "If you can't love yourself, how in the hell are you going to love somebody else? -Ru Paul", 
  "You have set standards for how you want to be treated and what you expect from yourself and for yourself -Iyanla Vanzant",
    "Add More Quotes Soon -Me", 
    "la ala lalaaaaa -Me"
];

function myQuote() {
var random = Math.floor(Math.random() * quotes.length);
  tweetQuote=encodeURIComponent(quotes[random]);
  $("#tweet").attr("href",'https://twitter.com/intent/tweet?text="'+tweetQuote+'"');
 
  $("#quote").fadeOut(150,function(){
    $(this).text(quotes[random])}).fadeIn(150);
  return random;
}
  $("#clickme").click(function(){
    var random=myQuote()})});