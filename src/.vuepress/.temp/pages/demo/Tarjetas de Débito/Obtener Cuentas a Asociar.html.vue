<template><div><h1 id="obtener-cuentas-a-asociar" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-a-asociar"><span>Obtener Cuentas a Asociar</span></a></h1>
<p>Método para obtener una lista de las posibles cuentas a asociar para una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerCuentasAAsociar</td>
<td>RBTPG376</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Cuentas a Asociar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>120109606CD285A89A23FBEE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUId>1</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAAsociar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAAsociar' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"tarjetaUId": "1", 
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
      <BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>120109606CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtCuentasAAsociar> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10212</operacionUId> 
               <producto> 
                  <productoUId>133</productoUId> 
                  <nombre>CUENTA CORRIENTE, GENÉRICA</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta/> 
            </SdtsBTCuentaAAsociarTD> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10213</operacionUId> 
               <producto> 
                  <productoUId>93</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
            </SdtsBTCuentaAAsociarTD> 
            <SdtsBTCuentaAAsociarTD> 
               <operacionUId>10214</operacionUId> 
               <producto> 
                  <productoUId>93</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
            </SdtsBTCuentaAAsociarTD> 
         </sdtCuentasAAsociar> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAAsociar</Servicio> 
            <Fecha>2021-11-30</Fecha> 
            <Hora>11:04:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8767</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
	"sdtCuentasAAsociar": { 
		"SdtsBTCuentaAAsociarTD": [ 
		  { 
			"operacionUId": "10212", 
			"producto": { 
			  "productoUId": "133", 
			  "nombre": "CUENTA CORRIENTE, GENÉRICA", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "" 
		  }, 
		  { 
			"operacionUId": "10213", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  }, 
		  { 
			"operacionUId": "10214", 
			"producto": { 
			  "productoUId": "93", 
			  "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
			  "moneda": "$", 
			  "papel": "" 
			}, 
			"sucursal": "Casa Matriz", 
			"subCuenta": "PESOS" 
		  } 
		] 
	}, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAAsociarResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
<td>Identificador único de tarjeta de débito.</td>
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
<td>sdtCuentasAAsociar</td>
<td>sBTCuentaAAsociarTD</td>
<td>Lista de cuentas a asociar.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentaAAsociarTD son los siguientes:</p>
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
<td>sucursal</td>
<td>String</td>
<td>Sucursal de la cuenta.</td>
</tr>
<tr>
<td>subCuenta</td>
<td>String</td>
<td>Nombre de la cuenta.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
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
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo del papel.</td>
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
<td>No se recibió el identificador de tarjeta de débito.</td>
</tr>
</tbody>
</table>
</div></template>


