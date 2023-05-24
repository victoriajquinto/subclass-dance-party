$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var x = ($('body').width() - 40) * Math.random() + 20;
    var y = ($('body').height() - 40) * Math.random() + 20;
    var dancer = new dancerMakerFunction(y, x, Math.random() * 1000);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  //in init file, add a button that has click event listener that activates this method
  $('.lineUpButton').on('click', function(event) {
    console.log('lineup activated');
    for (var f = 0; f < window.dancers.length; f++) {
      window.dancers[f].lineUp(($('body').height() - 40) * ((f + 0.5) / window.dancers.length) + 20);
    }
  });
});
