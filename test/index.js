'use strict';

var assert = require('assert'),
  fipeCrawler = require('../lib/index.js');

describe('fipe-crawler', function() {
  this.timeout(6000);

  it('should do a request and return the car brands', function() {
    var brands = fipeCrawler.getCarBrands();

    assert(brands !== null, 'expect car brands not to be null');
    assert(brands.length > 0, 'expect car brands to has more than one brand');
  });

  it('should download car models using the returned brands', function() {
    var mockBrands = require('./mocks/1-IndicesConsulta-ConsultarMarcas.json');
    var models = fipeCrawler.getCarModels(mockBrands[0]);

    assert(models !== null, 'expect car models should not to be null');
    assert(models.Modelos.length > 0, 'expect car models to has more than one');
  });

  it('should download car models using years', function() {
    var years = fipeCrawler.getCarYear();

    assert(years !== null, 'expect car years not to be null');
    assert(years.length > 0, 'expect car years to has more than one brand');
  });

  it('should do what...', function() {
    var models = fipeCrawler.getCarModelByYear();

    assert(models !== null, 'expect car models not to be null');
    assert(models.length > 0, 'expect car models to has more than one brand');
  });

  it('download the complete information about a car model', function() {
    var carModel = fipeCrawler.getCarWithAllParams();

    assert(carModel !== null, 'expect car carModel not to be null');
    assert(carModel.Valor !== null, 'expect car carModel has property Valor');
    assert(carModel.Marca !== null, 'expect car carModel has property Marca');
    assert(carModel.Modelo !== null, 'expect car carModel has property Marca');
  });

});
