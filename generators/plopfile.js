module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "Create a component.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component's name:",
      },
      {
        type: "input",
        name: "context",
        message: "Component's context:",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{context}}/{{kebabCase name}}/index.tsx",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{context}}/{{kebabCase name}}/styles.ts",
        templateFile: "templates/styles.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{context}}/{{kebabCase name}}/stories.tsx",
        templateFile: "templates/stories.hbs",
      },
      {
        type: "append",
        path: "../src/components/{{context}}/index.ts",
        template: 'export * from "./{{kebabCase name}}";', // replace your append template here
        pattern: /(appendHere\s)/,
      },
    ], // array of actions
  });
};
