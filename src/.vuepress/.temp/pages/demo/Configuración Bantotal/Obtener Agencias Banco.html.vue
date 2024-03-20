<template><div><h1 id="obtener-agencias-banco" tabindex="-1"><a class="header-anchor" href="#obtener-agencias-banco"><span>Obtener Agencias Banco</span></a></h1>
<p>Método para obtener un listado de las agencias de un banco.</p>
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
<td>BTConfiguracionBantotal.ObtenerAgenciasBanco</td>
<td>RBTPG236</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Agencias Banco:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerAgenciasBanco> 
         <bts:Btinreq> 
            <bts:Device></bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>91fac9687a4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:bancoId>2</bts:bancoId> 
      </bts:BTConfiguracionBantotal.ObtenerAgenciasBanco> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerAgenciasBanco=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1' \ 
  -H 'User-Agent: PostmanRuntime/7.16.3' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "bancoId": 2 
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
      <BTConfiguracionBantotal.ObtenerAgenciasBancoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device/> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>91fac9687a4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtAgencias> 
            <sBTAgenciaBanco> 
               <banco>2</banco> 
               <sucursal>5</sucursal> 
               <nombre>Sucursal Central</nombre> 
               <codPostal>11400</codPostal> 
            </sBTAgenciaBanco> 
         </sdtAgencias> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>4428</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerAgenciasBanco</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>16:41:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerAgenciasBancoResponse> 
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
   "sdtAgencias": { 
      "sBTAgenciaBanco": [ { 
         "Sucursal": "5", 
         "CodPostal": "11400", 
         "Banco": "2", 
         "Nombre": "Sucursal Central" 
   } ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "4438", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerAgenciasBanco", 
      "Fecha": "2018-12-14", 
      "Requerimiento": "", 
      "Hora": "17:00:28", 
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
<td>bancoId</td>
<td>Long</td>
<td>Identificador de Banco.</td>
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
<td>sdtAgencias</td>
<td>sBTAgenciaBanco</td>
<td>Listado de las agencias.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTAgenciaBanco son los siguientes:</p>
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
<td>banco</td>
<td>Int</td>
<td>Identificador de banco.</td>
</tr>
<tr>
<td>sucursal</td>
<td>Long</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>codPostal</td>
<td>String</td>
<td>Codigo postal.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


