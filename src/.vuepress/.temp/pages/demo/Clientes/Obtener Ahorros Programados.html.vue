<template><div><h1 id="obtener-ahorros-programados" tabindex="-1"><a class="header-anchor" href="#obtener-ahorros-programados"><span>Obtener Ahorros Programados</span></a></h1>
<p>Método para devolver el listado de los productos de ahorro programado de un cliente.</p>
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
<td>BTClientes.ObtenerAhorrosProgramados</td>
<td>RBTPG278</td>
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
<p>Ejemplo de invocación al método Obtener Ahorros Programados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerAhorrosProgramados> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
      </bts:BTClientes.ObtenerAhorrosProgramados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerAhorrosProgramados=' \ 
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
      <BTClientes.ObtenerAhorrosProgramadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPasivos> 
            <sBTProductoPasivo> 
               <operacionUId>6</operacionUId> 
               <idOperacionFmt>0000000028_000</idOperacionFmt> 
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT> 
               <producto> 
                  <productoUId>4</productoUId> 
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>AH</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta/> 
               <saldo>15000.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <operacionUId>7</operacionUId> 
               <idOperacionFmt>0000000092_000</idOperacionFmt> 
               <idOperacionBT>0010000100022000000000000000002700000000000092001</idOperacionBT> 
               <producto> 
                  <productoUId>4</productoUId> 
                  <nombre>AHORRO PROGRAMADO, Ahorro Programado</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>AH</tipoProducto> 
               <sucursal>Sucursal Beta</sucursal> 
               <subCuenta/> 
               <saldo>350000.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
         </sdtProductosPasivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>783</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerAhorrosProgramados</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>13:49:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerAhorrosProgramadosResponse> 
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
    "sdtProductosPasivos": { 
        "sBTProductoPasivo": [ 
            { 
                "tipoProducto": "AH", 
                "estado": "Normal", 
                "subCuenta": "", 
                "operacionUId": "6", 
                "saldo": "15000.00", 
                "idOperacionFmt": "0000000028_000", 
                "idOperacionBT": "0010100000022000000000000000002700000000000028001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "4", 
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado" 
                }, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "tipoProducto": "AH", 
                "estado": "Normal", 
                "subCuenta": "", 
                "operacionUId": "7", 
                "saldo": "350000.00", 
                "idOperacionFmt": "0000000092_000", 
                "idOperacionBT": "0010000100022000000000000000002700000000000092001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "1", 
                    "nombre": "AHORRO PROGRAMADO, Ahorro Programado" 
                }, 
                "sucursal": "Sucursal Beta" 
            }, 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "784", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerAhorrosProgramados", 
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
<td>sdtProductosPasivos</td>
<td>sBTProductoPasivo</td>
<td>Listado de ahorros programados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes:</p>
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
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo del ahorro programado.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripción de estado.</td>
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
<tr>
<td>40001</td>
<td>No existe la cuenta consultada.</td>
</tr>
</tbody>
</table>
</div></template>


