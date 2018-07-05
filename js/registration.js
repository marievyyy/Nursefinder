$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".dropdown-trigger").dropdown();
  $(".datepicker").datepicker();
  $(document).ready(function() {
    $(".tabs").tabs();
  });

  $("input#on-going").on("click", function() {
    if ($("input#on-going").is(":checked")) {
      $("input#date_end").prop("disabled", "disabled");
    } else {
      $("input#date_end").prop("disabled", false);
    }
  });
});
