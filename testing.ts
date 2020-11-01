import createComponent from './createComponent';

const command = process.argv[2];
const componentType = process.argv[3];
const name = process.argv[4];

if (command && componentType && name) {
  switch (command) {
    case 'createComponent': {
    createComponent(componentType, name);
      break;
    }
    default: {
      console.log('Unknown command');
    }
  }
} else {
  console.log('Command missing');
}