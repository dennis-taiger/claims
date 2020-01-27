$(".progress .circle")
  .removeClass()
  .addClass("circle");
$(".progress .bar")
  .removeClass()
  .addClass("bar");

function startChange() {
  var i = 1;
  $(".progress .circle")
    .removeClass()
    .addClass("circle");
  $(".progress .bar")
    .removeClass()
    .addClass("bar");

  setInterval(function() {
    $(".progress .circle:nth-of-type(" + i + ")").addClass("active");

    $(".progress .circle:nth-of-type(" + (i - 1) + ")")
      .removeClass("active")
      .addClass("done");

    $(".progress .circle:nth-of-type(" + (i - 1) + ") .label").html("&#10003;");

    $(".progress .bar:nth-of-type(" + (i - 1) + ")").addClass("active");

    $(".progress .bar:nth-of-type(" + (i - 2) + ")")
      .removeClass("active")
      .addClass("done");

    i++;

    if (i == 0) {
      $(".progress .bar")
        .removeClass()
        .addClass("bar");
      $(".progress div.circle")
        .removeClass()
        .addClass("circle");
      i = 1;
    }

    if (i == 8) {
        document.getElementById("after-upload").style.display = "block";
        document.getElementById("detailsBox6").style.display = "block";
        document.getElementById("no-show-1").style.display = "block";
        document.getElementById("no-show-2").style.display = "block";
        document.getElementById("no-show-3").style.display = "block";
        document.getElementById("no-show-4").style.display = "block";
        document.getElementById("no-show-5").style.display = "block";
        document.getElementById("no-show-6").style.display = "block";
        document.getElementById("no-show-7").style.display = "block";
        document.getElementById("no-show-8").style.display = "block";
        document.getElementById("no-show-9").style.display = "block";
        document.getElementById("no-show-10").style.display = "block";
        document.getElementById("no-show-11").style.display = "block";
        document.getElementById("no-show-12").style.display = "block";
        document.getElementById("cname").value = "ELITE DENTAL GROUP PTE LTD";
        document.getElementById("pname").value = "SOO KEE SHIM (DAVID)";
        document.getElementById("inv_no").value = "39473";
        document.getElementById("date").value = "15 Jan 20";
        document.getElementById("doctor").value = "DR JACLYN TOH AI LIN";
        document.getElementById("amount").value = "337.05";
        
    }
  }, 1000);
  //document.getElementById("after-upload").style.display = "block";
}
