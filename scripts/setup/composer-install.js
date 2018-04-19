import { execSync } from 'child_process';

const VERSION_OUTPUT_REGEX = /^Composer version ([1-9][0-9]*|0)\.([1-9][0-9]*|0)\.([1-9][0-9]*|0) /;

export default function () {
  if (!VERSION_OUTPUT_REGEX.test(execSync('composer -V'))) {
    throw new Error('Composer is not installed. Cannot run `composer install`');
  }
  const cwd = `${__dirname}/../..`; // at the project's root dir
  console.log('Running `composer install`...\n\n');
  return execSync('composer install', { cwd });
}
