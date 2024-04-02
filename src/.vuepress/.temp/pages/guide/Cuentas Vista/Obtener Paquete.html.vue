<template><div><h1 id="obtener-paquete" tabindex="-1"><a class="header-anchor" href="#obtener-paquete"><span>Obtener Paquete</span></a></h1>
<p>Método para obtener los datos de un paquete.</p>
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
<td>BTCuentasVista.ObtenerPaquete</td>
<td>RBTPG321</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Paquete:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 	 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerPaquete> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1752711512CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:paqueteId>1</bts:paqueteId> 
      </bts:BTCuentasVista.ObtenerPaquete> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerPaquete=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "1752711512CD285A89A23FBE" 
	}, 
   "paqueteId": "1" 
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
      <BTCuentasVista.ObtenerPaqueteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1752711512CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtPaquete> 
            <codigo>1</codigo> 
            <descripcion>Cuenta Persona</descripcion> 
            <vigente>S</vigente> 
            <productos> 
               <sBTProductoPaquete> 
                  <productoUId>154</productoUId> 
                  <nombre/> 
                  <moneda>PESOS</moneda> 
                  <papel>Billete</papel> 
                  <cantidad>0</cantidad> 
               </sBTProductoPaquete> 
               <sBTProductoPaquete> 
                  <productoUId>93</productoUId> 
                  <nombre>Cuenta corriente P.Física</nombre> 
                  <moneda>PESOS</moneda> 
                  <papel>Billete</papel> 
                  <cantidad>1</cantidad> 
               </sBTProductoPaquete> 
               <sBTProductoPaquete> 
                  <productoUId>134</productoUId> 
                  <nombre>Caja de Ahorro P.Física</nombre> 
                  <moneda>DÓLAR ESTADOUNIDENSE</moneda> 
                  <papel>Billete</papel> 
                  <cantidad>1</cantidad> 
               </sBTProductoPaquete> 
            </productos> 
         </sdtPaquete> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerPaquete</Servicio> 
            <Fecha>2021-03-02</Fecha> 
            <Hora>15:53:26</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8020</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerPaqueteResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "1752711512CD285A89A23FBE" 
	}, 
   "sdtPaquete": { 
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
         ] 
      } 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "790", 
      "Estado": "OK", 
      "Servicio": "BTCuentasVista.ObtenerPaquete", 
      "Fecha": "2021-03-02", 
      "Requerimiento": "1", 
      "Hora": "15:53:26", 
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
<td>paqueteId</td>
<td>Int</td>
<td>Identificador de paquete.</td>
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
<td>sdtPaquete</td>
<td>sBTPaquete</td>
<td>Datos del paquete.</td>
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
<td>No se encontraron paquetes para el identificador ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


