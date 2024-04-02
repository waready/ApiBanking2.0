<template><div><h1 id="obtener-tipos-de-chequera-por-producto" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-chequera-por-producto"><span>Obtener Tipos de Chequera por Producto</span></a></h1>
<p>Método para obtener un listado de las chequeras que se pueden asignar a un determinado producto.</p>
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
<td>BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto</td>
<td>RBTPG254</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Tipos de Chequera por Producto:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>7b789d76ae4A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:productoUId>43</bts:productoUId> 
      </bts:BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerTiposDeChequeraPorProducto \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
      "productoUId": "43" 
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
      <BTCuentasCorrientes.ObtenerTiposDeChequeraPorProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>7b789d76ae4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTiposChequera> 
            <SdtsBTTipoChequera> 
               <descripcion>Chequera Común 25 / Pesos</descripcion> 
               <identificador>1</identificador> 
            </SdtsBTTipoChequera> 
            <SdtsBTTipoChequera> 
               <descripcion>Chequeras Diferidas 25 /Pesos</descripcion> 
               <identificador>2</identificador> 
            </SdtsBTTipoChequera> 
         </sdtTiposChequera> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>429</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-08-09</Fecha> 
            <Hora>14:38:57</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerTiposDeChequeraPorProductoResponse> 
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
      "sdtTiposChequera": { 
        "SdtsBTTipoChequera": [ 
          { 
            "descripcion": "Chequera Común 25 / Pesos", 
            "identificador": "1" 
          }, 
          { 
            "descripcion": "Chequeras Diferidas 25 /Pesos", 
            "identificador": "2" 
          } 
        ] 
      }, 
      "Btoutreq": { 
        "Numero": "429", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerTiposDeChequeraPorProducto", 
        "Requerimiento": "1", 
        "Fecha": "2019-08-09", 
        "Hora": "14:38:57", 
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
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
<td>sdtTiposChequera</td>
<td>sBTTipoChequera</td>
<td>Listado de tipos de chequera.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoChequera son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador de tipo de chequera.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de tipo de chequera.</td>
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
<td>No se recibió identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>El producto no tiene habilitado el manejo de chequeras.</td>
</tr>
</tbody>
</table>
</div></template>


