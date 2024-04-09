<template><div><h1 id="obtener-concepto" tabindex="-1"><a class="header-anchor" href="#obtener-concepto"><span>Obtener Concepto</span></a></h1>
<p>Método para obtener los conceptos de los programas de personas.</p>
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
<td>BTPersonas.ObtenerConcepto</td>
<td>RBTPG529</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Concepto:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerConcepto> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token> 
         </bts:Btinreq> 
         <bts:programa>HDECOCPD</bts:programa> 
         <bts:conceptoId>11</bts:conceptoId> 
      </bts:BTPersonas.ObtenerConcepto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConcepto=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "programa":"HDECOCPD", 
   "conceptoId": 11 
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
      <BTPersonas.ObtenerConceptoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>DF1F942C6EC60E8B95BBEA69</Token> 
         </Btinreq> 
         <sdtValorCampo> 
            <sBTValorCampo> 
               <descripcion>Cliente</descripcion> 
               <identificador>1</identificador> 
            </sBTValorCampo> 
            <sBTValorCampo> 
               <descripcion>Agencia</descripcion> 
               <identificador>2</identificador> 
            </sBTValorCampo> 
         </sdtValorCampo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16846</Numero> 
            <Servicio>BTPersonas.ObtenerConcepto</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-26</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>11:44:45</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerConceptoResponse> 
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
   "sdtValorCampo": { 
        "sBTValorCampo": [ 
        { 
            "descripcion": "Cliente", 
            "identificador": 1 
        }, 
        { 
            "descripcion": "Agencia", 
            "identificador": 2 
        } 
        ] 
    },  
   "Erroresnegocio": { 
       "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.ObtenerConcepto", 
       "Fecha": "2023-12-18", 
       "Requerimiento": "", 
       "Hora": "01:48:53", 
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
<td>programa</td>
<td>String</td>
<td>Nombre del programa.</td>
</tr>
<tr>
<td>conceptoId</td>
<td>Long</td>
<td>Identificador del concepto.</td>
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
<td>sdtValorCampo</td>
<td>sBTValorCampo</td>
<td>Coleccion de conceptos del programa.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTValorCampo son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>identificador</td>
<td>Int</td>
<td>Identificador.</td>
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
<td>No se recibió el nombre del programa.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del campo.</td>
</tr>
</tbody>
</table>
</div></template>


