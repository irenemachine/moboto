//= require_tree .
//
//

$(document).ready(function() {
  ["schedule","sponsors","register","location"].map( function(id) {
    var element = "h1#" + id + ".mobile";
    $(element).click(function () {
      if ($(element).next().is(":hidden")) {
        $(element).next().show('fast');
      } else {
        $(element).next().slideUp();
      }
    });
  });

});

