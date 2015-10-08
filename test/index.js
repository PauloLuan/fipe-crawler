'use strict';

var assert = require('assert'),
  fipeCrawler = require('../lib/index.js');

describe('fipe-crawler', function() {
  this.timeout(6000);

  var brands;

  it('should do a request and return the car brands', function(done) {
    fipeCrawler.getCarBrands()
      .then(function(receivedBrands) {
        brands = JSON.parse(receivedBrands);

        assert(brands !== null, 'expect car brands not to be null');
        assert(brands.length > 0, 'expect car brands to has more than one brand');

        done();
      });
  });

  xit('should download car models using the returned brands', function(done) {
    fipeCrawler.getCarModels()
      .then(function(models) {
        assert(models !== null, 'expect car models not to be null');
        assert(models.length > 0, 'expect car models to has more than one');

        done();
      });
  });

  xit('should download car models using years', function(done) {
    fipeCrawler.getCarYear()
      .then(function(years) {
        assert(years !== null, 'expect car years not to be null');
        assert(years.length > 0, 'expect car years to has more than one brand');

        done();
      });
  });

  xit('should do what...', function(done) {
    fipeCrawler.getCarModelByYear()
      .then(function(models) {
        assert(models !== null, 'expect car models not to be null');
        assert(models.length > 0, 'expect car models to has more than one brand');

        done();
      });
  });

  xit('should do what...', function(done) {
    fipeCrawler.getCarWxithAllParams()
      .then(function(carModel) {
        assert(carModel !== null, 'expect car carModel not to be null');
        assert(carModel.length > 0, 'expect car carModel to has more than one brand');

        done();
      });
  });

});
