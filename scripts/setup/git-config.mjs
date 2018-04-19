import fs from 'fs';
import projectConfigReader from 'git-config';
import gitconfig from 'gitconfig';

const prettify = collection =>
  Object.entries(collection)
    .map(([key, value]) =>
      `\t${key} = ${value}`)
    .join('\n');

/**
 * Applies project-specific settings to local git config.
 */
export default function (filePath) {
  // STOP if we're in a production scenario
  if (!fs.existsSync(filePath)) {
    return;
  }
  const projectConfig = projectConfigReader.sync(filePath);
  const directives = {};
  Object.entries(projectConfig)
    .forEach(([group, props]) => Object.entries(props)
      .forEach(([prop, value]) => {
        directives[`${group}.${prop}`] = value;
      }));
  console.log('Setting local git config per project specs:\n\n', prettify(directives), '\n');
  gitconfig.set(directives);
}
