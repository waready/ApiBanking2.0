<template><div><h1 id="obtener-resumen-de-productos-saldos-contables" tabindex="-1"><a class="header-anchor" href="#obtener-resumen-de-productos-saldos-contables"><span>Obtener Resumen de Productos (Saldos Contables)</span></a></h1>
<p>Método para obtener un resumen de los productos de un cliente, junto con el saldo contable de cada una.</p>
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
<td>BTClientes.ObtenerResumenProductos</td>
<td>RBTPG003</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Resumen de Productos (Saldos Contables):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerResumenProductos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
      </bts:BTClientes.ObtenerResumenProductos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenProductos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 429ec47f-4843-8dca-c8f7-32c004addb68' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": "4" 
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
      <BTClientes.ObtenerResumenProductosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtResumenProductos> 
            <cuentasCorrientes> 
               <descripcion>Cuentas Corrientes</descripcion> 
               <cantidad>3</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>26799806.42</saldoMN> 
            </cuentasCorrientes> 
            <cajasAhorros> 
               <descripcion>Cajas de Ahorro</descripcion> 
               <cantidad>4</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </cajasAhorros> 
            <cofresSeguridad> 
               <descripcion>Cofres de Seguridad</descripcion> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </cofresSeguridad> 
            <otros></otros> 
            <tarjetasCredito> 
               <descripcion/> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </tarjetasCredito> 
            <tarjetasDebito> 
               <descripcion>Tarjetas de Débito</descripcion> 
               <cantidad>0</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>0.00</saldoMN> 
            </tarjetasDebito> 
            <plazosFijos> 
               <descripcion>Plazos Fijos</descripcion> 
               <cantidad>4</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>413217.36</saldoMN> 
            </plazosFijos> 
            <prestamos> 
               <descripcion>Préstamos</descripcion> 
               <cantidad>16</cantidad> 
               <saldoUSD>0.00</saldoUSD> 
               <saldoMN>2709617.59</saldoMN> 
            </prestamos> 
            <clienteUId>4</clienteUId> 
         </sdtResumenProductos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>841</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerResumenProductos</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:19:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerResumenProductosResponse> 
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
    "sdtResumenProductos": { 
        "cuentasCorrientes": { 
            "descripcion": "Cuentas Corrientes", 
            "cantidad": "3", 
            "saldoUSD": "0.00", 
            "saldoMN": "26799806.42" 
        }, 
        "cajasAhorros": { 
            "descripcion": "Cajas de Ahorro", 
            "cantidad": "4", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "cofresSeguridad": { 
            "descripcion": "Cofres de Seguridad", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "otros": { 
            "sCTResumenProducto": [] 
        }, 
        "tarjetasCredito": { 
            "descripcion": "", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "tarjetasDebito": { 
            "descripcion": "Tarjetas de Débito", 
            "cantidad": "0", 
            "saldoUSD": "0.00", 
            "saldoMN": "0.00" 
        }, 
        "plazosFijos": { 
            "descripcion": "Plazos Fijos", 
            "cantidad": "4", 
            "saldoUSD": "0.00", 
            "saldoMN": "413217.36" 
        }, 
        "prestamos": { 
            "descripcion": "Préstamos", 
            "cantidad": "16", 
            "saldoUSD": "0.00", 
            "saldoMN": "2709617.59" 
        }, 
        "clienteUId": "4" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "842", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerResumenProductos", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:19:57", 
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
<td>sdtResumenProductos</td>
<td>sCTInfoProductos</td>
<td>Listado de productos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTInfoProductos son los siguientes:</p>
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
<td>cuentasCorrientes</td>
<td>sCTResumenProducto</td>
<td>Cuentas corrientes.</td>
</tr>
<tr>
<td>cajasAhorros</td>
<td>sCTResumenProducto</td>
<td>Cajas de ahorro.</td>
</tr>
<tr>
<td>cofresSeguridad</td>
<td>sCTResumenProducto</td>
<td>Cofres de seguridad.</td>
</tr>
<tr>
<td>tarjetasDebito</td>
<td>sCTResumenProducto</td>
<td>Tarjetas de débito.</td>
</tr>
<tr>
<td>plazosFijos</td>
<td>sCTResumenProducto</td>
<td>Plazos fijos.</td>
</tr>
<tr>
<td>prestamos</td>
<td>sCTResumenProducto</td>
<td>Préstamos.</td>
</tr>
<tr>
<td>cuentaUId</td>
<td>Int</td>
<td>Identificador único de cliente.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTResumenProducto son los siguientes:</p>
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
<td>Descripción.</td>
</tr>
<tr>
<td>cantidad</td>
<td>Int</td>
<td>Cantidad de operaciones.</td>
</tr>
<tr>
<td>saldoUSD</td>
<td>Double</td>
<td>Saldo contable en dólares.</td>
</tr>
<tr>
<td>saldoMN</td>
<td>Double</td>
<td>Saldo contable en moneda nacional.</td>
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


