<template><div><h1 id="obtener-datos" tabindex="-1"><a class="header-anchor" href="#obtener-datos"><span>Obtener Datos</span></a></h1>
<p>Método para obtener los datos de un producto cuenta de ahorro en Bantotal.</p>
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
<td>BTCuentasDeAhorro.ObtenerDatos</td>
<td>RBTPG007</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Datos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasDeAhorro.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>281</bts:operacionUId> 
      </bts:BTCuentasDeAhorro.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 281 
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
      <BTCuentasDeAhorro.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCajaAhorro> 
            <cobraIntereses>S</cobraIntereses> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
            </producto> 
            <idOperacionBT>0010100000021000000000000000001100001000000000001</idOperacionBT> 
            <saldoPorConfirmar>0.00</saldoPorConfirmar> 
            <descPaquete/> 
            <idOperacionFmt>000000011_001</idOperacionFmt> 
            <ejecutivo/> 
            <saldoCobertura>0.00</saldoCobertura> 
            <pagaInteresSobregiro>N</pagaInteresSobregiro> 
            <saldoDisponible>7433400.28</saldoDisponible> 
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos> 
            <saldoBloqueado>0.00</saldoBloqueado> 
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio> 
            <operacionUId>281</operacionUId> 
            <frecuenciaEmisionEC>Cuatrimestral</frecuenciaEmisionEC> 
            <diasSobregiro>0</diasSobregiro> 
            <saldoContable>7433400.28</saldoContable> 
            <estado>Normal</estado> 
            <fechaApertura>2015-12-23</fechaApertura> 
            <sucursal>Casa Matriz</sucursal> 
            <pagaComisEstadoCuenta/> 
            <paquete>N</paquete> 
         </sdtCajaAhorro> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>856</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerDatos</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>10:42:59</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerDatosResponse> 
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
    "sdtCajaAhorro": { 
        "cobraIntereses": "S", 
        "producto": { 
            "papel": "", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
        }, 
        "idOperacionBT": "0010100000021000000000000000001100001000000000001", 
        "saldoPorConfirmar": "0.00", 
        "descPaquete": "", 
        "idOperacionFmt": "000000011_001", 
        "ejecutivo": "", 
        "saldoCobertura": "0.00", 
        "pagaInteresSobregiro": "N", 
        "saldoDisponible": "7433400.28", 
        "pagaComisCantMovimientos": "S", 
        "saldoBloqueado": "0.00", 
        "pagaComisBajoPromedio": "S", 
        "operacionUId": "281", 
        "frecuenciaEmisionEC": "Cuatrimestral", 
        "diasSobregiro": "0", 
        "saldoContable": "7433400.28", 
        "estado": "Normal", 
        "fechaApertura": "2015-12-23", 
        "sucursal": "Casa Matriz", 
        "pagaComisEstadoCuenta": "", 
        "paquete": "N" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "857", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerDatos", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "10:43:47", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>sdtCajaAhorro</td>
<td>sBTCajaAhorro</td>
<td>Datos de caja de ahorro.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCajaAhorro son los siguientes:</p>
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
<td>Identificador único de operación</td>
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
<td>Datos del Producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal de alta.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripción de estado de la operación.</td>
</tr>
<tr>
<td>ejecutivo</td>
<td>String</td>
<td>Nombre de ejecutivo de alta.</td>
</tr>
<tr>
<td>fechaApertura</td>
<td>Date</td>
<td>Fecha de alta.</td>
</tr>
<tr>
<td>saldoContable</td>
<td>Double</td>
<td>Saldo total.</td>
</tr>
<tr>
<td>saldoDisponible</td>
<td>Double</td>
<td>Saldo disponible.</td>
</tr>
<tr>
<td>saldoBloqueado</td>
<td>Double</td>
<td>Saldo bloqueado.</td>
</tr>
<tr>
<td>saldoPorConfirmar</td>
<td>Double</td>
<td>Saldo pendiente de confirmación.</td>
</tr>
<tr>
<td>saldoCobertura</td>
<td>Double</td>
<td>Saldo de cobertura.</td>
</tr>
<tr>
<td>paquete</td>
<td>String</td>
<td>Tiene paquete (S/N).</td>
</tr>
<tr>
<td>descPaquete</td>
<td>String</td>
<td>Descripción de paquete.</td>
</tr>
<tr>
<td>pagaComisBajoPromedio</td>
<td>String</td>
<td>Paga comisión por bajo promedio (S/N).</td>
</tr>
<tr>
<td>pagaComisCantMovimientos</td>
<td>String</td>
<td>Paga comisión por cantidad de movimientos (S/N).</td>
</tr>
<tr>
<td>pagaComisEstadoCuenta</td>
<td>String</td>
<td>Paga Comisión por estado de cuenta (S/N).</td>
</tr>
<tr>
<td>pagaInteresSobregiro</td>
<td>String</td>
<td>Paga interes por sobregiro (S/N).</td>
</tr>
<tr>
<td>diasSobregiro</td>
<td>Short</td>
<td>Días de Sobregiro.</td>
</tr>
<tr>
<td>cobraIntereses</td>
<td>String</td>
<td>Cobra intereses (S/N).</td>
</tr>
<tr>
<td>frecuenciaEmisionEC</td>
<td>String</td>
<td>Frecuencia de emisión de estado de cuenta.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta de ahorro.</td>
</tr>
</tbody>
</table>
</div></template>


