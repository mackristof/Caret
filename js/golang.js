define([
    "command"
    ], function(command) {
      command.on("golang:build", function() {
        reqListener = function(r){
          console.log("build responded");
          console.log(this.responseText);
        }

        console.log("build called");
        var oReq = new XMLHttpRequest();
        oReq.onload = reqListener;
        oReq.open("GET", "http://localhost:7525/build", true);
        oReq.send();
      });
    });
