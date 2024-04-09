<template><div><h1 id="actualizar-fatca" tabindex="-1"><a class="header-anchor" href="#actualizar-fatca"><span>Actualizar FATCA</span></a></h1>
<p>Método para modificar la información FATCA de una persona.</p>
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
<td>BTPersonas.ActualizarFATCA</td>
<td>RBTPCO11</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar FATCA:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarFATCA> 
         <bts:Btinreq> 
            <bts:Token>042638a184CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>42</bts:personaUId> 
         <bts:sdtInformacionFATCA> 
            <bts:ingresoBrutoEEUU>N</bts:ingresoBrutoEEUU> 
            <bts:residenciasFiscales> 
               <bts:sBTPCOResidenciaFiscal> 
                  <bts:paisId></bts:paisId> 
                  <bts:pais></bts:pais> 
                  <bts:codigoTIN></bts:codigoTIN> 
                  <bts:correlativo></bts:correlativo> 
               </bts:sBTPCOResidenciaFiscal> 
            </bts:residenciasFiscales> 
            <bts:permanencia183Dias>N</bts:permanencia183Dias> 
            <bts:tieneGreenCard>N</bts:tieneGreenCard> 
            <bts:residenciaMasPaises>N</bts:residenciaMasPaises> 
            <bts:codigoTIN>ABCDEF</bts:codigoTIN> 
            <bts:pagoFuenteEEUU>N</bts:pagoFuenteEEUU> 
         </bts:sdtInformacionFATCA> 
      </bts:BTPersonas.ActualizarFATCA> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarFATCA \ 
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
	"personaUId": "42", 
	"sdtInformacionFATCA": { 
	  "ingresoBrutoEEUU": "N", 
	  "permanencia183Dias": "N", 
	  "tieneGreenCard": "N", 
	  "residenciaMasPaises": "N", 
	  "codigoTIN": "ABCDEF", 
	  "pagoFuenteEEUU": "N", 
	  "residenciasFiscales": { 
		"sBTPCOResidenciaFiscal": { 
		} 
	  }, 
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
      <BTPersonas.ActualizarFATCAResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <resultado>NON US Person</resultado> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2064</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ActualizarFATCA</Servicio> 
            <Fecha>2020-03-10</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:31:11</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarFATCAResponse> 
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
   "resultado": "NON US Person", 
   "Btoutreq": { 
      "Numero": "2064", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ActualizarFATCA", 
      "Requerimiento": "1", 
      "Fecha": "2020-03-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "07:31:11" 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<tr>
<td>30002</td>
<td>Error - Datos duplicados.</td>
</tr>
<tr>
<td>40001</td>
<td>Debe ingresar al menos una Residencia Fiscal.</td>
</tr>
<tr>
<td>40002</td>
<td>El país [Número de identificador] ingresado no es válido.</td>
</tr>
<tr>
<td>40004</td>
<td>No se puede ingresar residencias fiscales.</td>
</tr>
<tr>
<td>40005</td>
<td>No existe el registro.</td>
</tr>
<tr>
<td>40006</td>
<td>No existe el país indicado.</td>
</tr>
<tr>
<td>40007</td>
<td>No existe el tipo de documento indicado.</td>
</tr>
<tr>
<td>40007</td>
<td>No debe ingresar correlativo para residencia.</td>
</tr>
<tr>
<td>40007</td>
<td>Se ingresó la misma residencia dos veces.</td>
</tr>
</tbody>
</table>
</div></template>


