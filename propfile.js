const path = require('path');

const defaultFolder = 'src/components';
const templateFolder = 'plop-templates';
const jsxTemplate = path.join(templateFolder, 'html.hbs');
const sbTemplate = path.join(templateFolder, 'story.hbs');
const sbPagesTemplate = path.join(templateFolder, '/page.hbs');
const scssTemplate = path.join(templateFolder, '/scss.hbs');

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
            }
            return actions;
        },
	});
};
