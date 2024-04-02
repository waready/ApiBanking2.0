<template><div><h1 id="obtener-calendarios" tabindex="-1"><a class="header-anchor" href="#obtener-calendarios"><span>Obtener Calendarios</span></a></h1>
<p>Método para obtener los calendarios ingresados en el sistema.</p>
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
<td>BTConfiguracionBantotal.ObtenerCalendarios</td>
<td>RBTPG284</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Calendarios:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerCalendarios> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MI</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b88B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerCalendarios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X GET \ 
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarios' \ 
   -H 'cache-control: no-cache' \ 
   -H 'content-type: application/json' \ 
   -d '{ 
   "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    } 
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
      <BTConfiguracionBantotal.ObtenerCalendariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MI</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b88B5C60A82434</Token> 
         </Btinreq> 
         <sdtCalendarios> 
            <sBTCalendario> 
               <descripcion>Calendario 1</descripcion> 
               <identificador>1</identificador> 
            </sBTCalendario> 
            <sBTCalendario> 
               <descripcion>Calendario 2</descripcion> 
               <identificador>2</identificador> 
            </sBTCalendario> 
         </sdtCalendarios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109087</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarios</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>09:11:46</Hora> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerCalendariosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    }, 
    "sdtCalendarios": { 
		"sBTCalendario": [ 
			{ 
				"descripcion":"Calendario 1", 
				"identificador":1 
			}, 
			{ 
				"descripcion":"Calendario 2", 
				"identificador":2 
			} 
		] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 109092, 
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarios", 
        "Estado": "OK", 
        "Fecha": "2020-11-24", 
        "Requerimiento": "0", 
        "Hora": "14:13:38", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
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
<td>sdtCalendarios</td>
<td>sBTCalendario</td>
<td>Colección de calendarios.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTCalendario tiene los siguientes campos:</p>
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
<td>Short</td>
<td>Código del calendario.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del calendario.</td>
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
<td>No se encontraron calendarios en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


