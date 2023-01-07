// const path = require('path');

// module.exports = {
//     paths: function (paths, env) {        
//         // paths.appIndexJs = path.resolve(__dirname, 'app/src/index.tsx');
//         // paths.appSrc = path.resolve(__dirname, 'app');
//         // return "app/" + paths;
//         return "";
//     },
// }

const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appPath = __dirname;
        paths.appBuild = path.resolve(__dirname, 'build');
        paths.appPublic = path.resolve(paths.appPath, 'static');
        paths.appHtml = path.resolve(paths.appPublic, 'index.html');
        paths.appIndexJs = path.resolve(paths.appPath, 'src/index.tsx');
        paths.appSrc = path.resolve(paths.appPath, 'src');
        return paths;
    }
}