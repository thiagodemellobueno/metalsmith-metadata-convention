var assertDir = require('assert-dir-equal')
var metadata = require('../')
var Metalsmith = require('metalsmith')
var assert = require('assert')

/* global it */
it('should match metadata from file conventions', function (done) {
  var metalsmith = Metalsmith('test/fixtures/basic')
  metalsmith
    .use(metadata())
    .build(function (err) {
      if (err) {
        return done(err)
      }

      // Ensure the metadata was loaded correctly.
      assert.equal('bar', metalsmith.metadata().someMetaData.foo)

      // Check whether the files were build just file.
      assertDir('test/fixtures/basic/build', 'test/fixtures/basic/expected')

      done()
    })
})
