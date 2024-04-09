<template><div><h1 id="obtener-plazos-fijos-cancelados" tabindex="-1"><a class="header-anchor" href="#obtener-plazos-fijos-cancelados"><span>Obtener Plazos Fijos Cancelados</span></a></h1>
<p>Método para devolver el listado de los productos de depósito a plazo fijo cancelados de un cliente.</p>
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
<td>BTClientes.ObtenerPlazosFijosCancelados</td>
<td>RBTPG275</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>1</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Identificador del módulo a incluir.</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>2</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Módulo del tipo de operación a excluir.</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Tipo de operación a excluir.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Plazos Fijos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPlazosFijosCancelados> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
      </bts:BTClientes.ObtenerPlazosFijosCancelados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijosCancelados=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 315347e0-dc1b-de4d-6160-6f4f39d19acb' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 4 
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
      <BTClientes.ObtenerPlazosFijosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPlazoFijoCancelados> 
            <SdtsBTProductoPlazoFijoCancelado> 
               <operacionUId>73</operacionUId> 
               <idOperacionFmt>0000000108_00000</idOperacionFmt> 
               <idOperacionBT>00100102200000000000000029000000000108001</idOperacionBT> 
               <producto> 
                  <productoUId>5</productoUId> 
                  <nombre>DPF Intransferible Mda. Nac.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaAlta>2016-10-26</fechaAlta> 
               <fechaVencimiento>2016-10-26</fechaVencimiento> 
               <capital>10000.00</capital> 
               <intereses>0.00</intereses> 
               <impuestos>0.00</impuestos> 
               <instruccion>Cancelar y Acreditar al vto.</instruccion> 
               <instruccionCod>2</instruccionCod> 
               <tasaOriginal>2.750000</tasaOriginal> 
               <tasaFinal>2.750000</tasaFinal> 
               <tipoTasa/> 
               <plazo>0</plazo> 
            </SdtsBTProductoPlazoFijoCancelado> 
         </sdtProductosPlazoFijoCancelados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>783</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerPlazosFijosCancelados</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>13:49:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPlazosFijosCanceladosResponse> 
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
    "sdtProductosPlazoFijoCancelados": { 
		"SdtsBTProductoPlazoFijoCancelado": { 
		  "operacionUId": "73", 
		  "idOperacionFmt": "0000000108_00000", 
		  "idOperacionBT": "00100102200000000000000029000000000108001", 
		  "producto": { 
			"productoUId": "5", 
			"nombre": "DPF Intransferible Mda. Nac.", 
			"moneda": "$", 
			"papel": "" 
		  }, 
		  "sucursal": "Casa Matriz", 
		  "fechaAlta": "2016-10-26", 
		  "fechaVencimiento": "2016-10-26", 
		  "capital": "10000.00", 
		  "intereses": "0.00", 
		  "impuestos": "0.00", 
		  "instruccion": "Cancelar y Acreditar al vto.", 
		  "instruccionCod": "2", 
		  "tasaOriginal": "2.750000", 
		  "tasaFinal": "2.750000", 
		  "tipoTasa": "", 
		  "plazo": "0" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "784", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerPlazosFijosCancelados", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "13:50:44", 
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
<td>sdtProductosPlazoFijoCancelados</td>
<td>sBTProductoPlazoFijoCancelado</td>
<td>Listado de plazos fijos cancelados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProductoPlazoFijoCancelado son los siguientes:</p>
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
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta del depósito.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del depósito.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital del depósito.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses del depósito.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos del deposito.</td>
</tr>
<tr>
<td>instruccion</td>
<td>String</td>
<td>Descripción de la instrucción del depósito.</td>
</tr>
<tr>
<td>instruccionCod</td>
<td>Short</td>
<td>Código de instrucción.</td>
</tr>
<tr>
<td>tasaOriginal</td>
<td>Double</td>
<td>Tasa original del depósito.</td>
</tr>
<tr>
<td>tasaFinal</td>
<td>Double</td>
<td>Tasa final del depósito.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Descripción del tipo de tasa.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del depósito</td>
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
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
</tbody>
</table>
</div></template>


