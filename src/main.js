(function () {

var templateString = $('#itemTemplate').html();

var templateFunction = _.template(templateString);

let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=baseball&includes=Images,Shop';

$.ajax({
  url: etsyURL,
  dataType: 'jsonp',
  method: 'get'})
  .then (function (response) {
    console.log(response);
    var abc = response.results;
    console.log(abc);
    _.each(abc, function (item) {
      console.log(item);
    var itemHTML = templateFunction(item);
    $('.itemBoxes').append(itemHTML);
  });
});

}());