'use strict';

var request = require('sync-request'),
crawler = {},
_ = require('lodash');

crawler.getCarBrands = function() {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarMarcas';
  var params = {
    codigoTabelaReferencia: 184,
    codigoTipoVeiculo: 1
  };

  return crawler.doRequest(url, params);
};

crawler.getCarModels = function(brand) {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarModelos';

  var params = {
    codigoTipoVeiculo: 1,
    codigoTabelaReferencia: 184,
    codigoMarca: 2
  };

  return crawler.doRequest(url, params);
};

crawler.getCarYear = function() {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarAnoModelo';

  var params = {
    codigoTipoVeiculo: 1,
    codigoTabelaReferencia: 184,
    codigoModelo: 4564,
    codigoMarca: 2
  };

  return crawler.doRequest(url, params);
};

crawler.getCarModelByYear = function() {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarModelosAtravesDoAno';

  var params = {
    codigoTipoVeiculo: 1,
    codigoTabelaReferencia: 184,
    codigoModelo: 4564,
    codigoMarca: 2,
    ano: '2015-3',
    codigoTipoCombustivel: 3,
    anoModelo: 2015
  };

  return crawler.doRequest(url, params);
};

crawler.getCarWithAllParams = function() {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarValorComTodosParametros';

  var params = {
    codigoTabelaReferencia: 184,
    codigoMarca: 1,
    codigoModelo: 1,
    codigoTipoVeiculo: 1,
    anoModelo: 1992,
    codigoTipoCombustivel: 1,
    tipoVeiculo: 'carro',
    tipoConsulta: 'tradicional'
  };

  return crawler.doRequest(url, params);
};

crawler.getRequestHeader = function() {

  var requestHeaders = {
    'Host': 'www.fipe.org.br',
    'Connection': 'keep-alive',
    'Accept': ' */*',
    'Origin': 'http//www.fipe.org.br',
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': 'http//www.fipe.org.br/pt-br/indices/veiculos/',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4',
    'Cookie': 'ASP.NET_SessionId=zrkp1p3ccn2ws53lai4ukjfd; __RequestVerificationToken=SVjcTUEtKiOEcyZ2ewHX4TSGmPooP_ewwsNh2M-zVhrGJzMIca-QizL3j9RnNEFfGEnebLx-9DaOzJo8PRMCFas0teBVArdG8OIRqHEQHzg1; _gat=1; _ga=GA1.3.639585423.1444133391'
  };

  return requestHeaders;
};

crawler.jsonToQueryString = function(json) {
  var result = '';

  _.forEach(json, function(value, key) {
    result += key + '=' + value + '&';
  });

  return result;
};

crawler.doRequest = function(url, params) {
  var response,
  result,
  headers = crawler.getRequestHeader(),
  body = crawler.jsonToQueryString(params);

  var reqParams = {
    body: body,
    headers: headers
  };

  response = request('POST', url, reqParams);
  result = JSON.parse(response.getBody('utf8'));

  return result;
};

module.exports = crawler;
