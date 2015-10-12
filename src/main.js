(function () {

  var templateString = $('#itemTemplate').html();

  var templateFunction = _.template(templateString);

  var firstTwentyFive = _.first(etsy.results,25);

  _.each(firstTwentyFive, function (item) {
  // console.log(item);
  var itemHTML = templateFunction(item);
  $('.itemBoxes').append(itemHTML);
});


  $('#hambutton').on('click', '#hambutton', function (event){
  var btn = $(event.target);
  var popup = $(btn.sibling('#popup'));
  popup.removeClass('hidden');
  popup.addClass('reveallist');
});


}());