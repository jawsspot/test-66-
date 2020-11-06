$("body").on("keydown", function (e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const key = e.key.toUpperCase();
    const elem = $(`<p>${key}</p>`).css({
      display: "none",
      "font-weight": "bold",
      color: "blue",
    });
    $("main").append(elem);
    $("p").fadeIn(3000);
  }
  if (e.keyCode === 8) {
    $("p").last().remove();
  }
});
