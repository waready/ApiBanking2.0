<template><div><h1 id="obtener-fatca" tabindex="-1"><a class="header-anchor" href="#obtener-fatca"><span>Obtener FATCA</span></a></h1>
<p>Método para obtener la información FATCA de una persona.</p>
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
<td>BTPersonas.ObtenerFATCA</td>
<td>RBTPCO12</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener FATCA:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerFATCA> 
         <bts:Btinreq> 
            <bts:Token>bbf6bf228fCD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>41</bts:personaUId> 
      </bts:BTPersonas.ObtenerFATCA> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerFATCA \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "41" 
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
      <BTPersonas.ObtenerFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bbf6bf228fCD285A89A23FBE</Token> 
         </Btinreq> 
         <resultado>US Person</resultado> 
         <sdtInformacionFATCA> 
            <ingresoBrutoEEUU>N</ingresoBrutoEEUU> 
            <residenciasFiscales> 
               <sBTPCOResidenciaFiscal> 
                  <paisId>53</paisId> 
                  <pais>ARABIA SAUDITA</pais> 
                  <codigoTIN>AAASSS</codigoTIN> 
                  <correlativo>1</correlativo> 
               </sBTPCOResidenciaFiscal> 
               <sBTPCOResidenciaFiscal> 
                  <paisId>845</paisId> 
                  <pais>URUGUAY</pais> 
                  <codigoTIN>UUUYYY</codigoTIN> 
                  <correlativo>2</correlativo> 
               </sBTPCOResidenciaFiscal> 
            </residenciasFiscales> 
            <permanencia183Dias>S</permanencia183Dias> 
            <residenciaMasPaises>S</residenciaMasPaises> 
            <tieneGreenCard>S</tieneGreenCard> 
            <codigoTIN>ABCDEF</codigoTIN> 
            <pagoFuenteEEUU>N</pagoFuenteEEUU> 
         </sdtInformacionFATCA> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1729</Numero> 
            <Servicio>BTPersonas.ObtenerFATCA</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-03-05</Fecha> 
            <Hora>13:10:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerFATCAResponse> 
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
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "sdtInformacionFATCA": { 
      "ingresoBrutoEEUU": "N", 
      "permanencia183Dias": "S", 
      "residenciaMasPaises": "S", 
      "tieneGreenCard": "S", 
      "codigoTIN": "ABCDEF", 
      "pagoFuenteEEUU": "N", 
      "residenciasFiscales": { 
         "sBTPCOResidenciaFiscal": [ 
         { 
            "paisId": "53", 
            "pais": "ARABIA SAUDITA", 
            "codigoTIN": "AAASSS", 
            "correlativo": "1" 
         }, 
         { 
            "paisId": "845", 
            "pais": "URUGUAY", 
            "codigoTIN": "UUUYYY", 
            "correlativo": "2" 
         } 
         ] 
      }, 
   }, 
   "Btoutreq": { 
      "Numero": "1729", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerFATCA", 
      "Requerimiento": "1", 
      "Fecha": "2020-03-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:10:51" 
   }, 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>resultado</td>
<td>String</td>
<td>Resultado FATCA.</td>
</tr>
<tr>
<td>sdtInformacionFATCA</td>
<td>sBTPCOInformacionFATCA</td>
<td>Datos FATCA de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPCOInformacionFATCA son los siguientes:</p>
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
<td>permanencia183Dias</td>
<td>String</td>
<td>Permanencia de más de 183 días en el último año (S/N).</td>
</tr>
<tr>
<td>tieneGreenCard</td>
<td>String</td>
<td>Poseedor de la tarjeta verde o &quot;Green Card&quot; de los EEUU (S/N).</td>
</tr>
<tr>
<td>pagoFuenteEEUU</td>
<td>String</td>
<td>Recibe cualquier pago proveniente de fuentes dentro de los EEUU (S/N).</td>
</tr>
<tr>
<td>ingresoBrutoEEUU</td>
<td>String</td>
<td>Recibe cualquier ingreso bruto procedente de una fuente en los EEUU (S/N).</td>
</tr>
<tr>
<td>codigoTIN</td>
<td>String</td>
<td>Código TIN.</td>
</tr>
<tr>
<td>residenciaMasPaises</td>
<td>String</td>
<td>Residencia en más paises.</td>
</tr>
<tr>
<td>residenciasFiscales</td>
<td>sBTPCOResidenciasFiscales</td>
<td>Listado de residencias.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPCOResidenciasFiscales son los siguientes:</p>
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
<td>correlativo</td>
<td>Short</td>
<td>Número de correlativo.</td>
</tr>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>Nombre del pais.</td>
</tr>
<tr>
<td>codigoTIN</td>
<td>String</td>
<td>Código TIN.</td>
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
<td>No se recibió identificador de persona.</td>
</tr>
</tbody>
</table>
</div></template>


