import * as fs from 'fs';
import * as util from 'util'
import writeComponent from './writeComponent';

const readFile = util.promisify(fs.readFile);

export default function createComponent(componentType: string, name: string) {
    readFile(`./templates/${componentType}.tsx`, { encoding: 'utf8' })
        .then((content) => {
            const regex = /(l?|n?)XXJJReplace/gi;
            const newComponent = content.replace(regex, (match,) => {
                if (match[0] === 'l') {
                    return name.charAt(0).toLowerCase() + name.slice(1);
                }
                return name
            })
            writeComponent(name, newComponent)
        })
        .catch(error => console.log(error));
}