<template><div><h1 id="obtener-productos" tabindex="-1"><a class="header-anchor" href="#obtener-productos"><span>Obtener Productos</span></a></h1>
<p>Método para obtener un listado de los productos cuentas corrientes.</p>
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
<td>BTCuentasCorrientes.ObtenerProductos</td>
<td>RBTPG055</td>
<td>Global</td>
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
      <bts:BTCuentasCorrientes.ObtenerProductos> 
         <bts:Btinreq>             
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTCuentasCorrientes.ObtenerProductos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: de821bcc-38ae-1793-b380-8ebc32eba879' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 9 
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
      <BTCuentasCorrientes.ObtenerProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductos> 
            <sBTProducto> 
               <productoUId>41</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>42</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>43</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>44</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Jurídica</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>45</productoUId> 
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>46</productoUId> 
               <nombre>CUENTAS VISTA, Depósitos Vista P. Físicas</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>47</productoUId> 
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </sBTProducto> 
            <sBTProducto> 
               <productoUId>48</productoUId> 
               <nombre>CUENTAS VISTA, Depósitos Vista P. Jurídicas</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </sBTProducto> 
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>932</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerProductos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:37:02</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerProductosResponse> 
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
    "sdtProductos": { 
        "sBTProducto": [ 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "41", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "42", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "43", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "44", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Jurídica" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "45", 
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "46", 
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Físicas" 
            }, 
            { 
                "papel": "", 
                "moneda": "$", 
                "productoUId": "47", 
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas" 
            }, 
            { 
                "papel": "", 
                "moneda": "USD", 
                "productoUId": "48", 
                "nombre": "CUENTAS VISTA, Depósitos Vista P. Jurídicas" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "933", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerProductos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:37:18", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
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
<td>sdtProductos</td>
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


