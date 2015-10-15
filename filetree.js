var fs = require('fs');

module.exports = filetree;

function filetree(path, maxDepth, exclude, depth) {

    var i, j, l, out, file, isDir, stats, files;

    stats = fs.lstatSync(path);
    if (!stats.isDirectory()) {
        throw new Error(path + ' must be a directory');
    }

    fs.accessSync(path, fs.R_OK);

    if (typeof maxDepth !== 'number') {
        maxDepth = -1;
    }

    if (!Array.isArray(exclude)) {
        exclude = [];
    }

    if (typeof depth === 'undefined') {
        depth = 0;
    } else {
        depth++;
    }

    files = fs.readdirSync(path);

    for (i = 0, l = files.length; i < l; i++) {

        if (exclude.indexOf(files[i]) >= 0) {
            continue;
        }

        file = path + '/' + files[i];
        out = '';
        for (j = 0; j < depth; j++) {
            out += '    ';
        }
        out += files[i];

        try {
            stats = fs.lstatSync(file);
        } catch (e) {
            console.log(out + ' (Does not exist)');
            continue;
        }

        isDir = stats.isDirectory();
        if (isDir) {
            out += '/';
        }

        try {
            fs.accessSync(file, fs.R_OK);
        } catch (e) {
            console.log(out + ' (No permission)');
            continue;
        }

        console.log(out);
        if (isDir && (maxDepth < 0 || depth < maxDepth)) {
            filetree(file, maxDepth, exclude, depth);
        }

    }

}

