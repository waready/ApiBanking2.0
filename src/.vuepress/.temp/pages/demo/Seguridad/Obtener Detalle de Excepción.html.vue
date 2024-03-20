<template><div><h1 id="obtener-detalle-de-excepcion" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-excepcion"><span>Obtener Detalle de Excepción</span></a></h1>
<p>Método para obtener el detalle de la excepción.</p>
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
<td>BTSeguridad.ObtenerDetalleExcepcion</td>
<td>RBTPG087</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Excepcion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<p>&lt;soapenv:Envelope xmlns:soapenv=&quot;http://schemas.xmlsoap.org/soap/envelope/&quot; xmlns:bts=&quot;http://uy.com.dlya.bantotal/BTSOA/&quot;&gt;
<RouteLink to="/demo/Seguridad/soapenv:Header/">soapenv:Header/</RouteLink>
<a href="soapenv:Body">soapenv:Body</a>
<a href="bts:BTSeguridad.ObtenerDetalleExcepcion">bts:BTSeguridad.ObtenerDetalleExcepcion</a>
<a href="bts:Btinreq">bts:Btinreq</a><br>
<a href="bts:Device">bts:Device</a>ES&lt;/bts:Device&gt;
<a href="bts:Usuario">bts:Usuario</a>MINSTALADOR&lt;/bts:Usuario&gt;
<a href="bts:Requerimiento">bts:Requerimiento</a>1&lt;/bts:Requerimiento&gt;
<a href="bts:Canal">bts:Canal</a>BTDIGITAL&lt;/bts:Canal&gt;
<a href="bts:Token">bts:Token</a>dac8c7fdec4A8B5C60A82434&lt;/bts:Token&gt;
&lt;/bts:Btinreq&gt;
<a href="bts:idExcepcion">bts:idExcepcion</a>1850&lt;/bts:idExcepcion&gt;
&lt;/bts:BTSeguridad.ObtenerDetalleExcepcion&gt;
&lt;/soapenv:Body&gt;
&lt;/soapenv:Envelope&gt;</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerDetalleExcepcion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 827c2080-a7d5-3466-66db-0f821bccef77' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "idExcepcion": 1854 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTSeguridad.ObtenerDetalleExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>ES</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dac8c7fdec4A8B5C60A82434</Token> 
         </Btinreq> 
         <idExcepcion>1850</idExcepcion> 
         <excepciones> 
            <estado>N</estado> 
            <solicitaPassword>N</solicitaPassword> 
            <operacionUId>0</operacionUId> 
            <saldo>0.00</saldo> 
            <simboloMoneda>$</simboloMoneda> 
            <excepcion> 
               <nombreUsuario>INSTALADOR</nombreUsuario> 
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion> 
               <identificador>1850</identificador> 
               <usuario>INSTALADOR</usuario> 
               <ligada>N</ligada> 
               <movimientoUId>0</movimientoUId> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento> 
            </excepcion> 
            <metadata> 
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
                  <descripcion>Acción</descripcion> 
                  <valor>COMPRA</valor> 
                  <esImporte>N</esImporte> 
               </sBTMetadataExcepcionns:sBTMetadataExcepcion> 
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
                  <descripcion>Moneda Destino</descripcion> 
                  <valor>$</valor> 
                  <esImporte>N</esImporte> 
               </sBTMetadataExcepcionns:sBTMetadataExcepcion> 
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
                  <descripcion>Tipo de Cambio Base</descripcion> 
                  <valor>28.18182000</valor> 
                  <esImporte>S</esImporte> 
               </sBTMetadataExcepcionns:sBTMetadataExcepcion> 
               <sBTMetadataExcepcionns:sBTMetadataExcepcion xmlns:sBTMetadataExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
                  <descripcion>Tipo de Cambio Solicitado</descripcion> 
                  <valor>208.18182000</valor> 
                  <esImporte>S</esImporte> 
               </sBTMetadataExcepcionns:sBTMetadataExcepcion> 
            </metadata> 
            <descripcionEstado/> 
            <puedeAutorizar>S</puedeAutorizar> 
            <importeMovimiento>104090.91</importeMovimiento> 
         </excepciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>895</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTSeguridad.ObtenerDetalleExcepcion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2017-12-20</Fecha> 
            <Hora>16:52:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTSeguridad.ObtenerDetalleExcepcionResponse> 
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
    "idExcepcion": "1854", 
    "excepciones": { 
        "estado": "P", 
        "solicitaPassword": "N", 
        "operacionUId": "0", 
        "saldo": "0.00", 
        "simboloMoneda": "$", 
        "excepcion": { 
            "nombreUsuario": "INSTALADOR", 
            "descripcion": "Autorización T.Cbio./Arbitraje", 
            "identificador": "1854", 
            "usuario": "INSTALADOR", 
            "ligada": "N", 
            "movimientoUId": "0", 
            "nombreSucursal": "Casa Matriz", 
            "descripcionMovimiento": "Compra USD Caja" 
        }, 
        "descripcionEstado": "Pendiente", 
        "metadata": { 
            "sBTMetadataExcepcion": [ 
                { 
                    "descripcion": "Acción", 
                    "valor": "COMPRA", 
                    "esImporte": "N" 
                }, 
                { 
                    "descripcion": "Moneda Destino", 
                    "valor": "$", 
                    "esImporte": "N" 
                }, 
                { 
                    "descripcion": "Tipo de Cambio Base", 
                    "valor": "28.18182000", 
                    "esImporte": "S" 
                }, 
                { 
                    "descripcion": "Tipo de Cambio Solicitado", 
                    "valor": "208.18182000", 
                    "esImporte": "S" 
                } 
            ] 
        }, 
        "puedeAutorizar": "S", 
        "importeMovimiento": "104090.91" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "958", 
        "Estado": "OK", 
        "Servicio": "BTSeguridad.ObtenerDetalleExcepcion", 
        "Fecha": "2017-12-22", 
        "Requerimiento": "", 
        "Hora": "10:57:23", 
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
<td>idExcepcion</td>
<td>Int</td>
<td>Identificador de excepción.</td>
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
<td>excepciones</td>
<td>sBTDetalleExcepcion</td>
<td>Datos detallados de la excepción.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleExcepcion son los siguientes:</p>
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
<td>sdtExcepcion</td>
<td>sBTExcepcion</td>
<td>Datos de la excepción.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo de operación.</td>
</tr>
<tr>
<td>importeMovimiento</td>
<td>Double</td>
<td>Importe del movimiento.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Simbolo de moneda.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado.</td>
</tr>
<tr>
<td>descripcionEstado</td>
<td>String</td>
<td>Descripción del estado.</td>
</tr>
<tr>
<td>solicitaPassword</td>
<td>String</td>
<td>Solicita contraseña (S/N).</td>
</tr>
<tr>
<td>puedeAutorizar</td>
<td>String</td>
<td>Puede autorizar (S/N).</td>
</tr>
<tr>
<td>metadata</td>
<td>sBTMetadataExcepcion</td>
<td>Listado de MetaData.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMetadataExcepcion son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción de la MetaData.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de la MetaData.</td>
</tr>
<tr>
<td>esImporte</td>
<td>String</td>
<td>Es Importe (S/N).</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTExcepcion son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador de excepción.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de la excepción.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Usuario.</td>
</tr>
<tr>
<td>nombreUsuario</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>descripcionMovimiento</td>
<td>String</td>
<td>Descripción del movimiento.</td>
</tr>
<tr>
<td>nombreSucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>ligada</td>
<td>String</td>
<td>Ligada (S/N).</td>
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
<td>No se recibió el identificador de excepción.</td>
</tr>
</tbody>
</table>
</div></template>


