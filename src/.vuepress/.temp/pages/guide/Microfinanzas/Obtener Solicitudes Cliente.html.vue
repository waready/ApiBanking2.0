<template><div><h1 id="obtener-solicitudes-cliente" tabindex="-1"><a class="header-anchor" href="#obtener-solicitudes-cliente"><span>Obtener Solicitudes Cliente</span></a></h1>
<p>Método para obtener una lista de las solicitudes activas de préstamos de un cliente.</p>
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
<td>BTMicrofinanzas.ObtenerSolicitudesCliente</td>
<td>RBTPG416</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Solicitudes Cliente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerSolicitudesCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>3</bts:clienteUId> 
      </bts:BTMicrofinanzas.ObtenerSolicitudesCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerSolicitudesCliente \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": "3" 
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
      <BTMicrofinanzas.ObtenerSolicitudesClienteResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtDatosInstancias> 
            <sBTDatosInstancia> 
               <operacionUId>8</operacionUId> 
               <instancia>10844</instancia> 
               <capital>8000.00</capital> 
               <asesor>ETRIESGO</asesor> 
               <tarea>Solicitud</tarea> 
            </sBTDatosInstancia> 
            <sBTDatosInstancia> 
               <operacionUId>7</operacionUId> 
               <instancia>10856</instancia> 
               <capital>5000.00</capital> 
               <asesor>INSTALADOR</asesor> 
               <tarea>Solicitud</tarea> 
            </sBTDatosInstancia> 
         </sdtDatosInstancias> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerSolicitudesCliente</Servicio> 
            <Fecha>2019-09-24</Fecha> 
            <Hora>14:27:00</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>245</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerSolicitudesClienteResponse> 
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
        "sdtDatosInstancias": { 
          "sBTDatosInstancia": [ 
            { 
              "operacionUId": "8", 
              "instancia": "10844", 
              "capital": "8000.00", 
              "asesor": "ETRIESGO", 
              "tarea": "Solicitud" 
            }, 
            { 
              "operacionUId": "7", 
              "instancia": "10856", 
              "capital": "5000.00", 
              "asesor": "INSTALADOR", 
              "tarea": "Solicitud" 
            } 
          ] 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.ObtenerSolicitudesCliente", 
          "Fecha": "2019-09-24", 
          "Hora": "14:27:00", 
          "Requerimiento": "95", 
          "Numero": "245", 
          "Estado": "OK" 
        } 
      } 
    } 
  } 
} 
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
<td>sdtDatosInstancias</td>
<td>sBTDatosInstancia</td>
<td>Listado de solicitudes:</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosInstancia son los siguientes:</p>
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
<td>instancia</td>
<td>Long</td>
<td>Número de instancia WorkFlow.</td>
</tr>
<tr>
<td>capital</td>
<td>Decimal</td>
<td>Importe capital del crédito.</td>
</tr>
<tr>
<td>asesor</td>
<td>String</td>
<td>Usuario asesor del crédito.</td>
</tr>
<tr>
<td>tarea</td>
<td>String</td>
<td>Tarea en la que se encuentra la instancia.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
</tbody>
</table>
</div></template>


