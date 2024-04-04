<template><div><h1 id="obtener-cuentas-origen-habilitadas" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-origen-habilitadas"><span>Obtener Cuentas Origen Habilitadas</span></a></h1>
<p>Método para obtener un listado de cuentas habilitadas para debitar periódicamente.</p>
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
<td>BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas</td>
<td>RBTPG111</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cuentas Origen Habilitadas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>2</bts:personaUId> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:productoUId>41</bts:productoUId> 
      </bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasOrigenHabilitadas' \ 
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
		"personaUId": 2, 
		"clienteUId": 81, 
		"productoUId": 41 
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
      <BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentas> 
            <sBTProductoPasivo> 
               <operacionUId>21</operacionUId> 
               <idOperacionFmt>000000028_001</idOperacionFmt> 
               <idOperacionBT>0010010210000000000000028001000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>Mi account 1</subCuenta> 
               <saldo>10000000.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
         </sdtCuentas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>371</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-04-30</Fecha> 
            <Hora>11:32:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse> 
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
    "sdtCuentas": { 
        "sBTProductoPasivo": [ 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "Mi account 1", 
                "operacionUId": "21", 
                "saldo": "10000000.00", 
                "idOperacionFmt": "000000028_001", 
                "idOperacionBT": "0010010210000000000000028001000000000001", 
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
                "subCuenta": "Mi account 2", 
                "operacionUId": "81", 
                "saldo": "0.00", 
                "idOperacionFmt": "000000028_002", 
                "idOperacionBT": "0010010210000000000000028002000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Casa Matriz" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "402", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "11:24:55", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
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
<td>sdtCuentas</td>
<td>sBTProductoPasivo</td>
<td>Listado de cuentas habilitadas para origen del ahorro.</td>
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
<td>Identificador String bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del Producto pasivo.</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA').</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal de origen de la operación.</td>
</tr>
<tr>
<td>subcuenta</td>
<td>String</td>
<td>Nombre de la cuenta vista.</td>
</tr>
<tr>
<td>saldo</td>
<td>Decimal</td>
<td>Saldo.</td>
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
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador del producto de ahorro.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó el producto de ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la persona para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>El producto seleccionado no corresponde a un producto de ahorro.</td>
</tr>
<tr>
<td>40002</td>
<td>La persona seleccionada no integra la cuenta-cliente.</td>
</tr>
<tr>
<td>40101</td>
<td>El cliente no se encuentra facultado para operar con cuenta vista.</td>
</tr>
</tbody>
</table>
</div></template>


