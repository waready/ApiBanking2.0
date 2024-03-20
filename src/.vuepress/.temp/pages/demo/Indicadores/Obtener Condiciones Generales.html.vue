<template><div><h1 id="obtener-condiciones-generales" tabindex="-1"><a class="header-anchor" href="#obtener-condiciones-generales"><span>Obtener Condiciones Generales</span></a></h1>
<p>Método para obtener las condiciones generales ingresadas en el sistema.</p>
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
<td>BTIndicadores.ObtenerCondicionesGenerales</td>
<td>RBTPG703</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Condiciones Generales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerCondicionesGenerales> 
         <bts:Btinreq> 
           <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerCondicionesGenerales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerCondicionesGenerales' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
      "Btinreq": { 
         "Device": 1, 
         "Canal": "BTDIGITAL", 
         "Token": "959C2E0AEF210ABC0D8AA8F7", 
         "Usuario": "INSTALADOR", 
         "Requerimiento": "?" 
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
      <BTIndicadores.ObtenerCondicionesGeneralesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtCondicionesGenerales> 
            <parametrosGeneralesWF>NO</parametrosGeneralesWF> 
            <reglasNegocio>SI</reglasNegocio> 
            <debug>SI</debug> 
            <opcionPAE>NO</opcionPAE> 
            <fechaCierreCanales>2022-10-12</fechaCierreCanales> 
            <fechaCierre>2020-10-12</fechaCierre> 
            <fechaAperturaCanales>2022-10-13</fechaAperturaCanales> 
            <empresasIguales>NO</empresasIguales> 
            <opcionWorkFlow>SI</opcionWorkFlow> 
            <cantidadPAE>21</cantidadPAE> 
            <opcion7x24>SI</opcion7x24> 
            <fechaApertura>2020-10-13</fechaApertura> 
            <cantidadReglas>294</cantidadReglas> 
            <periodo7x24/> 
         </sdtCondicionesGenerales> 
         <Erroresnegocio/> 
         <Btoutreq> 
            <Numero>11990</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerCondicionesGenerales</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:55:00</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerCondicionesGeneralesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": 1, 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?", 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7" 
   }, 
   "sdtCondicionesGenerales": { 
      "parametrosGeneralesWF": "NO", 
      "reglasNegocio": "SI", 
      "debug": "SI", 
      "opcionPAE": "NO", 
      "fechaCierreCanales": "2022-10-12", 
      "fechaCierre": "2020-10-12", 
      "fechaAperturaCanales": "2022-10-13", 
      "empresasIguales": "NO", 
      "opcionWorkFlow": "SI", 
      "cantidadPAE": 21, 
      "opcion7x24": "SI", 
      "fechaApertura": "2020-10-13", 
      "cantidadReglas": 294, 
      "periodo7x24": "" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11990, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerCondicionesGenerales", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "14:55:00" 
   } 
}' 
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
<td>sdtCondicionesGenerales</td>
<td>sBTCondicionesGenerales</td>
<td>Listado de las Condiciones Generales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCondicionesGenerales son los siguientes:</p>
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
<td>debug</td>
<td>String</td>
<td>Opción debug.</td>
</tr>
<tr>
<td>opcion7x24</td>
<td>String</td>
<td>Opción 7x24.</td>
</tr>
<tr>
<td>periodo7x24</td>
<td>String</td>
<td>Periodo 7x24.</td>
</tr>
<tr>
<td>opcionPAE</td>
<td>String</td>
<td>Opción PAE.</td>
</tr>
<tr>
<td>cantidadPAE</td>
<td>Int</td>
<td>Cantidad PAE.</td>
</tr>
<tr>
<td>reglasNegocio</td>
<td>String</td>
<td>Opción reglas de negocio.</td>
</tr>
<tr>
<td>cantidadReglas</td>
<td>Int</td>
<td>Cantidad reglas.</td>
</tr>
<tr>
<td>parametrosGeneralesWF</td>
<td>String</td>
<td>Parametros Generales de Workflow.</td>
</tr>
<tr>
<td>opcionWorkFlow</td>
<td>String</td>
<td>Opción Workflow.</td>
</tr>
<tr>
<td>empresasIguales</td>
<td>String</td>
<td>Empresas iguales.</td>
</tr>
<tr>
<td>fechaAperturaCanales</td>
<td>Date</td>
<td>Fecha de apertura de canales.</td>
</tr>
<tr>
<td>fechaCierreCanales</td>
<td>Date</td>
<td>Fecha de cierre de canales.</td>
</tr>
<tr>
<td>fechaApertura</td>
<td>Date</td>
<td>Fecha de apertura.</td>
</tr>
<tr>
<td>fechaCierre</td>
<td>Date</td>
<td>Fecha de cierre.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


