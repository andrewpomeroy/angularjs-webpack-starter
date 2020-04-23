import angular from "angular";

angular.module("app").controller("HelloController", function($scope) {
	$scope.person = "andrew";
});

import testComponent from "./components/test-component";
angular.module("app").component("testComponent", testComponent);
