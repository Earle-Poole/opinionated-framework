import * as fs from 'fs';
import * as util from 'util'

const writeFile = util.promisify(fs.writeFile);

export default function writeComponent(componentName: string, template: string) {
  console.log(componentName, template)
  writeFile(`./components/${componentName}.tsx`, template)
    .then(() => {
      writeFile(`./css/${componentName.charAt(0).toLowerCase() + componentName.slice(1)}.css`, `.${componentName}: {}`)
      console.log('File created successfully');
    })
    .catch(error => console.log(error));

}