<template><div><h1 id="obtener-tipos-de-integracion" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-integracion"><span>Obtener Tipos de Integración</span></a></h1>
<p>Método para obtener un listado de los tipos de integración ingresados en Bantotal.</p>
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
<td>BTClientes.ObtenerTiposDeIntegracion</td>
<td>RBTPG138</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipo de Integración:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerTiposDeIntegracion> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTClientes.ObtenerTiposDeIntegracion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTiposDeIntegracion=' \ 
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
      <BTClientes.ObtenerTiposDeIntegracionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>a5cd5311ae4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTiposIntegracion> 
            <sBTTipoIntegrante> 
               <identificador>1</identificador> 
               <descripcion>Titular</descripcion> 
            </sBTTipoIntegrante> 
            <sBTTipoIntegrante> 
               <identificador>2</identificador> 
               <descripcion>Apoderado</descripcion> 
            </sBTTipoIntegrante> 
            <sBTTipoIntegrante> 
               <identificador>5</identificador> 
               <descripcion>Firmante</descripcion> 
            </sBTTipoIntegrante> 
            <sBTTipoIntegrante> 
               <identificador>7</identificador> 
               <descripcion>Fiador solidario</descripcion> 
            </sBTTipoIntegrante> 
         </sdtTiposIntegracion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>22</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerTiposDeIntegracion</Servicio> 
            <Fecha>2018-05-04</Fecha> 
            <Requerimiento>3</Requerimiento> 
            <Hora>11:38:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerTiposDeIntegracionResponse> 
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
    "sdtTiposIntegracion": { 
        "sBTTipoIntegrante": [ 
            { 
                "descripcion": "Titular", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Apoderado", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Firmante", 
                "identificador": "5" 
            }, 
            { 
                "descripcion": "Fiador solidario", 
                "identificador": "7" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "12", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerTiposDeIntegracion", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "11:15:05", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
<p>No aplica.</p>
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
<td>sdtTiposIntegracion</td>
<td>sBTTipoIntegrante</td>
<td>Lista de tipos de integrantes.</td>
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
<td>Identificador de tipo de integrante.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de tipo de integrante.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


