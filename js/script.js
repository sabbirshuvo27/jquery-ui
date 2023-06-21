$(document).ready(function(){
    // draggable
    $( "#draggable" ).draggable();
    // droppable
    $( "#draggable1" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    // Resizable
    $( "#resizable" ).resizable();
    // Selectable

    $( "#selectable" ).selectable();
    // Sortable 
    $( "#sortable" ).sortable();

    // Accordion
    $( "#accordion" ).accordion({
        collapsible: true
      });
      // Autocomplete
      var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
      });
      // Datepicker
      $( "#datepicker" ).datepicker();
      // Slider
      $( "#slider" ).slider();
      // Tabs
      $( "#tabs" ).tabs();
      // Add Class
      $( "#button" ).on( "click", function() {
        $( "#effect" ).addClass( "newClass", 1000, callback );
      });
   
      function callback() {
        setTimeout(function() {
          $( "#effect" ).removeClass( "newClass" );
        }, 1500 );
      }
      // Color Animation
      var state = true;
    $( "#button1" ).on( "click", function() {
      if ( state ) {
        $( "#effect1" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect1" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
      



});

