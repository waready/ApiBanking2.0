<template><div><h1 id="obtener-campanas" tabindex="-1"><a class="header-anchor" href="#obtener-campanas"><span>Obtener Campañas</span></a></h1>
<p>Método para obtener campañas de préstamos.</p>
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
<td>BTMicrofinanzas.ObtenerCampanias</td>
<td>RBTPG425</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Campañas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerCampanias> 
         <bts:Btinreq> 
            <bts:Canal>BTINTERNO</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>3</bts:clienteUId> 
         <bts:fecha>2019-01-01</bts:fecha> 
      </bts:BTMicrofinanzas.ObtenerCampanias> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerCampanias \ 
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
   "clienteUId": "3", 
   "fecha": "2019-01-01" 
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
      <BTMicrofinanzas.ObtenerCampaniasResponse> 
         <Btinreq> 
            <Canal>BTINTERNO</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtCampanias> 
            <sBTCampania> 
               <codigo>1</codigo> 
               <descripcion>Campaña Uno</descripcion> 
            </sBTCampania> 
         </sdtCampanias> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerCampanias</Servicio> 
            <Fecha>2019-09-25</Fecha> 
            <Hora>10:06:27</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>246</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerCampaniasResponse> 
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
        "sdtCampanias": { 
          "sBTCampania": { 
            "codigo": "1", 
            "descripcion": "Campaña Uno" 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.ObtenerCampanias", 
          "Fecha": "2019-09-25", 
          "Hora": "10:06:27", 
          "Requerimiento": "95", 
          "Numero": "246", 
          "Estado": "OK" 
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
<td>Identificador único del cliente fiador.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de inicio de campaña.</td>
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
<td>sdtCampanias</td>
<td>sBTCampania</td>
<td>Listado de campañas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCampania son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Identificador de campaña.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de campaña.</td>
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
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el Identificador de cliente.</td>
</tr>
<tr>
<td>30011</td>
<td>No se obtuvo el titular representativo de la cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


