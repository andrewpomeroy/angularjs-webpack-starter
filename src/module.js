import angular from "angular";

import welcomeLayout from "./components/welcome-layout";

angular.module("app", []).controller("HelloController", function($scope) {
  $scope.person = "daton89";
});

angular.module("app").component("welcomeLayout", welcomeLayout);
