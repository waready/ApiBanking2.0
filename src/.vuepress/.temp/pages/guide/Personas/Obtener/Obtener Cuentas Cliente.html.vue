<template><div><h1 id="obtener-cuentas-cliente" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-cliente"><span>Obtener Cuentas Cliente</span></a></h1>
<p>Método para obtener un listado de las cuentas de una persona.</p>
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
<td>BTPersonas.ObtenerCuentasCliente</td>
<td>RBTPG182</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cuentas Cliente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerCuentasCliente> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>69bc094e014A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>41</bts:personaUId> 
      </bts:BTPersonas.ObtenerCuentasCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerCuentasCliente' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "41", 
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
      <BTPersonas.ObtenerCuentasClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>69bc094e014A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentasCliente> 
            <sBTCuentaCliente> 
               <clienteUId>21</clienteUId> 
               <titularidad> 
                  <identificador>1</identificador> 
                  <descripcion>Titular</descripcion> 
               </titularidad> 
               <representativo>N</representativo> 
            </sBTCuentaCliente> 
            <sBTCuentaCliente> 
               <clienteUId>242</clienteUId> 
               <titularidad> 
                  <identificador>4</identificador> 
                  <descripcion>Vice Presidente</descripcion> 
               </titularidad> 
               <representativo>N</representativo> 
            </sBTCuentaCliente> 
         </sdtCuentasCliente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2724</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerCuentasCliente</Servicio> 
            <Fecha>2018-10-26</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:58:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerCuentasClienteResponse> 
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
    "sdtCuentasCliente": { 
        "sBTCuentaCliente": [ { 
            "clienteUId": "21", 
            "titularidad": { 
               "descripcion": "Titular", 
               "identificador": "1" 
            }, 
            "representativo": "N" 
         }, 
         { 
            "clienteUId": "242", 
            "titularidad": { 
               "descripcion": "Vice Presidente", 
               "identificador": "4" 
            }, 
            "representativo": "N" 
         } ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "2722", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerCuentasCliente", 
        "Fecha": "2018-10-26", 
        "Requerimiento": "1", 
        "Hora": "15:56:11", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtCuentasCliente</td>
<td>sBTCuentaCliente</td>
<td>Listado de cuentas cliente.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentaCliente son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cuenta.</td>
</tr>
<tr>
<td>representativo</td>
<td>String</td>
<td>Indica si es titular representativo (S/N).</td>
</tr>
<tr>
<td>titularidad</td>
<td>sBTTipoIntegrante</td>
<td>Datos de tipo de integrante.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:</p>
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
<td>Identificador del integrante.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del integrante.</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se pudo obtener identificador único de la cuenta.</td>
</tr>
<tr>
<td>30015</td>
<td>No se recibió identificador de cuenta a consultar.</td>
</tr>
<tr>
<td>30023</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


