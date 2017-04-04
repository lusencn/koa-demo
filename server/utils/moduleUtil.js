import fs from 'fs';
import path from 'path';

const getAllModulesInDir = (dir) => {
    let modules = {};
    fs.readdirSync(dir).filter(file => {
        return (
            (file.indexOf('.') !== 0) &&
            (file.slice(-3) === '.js')
        );
    }).forEach(function(file) {
        let controller = require(path.join(dir, file));
        modules[file.slice(0, -3)] = controller.default;
    });
    return modules;
}

export default {
    getAllModulesInDir
}
