'use strict';

var assert = require('assert'),
  fipeCrawler = require('../lib');

describe('fipe-crawler', function() {
  it('should do a request and return the car brands', function(done) {
    var brands = fipeCrawler.getCarBrands()
      .then(function(brands) {
        assert(brands !== null, 'expect car brands not to be null');
        assert(brands.length > 0, 'expect car brands to has more than one brand');

        done();
      });
  });
});
