$(document).ready(function() {

var pbj = 0;
var gCheese = 0;
var rBeef = 0;

// any time we click the sandwich it will print at the h3 id.

$('.pButter').on('click', function() {
  // when this is clicked i want to write somwting on the h3
  $('#sandwichPicked').text('Peanut butter jellly time!!!');
  // alert('Peanut butter jelly time');
  pbj++
  $('#counts').text('You just had ' + pbj + ' peanut butter and jelly sandwichs..')
  
});






});