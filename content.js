console.log("trellochecklist hider loaded");

$( document ).ready(function() {

	$('.checklist-title').each(function()
	{
	    $(this).append( "<span style='padding:10px;'><a href='#' class='list-toggle'>show / hide</a></span>" );
	});

	$( ".list-toggle" ).click(function() {
	  $(this).parent().parent().parent().parent().find( ".checklist-items-list" ).toggle( "slow", function() {
	    // Animation complete.
	      console.log("animated");
	  });
	  $(this).parent().parent().parent().parent().find( ".checklist-new-item" ).toggle( "slow", function() {
	    // Animation complete.
	      console.log("animated");
	  });   
	});

});