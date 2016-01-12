const mocha = require('mocha');
const net = require('net');
const fs = require('fs');
const server = require(__dirname + '/tcpserver.js');
const expect = require('chai').expect;

describe('the server', function() {
  //var testFile = __dirname + '/textfiles/*.txt';
  
  before(function() {
    var client = new net.Socket();
    client.connect(3000);
    client.write('Hello');
  });  

  it('will not have created a file yet', function() {
     expect(fs.existsSync(testFile).to.eql(false));
    });
});