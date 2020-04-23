import { createTestApp, expected } from "angularjs-jest";

console.log(createTestApp);

const testApp = createTestApp({

	// modules to include in test app (optional)
	modules: ["app"],
  
	// services or service components to mock in test app (optional)
	mocks: {
		SomeSyncService: { get: () => 42 },
		SomeAsyncService: { getAsync: () => Promise.resolve("42, I promise") },
	},
  
	// additional services or service components you want to access (optional)
	access: ["$http", "$scope"]
});

testApp.$scope.name = "Alice";

const element = testApp.render("Hello {{ name }}");

expected(element.text()).toEqual("Hello Alice");