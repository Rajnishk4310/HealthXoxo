setInterval(function() {
    $(".blink").animate({ color: "green" }, "slow");
    $(".blink").animate({ color: "white" }, "slow");
  }, 500);