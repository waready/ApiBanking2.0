<template><div><h1 id="visualizar-orden-de-archivo-para-cuenta" tabindex="-1"><a class="header-anchor" href="#visualizar-orden-de-archivo-para-cuenta"><span>Visualizar Orden de Archivo Para Cuenta</span></a></h1>
<p>Método para visualizar las ordenes de un archivo de una cuenta.</p>
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
<td>BTCASHManagement.VisualizarOrdenArchivoCuenta</td>
<td>RBTPGC25F</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Orden Archivo Cuenta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarOrdenArchivoCuenta> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>744307195e99865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:idArchivo>204</bts:idArchivo> 
         <bts:clienteUId>376</bts:clienteUId> 
      </bts:BTCASHManagement.VisualizarOrdenArchivoCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarOrdenArchivoCuenta=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "Instalador", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "idArchivo": "204", 
    "clienteUId": "376" 
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
      <BTCASHManagement.VisualizarOrdenArchivoCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>744307195e99865B3A2E76CF</Token> 
         </Btinreq> 
         <listaResumenOrdenes> 
            <sBTResumenCabezal> 
               <archivoId>56</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>121</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>N</estado> 
               <cantidadLineas>6</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError> 
                  <item>El monto total es distinto al importe del cabezal</item> 
               </mensajesError> 
            </sBTResumenCabezal> 
            <sBTResumenCabezal> 
               <archivoId>57</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>122</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>N</estado> 
               <cantidadLineas>4</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError></mensajesError> 
            </sBTResumenCabezal> 
            <sBTResumenCabezal> 
               <archivoId>58</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>123</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>P</estado> 
               <cantidadLineas>4</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError></mensajesError> 
            </sBTResumenCabezal> 
         </listaResumenOrdenes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>254026</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.VisualizarOrdenArchivoCuenta</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-11-27</Fecha> 
            <Hora>16:25:57</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarOrdenArchivoCuentaResponse> 
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
    "listaResumenOrdenes": { 
         "sBTResumenCabezal": [ 
         { 
            "archivoId": 56, 
            "contratoId": 7, 
            "servicio": 20, 
            "ordenId": 121, 
            "cuentaDebito": 1, 
            "fechaPago": "2019-11-29", 
            "estado": "N", 
            "cantidadLineas": 6, 
            "moneda": 101, 
            "importe": 2600, 
            "referencia": "", 
            "nombreArchivo": "Servicio20_001.csv", 
            "mensajesError": { 
               "item": "El monto total es distinto al importe del cabezal" 
            } 
         }, 
         { 
            "archivoId": 57, 
            "contratoId": 7, 
            "servicio": 20, 
            "ordenId": 122, 
            "cuentaDebito": 1, 
            "fechaPago": "2019-11-29", 
            "estado": "N", 
            "cantidadLineas": 4, 
            "moneda": 101, 
            "importe": 2600, 
            "referencia": "", 
            "nombreArchivo": "Servicio20_001.csv", 
            "mensajesError": "" 
         }, 
         { 
            "archivoId": 58, 
            "contratoId": 7, 
            "servicio": 20, 
            "ordenId": 123, 
            "cuentaDebito": 1, 
            "fechaPago": "2019-11-29", 
            "estado": "P", 
            "cantidadLineas": 4, 
            "moneda": 101, 
            "importe": 2600, 
            "referencia": "", 
            "nombreArchivo": "Servicio20_001.csv", 
            "mensajesError": "" 
         } 
         ] 
      }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 7174, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarOrdenArchivoCuenta", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "15:23:16", 
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
<td>idArchivo</td>
<td>Long</td>
<td>Identificador de archivo.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>listaResumenOrdenes</td>
<td>sBTResumenCabezal</td>
<td>Listados de resumen de ordenes.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTResumenCabezal son los siguientes:</p>
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
<td>archivoId</td>
<td>Long</td>
<td>Identificador de archivo.</td>
</tr>
<tr>
<td>contratoId</td>
<td>Int</td>
<td>Identificador del contrato CASH.</td>
</tr>
<tr>
<td>servicio</td>
<td>Short</td>
<td>Servicio CASH.</td>
</tr>
<tr>
<td>ordenId</td>
<td>Long</td>
<td>Identificador de orden CASH.</td>
</tr>
<tr>
<td>cuentaDebito</td>
<td>Long</td>
<td>Identificador único de la cuenta débito.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago o cobro.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>cantidadLineas</td>
<td>Int</td>
<td>Cantidad de líneas del archivo.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe total.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia del pago o cobro.</td>
</tr>
<tr>
<td>nombreArchivo</td>
<td>String</td>
<td>Nombre del archivo.</td>
</tr>
<tr>
<td>mensajesError</td>
<td>String</td>
<td>Lista de mensajes de la línea.</td>
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
<td>1030712</td>
<td>Se requiere cuenta para recuperar la información.</td>
</tr>
<tr>
<td>1030770</td>
<td>No se recuperó información para la cuenta recibida.</td>
</tr>
</tbody>
</table>
</div></template>


