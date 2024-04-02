<template><div><h1 id="obtener-bolsillos" tabindex="-1"><a class="header-anchor" href="#obtener-bolsillos"><span>Obtener Bolsillos</span></a></h1>
<p>Método para consulta de cuentas bolsillo.</p>
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
<td>BTCuentasVista.ObtenerBolsillos</td>
<td>RBTPG614</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Bolsillos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerBolsillos> 
         <bts:Btinreq> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>64d9fe0781F955E77534D3E0</bts:Token> 
            <bts:Requerimiento>10</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerBolsillos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerBolsillos' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cFC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
   "operacionUId": 9, 
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
      <BTCuentasVista.ObtenerBolsillosResponse xmlns=http://uy.com.dlya.bantotal/BTSOA/> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>10</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>64d9fe0781F955E77534D3E0</Token> 
         </Btinreq> 
         <sdtInformacionBolsillos> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>8</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>32</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>21981.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>11</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>32</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos de Ahorro</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>4000.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
            <SBTINFRBOLSILLO> 
               <OperacionBolsilloUID>10</OperacionBolsilloUID> 
               <FechaBaja>0000-00-00</FechaBaja> 
               <ProductoBolsilloId>33</ProductoBolsilloId> 
               <NombreProducto>Cuentas Bolsillo, Bolsillos Imprevistos</NombreProducto> 
               <Estado>0</Estado> 
               <Saldo>4000.00</Saldo> 
               <FechaApertura>0000-00-00</FechaApertura> 
               <Nombresubcuenta/> 
            </SBTINFRBOLSILLO> 
         </sdtInformacionBolsillos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>238</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerBolsillos</Servicio> 
            <Requerimiento>10</Requerimiento> 
            <Fecha>2023-11-01</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>08:52:10</Hora> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerBolsillosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "1", 
        "Usuario": "MINSTALADOR", 
        "Token": "16c1cFC33CD93505A5382434", 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1" 
    }, 
    "sdtInformacionBolsillos": { 
      "SBTINFRBOLSILLO": [ 
         { 
         "OperacionBolsilloUID": 8, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 21981, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 11, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 32, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos de Ahorro", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         }, 
         { 
         "OperacionBolsilloUID": 10, 
         "FechaBaja": "0000-00-00", 
         "ProductoBolsilloId": 33, 
         "NombreProducto": "Cuentas Bolsillo, Bolsillos Imprevistos", 
         "Estado": 0, 
         "Saldo": 4000, 
         "FechaApertura": "0000-00-00", 
         "Nombresubcuenta": "" 
         } 
      ] 
   }, 
    "Btoutreq": { 
        "Numero": "111399", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerBolsillos", 
        "Requerimiento": "1", 
        "Fecha": "2023-05-10", 
        "Canal": "BTDIGITAL", 
        "Hora": "15:10:52" 
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
<td>Identificador único de la operación.</td>
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
<td>sdtInformacionBolsillos</td>
<td>sBTInfRBolsillo</td>
<td>Listado de la información del bolsillo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTInfRBolsillo son los siguientes:</p>
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
<td>operacionBolsilloUID</td>
<td>Long</td>
<td>Identificador único de la operación de bolsillo.</td>
</tr>
<tr>
<td>fechaBaja</td>
<td>Date</td>
<td>Fecha de la baja.</td>
</tr>
<tr>
<td>productoBolsilloId</td>
<td>Short</td>
<td>Identificador único del producto del bolsillo.</td>
</tr>
<tr>
<td>nombreProducto</td>
<td>String</td>
<td>Nombre del producto.</td>
</tr>
<tr>
<td>fechaApertura</td>
<td>Date</td>
<td>Fecha de apertura.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo.</td>
</tr>
<tr>
<td>estado</td>
<td>Byte</td>
<td>Estado.</td>
</tr>
<tr>
<td>nombreSubcuenta</td>
<td>String</td>
<td>Nombre de la subcuenta.</td>
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
<td>30003</td>
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30005</td>
<td>OperacionUID no corresponde a CA.</td>
</tr>
<tr>
<td>30006</td>
<td>La cuenta no existe o no se encuentra activa.</td>
</tr>
</tbody>
</table>
</div></template>


