'use strict';

var request = require('request-promise'),
  crawler = {};

crawler.getCarBrands = function() {
  var url = 'http://www.fipe.org.br/IndicesConsulta-ConsultarMarcas';
  var params = {
    codigoTabelaReferencia: 184,
    codigoTipoVeiculo: 1
  };

  return crawler.doRequest(url, params);
};

crawler.getCarModels = function() {
  // http://www.fipe.org.br/IndicesConsulta-ConsultarModelos
  // codigoTipoVeiculo:1
  // codigoTabelaReferencia:184
  // codigoModelo:
  // codigoMarca:1
  // ano:
  // codigoTipoCombustivel:
  // anoModelo:
  // modeloCodigoExterno:
};

crawler.getCarYear = function() {
  // http: //www.fipe.org.br/IndicesConsulta-ConsultarAnoModelo
  // codigoTipoVeiculo: 1
  // codigoTabelaReferencia: 184
  // codigoModelo: 1
  // codigoMarca: 1
  // ano: 
  // codigoTipoCombustivel: 
  // anoModelo: 
  // modeloCodigoExterno:
};

crawler.getCarModelByYear = function() {
  // http: //www.fipe.org.br/IndicesConsulta-ConsultarModelosAtravesDoAno
  // codigoTipoVeiculo: 1
  // codigoTabelaReferencia: 184
  // codigoModelo: 1
  // codigoMarca: 1
  // ano: 1992 - 1
  // codigoTipoCombustivel: 1
  // anoModelo: 1992
  // modeloCodigoExterno:
};

crawler.getCarWithAllParams = function() {
  // http: //www.fipe.org.br/IndicesConsulta-ConsultarValorComTodosParametros
  // codigoTabelaReferencia: 184
  // codigoMarca: 1
  // codigoModelo: 1
  // codigoTipoVeiculo: 1
  // anoModelo: 1992
  // codigoTipoCombustivel: 1
  // tipoVeiculo: carro
  // modeloCodigoExterno: 
  // tipoConsulta: tradicional
};

crawler.getRequestHeader = function() {

  var requestHeaders = {
    'Accept': "*/*",
    'Accept-Encoding': "gzip, deflate",
    'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4',
    'Connection': 'keep-alive',
    'Content-Length': 46,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'ASP.NET_SessionId=qeoo5x2rpxb1e2knpfnmzyif; __RequestVerificationToken=rfEOgtlngemD0Kgl-GPabI4oUExMrjby7HkhemRbpEVe3KvJim4aiCy3ljfPHLnrL85W12DuEzNfJ9XJKigXESBQExXSNuhvTs7g0kfL8lg1; _ga=GA1.3.639585423.1444133391; _gat=1',
    'Host': 'www.fipe.org.br',
    'Origin': 'http://www.fipe.org.br',
    'Referer': 'http://www.fipe.org.br/pt-br/indices/veiculos/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  };

  return requestHeaders;
};

crawler.doRequest = function(url, params) {
  var headers = crawler.getRequestHeader();

  return request.post({
    url: url,
    form: params,
    headers: headers
  });

};

module.exports = crawler;
