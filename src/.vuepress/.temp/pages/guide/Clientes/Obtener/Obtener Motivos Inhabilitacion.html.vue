<template><div><h1 id="obtener-motivos-inhabilitacion" tabindex="-1"><a class="header-anchor" href="#obtener-motivos-inhabilitacion"><span>Obtener Motivos Inhabilitacion</span></a></h1>
<p>Método para obtener un listado de los motivos de inhabilitacion.</p>
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
<td>BTClientes.ObtenerMotivosInhabilitacion</td>
<td>RBTPG449</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Motivos Inhabilitacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerMotivosInhabilitacion> 
         <bts:Btinreq> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>289a9ca6a299865B3A2E76CF</bts:Token> 
            <bts:Device>2</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTClientes.ObtenerMotivosInhabilitacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerMotivosInhabilitacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Usuario": "Instalador", 
          "Token": "289a9ca6a299865B3A2E76CF", 
          "Device": 2, 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 0 
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
      <Prueba.ObtenerMotivosInhabilitacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>2</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>289a9ca6a299865B3A2E76CF</Token> 
         </Btinreq> 
         <sbtMotivosInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>Embargo</descripcion> 
               <codigo>1</codigo> 
            </SdtsBTMotivoInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>En Juicio</descripcion> 
               <codigo>3</codigo> 
            </SdtsBTMotivoInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>Retenciones</descripcion> 
               <codigo>10</codigo> 
            </SdtsBTMotivoInhabilitacion> 
         </sbtMotivosInhabilitacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1827</Numero> 
            <Servicio>Prueba.ObtenerMotivosInhabilitacion</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2022-10-27</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>09:39:20</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </Prueba.ObtenerMotivosInhabilitacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Device": 2, 
          "Usuario": "Instalador", 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Token": "289a9ca6a299865B3A2E76CF" 
        }, 
        "sbtMotivosInhabilitacion": { 
          "SdtsBTMotivoInhabilitacion": [ 
            { 
              "descripcion": "Embargo", 
              "codigo": 1 
            }, 
            { 
              "descripcion": "En Juicio", 
              "codigo": 3 
            }, 
            { 
              "descripcion": "Retenciones", 
              "codigo": 10 
            } 
          ] 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 1827, 
          "Servicio": "Prueba.ObtenerMotivosInhabilitacion", 
          "Estado": "OK", 
          "Fecha": "2022-10-27", 
          "Requerimiento": 0, 
          "Hora": "09:39:20", 
          "Canal": "BTDIGITAL" 
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
<td>sdtMotivosInhabilitacion</td>
<td>sBTMotivoInhabilitacion</td>
<td>Listado de motivos de inhabilitación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sbtMotivosInhabilitacion son los siguientes:</p>
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
<td>Codigo</td>
<td>Long</td>
<td>Código del motivo de inhabilitación.</td>
</tr>
<tr>
<td>Descripcion</td>
<td>String</td>
<td>Descripción del motivo de inhabilitación.</td>
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
<td>No existen motivos de inhabilitación.</td>
</tr>
</tbody>
</table>
</div></template>


