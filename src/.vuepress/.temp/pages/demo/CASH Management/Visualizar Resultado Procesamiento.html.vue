<template><div><h1 id="visualizar-resultado-procesamiento" tabindex="-1"><a class="header-anchor" href="#visualizar-resultado-procesamiento"><span>Visualizar Resultado Procesamiento</span></a></h1>
<p>Método para obtener el resultado del procesamiento de un archivo.</p>
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
<td>BTCASHManagement.VisualizarResultadoProcesamiento</td>
<td>RBTPGC20</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Resultado Procesamiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
     <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarResultadoProcesamiento> 
         <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:archivoId>95</bts:archivoId> 
      </bts:BTCASHManagement.VisualizarResultadoProcesamiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarResultadoProcesamiento=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 1c730fd2-5de9-415a-855d-9bfdb517098a,bf88767f-74e5-4941-80fd-4f8cfb1f888a' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "archivoId": "95" 
}' 
``` 
</code-block> 
</code-group> 
> El POST retornará la siguiente estructura: 
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.VisualizarResultadoProcesamientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <cantidadLineas>2</cantidadLineas> 
         <moneda>0</moneda> 
         <importe>25.0</importe> 
         <cantidadProcesadasOK>0</cantidadProcesadasOK> 
         <importePagado>0.0</importePagado> 
         <cantidadLineasError>0</cantidadLineasError> 
         <cantidadPendientes>2</cantidadPendientes> 
         <estado>Z</estado> 
         <situacionLineas> 
            <sBTSituacionLineas> 
               <mensajesError></mensajesError> 
               <linea>DAYANARA PAEZ,3-34-1593,7,001020110000771009,3,13.00,32,REF*TXT**PAGO ultima DE QUINCENA \</linea> 
               <estado>V</estado> 
            </sBTSituacionLineas> 
            <sBTSituacionLineas> 
               <mensajesError></mensajesError> 
               <linea>BETZAIRA LIMA,8-766-1860,7,025021110000479001,3,12.00,32,REF*TXT**PAGO DE QUINCENA \</linea> 
               <estado>V</estado> 
            </sBTSituacionLineas> 
         </situacionLineas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7187</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.VisualizarResultadoProcesamiento</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-24</Fecha> 
            <Hora>17:27:10</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarResultadoProcesamientoResponse> 
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
    "cantidadLineas": 2, 
    "moneda": 0, 
    "importe": 25, 
    "cantidadProcesadasOK": 0, 
    "importePagado": 0, 
    "cantidadLineasError": 0, 
    "cantidadPendientes": 2, 
    "estado": "Z", 
    "situacionLineas": { 
        "sBTSituacionLineas": [ 
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
        "Numero": 7188, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarResultadoProcesamiento", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "17:28:39", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
### Datos de entrada 
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
<td>Identificador de archivo.</td>
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
<td>cantidadLineas</td>
<td>Int</td>
<td>Cantidad de líneas del archivo.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Moneda del archivo.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe total del pago.</td>
</tr>
<tr>
<td>cantidadProcesadasOK</td>
<td>Int</td>
<td>Cantidad de líneas procesadas.</td>
</tr>
<tr>
<td>importePagado</td>
<td>Double</td>
<td>Importe total efectivamente pago.</td>
</tr>
<tr>
<td>cantidadLineasError</td>
<td>Int</td>
<td>Cantidad de líneas en error.</td>
</tr>
<tr>
<td>cantidadPendientes</td>
<td>Int</td>
<td>Cantidad de líneas pendientes de procesar.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>situacionLineas</td>
<td>sBTSituacionLinea</td>
<td>Lista de las líneas con su estado.</td>
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
</div></template>


