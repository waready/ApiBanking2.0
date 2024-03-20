<template><div><h1 id="agregar-integrante" tabindex="-1"><a class="header-anchor" href="#agregar-integrante"><span>Agregar Integrante</span></a></h1>
<p>Método para agregar un integrante a una cuenta cliente.</p>
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
<td>BTClientes.AgregarIntegrante</td>
<td>RBTPG186</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Integrante:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.AgregarIntegrante> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>d19fba5fa44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>21</bts:clienteUId> 
         <bts:personaUId>61</bts:personaUId> 
         <bts:codigoDeTitularidad>1</bts:codigoDeTitularidad> 
      </bts:BTClientes.AgregarIntegrante> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarIntegrante=' \ 
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
    "clienteUId": "21", 
    "personaUId": "41", 
    "codigoDeTitularidad": "1" 
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
      <BTClientes.AgregarIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>d19fba5fa44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2701</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.AgregarIntegrante</Servicio> 
            <Fecha>2018-10-26</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:48:44</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.AgregarIntegranteResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "2719", 
        "Estado": "OK", 
        "Servicio": "BTClientes.AgregarIntegrante", 
        "Fecha": "2018-10-26", 
        "Requerimiento": "1", 
        "Hora": "15:31:49", 
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
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>codigoDeTitularidad</td>
<td>Byte</td>
<td>Código de titularidad.</td>
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
<tr>
<td>30002</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió código de titularidad.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30014</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30023</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>30032</td>
<td>La persona tiene que haber sido ingresado con Alta Normal para poder integrar una cuenta.</td>
</tr>
<tr>
<td>30033</td>
<td>Persona inhabilitada por Banco Central.</td>
</tr>
<tr>
<td>30034</td>
<td>La persona seleccionada no tiene segmento asociado.</td>
</tr>
<tr>
<td>30036</td>
<td>La persona se encuentra en la lista de inhabilitados: [Número de identificador].</td>
</tr>
<tr>
<td>30037</td>
<td>La persona se encuentra en la lista de inhabilitados: [Número de identificador].</td>
</tr>
<tr>
<td>30038</td>
<td>La persona seleccionada figura como fallecida.</td>
</tr>
<tr>
<td>30039</td>
<td>Persona seleccionada no tiene domicilio legal.</td>
</tr>
<tr>
<td>30040</td>
<td>Código de Titularidad Incorrecto.</td>
</tr>
<tr>
<td>30041</td>
<td>La persona no tiene condición ante el impuesto.</td>
</tr>
<tr>
<td>30042</td>
<td>La persona tiene alta inconclusa no puede asociarse.</td>
</tr>
<tr>
<td>30043</td>
<td>La persona seleccionada no tiene actividad económica.</td>
</tr>
<tr>
<td>30046</td>
<td>La cuenta [Número de identificador] tiene la misma integración que la cuenta actual.</td>
</tr>
</tbody>
</table>
</div></template>


