'use strinct';
var MdlMessages = require('../models/message');

//GET:
function test(req, res){
  console.log("===TEST");
  res.render('vTest', {title: 'Documentacion de Test API'});
}

function getFolio(req, res){
  var msg = {};
  var folio = req.params.folio;

  //console.log("===Folio obtenido del PHP: ", folio);

  if(typeof folio !== 'undefined'){
    //msg = MdlMessages.success(folio, `El folio '${folio}' es satisfactorio`);
    var pinpadEstatus = pinpadOn();

    //console.log("===estatus de la pinpad: " + pinpadEstatus);

    msg = MdlMessages.success(pinpadEstatus, `El folio '${folio}' es satisfactorio`);
  }
  else{
    msg = MdlMessages.notFound("Ocurrió un error: El folio no se pudo obtener.");
  }
  res.status(msg.statusCode).send(msg);

}

function pinpadOn(){
  var on = false;
  //aquí se deberá hacer las demás actividades por el lado de la api.
  //encender la pinpad
  on = true;


  //retorna el mismo folio, o retorna la referencia (de ser la referencia, se deberán ejecutar las apis al banco desde aquì)
  //mientras tanto, se retornará si es true or false
  return on;
}


module.exports = {
  test,
  getFolio

}
