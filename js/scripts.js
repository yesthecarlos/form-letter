$(document).ready(function() {
  $("formOne").submit(function(event) {
  const nameInput = $("input#name").val();

  $(".name").append(nameInput);

  $("letter").show();

  event.preventDefault();
});
});
