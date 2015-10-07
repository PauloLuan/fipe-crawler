'use strict';

var crawler = {};

crawler.getCarBrands = function() {
  // http://www.fipe.org.br/IndicesConsulta-ConsultarMarcas
  // codigoTabelaReferencia:184
  // codigoTipoVeiculo:1
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
  // ano: codigoTipoCombustivel: anoModelo: modeloCodigoExterno:
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
  // modeloCodigoExterno: tipoConsulta: tradicional
};

module.exports = crawler;
