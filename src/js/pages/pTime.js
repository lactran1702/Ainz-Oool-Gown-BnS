var pTime = {
  init: function(){
    pTime.timeZone();
  },

  timeZone: function() {
    setInterval(function() {
      var local = moment();
      $("#local_date").text(local.format("MMMM D, YYYY"));
      $("#UTC_date").text(local.format("MMMM D, YYYY"));
      $("#local_time").text(local.format("HH:mm:ss"));
      $("#utc_time").text(local.clone().utc().format("HH:mm:ss"));
      $("#german_time").text(local.clone().tz("Europe/Berlin").format("HH:mm"));
      $("#vietnam_time").text(local.clone().tz("Asia/Saigon").format("HH:mm"));
      $("#tsuki_time").text(local.clone().tz("Australia/Adelaide").format("HH:mm"));
      $("#fuyu_time").text(local.clone().tz("Australia/Perth").format("HH:mm"));
      $("#poy_time").text(local.clone().tz("America/Los_Angeles").format("HH:mm"));
      $("#mikko_time").text(local.clone().tz("America/New_York").format("HH:mm"));
      $("#kaoz_time").text(local.clone().tz("America/Santiago").format("HH:mm"));
    }, 1000);
  }
}
