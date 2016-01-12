const mocha = require('mocha');
const net = require('net');
const fs = require('fs');
const server = require(__dirname + '/../lib/tcpserver.js');
const expect = require('chai').expect;

describe('the server', function() {

  var numFiles;
  fs.readdir(__dirname + '/../textfiles', function(err, files) {
  	if(err) throw err;
  	numFiles = files.length;
  });
  before(function() {
    var client = new net.Socket();
    client.connect(3000);
    client.write('Hello');
  });  

  it('will not have created a file yet, just dummy', function() {
     expect(numFiles).to.eql(1);
  });
});