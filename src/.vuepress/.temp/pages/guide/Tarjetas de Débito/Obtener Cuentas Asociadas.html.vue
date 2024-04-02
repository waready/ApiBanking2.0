<template><div><h1 id="obtener-cuentas-asociadas" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-asociadas"><span>Obtener Cuentas Asociadas</span></a></h1>
<p>Método para obtener las cuentas a las que está asociada una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerCuentasAsociadas</td>
<td>RBTPG017</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cuentas Asociadas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>3</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadas=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: bdcb7be8-1291-68f0-58ec-504b3f3e8fc5' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 3 
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
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentasAsociadasTD> 
            <cuentas> 
               <sBDCuentaAsociadaTD> 
                  <operacionUId>101</operacionUId> 
                  <idOperacionFmt>000000040_005</idOperacionFmt> 
                  <producto> 
                     <productoUId>0</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                     <moneda>$</moneda> 
                     <papel/> 
                  </producto> 
                  <sucursal>Casa Matriz</sucursal> 
                  <simboloMoneda>$</simboloMoneda> 
                  <subCuenta/> 
                  <saldo>100.00</saldo> 
                  <estado>Normal</estado> 
               </sBDCuentaAsociadaTD> 
            </cuentas> 
            <tarjetaUId>3</tarjetaUId> 
         </sdtCuentasAsociadasTD> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>975</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadas</Servicio> 
            <Fecha>2017-12-22</Fecha> 
            <Requerimiento/> 
            <Hora>13:14:14</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasResponse> 
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
   "sdtCuentasAsociadasTD": { 
      "cuentas": { 
         "sBDCuentaAsociadaTD": [ { 
            "saldo": "100.00", 
            "simboloMoneda": "$", 
            "sucursal": "Casa Matriz", 
            "producto": { 
               "papel": "", 
               "moneda": "$", 
               "productoUId": "0", 
               "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
            }, 
            "operacionUId": "101", 
            "subCuenta": "", 
            "idOperacionFmt": "000000040_005", 
            "estado": "Normal" 
         } ] 
      }, 
      "tarjetaUId": "3" 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "976", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadas", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "13:15:07", 
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta de debito.</td>
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
<td>sdtCuentasAsociadasTD</td>
<td>sBDCuentasAsociadasTD</td>
<td>Listado de cuentas asociadas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDCuentasAsociadasTD son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>cuentas</td>
<td>sBDCuentaAsociadaTD</td>
<td>Datos de cuenta asociada.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDCuentaAsociadaTD son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Simbolo de moneda.</td>
</tr>
<tr>
<td>subCuenta</td>
<td>String</td>
<td>Nombre de la subcuenta.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo de la cuenta.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descpripción de estado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
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
<td>No se recibió el identificador de tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


