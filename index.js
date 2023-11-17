var toggleDarkMode = $(".desktop-nav a i");
var onToggle = "bi-toggle-on";
var offToggle = "bi-toggle-off";

toggleDarkMode.on("click", function () {
  if ($(this).hasClass(offToggle)) {
    $(this).removeClass(offToggle);
    $(this).addClass(onToggle);

    $("body").css("background-color", "#121212");
    $("body").css("color", "white");
  } else {
    $(this).removeClass(onToggle);
    $(this).addClass(offToggle);

    $("body").css("background-color", "white");
    $("body").css("color", "black");
  }
});
