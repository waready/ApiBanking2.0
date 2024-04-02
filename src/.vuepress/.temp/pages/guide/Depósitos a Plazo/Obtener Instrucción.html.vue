<template><div><h1 id="obtener-instruccion" tabindex="-1"><a class="header-anchor" href="#obtener-instruccion"><span>Obtener Instrucción</span></a></h1>
<p>Método para obtener una lista de las instrucciones de un depósito.</p>
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
<td>BTDepositosAPlazo.ObtenerInstruccion</td>
<td>RBTPG109</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Instrucción:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerInstruccion> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6c275823524A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:depositoUId>4</bts:depositoUId> 
      </bts:BTDepositosAPlazo.ObtenerInstruccion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerInstruccion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 61, 
	"depositoUId": 4 
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
      <BTDepositosAPlazo.ObtenerInstruccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6c275823524A8B5C60A82434</Token> 
         </Btinreq> 
         <instruccionVencimiento> 
            <sBTInstruccion> 
               <descripcion>Cancelar y Acreditar al vto.</descripcion> 
               <operacionUId>2</operacionUId> 
               <idOperacionFmt>000000029_001</idOperacionFmt> 
               <producto> 
                  <productoUId>21</productoUId> 
                  <nombre>CUENTA CORRIENTE, int.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTInstruccion> 
         </instruccionVencimiento> 
         <instruccionAcreditacion> 
            <sBTInstruccion> 
               <descripcion>Acreditación</descripcion> 
               <operacionUId>2</operacionUId> 
               <idOperacionFmt>000000029_001</idOperacionFmt> 
               <producto> 
                  <productoUId>21</productoUId> 
                  <nombre>CUENTA CORRIENTE, int.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTInstruccion> 
         </instruccionAcreditacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>144</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerInstruccion</Servicio> 
            <Fecha>2018-03-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:07:39</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerInstruccionResponse> 
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
   "instruccionVencimiento": { 
      "sBTInstruccion": [ { 
         "descripcion": "Cancelar y Acreditar al vto.", 
         "operacionUId": 2, 
         "idOperacionFmt": "000000029_001", 
         "sucursal": "Casa Matriz", 
         "producto": [ { 
           "productoUId": 21, 
               "nombre": "CUENTA CORRIENTE, int.", 
               "moneda": "$", 
               "papel": "" 
            } 
         ] 
      } 
      ] 
   }, 
   "instruccionAcreditacion": { 
      "sBTInstruccion": [ { 
         "descripcion": "Acreditación", 
         "operacionUId": 2, 
         "idOperacionFmt": "000000029_001", 
         "sucursal": "Casa Matriz", 
         "producto": [ { 
               "productoUId": 21, 
               "nombre": "CUENTA CORRIENTE, int.", 
               "moneda": "$", 
               "papel": "" 
            } 
         ], 
      } 
      ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "144", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ObtenerInstruccion", 
        "Fecha": "2018-03-01", 
        "Requerimiento": "1", 
        "Hora": "11:07:39", 
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
<td>depositoUId</td>
<td>Long</td>
<td>Identificador único de operación del depósito.</td>
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
<td>instruccionVencimiento</td>
<td>sBTInstruccion</td>
<td>Datos de instrucción al vencimiento.</td>
</tr>
<tr>
<td>instruccionAcreditacion</td>
<td>sBTInstruccion</td>
<td>Datos de instrucción de acreditación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTInstruccion son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción de la instrucción.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos de producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la Sucursal de la operación.</td>
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
<td>Nombre del producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo del papel.</td>
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
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de la operación del depósito.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación del depósito para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>La operación asociada al identificador: ? no pertenece a un depósito a plazo</td>
</tr>
<tr>
<td>30006</td>
<td>La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30007</td>
<td>No se encontró instrucción de acreditación para el depósito ingresado</td>
</tr>
<tr>
<td>30008</td>
<td>No se encontró código de instrucción.</td>
</tr>
<tr>
<td>30009</td>
<td>No se recuperó la operación de la instrucción para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperó la sucursal de la cuenta.</td>
</tr>
<tr>
<td>30015</td>
<td>No se recuperó la sucursal de la cuenta.</td>
</tr>
<tr>
<td>30016</td>
<td>No se encontró instrucción de acreditación para el depósito ingresado.</td>
</tr>
<tr>
<td>30017</td>
<td>No se encontró código de instrucción.</td>
</tr>
<tr>
<td>30018</td>
<td>No se recuperó la operación de la instrucción para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30021</td>
<td>No se recuperó la sucursal de la cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


