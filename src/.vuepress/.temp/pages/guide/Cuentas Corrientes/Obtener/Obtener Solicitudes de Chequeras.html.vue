<template><div><h1 id="obtener-solicitudes-de-chequeras" tabindex="-1"><a class="header-anchor" href="#obtener-solicitudes-de-chequeras"><span>Obtener Solicitudes de Chequeras</span></a></h1>
<p>Método para obtener todas las chequeras y solicitudes de chequeras asociadas a una operación.</p>
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
<td>BTCuentasCorrientes.ObtenerSolicitudesChequera</td>
<td>RBTPG400</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Solicitudes de Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerSolicitudesChequera> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>b4ae55b35c4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:operacionUId>101</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerSolicitudesChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerSolicitudesChequera \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "operacionUId": "101" 
      } 
    } 
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
      <BTCuentasCorrientes.ObtenerSolicitudesChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b4ae55b35c4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSolicitudesChequeras> 
            <sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>50</totalCheques> 
                  <estado>ENTREGADA AL CLIENTE</estado> 
                  <chequeInicial>1651</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>2</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>23</solicitud> 
                  <estadoId>6</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3051</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>53</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3076</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>54</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3101</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>55</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
               <sBTDatosChequera> 
                  <totalCheques>25</totalCheques> 
                  <estado>SOLICITADA</estado> 
                  <chequeInicial>3126</chequeInicial> 
                  <titular>PEREZ SOSA JUAN</titular> 
                  <cantidadLibretas>1</cantidadLibretas> 
                  <operacionUId>101</operacionUId> 
                  <empresa>1</empresa> 
                  <tipoId>1</tipoId> 
                  <tipo>Chequera Común 25 / Pesos</tipo> 
                  <solicitud>56</solicitud> 
                  <estadoId>1</estadoId> 
               </sBTDatosChequera> 
            </sBTDatosChequera> 
         </sdtSolicitudesChequeras> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>103</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerSolicitudesChequera</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-07-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>16:00:37</Hora> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerSolicitudesChequeraResponse> 
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
        "sdtSolicitudesChequeras": { 
          "sBTDatosChequera": { 
            "sBTDatosChequera": [ 
              { 
                "totalCheques": "50", 
                "estado": "ENTREGADA AL CLIENTE", 
                "chequeInicial": "1651", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "2", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "23", 
                "estadoId": "6" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3051", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "53", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3076", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "54", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3101", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "55", 
                "estadoId": "1" 
              }, 
              { 
                "totalCheques": "25", 
                "estado": "SOLICITADA", 
                "chequeInicial": "3126", 
                "titular": "PEREZ SOSA JUAN", 
                "cantidadLibretas": "1", 
                "operacionUId": "101", 
                "empresa": "1", 
                "tipoId": "1", 
                "tipo": "Chequera Común 25 / Pesos", 
                "solicitud": "56", 
                "estadoId": "1" 
              } 
            ] 
          } 
        }, 
        "Btoutreq": { 
          "Numero": "103", 
          "Estado": "OK", 
          "Servicio": "BTCuentasCorrientes.ObtenerSolicitudesChequera", 
          "Requerimiento": "1", 
          "Fecha": "2019-07-22", 
          "Canal": "BTDIGITAL", 
          "Hora": "16:00:37" 
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
<td>Identificador de la operación.</td>
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
<td>sdtSolicitudesChequeras</td>
<td>sBTSolicitudesChequeras</td>
<td>Listado de chequeras.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSolicitudesChequeras son los siguientes:</p>
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
<td>sBTDatosChequera</td>
<td>sBTDatosChequera</td>
<td>Listado de chequeras.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosChequera son los siguientes:</p>
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
<td>totalCheques</td>
<td>Short</td>
<td>Cantidad de cheques de la chequera.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado actual de la solicitud de la chequera.</td>
</tr>
<tr>
<td>chequeInicial</td>
<td>Int</td>
<td>Cheque inicial.</td>
</tr>
<tr>
<td>titular</td>
<td>String</td>
<td>Titular de la cuenta.</td>
</tr>
<tr>
<td>cantidadLibretas</td>
<td>Short</td>
<td>Cantidad de libretas.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador de la operación de la subcuenta.</td>
</tr>
<tr>
<td>empresa</td>
<td>Short</td>
<td>Empresa de la emisión de la chequera.</td>
</tr>
<tr>
<td>tipoId</td>
<td>Short</td>
<td>Identificador de tipo de chequera.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de chequera.</td>
</tr>
<tr>
<td>solicitud</td>
<td>Long</td>
<td>Identificador de la solicitud de chequera.</td>
</tr>
<tr>
<td>estadoId</td>
<td>Short</td>
<td>Identificador de estado actual de la solicitud de la chequera.</td>
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
<td>No se recibió el Identificador de la operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe la operación indicada.</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta corriente.</td>
</tr>
</tbody>
</table>
</div></template>


