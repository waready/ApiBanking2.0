<template><div><h1 id="obtener-telefonos" tabindex="-1"><a class="header-anchor" href="#obtener-telefonos"><span>Obtener Telefonos</span></a></h1>
<p>Método para obtener los teléfonos de un cliente.</p>
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
<td>BTClientes.ObtenerTelefonos</td>
<td>RBTPG215</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Telefonos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerTelefonos> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de64124A</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>21</bts:clienteUId> 
      </bts:BTClientes.ObtenerTelefonos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTelefonos' \ 
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
	"clienteUId":"21" 
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
      <BTClientes.ObtenerTelefonosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de64124A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTelefonos> 
            <sBTTelefono> 
               <telefono>26004288</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>1</identificador> 
               <tipoDeDomicilio>Casa</tipoDeDomicilio> 
            </sBTTelefono> 
            <sBTTelefono> 
               <telefono>091897718</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>2</identificador> 
               <tipoDeDomicilio>Casa</tipoDeDomicilio> 
            </sBTTelefono> 
            <sBTTelefono> 
               <telefono>2134543</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>3</identificador> 
               <tipoDeDomicilio>Casa</tipoDeDomicilio> 
            </sBTTelefono> 
            <sBTTelefono> 
               <telefono>21345434</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>4</identificador> 
               <tipoDeDomicilio>Casa</tipoDeDomicilio> 
            </sBTTelefono> 
         </sdtTelefonos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8434</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerTelefonos</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:42:25</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerTelefonosResponse> 
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
	"sdtTelefonos": { 
		"sBTTelefono": [ 
			{ 
				"telefono": "26004288", 
				"tipoDeDomicilioId": "1", 
				"identificador": "1", 
				"tipoDeDomicilio": "Casa" 
			}, 
			{ 
				"telefono": "091897718", 
				"tipoDeDomicilioId": "1", 
				"identificador": "2", 
				"tipoDeDomicilio": "Casa" 
			}, 
			{ 
				"telefono": "2134543", 
				"tipoDeDomicilioId": "1", 
				"identificador": "3", 
				"tipoDeDomicilio": "Casa" 
			}, 
			{ 
				"telefono": "21345434", 
				"tipoDeDomicilioId": "1", 
				"identificador": "4", 
				"tipoDeDomicilio": "Casa" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerTelefonos", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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
<td>sdtTelefonos</td>
<td>sBTTelefono</td>
<td>Listado de teléfonos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTelefono son los siguientes:</p>
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
<td>telefono</td>
<td>String</td>
<td>Número de teléfono</td>
</tr>
<tr>
<td>tipoDeDomicilioId</td>
<td>Byte</td>
<td>Identificador de tipo de domicilio del teléfono.</td>
</tr>
<tr>
<td>tipoDeDomicilio</td>
<td>String</td>
<td>Descripción de tipo de domicilio del teléfono.</td>
</tr>
<tr>
<td>identificador</td>
<td>Byte</td>
<td>Identificador correlativo de teléfono.</td>
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
<td>No se recibió identificador de cliente.</td>
</tr>
</tbody>
</table>
</div></template>


