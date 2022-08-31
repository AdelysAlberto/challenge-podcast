import path from 'path';
import fs  from 'fs';

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const paths = {
  appDist: resolveApp('dist'),
  appServerTs: resolveApp('src/server/index.ts') 
}

export default paths