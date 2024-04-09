<template><div><h1 id="obtener-domicilios" tabindex="-1"><a class="header-anchor" href="#obtener-domicilios"><span>Obtener Domicilios</span></a></h1>
<p>Método para obtener un listado de los domicilios de una persona.</p>
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
<td>BTPersonas.ObtenerDomicilios</td>
<td>RBTPG197</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Domicilios:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDomicilios> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>772a871c734A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>101</bts:personaUId> 
      </bts:BTPersonas.ObtenerDomicilios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDomicilios=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "personaUId": "101" 
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTPersonas.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>772a871c734A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDomicilios> 
            <sBTDomicilio1> 
               <paisDomicilioId>845</paisDomicilioId> 
               <paisDomicilio>URUGUAY</paisDomicilio> 
               <departamentoId>4</departamentoId> 
               <departamento>Colonia</departamento> 
               <localidadId>1357</localidadId> 
               <localidad>Riachuelo</localidad> 
               <barrioId>0</barrioId> 
               <barrio/> 
               <calle>1</calle> 
               <numeroPuerta>167</numeroPuerta> 
               <apartamento/> 
               <codigoPostal/> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <tipoDeDomicilio>Residencia</tipoDeDomicilio> 
            </sBTDomicilio1> 
         </sdtDomicilios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2991</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerDomicilios</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-08</Fecha> 
            <Hora>16:05:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerDomiciliosResponse> 
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
    "sdtDomicilios": { 
        "sBTDomicilio1": [ 
            { 
                "localidad": "Riachuelo", 
                "paisDomicilio": "URUGUAY", 
                "barrioId": "0", 
                "departamento": "Colonia", 
                "numeroPuerta": "167", 
                "barrio": "", 
                "localidadId": "1357", 
                "tipoDeDomicilioId": "1", 
                "codigoPostal": "", 
                "calle": "1", 
                "apartamento": "", 
                "tipoDeDomicilio": "Residencia", 
                "departamentoId": "4", 
                "paisDomicilioId": "845" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "2993", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerDomicilios", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-08", 
        "Hora": "16:07:57", 
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
<td>sdtDomicilios</td>
<td>sBTDomicilio1</td>
<td>Listado de domicilios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes:</p>
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
<td>paisDomicilioId</td>
<td>Short</td>
<td>Identificador del país.</td>
</tr>
<tr>
<td>paisDomicilio</td>
<td>String</td>
<td>Nombre del pais.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Int</td>
<td>Identificador del departamento.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Nombre del departamento.</td>
</tr>
<tr>
<td>localidadId</td>
<td>Int</td>
<td>Identificador de la localidad.</td>
</tr>
<tr>
<td>localidad</td>
<td>String</td>
<td>Nombre de la localidad.</td>
</tr>
<tr>
<td>barrioId</td>
<td>Int</td>
<td>Identificador del barrio.</td>
</tr>
<tr>
<td>barrio</td>
<td>String</td>
<td>Nombre del barrio.</td>
</tr>
<tr>
<td>calle</td>
<td>String</td>
<td>Calle del domicilio.</td>
</tr>
<tr>
<td>numeroPuerta</td>
<td>String</td>
<td>Número de puerta.</td>
</tr>
<tr>
<td>apartamento</td>
<td>String</td>
<td>Número de apartamento.</td>
</tr>
<tr>
<td>codigoPostal</td>
<td>String</td>
<td>Código postal.</td>
</tr>
<tr>
<td>tipoDeDomicilioId</td>
<td>Short</td>
<td>Identificador del tipo de domicilio.</td>
</tr>
<tr>
<td>tipoDeDomicilio</td>
<td>String</td>
<td>Nombre del tipo de domicilio.</td>
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
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador de la persona no es correcto.</td>
</tr>
<tr>
<td>30011</td>
<td>No se encontraron domicilios para la persona.</td>
</tr>
</tbody>
</table>
</div></template>


