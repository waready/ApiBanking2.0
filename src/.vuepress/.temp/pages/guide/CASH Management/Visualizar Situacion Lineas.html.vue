<template><div><h1 id="visualizar-situacion-lineas" tabindex="-1"><a class="header-anchor" href="#visualizar-situacion-lineas"><span>Visualizar Situacion Lineas</span></a></h1>
<p>Método para obtener las líneas del archivo con su estado.</p>
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
<td>BTCASHManagement.VisualizarSituacionLineas</td>
<td>RBTPGC11</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Situacion Lineas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
     <bts:BTCASHManagement.VisualizarSituacionLineas> 
     <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:archivoId>102</bts:archivoId> 
      </bts:BTCASHManagement.VisualizarSituacionLineas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarSituacionLineas=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 6c7d3916-edc0-4bb1-bf4c-3cc70d5c4844,236c07eb-fd49-4a53-9508-6baec6741d63' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "archivoId": "102" 
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
      <BTCASHManagement.VisualizarSituacionLineasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <situacionLineas> 
            <sBTSituacionLinea> 
               <mensajesError></mensajesError> 
               <linea>DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \</linea> 
               <estado>V</estado> 
            </sBTSituacionLinea> 
            <sBTSituacionLinea> 
               <mensajesError></mensajesError> 
               <linea>BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \</linea> 
               <estado>V</estado> 
            </sBTSituacionLinea> 
         </situacionLineas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7159</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.VisualizarSituacionLineas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-23</Fecha> 
            <Hora>18:24:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarSituacionLineasResponse> 
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
    "situacionLineas": { 
        "sBTSituacionLinea": [ 
            { 
                "mensajesError": { 
                    "internal": [] 
                }, 
                "linea": "DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \\", 
                "estado": "V" 
            }, 
            { 
                "mensajesError": { 
                    "internal": [] 
                }, 
                "linea": "BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \\", 
                "estado": "V" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 7169, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarSituacionLineas", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "12:56:25", 
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
<td>archivoId</td>
<td>Long</td>
<td>Identificador del archivo.</td>
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
<td>situacionLineas</td>
<td>sBTSituacionLinea</td>
<td>Lista de líneas del archivo con su estado y mensaje.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSituacionLinea son los siguientes:</p>
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
<td>linea</td>
<td>String</td>
<td>Línea de texto.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado de la línea.</td>
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
<td>1030711</td>
<td>No se recuperó información para el identificador de archivo recibido.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


