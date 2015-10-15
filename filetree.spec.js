var expect = require('chai').expect,
    fs = require('fs-extra'),
    path = require('path'),
    sinon = require('sinon'),
    filetree = require('./filetree.js'),
    logBuffer = [];

describe('filetree', function () {

    it('should throw when passed an invalid path', function () {
        var stub,
            filePath = '/tmp/path/to/invalid/folder';

        stub = sinon.stub(console, 'log');

        expect(function () {
            filetree({path: filePath});
        }).to.throw(Error);

        stub.restore();
    });

    it('should throw when passed a valid file path', function () {
        var stub,
            filePath = '/tmp/path/to/valid/file';

        fs.mkdirsSync(path.dirname(filePath));
        fs.closeSync(fs.openSync(filePath, 'w'));

        stub = sinon.stub(console, 'log');

        expect(function () {
            filetree({path: filePath});
        }).to.throw(Error);

        stub.restore();
    });

    it('should not throw when passed a valid directory path', function () {
        var stub,
            filePath = '/tmp/path/to/valid/folder';

        fs.mkdirsSync(filePath);

        stub = sinon.stub(console, 'log');

        expect(function () {
            filetree({path: filePath});
        }).to.not.throw(Error);

        stub.restore();
    });

});
