var app = angular.module("myApp", []);

app.config(function($compileProvider){
  //other configuration code here
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp):/);
  // $compileProvider.aHrefSanitizationWhitelist(/^\s*(https):/);
  // $compileProvider.aHrefSanitizationWhitelist(/^\s*(http):/);
  // $compileProvider.aHrefSanitizationWhitelist(/^\s*(reddit):/);
});

app.controller("myCtrl", function ($scope) {
  $scope.title = "Argaam Article";
  $scope.website = "https://www.argaam.com/en";

  (function () {
    var shareButtons = document.querySelectorAll(".share-btn");

    if (shareButtons) {
      [].forEach.call(shareButtons, function (button) {
        button.addEventListener("click", function (event) {
          var width = 650,
            height = 450;

          event.preventDefault();

          window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=' + width + ',height=' + height + ',top=' + (screen.height / 2 - height / 2) + ',left=' + (screen.width / 2 - width / 2));
        });
      });
    }

  })();

});