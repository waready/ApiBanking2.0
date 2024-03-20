<template><div><h1 id="visualizar-situacion-archivos" tabindex="-1"><a class="header-anchor" href="#visualizar-situacion-archivos"><span>Visualizar Situacion Archivos</span></a></h1>
<p>Método para obtener la situación/resumen de los archivos subidos por el cliente.</p>
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
<td>BTCASHManagement.VisualizarSituacionArchivos</td>
<td>RBTPGC10</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Situacion Archivos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarSituacionArchivos> 
          <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:contratoF></bts:contratoF> 
         <bts:servicioF></bts:servicioF> 
         <bts:estadoF></bts:estadoF> 
         <bts:fechaDesdeF>2018-01-01</bts:fechaDesdeF> 
         <bts:fechaHastaF></bts:fechaHastaF> 
      </bts:BTCASHManagement.VisualizarSituacionArchivos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarSituacionArchivos=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 8ae78366-8aaf-484e-9e0c-d6438a3b88c5,993b6845-9245-4afc-9048-660c34300f13' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": "1", 
    "contratoF": {"item":[]}, 
    "servicioF": "", 
    "estadoF": "", 
    "fechaDesdeF": "2018-01-01", 
    "fechaHastaF": "" 
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
      <BTCASHManagement.VisualizarSituacionArchivosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <listaArchivos> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>107</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>108</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>109</archivoId> 
            </sBTSituacionArchivo> 
            <sBTSituacionArchivo> 
               <moneda>0</moneda> 
               <nomArchivo>Archivo1</nomArchivo> 
               <estado>N</estado> 
               <referencia>Ref123</referencia> 
               <contratoId>1</contratoId> 
               <cantidadLineas>2</cantidadLineas> 
               <servicio>1</servicio> 
               <importe>2.40</importe> 
               <fechaPago>2018-01-03</fechaPago> 
               <archivoId>110</archivoId> 
            </sBTSituacionArchivo> 
         </listaArchivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7177</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.VisualizarSituacionArchivos</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-24</Fecha> 
            <Hora>15:48:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarSituacionArchivosResponse> 
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
    "listaArchivos": { 
        "sBTSituacionArchivo": [ 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 107 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 108 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 109 
            }, 
            { 
                "moneda": 0, 
                "nomArchivo": "Archivo1", 
                "estado": "N", 
                "referencia": "Ref123", 
                "contratoId": 1, 
                "cantidadLineas": 2, 
                "servicio": 1, 
                "importe": 2.4, 
                "fechaPago": "2018-01-03", 
                "archivoId": 110 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 7185, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarSituacionArchivos", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "17:02:11", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>contratoF</td>
<td>Int</td>
<td>Lista de identificadores de contratos CASH del cliente.</td>
</tr>
<tr>
<td>servicioF</td>
<td>Short</td>
<td>Servicio CASH.</td>
</tr>
<tr>
<td>estadoF</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>fechaDesdeF</td>
<td>Date</td>
<td>Fecha de pago o cobro, desde.</td>
</tr>
<tr>
<td>fechaHastaF</td>
<td>Date</td>
<td>Fecha de pago o cobro, hasta.</td>
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
<td>listaArchivos</td>
<td>sBTSituacionArchivo</td>
<td>Lista de archivos solicitado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSituacionArchivo son los siguientes:</p>
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
<td>Long</td>
<td>Identificador del contrato CASH.</td>
</tr>
<tr>
<td>servicio</td>
<td>Short</td>
<td>Servicio CASH.</td>
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
<td>nomArchivo</td>
<td>String</td>
<td>Nombre del archivo.</td>
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
<td>1030705</td>
<td>Cuenta cliente sin contrato vinculado.</td>
</tr>
<tr>
<td>1030708</td>
<td>Estado de archivo desconocido.</td>
</tr>
<tr>
<td>1030709</td>
<td>Se requiere identificacion de cuenta cliente.</td>
</tr>
<tr>
<td>1030712</td>
<td>Se requiere cuenta para recuperar la informacion.</td>
</tr>
<tr>
<td>1030714</td>
<td>El contrato consultado no corresponde al servicio recibido.</td>
</tr>
</tbody>
</table>
</div></template>


