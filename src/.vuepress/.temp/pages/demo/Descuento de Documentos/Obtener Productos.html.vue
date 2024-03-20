<template><div><h1 id="obtener-productos" tabindex="-1"><a class="header-anchor" href="#obtener-productos"><span>Obtener Productos</span></a></h1>
<p>Método para obtener un listado de los productos de descuento de documentos.</p>
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
<td>BTDescuentoDocumentos.ObtenerProductos</td>
<td>RBTPG163</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Productos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDescuentoDocumentos.ObtenerProductos> 
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1485239356EB8880B52090F2</bts:Token> 
            <bts:Device>ES</bts:Device>          
         </bts:Btinreq> 
      </bts:BTDescuentoDocumentos.ObtenerProductos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?ObtenerProductos=' \ 
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
      <BTDescuentoDocumentos.ObtenerProductosResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1485239356EB8880B52090F2</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <sdtProductos> 
            <SdtsBTProducto> 
               <productoUId>12</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Cheques Persona USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>13</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Cheques Persona USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>14</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Cheques Empresa  USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>15</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Cheques Empresa  USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>16</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Facturas USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>17</productoUId> 
               <nombre>COMPRA DE DOCUMENTOS, Compra Facturas USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>18</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Cheques Persona USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>19</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Cheques Persona USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>20</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Cheques Empresa USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>21</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Cheques Empresa USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>22</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Facturas USD</nombre> 
               <moneda>$</moneda> 
               <papel/> 
            </SdtsBTProducto> 
            <SdtsBTProducto> 
               <productoUId>23</productoUId> 
               <nombre>DESCUENTO DE DOCUMENTOS, Descuento Facturas USD</nombre> 
               <moneda>USD</moneda> 
               <papel/> 
            </SdtsBTProducto> 
         </sdtProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDescuentoDocumentos.ObtenerProductos</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Hora>18:10:59</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>1985</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDescuentoDocumentos.ObtenerProductosResponse> 
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
      "sdtProductos": { 
      "SdtsBTProducto": [ 
         { 
            "productoUId": "12", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Cheques Persona USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "13", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Cheques Persona USD", 
            "moneda": "USD", 
            "papel": "" 
         }, 
         { 
            "productoUId": "14", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Cheques Empresa  USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "15", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Cheques Empresa  USD", 
            "moneda": "USD", 
            "papel": "" 
         }, 
         { 
            "productoUId": "16", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Facturas USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "17", 
            "nombre": "COMPRA DE DOCUMENTOS, Compra Facturas USD", 
            "moneda": "USD", 
            "papel": "" 
         }, 
         { 
            "productoUId": "18", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Cheques Persona USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "19", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Cheques Persona USD", 
            "moneda": "USD", 
            "papel": "" 
         }, 
         { 
            "productoUId": "20", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Cheques Empresa USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "21", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Cheques Empresa USD", 
            "moneda": "USD", 
            "papel": "" 
         }, 
         { 
            "productoUId": "22", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Facturas USD", 
            "moneda": "$", 
            "papel": "" 
         }, 
         { 
            "productoUId": "23", 
            "nombre": "DESCUENTO DE DOCUMENTOS, Descuento Facturas USD", 
            "moneda": "USD", 
            "papel": "" 
         } 
      ] 
   }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "727", 
        "Estado": "OK", 
        "Servicio": "BTDescuentoDocumentos.ObtenerProductos", 
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
<td>sdtProductos</td>
<td>sBTProducto</td>
<td>Listado de productos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


