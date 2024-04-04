<template><div><h1 id="obtener-proxima-fecha-habil" tabindex="-1"><a class="header-anchor" href="#obtener-proxima-fecha-habil"><span>Obtener Próxima Fecha Hábil</span></a></h1>
<p>Método que devuelve la próxima fecha hábil a la fecha ingresada. Si no se recibe identificador de calendario, devuelve para el calendario de la sucursal central.</p>
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
<td>BTCalendario.ObtenerProximaFechaHabil</td>
<td>RBTPG331</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Próxima Fecha Hábil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.ObtenerProximaFechaHabil> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>172681201999865B3A2E76CF</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:fecha>2021-03-26</bts:fecha> 
      </bts:BTCalendarios.ObtenerProximaFechaHabil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerProximaFechaHabil' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
    "fecha": "2021-03-26" 
} 
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
      <BTCalendarios.ObtenerProximaFechaHabilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>Instalador</Usuario> 
            <Token>172681201999865B3A2E76CF</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <fechaHabil>2021-03-29</fechaHabil> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.ObtenerProximaFechaHabil</Servicio> 
            <Fecha>2021-03-24</Fecha> 
            <Hora>10:24:19</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8101</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.ObtenerProximaFechaHabilResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
	{ 
	"Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
    "fechaHabil": "2021-03-29", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.ObtenerProximaFechaHabil", 
      "Fecha": "2021-03-24", 
      "Hora": "10:24:19", 
      "Requerimiento": "1", 
      "Numero": "8101", 
      "Estado": "OK" 
    } 
  }, 
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
<td>calendarioId</td>
<td>Short</td>
<td>Identificador de calendario.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de consulta.</td>
</tr>
<tr>
<td>sentido</td>
<td>String</td>
<td>[Hidden, valor fijo 'A' para este método].</td>
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
<td>fechaHabil</td>
<td>Date</td>
<td>Próxima fecha hábil.</td>
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
<td>Debe ingresar fecha a consultar.</td>
</tr>
</tbody>
</table>
</div></template>


