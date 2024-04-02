<template><div><h1 id="obtener-pagos-de-cuota" tabindex="-1"><a class="header-anchor" href="#obtener-pagos-de-cuota"><span>Obtener Pagos de Cuota</span></a></h1>
<p>Método para obtener el detalle de pagos de una cuota de préstamo.</p>
<table>
<thead>
<tr>
<th>Nombre publicación</th>
<th>Programa</th>
<th>Global/País</th>
</tr>
</thead>
<tbody>
<tr>
<td>BTPrestamos.ObtenerPagosCuota</td>
<td>RBTPG095</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Pagos de Cuota:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPagosCuota> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>361</bts:operacionUId> 
         <bts:numeroCuota>1</bts:numeroCuota> 
      </bts:BTPrestamos.ObtenerPagosCuota> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPagosCuota=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 663f7ea1-30e7-309b-9c23-7792294641cc' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 361, 
    "numeroCuota": 1 
}' 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.ObtenerPagosCuotaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPagoDeCuota> 
            <fechaUltimoPago>2018-11-05</fechaUltimoPago> 
            <detalle> 
               <sBTDetallePagoCuota> 
                  <fechaPago>2018-11-05</fechaPago> 
                  <capital>0.00</capital> 
                  <intereses>1287.08</intereses> 
                  <comisiones>0.00</comisiones> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <detalleConceptos></detalleConceptos> 
                  <total>1287.08</total> 
               </sBTDetallePagoCuota> 
            </detalle> 
            <importePago>1287.08</importePago> 
         </sdtPagoDeCuota> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>905</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPagosCuota</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>13:05:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPagosCuotaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtPagoDeCuota": { 
        "fechaUltimoPago": "2018-11-05", 
        "detalle": { 
            "sBTDetallePagoCuota": [ 
                { 
                    "otrosConceptos": "0.00", 
                    "capital": "0.00", 
                    "impuestos": "0.00", 
                    "intereses": "1287.08", 
                    "total": "1287.08", 
                    "fechaPago": "2018-11-05", 
                    "detalleConceptos": { 
                        "sBTConcepto": [] 
                    }, 
                    "seguros": "0.00", 
                    "comisiones": "0.00" 
                } 
            ] 
        }, 
        "importePago": "1287.08" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "906", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPagosCuota", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "13:56:38", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación del préstamo.</td>
</tr>
<tr>
<td>numeroCuota</td>
<td>Int</td>
<td>Número de cuota.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>sdtPagoDeCuota</td>
<td>sBTPagoDeCuota</td>
<td>Identificador único de movimiento [Asiento].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPagoDeCuota son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de la cuota.</td>
</tr>
<tr>
<td>importePago</td>
<td>Double</td>
<td>Importe pagado.</td>
</tr>
<tr>
<td>detalle</td>
<td>sBTDetallePagoCuota</td>
<td>Listado de pagos de una cuota.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetallePagoCuota son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago prevista.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital de la cuota.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses de la cuota.</td>
</tr>
<tr>
<td>comisiones</td>
<td>Double</td>
<td>Comisiones de la cuota.</td>
</tr>
<tr>
<td>seguros</td>
<td>Double</td>
<td>Seguros de la cuota.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos de la cuota.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>Double</td>
<td>Importe otros conceptos.</td>
</tr>
<tr>
<td>detalleConceptos</td>
<td>sBTConcepto</td>
<td>Detalle de los conceptos adicionales.</td>
</tr>
<tr>
<td>total</td>
<td>Double</td>
<td>Total de la cuota.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La cuota indicada no es válida.</td>
</tr>
</tbody>
</table>
</div></template>


