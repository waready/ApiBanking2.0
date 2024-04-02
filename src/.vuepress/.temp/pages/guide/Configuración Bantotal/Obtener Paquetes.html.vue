<template><div><h1 id="obtener-paquetes" tabindex="-1"><a class="header-anchor" href="#obtener-paquetes"><span>Obtener Paquetes</span></a></h1>
<p>Método para obtener un listado de los paquetes ingresados en Bantotal.</p>
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
<td>BTConfiguracionBantotal.ObtenerPaquetes</td>
<td>RBTPG187</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Paquetes:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerPaquetes> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerPaquetes> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerPaquetes=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTConfiguracionBantotal.ObtenerPaquetesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPaquetes> 
            <sBTPaquete> 
               <codigo>1</codigo> 
               <descripcion>Cuenta Persona</descripcion> 
               <vigente>S</vigente> 
               <productos> 
                  <SdtsBTProductoPaquete> 
                     <productoUId>154</productoUId> 
                     <nombre/> 
                     <moneda>PESOS</moneda> 
                     <papel>Billete</papel> 
                     <cantidad>0</cantidad> 
                  </SdtsBTProductoPaquete> 
                  <SdtsBTProductoPaquete> 
                     <productoUId>93</productoUId> 
                     <nombre>Cuenta corriente P.Física</nombre> 
                     <moneda>PESOS</moneda> 
                     <papel>Billete</papel> 
                     <cantidad>1</cantidad> 
                  </SdtsBTProductoPaquete> 
                  <SdtsBTProductoPaquete> 
                     <productoUId>134</productoUId> 
                     <nombre>Caja de Ahorro P.Física</nombre> 
                     <moneda>DÓLAR ESTADOUNIDENSE</moneda> 
                     <papel>Billete</papel> 
                     <cantidad>1</cantidad> 
                  </SdtsBTProductoPaquete> 
                  <SdtsBTProductoPaquete> 
                     <productoUId>155</productoUId> 
                     <nombre>TARJETA DE DEBITO</nombre> 
                     <moneda>PESOS</moneda> 
                     <papel>Billete</papel> 
                     <cantidad>0</cantidad> 
                  </SdtsBTProductoPaquete> 
               </productos> 
            </sBTPaquete> 
         </sdtPaquetes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>788</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerPaquetes</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>16:47:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerPaquetesResponse> 
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
   "paquetes": { 
         "sBTPaquete": { 
         "codigo": "1", 
         "descripcion": "Cuenta Persona", 
         "vigente": "S", 
         "productos": { 
            "SdtsBTProductoPaquete": [ 
               { 
               "productoUId": "154", 
               "moneda": "PESOS", 
               "papel": "Billete", 
               "cantidad": "0" 
               }, 
               { 
               "productoUId": "93", 
               "nombre": "Cuenta corriente P.Física", 
               "moneda": "PESOS", 
               "papel": "Billete", 
               "cantidad": "1" 
               }, 
               { 
               "productoUId": "134", 
               "nombre": "Caja de Ahorro P.Física", 
               "moneda": "DÓLAR ESTADOUNIDENSE", 
               "papel": "Billete", 
               "cantidad": "1" 
               }, 
               { 
               "productoUId": "155", 
               "nombre": "TARJETA DE DEBITO", 
               "moneda": "PESOS", 
               "papel": "Billete", 
               "cantidad": "0" 
               } 
            ] 
         } 
         } 
      }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "790", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerPaquetes", 
      "Fecha": "2017-12-17", 
      "Requerimiento": "", 
      "Hora": "16:48:12", 
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
<td>sdtPaquetes</td>
<td>sBTPaquete</td>
<td>Listado de paquetes.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPaquete son los siguientes:</p>
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
<td>Int</td>
<td>Código de paquete.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion de paquete.</td>
</tr>
<tr>
<td>vigente</td>
<td>String</td>
<td>Indica si está vigente el paquete (S/N).</td>
</tr>
<tr>
<td>productos</td>
<td>sBTProductoPaquete</td>
<td>Listado de productos incluídos en el paquete.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProductoPaquete son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
</tr>
<tr>
<td>cantidad</td>
<td>Short</td>
<td>Cantidad de productos de este tipo incluídos en el paquete.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


