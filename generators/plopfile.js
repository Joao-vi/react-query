module.exports = function (plop) {
  // create your generators here
  plop.setGenerator("component", {
    description: "Create component's files.",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component's name:",
      },
      {
        type: "input",
        name: "context",
        message: "Context:",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{context}}/{{name}}/index.tsx",
        templateFile: "./templates/index.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{context}}/{{name}}/styles.ts",
        templateFile: "./templates/styles.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{context}}/{{name}}/stories.tsx",
        templateFile: "./templates/stories.hbs",
      },
    ], // array of actions
  });
};
