<template><div><h1 id="obtener-cheques-de-chequera" tabindex="-1"><a class="header-anchor" href="#obtener-cheques-de-chequera"><span>Obtener Cheques de Chequera</span></a></h1>
<p>Método para obtener cheques de una chequera.</p>
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
<td>BTCuentasCorrientes.ObtenerChequesDeChequera</td>
<td>RBTPG142</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cheques de Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerChequesDeChequera> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1820366692F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10176</bts:operacionUId> 
         <bts:chequeraId>21</bts:chequeraId> 
      </bts:BTCuentasCorrientes.ObtenerChequesDeChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerChequesDeChequera' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"operacionUId": "10176", 
	"chequeraId": "21" 
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
      <BTCuentasCorrientes.ObtenerChequesDeChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1820366692F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtCheques> 
            <SdtsBTCheque> 
               <numero>1326</numero> 
               <estado>1</estado> 
               <descripcion>Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1327</numero> 
               <estado>1</estado> 
               <descripcion>Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1328</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1329</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1330</numero> 
               <estado>1</estado> 
               <descripcion>Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1331</numero> 
               <estado>1</estado> 
               <descripcion>Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1332</numero> 
               <estado>1</estado> 
               <descripcion>Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1333</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1334</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1335</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1336</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1337</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1338</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1339</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1340</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1341</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1342</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1343</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1344</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1345</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1346</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1347</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1348</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1349</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
            <SdtsBTCheque> 
               <numero>1350</numero> 
               <estado>2</estado> 
               <descripcion>Orden de No Pago</descripcion> 
            </SdtsBTCheque> 
         </sdtCheques> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasCorrientes.ObtenerChequesDeChequera</Servicio> 
            <Fecha>2020-11-13</Fecha> 
            <Hora>15:25:51</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7904</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerChequesDeChequeraResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"sdtCheques": { 
	  "SdtsBTCheque": [ 
		{ 
		  "numero": "1326", 
		  "estado": "1", 
		  "descripcion": "Pago" 
		}, 
		{ 
		  "numero": "1327", 
		  "estado": "1", 
		  "descripcion": "Pago" 
		}, 
		{ 
		  "numero": "1328", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1329", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1330", 
		  "estado": "1", 
		  "descripcion": "Pago" 
		}, 
		{ 
		  "numero": "1331", 
		  "estado": "1", 
		  "descripcion": "Pago" 
		}, 
		{ 
		  "numero": "1332", 
		  "estado": "1", 
		  "descripcion": "Pago" 
		}, 
		{ 
		  "numero": "1333", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1334", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1335", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1336", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1337", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1338", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1339", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1340", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1341", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1342", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1343", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1344", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1345", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1346", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1347", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1348", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1349", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		}, 
		{ 
		  "numero": "1350", 
		  "estado": "2", 
		  "descripcion": "Orden de No Pago" 
		} 
	  ] 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTCuentasCorrientes.ObtenerChequesDeChequera", 
	  "Fecha": "2020-11-13", 
	  "Hora": "15:25:51", 
	  "Requerimiento": "1", 
	  "Numero": "7904", 
	  "Estado": "OK" 
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
<td>Identificador único de operación de subcuenta.</td>
</tr>
<tr>
<td>chequeraId</td>
<td>Long</td>
<td>Identificador de solicitud de chequera.</td>
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
<td>sdtCheques</td>
<td>sBTCheque</td>
<td>Listado de cheques.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCheque son los siguientes:</p>
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
<td>numero</td>
<td>Int</td>
<td>Número de cheque.</td>
</tr>
<tr>
<td>estado</td>
<td>Short</td>
<td>Estado del cheque.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
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
<td>No se recibió identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió identificador de chequera.</td>
</tr>
<tr>
<td>30011</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>40003</td>
<td>La chequera no pertenece a la operación.</td>
</tr>
</tbody>
</table>
</div></template>


