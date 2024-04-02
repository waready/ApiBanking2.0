<template><div><h1 id="crear-lista-cheques" tabindex="-1"><a class="header-anchor" href="#crear-lista-cheques"><span>Crear Lista Cheques</span></a></h1>
<p>Método para crear una lista de cheques a descontar.</p>
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
<td>BTDescuentoDocumentos.CrearListaCheques</td>
<td>RBTPG162</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear Lista Cheques:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDescuentoDocumentos.CrearListaCheques> 
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1485239356EB8880B52090F2</bts:Token> 
            <bts:Device>ES</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>12</bts:clienteUId> 
         <bts:productoUId>17</bts:productoUId> 
         <bts:sListaCheques>             
            <bts:sBTDescuentoCheque>                
               <bts:identificacion>1522156151</bts:identificacion> 
               <bts:fechaEmision>2018-11-20</bts:fechaEmision> 
               <bts:fechaVto>2020-12-20</bts:fechaVto> 
               <bts:monto>1000</bts:monto> 
               <bts:personaUId>1</bts:personaUId> 
               <bts:banco>1</bts:banco> 
               <bts:agencia>25634</bts:agencia> 
               <bts:plaza>502</bts:plaza> 
               <bts:ciudad>CIUDAD</bts:ciudad> 
               <bts:domicilio>DOMICILIO</bts:domicilio> 
               <bts:telefono>098756022</bts:telefono> 
               <bts:tasa>0</bts:tasa> 
            </bts:sBTDescuentoCheque> 
         </bts:sListaCheques> 
         <bts:montoADescontar>1000</bts:montoADescontar> 
         <bts:tasa>10</bts:tasa> 
         <bts:porcentajeAforo>10</bts:porcentajeAforo> 
         <bts:fechaValor>2018-11-20</bts:fechaValor> 
      </bts:BTDescuentoDocumentos.CrearListaCheques> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?CrearListaCheques=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId":12, 
	"productoUId":17, 
	"montoADescontar":1000, 
	"tasa":10, 
	"porcentajeAforo":10, 
	"sListaCheques": { 
      "sBTDescuentoCheque": { 
         "identificacion": "1522156151", 
         "fechaEmision": "2018-11-20", 
         "fechaVto": "2020-12-20", 
         "monto": "1000", 
         "banco": "1", 
         "agencia": "25634", 
         "plaza": "502", 
         "personaUId": "1", 
         "ciudad": "CIUDAD", 
         "domicilio": "DOMICILIO", 
         "telefono": "098756022", 
         "tasa": "0" 
      } 
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
      <BTDescuentoDocumentos.CrearListaChequesResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1485239356EB8880B52090F2</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <listaUId>75</listaUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDescuentoDocumentos.CrearLista</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Hora>15:26:20</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>1980</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDescuentoDocumentos.CrearListaChequesResponse> 
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
    "listaUId":75, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "727", 
        "Estado": "OK", 
        "Servicio": "BTDescuentoDocumentos.CrearListaCheques", 
        "Fecha": "2017-11-24", 
        "Requerimiento": "", 
        "Hora": "15:59:42", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>sdtListaCheques</td>
<td>sBTDescuentoCheque</td>
<td>Lista de documentos.</td>
</tr>
<tr>
<td>montoADescontar</td>
<td>Long</td>
<td>Monto total a descontar.</td>
</tr>
<tr>
<td>tasa</td>
<td>Long</td>
<td>Tasa para aplicar.</td>
</tr>
<tr>
<td>porcentajeAforo</td>
<td>Long</td>
<td>Porcentaje de aforo.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDescuentoCheque son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona titular del documento.</td>
</tr>
<tr>
<td>identificacion</td>
<td>String</td>
<td>Identificador del documento.</td>
</tr>
<tr>
<td>fechaEmision</td>
<td>Date</td>
<td>Fecha de emision del documento.</td>
</tr>
<tr>
<td>fechaVto</td>
<td>Date</td>
<td>Fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto.</td>
</tr>
<tr>
<td>banco</td>
<td>Int</td>
<td>Banco.</td>
</tr>
<tr>
<td>agencia</td>
<td>Int</td>
<td>Agencia.</td>
</tr>
<tr>
<td>plaza</td>
<td>Short</td>
<td>Plaza.</td>
</tr>
<tr>
<td>ciudad</td>
<td>String</td>
<td>Ciudad.</td>
</tr>
<tr>
<td>domicilio</td>
<td>String</td>
<td>Domicilio.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa a aplicar al documento.</td>
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
<td>listaUId</td>
<td>Long</td>
<td>Identificador de lista.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


