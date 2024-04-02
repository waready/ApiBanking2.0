<template><div><h1 id="obtener-cuentas-asociadas-por-tipo" tabindex="-1"><a class="header-anchor" href="#obtener-cuentas-asociadas-por-tipo"><span>Obtener Cuentas Asociadas Por Tipo</span></a></h1>
<p>Método para obtener un listado de las cuentas del tipo ingresado para una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo</td>
<td>RBTPG448</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cuentas Asociadas Por Tipo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>B086B798299A7DB5B8310AAA</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUID>2000001957</bts:tarjetaUID> 
         <bts:tipoDeCuenta>?</bts:tipoDeCuenta> 
      </bts:BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerCuentasAsociadasPorTipo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "B086B798299A7DB5B8310AAA", 
          "Device": "GL" 
        }, 
        "tarjetaUID": 2000001957, 
        "tipoDeCuenta": "?" 
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
      <BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>B086B798299A7DB5B8310AAA</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sdtCuentasAsociadasTD> 
            <tarjetaUId>2000001957</tarjetaUId> 
            <cuentas> 
               <SdtsBTCuentaAsociadaTD> 
                  <operacionUId>10216</operacionUId> 
                  <idOperacionFmt>000000040_008</idOperacionFmt> 
                  <producto> 
                     <productoUId>93</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                     <moneda>S/.</moneda> 
                     <papel/> 
                  </producto> 
                  <sucursal>Sucursal Cusco</sucursal> 
                  <simboloMoneda>S/.</simboloMoneda> 
                  <subCuenta/> 
                  <tipoDeCuenta>1</tipoDeCuenta> 
                  <saldo>10003628.81</saldo> 
                  <estado>CUENTAS INACTIVAS</estado> 
               </SdtsBTCuentaAsociadaTD> 
            </cuentas> 
         </sdtCuentasAsociadasTD> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo</Servicio> 
            <Fecha>2022-11-30</Fecha> 
            <Hora>17:25:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>513</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "B086B798299A7DB5B8310AAA", 
          "Device": "GL" 
        }, 
        "sdtCuentasAsociadasTD": { 
          "tarjetaUId": 2000001957, 
          "cuentas": { 
            "SdtsBTCuentaAsociadaTD": { 
              "operacionUId": 10216, 
              "idOperacionFmt": "000000040_008", 
              "producto": { 
                "productoUId": 93, 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
                "moneda": "S/.", 
                "papel": "" 
              }, 
              "sucursal": "Sucursal Cusco", 
              "simboloMoneda": "S/.", 
              "subCuenta": "", 
              "tipoDeCuenta": 1, 
              "saldo": 10003628.81, 
              "estado": "CUENTAS INACTIVAS" 
            } 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTTarjetasDeDebito.ObtenerCuentasAsociadasPorTipo", 
          "Fecha": "2022-11-30", 
          "Hora": "17:25:57", 
          "Requerimiento": 1, 
          "Numero": 513, 
          "Estado": "OK" 
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>tipoDeCuenta</td>
<td>Short</td>
<td>Tipo de cuenta.</td>
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
<td>sdtCuentasAsociadasTD</td>
<td>sBTCuentasAsociadasTD</td>
<td>Listado de cuentas asociadas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentasAsociadasTD son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta..</td>
</tr>
<tr>
<td>cuentas</td>
<td>sBTCuentaAsociadaTD</td>
<td>Datos cuenta asociada.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentaAsociadaTD son los siguientes:</p>
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
<td>Identificador único de Operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>subCuenta</td>
<td>String</td>
<td>Sub cuenta.</td>
</tr>
<tr>
<td>tipoDeCuenta</td>
<td>Short</td>
<td>Tipo de cuenta.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado.</td>
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
<td>No se recibió el Identificador de cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


