<template><div><h1 id="obtener-domicilios" tabindex="-1"><a class="header-anchor" href="#obtener-domicilios"><span>Obtener Domicilios</span></a></h1>
<p>Método para devolver un listado de los domicilios asociados al cliente indicado.</p>
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
<td>BTClientes.ObtenerDomicilios</td>
<td>RBTPG184</td>
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
      <bts:BTClientes.ObtenerDomicilios> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>772a871c734A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>21</bts:clienteUId> 
      </bts:BTClientes.ObtenerDomicilios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDomicilios=' \ 
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
    "clienteUId": "21", 
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
      <BTClientes.ObtenerDomiciliosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>772a871c734A8B5C60A82434</Token> 
         </Btinreq> 
         <domicilios> 
            <sBTDomicilio1> 
               <paisDomicilioId>845</paisDomicilioId> 
               <paisDomicilio>URUGUAY</paisDomicilio> 
               <departamentoId>2</departamentoId> 
               <departamento>Canelones</departamento> 
               <localidadId>1497</localidadId> 
               <localidad>Parque de Solymar</localidad> 
               <barrioId>0</barrioId> 
               <barrio/> 
               <calle>70</calle> 
               <numeroPuerta>46</numeroPuerta> 
               <apartamento/> 
               <codigoPostal>15005</codigoPostal> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <tipoDeDomicilio>Residencia</tipoDeDomicilio> 
            </sBTDomicilio1> 
            <sBTDomicilio1> 
               <paisDomicilioId>845</paisDomicilioId> 
               <paisDomicilio>URUGUAY</paisDomicilio> 
               <departamentoId>3</departamentoId> 
               <departamento>Cerro Largo</departamento> 
               <localidadId>1738</localidadId> 
               <localidad>Plácido Rosas</localidad> 
               <barrioId>0</barrioId> 
               <barrio/> 
               <calle>101</calle> 
               <numeroPuerta>-</numeroPuerta> 
               <apartamento/> 
               <codigoPostal>15024</codigoPostal> 
               <tipoDeDomicilioId>3</tipoDeDomicilioId> 
               <tipoDeDomicilio>Negocio</tipoDeDomicilio> 
            </sBTDomicilio1> 
         </domicilios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2971</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerDomicilios</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-08</Fecha> 
            <Hora>15:34:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerDomiciliosResponse> 
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
    "domicilios": { 
        "sBTDomicilio1": [ 
            { 
                "localidad": "Parque de Solymar", 
                "paisDomicilio": "URUGUAY", 
                "barrioId": "0", 
                "departamento": "Canelones", 
                "numeroPuerta": "46", 
                "barrio": "", 
                "localidadId": "1497", 
                "tipoDeDomicilioId": "1", 
                "codigoPostal": "15005", 
                "calle": "70", 
                "apartamento": "", 
                "tipoDeDomicilio": "Residencia", 
                "departamentoId": "2", 
                "paisDomicilioId": "845" 
            }, 
            { 
                "localidad": "Plácido Rosas", 
                "paisDomicilio": "URUGUAY", 
                "barrioId": "0", 
                "departamento": "Cerro Largo", 
                "numeroPuerta": "-", 
                "barrio": "", 
                "localidadId": "1738", 
                "tipoDeDomicilioId": "3", 
                "codigoPostal": "15024", 
                "calle": "101", 
                "apartamento": "", 
                "tipoDeDomicilio": "Negocio", 
                "departamentoId": "3", 
                "paisDomicilioId": "845" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "2973", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerDomicilios", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-08", 
        "Hora": "15:34:36", 
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
<td>domicilios</td>
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
<td>localidad</td>
<td>String</td>
<td>Nombre de la localidad.</td>
</tr>
<tr>
<td>paisDomicilio</td>
<td>String</td>
<td>Nombre del pais.</td>
</tr>
<tr>
<td>barrioId</td>
<td>Int</td>
<td>Identificador del barrio.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Nombre del departamento.</td>
</tr>
<tr>
<td>numeroPuerta</td>
<td>String</td>
<td>Número de puerta.</td>
</tr>
<tr>
<td>barrio</td>
<td>String</td>
<td>Nombre del barrio.</td>
</tr>
<tr>
<td>localidadId</td>
<td>Int</td>
<td>Identificador de la localidad.</td>
</tr>
<tr>
<td>tipoDeDomicilioId</td>
<td>Byte</td>
<td>Identificador del tipo de domicilio.</td>
</tr>
<tr>
<td>codigoPostal</td>
<td>String</td>
<td>Código postal.</td>
</tr>
<tr>
<td>calle</td>
<td>String</td>
<td>Calle del domicilio.</td>
</tr>
<tr>
<td>apartamento</td>
<td>String</td>
<td>Número de apartamento.</td>
</tr>
<tr>
<td>tipoDeDomicilio</td>
<td>String</td>
<td>Nombre del tipo de domicilio.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Int</td>
<td>Identificador del departamento.</td>
</tr>
<tr>
<td>paisDomicilioId</td>
<td>Short</td>
<td>Identificador del país.</td>
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
<td>No se recibió el identificador de la cuenta.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador de la cuenta no es correcto.</td>
</tr>
<tr>
<td>30011</td>
<td>No se encontraron domicilios para la cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


