<template><div><h1 id="obtener-cuentas-de-ahorro-saldo-disponible" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-de-ahorro-saldo-disponible"><span>Obtener Cuentas de Ahorro (Saldo Disponible)</span></a></h1>
<p>Método para obtener las cuentas de ahorro de un cliente junto con el saldo disponible de cada una.</p>
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
<td>BTClientes.ObtenerCuentasAhorroSD</td>
<td>RBTPG083</td>
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
<td>2</td>
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
<td>2</td>
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
<p>Ejemplo de invocación al método Obtener Cuentas de Ahorro (Saldo Disponible):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerCuentasAhorroSD> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>845cec4b724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
      </bts:BTClientes.ObtenerCuentasAhorroSD> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerCuentasAhorroSD=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: af7c827f-03c0-79ac-a271-92fb1c13a461' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 161 
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
      <BTClientes.ObtenerCuentasAhorroSDResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>845cec4b724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosPasivos> 
            <sBTProductoPasivo> 
               <operacionUId>281</operacionUId> 
               <idOperacionFmt>000000011_001</idOperacionFmt> 
               <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>PESOS</subCuenta> 
               <saldo>7433400.28</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <operacionUId>282</operacionUId> 
               <idOperacionFmt>000000011_004</idOperacionFmt> 
               <idOperacionBT>0010000100021222200000000000001100004000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>USD</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Sucursal Beta</sucursal> 
               <subCuenta/> 
               <saldo>0.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
         </sdtProductosPasivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>779</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerCuentasAhorro</Servicio> 
            <Fecha>2017-12-15</Fecha> 
            <Requerimiento/> 
            <Hora>11:41:09</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerCuentasAhorroSDResponse> 
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
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "PESOS", 
                "operacionUId": "281", 
                "saldo": "7433400.28", 
                "idOperacionFmt": "000000011_001", 
                "idOperacionBT": "0010100000021000000000000000001100001000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "", 
                "operacionUId": "282", 
                "saldo": "0.00", 
                "idOperacionFmt": "000000011_004", 
                "idOperacionBT": "0010000100021222200000000000001100004000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "USD", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Sucursal Beta" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "780", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerCuentasAhorro", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "11:42:37", 
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
<td>Listado de cajas de ahorro.</td>
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
<td>subCuenta</td>
<td>String</td>
<td>Nombre de la subcuenta.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo disponible de la CC.</td>
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
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


