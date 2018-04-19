import runGitConfig from './setup/git-config';
import runComposerInstall from './setup/composer-install';

// 1. Apply project's .gitconfig to local git config
runGitConfig(`${__dirname}/../.gitconfig`);

// 2. Install dependencies handled by Composer
runComposerInstall();
