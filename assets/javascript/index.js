
      var config = {
    apiKey: "AIzaSyCkdKbGAFizbTfKB6hQHmtwHAw0PaWaUrE",
    authDomain: "hangry-b32e3.firebaseapp.com",
    databaseURL: "https://hangry-b32e3.firebaseio.com",
    storageBucket: "hangry-b32e3.appspot.com",
    messagingSenderId: "1022227134758"
  };
  firebase.initializeApp(config);

  var database =   firebase.database();

    var foodList = 0;

    //  On Click event associated with the add-to-do function
    $("#add-to-do").on("click", function(event) {
      event.preventDefault();

        // Grabs user input
  var ingredient = $("#to-do").val().trim();

  // Creates local "temporary" object for holding employee data
  var newIngredient = {
    name: ingredient,
  };

  // Uploads employee data to the database
  database.ref().push(newIngredient);

  // Logs everything to console
  console.log(newIngredient.name);

  // Alert
  alert("Ingredient added to your fridge! Yum!");

  // Clears all of the text-boxes
  $("data-to-do").val("");

        //  // Here we construct our URL
        // var queryURL = "https://api.edamam.com/search?app_key=670728d7841ac0e159d0b3461150d48b&q=onion",

        // // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // // and display it in the div with an id of movie-view

        // //------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        // $.ajax({
        //   url: queryURL,
        //   method: "GET"
        // }).done(function(response) {
        //   $("#data-to-do").text(JSON.stringify(response));
        // });

  // Prevents moving to new page
  return false;
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var ingredient = childSnapshot.val().name;  

      // Get the to-do "value" from the textbox and store it a variable
      var toDoTask = $("#to-do").val().trim();

      // Create a new variable that will hold a "<p>" tag.
      // Then give it an ID in the following form:
      // "item-4" or "item-3" or "item-99", where the number is equal to foodList.
      // Then append the to-do "value" as text to this <p> element.
      var toDoItem = $("<p>");

      toDoItem.attr("id", "item-" + foodList);
      toDoItem.append(" " + toDoTask);

      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give your button a data attribute called data-to-do and a class called "checkbox".
      // Lastly append the letter X inside.

      var toDoClose = $("<button>");

      toDoClose.attr("data-to-do", foodList);
      toDoClose.addClass("checkbox");
      toDoClose.append("✓");

      // Append the button to the to do item
      toDoItem = toDoItem.prepend(toDoClose);

      // Add the button and to do item to the to-dos div
      $("#to-dos").append(toDoItem);

      // Clear the textbox when done
      $("#to-do").val("");

      // Add to the foodList
      foodList++;
  
      var toDoNumber = $(this).attr("data-to-do");

      // Select and Remove the specific <p> element that previously held the to do item number.
      $("#item-" + toDoNumber).remove();

         $("#data-to-do > tbody").append("<tr><td>" + newIngredient + "</td><td>");

    });

    
  // Create an initial foodList variable
   $("#button2").on("click", function(event) {

        // event.preventDefault() can be used to prevent an event's default behavior.
        // Here, it prevents the submit button from trying to submit a form when clicked
        event.preventDefault();

        // Here we grab the text from the input box
        var movie = $("#data-to-do").val();

        // Here we construct our URL
        var queryURL = "https://api.edamam.com/search?app_key=670728d7841ac0e159d0b3461150d48b&q=onion",

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        //------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          $("#data-to-do").text(JSON.stringify(response));
        });



