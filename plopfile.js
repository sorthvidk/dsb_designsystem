const path = require('path');

const defaultFolder = 'src';
const templateFolder = 'plop-templates';
const htmlTemplate = path.join(templateFolder, 'html.hbs');
const sbTemplate = path.join(templateFolder, 'story.hbs');
const sbPagesTemplate = path.join(templateFolder, '/page.hbs');
const scssTemplate = path.join(templateFolder, '/scss.hbs');
const readmeTemplate = path.join(templateFolder, '/readme.hbs');
const jsTemplate = path.join(templateFolder, '/js.hbs');

module.exports = function (plop) {
	plop.setGenerator('basics', {
		description: 'this is a skeleton plopfile',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Component name:'
			},
			{
				type: 'list',
				name: 'type',
				choices: ['components','blocks','core','pages'],
				default: 'components'
			}
		],
		actions: function (data) {
            var actions = [];
      
            if (data.type === 'pages') {
              actions.push({
                type: 'add',
                path: path.join(defaultFolder, '/pages/{{name}}/{{name}}.stories.js'),
                templateFile: sbPagesTemplate,
              });
            } else {
              let pathString = path.join(defaultFolder, 'components');
      
              actions.push({
                type: 'add',
                path: path.join(pathString + '/{{name}}/{{name}}.html.js'),
                templateFile: htmlTemplate,
              });
      
              actions.push({
                type: 'add',
                path: path.join(pathString + '/{{name}}/{{name}}.stories.js'),
                templateFile: sbTemplate,
              });
              actions.push({
                type: 'add',
                path: path.join(pathString + '/{{name}}/README.md'),
                templateFile: readmeTemplate,
              });
              actions.push({
                type: 'add',
                path: path.join(pathString + '/{{name}}/_{{name}}.scss'),
                templateFile: scssTemplate,
              });
              actions.push({
                type: 'add',
                path: path.join(pathString + '/{{name}}/{{name}}.js'),
                templateFile: jsTemplate,
              });
            }
            return actions;
        },
	});
};
