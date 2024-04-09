<template><div><h1 id="obtener-productos" tabindex="-1"><a class="header-anchor" href="#obtener-productos"><span>Obtener Productos</span></a></h1>
<p>Método para obtener un listado de los productos de depósito a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerProductos</td>
<td>RBTPG093</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Configuración de productos habilitados para el despliegue:</p>
<ul>
<li>Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera:</li>
</ul>
</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>Valor incremental.</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Módulo.</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Tipo de operación.</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda.</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel.</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario).</td>
</tr>
<tr>
<td>Importe específico 2</td>
<td>Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario).</td>
</tr>
<tr>
<td>Importe específico 3</td>
<td>Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior).</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Productos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerProductos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTDepositosAPlazo.ObtenerProductos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 5730f6af-ead6-1713-6817-a001379e1a06' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTDepositosAPlazo.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProducto> 
            <sBTProducto> 
               <productoUId>103</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>104</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
         </sdtProducto> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>907</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerProductos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>15:12:10</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerProductosResponse> 
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
    "sdtProducto": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "103", 
                "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "104", 
                "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "908", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ObtenerProductos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "15:12:50", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtProducto</td>
<td>sBTProducto</td>
<td>Listado de productos.</td>
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
<td>Nombre de producto.</td>
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
<p>No aplica.</p>
</div></template>


