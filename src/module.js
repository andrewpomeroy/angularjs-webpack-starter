import angular from "angular";
import "./bootstrapper";

angular.module("app").controller("HelloController", function($scope) {
	$scope.person = "andrew";
});

import testComponent from "./components/test-component";
angular.module("app").component("testComponent", testComponent);
