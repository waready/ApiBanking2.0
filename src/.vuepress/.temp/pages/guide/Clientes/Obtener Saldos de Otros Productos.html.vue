<template><div><h1 id="obtener-saldos-de-otros-productos" tabindex="-1"><a class="header-anchor" href="#obtener-saldos-de-otros-productos"><span>Obtener Saldos de Otros Productos</span></a></h1>
<p>Método para devuelve los saldos de productos de un cliente, según parametrización Backend.</p>
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
<td>BTClientes.ObtenerSaldosProducto</td>
<td>RBTPG260</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se pueden parametrizar módulos a incluir ingresando en la guía especial 1041 los siguientes valores:</li>
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
<td>1000</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Valor del segundo parámetro del servicio.</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Identificador del módulo a incluir.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Saldos de Otros Productos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerSaldosProducto> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>ca42f513ed4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:cuentaUId>61</bts:cuentaUId> 
         <bts:correlativo>1</bts:correlativo> 
      </bts:BTClientes.ObtenerSaldosProducto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerSaldosProducto=' \ 
  -H 'cache-control: no-cache,no-cache' \ 
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
    "cuentaUId":"61", 
    "correlativo":"1" 
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
      <BTClientes.ObtenerSaldosProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ca42f513ed4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSaldosProducto> 
            <sBTSaldoProducto> 
               <fechaValor>2015-12-05</fechaValor> 
               <estado>Normal</estado> 
               <operacionUId>162</operacionUId> 
               <saldo>60000.00</saldo> 
               <tasa>0.000000</tasa> 
               <idOperacionFmt>0000000000-006</idOperacionFmt> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <idOperacionBT>0010010210000050000000029006000000000003</idOperacionBT> 
               <producto> 
                  <moneda>$</moneda> 
                  <papel>UI</papel> 
                  <productoUId>62</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja Ahorro P.Física Especie</nombre> 
               </producto> 
               <plazo>0</plazo> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTSaldoProducto> 
            <sBTSaldoProducto> 
               <fechaValor>2015-12-05</fechaValor> 
               <estado>Normal</estado> 
               <operacionUId>163</operacionUId> 
               <saldo>1400.00</saldo> 
               <tasa>0.000000</tasa> 
               <idOperacionFmt>0000000000-005</idOperacionFmt> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <idOperacionBT>0010010212222000000000029005000000000001</idOperacionBT> 
               <producto> 
                  <moneda>USD</moneda> 
                  <papel/> 
                  <productoUId>63</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
               </producto> 
               <plazo>0</plazo> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTSaldoProducto> 
         </sdtSaldosProducto> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>9342</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerSaldosProducto</Servicio> 
            <Fecha>2019-10-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>18:38:31</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerSaldosProductoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
    "sdtSaldosProducto": { 
        "sBTSaldoProducto": [ 
            { 
                "fechaValor": "2015-12-05", 
                "estado": "Normal", 
                "operacionUId": 162, 
                "saldo": 60000, 
                "tasa": 0, 
                "idOperacionFmt": "0000000000-006", 
                "fechaVencimiento": "0000-00-00", 
                "idOperacionBT": "0010010210000050000000029006000000000003", 
                "producto": { 
                    "moneda": "$", 
                    "papel": "UI", 
                    "productoUId": 62, 
                    "nombre": "CAJAS DE AHORRO, Caja Ahorro P.Física Especie" 
                }, 
                "plazo": 0, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "fechaValor": "2015-12-05", 
                "estado": "Normal", 
                "operacionUId": 163, 
                "saldo": 1400, 
                "tasa": 0, 
                "idOperacionFmt": "0000000000-005", 
                "fechaVencimiento": "0000-00-00", 
                "idOperacionBT": "0010010212222000000000029005000000000001", 
                "producto": { 
                    "moneda": "USD", 
                    "papel": "", 
                    "productoUId": 63, 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "plazo": 0, 
                "sucursal": "Casa Matriz" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9343, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerSaldosProducto", 
        "Fecha": "2019-10-28", 
        "Requerimiento": "", 
        "Hora": "18:41:21", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>cuentaUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>correlativo</td>
<td>Long</td>
<td>Correlativo 2 de la guía especial.</td>
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
<td>sdtSaldosProducto</td>
<td>sBTSaldoProducto</td>
<td>Listado de productos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSaldoProducto son los siguientes:</p>
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
<td>saldo</td>
<td>Double</td>
<td>Capital.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta del saldo.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
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


