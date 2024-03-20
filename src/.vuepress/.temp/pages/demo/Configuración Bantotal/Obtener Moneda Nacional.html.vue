<template><div><h1 id="obtener-moneda-nacional" tabindex="-1"><a class="header-anchor" href="#obtener-moneda-nacional"><span>Obtener Moneda Nacional</span></a></h1>
<p>Método para obtener los datos de la moneda nacional.</p>
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
<td>BTConfiguracionBantotal.ObtenerMonedaNacional</td>
<td>RBTPG154</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Moneda Nacional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerMonedaNacional> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>669747179CD285A89A23FBEE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerMonedaNacional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerMonedaNacional=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: e023a871-d995-ad63-255b-99f4d8773111' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
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
      <BTConfiguracionBantotal.ObtenerMonedaNacionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>669747179CD285A89A23FBEE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <sdtMoneda> 
            <identificador>0</identificador> 
            <descripcion>PESOS</descripcion> 
            <simbolo>$</simbolo> 
         </sdtMoneda> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTConfiguracionBantotal.ObtenerMonedaNacional</Servicio> 
            <Fecha>2020-10-23</Fecha> 
            <Hora>15:48:04</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7534</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerMonedaNacionalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
    }, 
    "sdtMoneda": { 
        "identificador": "0", 
        "descripcion": "PESOS", 
        "simbolo": "$" 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTConfiguracionBantotal.ObtenerMonedaNacional", 
        "Fecha": "2020-10-23", 
        "Hora": "15:48:04", 
        "Requerimiento": "1", 
        "Numero": "7534", 
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
<td>tipoMoneda</td>
<td>String</td>
<td>[Hidden: Valor fijo &quot;MN&quot; para este método].</td>
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
<td>sdtMoneda</td>
<td>sBTMoneda</td>
<td>Datos de la moneda.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMoneda son los siguientes:</p>
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
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de moneda.</td>
</tr>
<tr>
<td>simbolo</td>
<td>String</td>
<td>Símbolo de moneda.</td>
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
<td>40001</td>
<td>No existen Monedas ingresadas en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


