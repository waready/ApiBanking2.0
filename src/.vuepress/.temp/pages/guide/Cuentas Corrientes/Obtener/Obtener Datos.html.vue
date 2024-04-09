<template><div><h1 id="obtener-datos" tabindex="-1"><a class="header-anchor" href="#obtener-datos"><span>Obtener Datos</span></a></h1>
<p>Método para obtener los datos de un producto cuenta corriente en Bantotal.</p>
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
<td>BTCuentasCorrientes.ObtenerDatos</td>
<td>RBTPG009</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener datos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 78cd760f-5ec8-ae9c-5780-0564a89b999d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 142 
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
      <BTCuentasCorrientes.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentaCorriente> 
            <cobraIntereses>S</cobraIntereses> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
            </producto> 
            <idOperacionBT>0010100000020000000000000000002700001000000000001</idOperacionBT> 
            <saldoPorConfirmar>0.00</saldoPorConfirmar> 
            <sobregiroAutorizado>N</sobregiroAutorizado> 
            <descPaquete/> 
            <idOperacionFmt>000000027_001</idOperacionFmt> 
            <ejecutivo>Instalador</ejecutivo> 
            <saldoCobertura>15786.45</saldoCobertura> 
            <pagaInteresSobregiro>N</pagaInteresSobregiro> 
            <saldoDisponible>26601092.87</saldoDisponible> 
            <pagaComisCantMovimientos>S</pagaComisCantMovimientos> 
            <saldoBloqueado>0.00</saldoBloqueado> 
            <pagaComisBajoPromedio>S</pagaComisBajoPromedio> 
            <frecuenciaEmisionEC>Mensual</frecuenciaEmisionEC> 
            <operacionUId>9</operacionUId> 
            <chequeras/> 
            <diasSobregiro>0</diasSobregiro> 
            <saldoContable>26585306.42</saldoContable> 
            <estado>Normal</estado> 
            <fechaApertura>2013-12-01</fechaApertura> 
            <sucursal>Casa Matriz</sucursal> 
            <pagaComisEstadoCuenta/> 
            <paquete>N</paquete> 
         </sdtCuentaCorriente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>925</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerDatos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:30:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerDatosResponse> 
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
    "sdtCuentaCorriente": { 
        "cobraIntereses": "", 
        "producto": { 
            "papel": "", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F" 
        }, 
        "idOperacionBT": "0010000100115000000000000000002700000000000326001", 
        "saldoPorConfirmar": "0.00", 
        "sobregiroAutorizado": "", 
        "descPaquete": "", 
        "idOperacionFmt": "000000027_000", 
        "ejecutivo": "Instalador", 
        "saldoCobertura": "0.00", 
        "pagaInteresSobregiro": "", 
        "saldoDisponible": "-174180.15", 
        "pagaComisCantMovimientos": "", 
        "saldoBloqueado": "0.00", 
        "pagaComisBajoPromedio": "", 
        "frecuenciaEmisionEC": "", 
        "operacionUId": "142", 
        "chequeras": "", 
        "diasSobregiro": "1", 
        "saldoContable": "-174180.15", 
        "estado": "Normal", 
        "fechaApertura": "2018-05-18", 
        "sucursal": "Sucursal Beta", 
        "pagaComisEstadoCuenta": "", 
        "paquete": "N" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "926", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerDatos", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:31:29", 
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
<td>sdtCuentaCorriente</td>
<td>sBTCuentaCorriente</td>
<td>Datos del producto.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentaCorriente son los siguientes:</p>
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
<td>Nombre de la sucursal de alta.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descrición de estado de la operación.</td>
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
<td>¿Tiene paquete? (S/N).</td>
</tr>
<tr>
<td>descPaquete</td>
<td>String</td>
<td>Descripción de paquete.</td>
</tr>
<tr>
<td>pagaComisBajoPromedio</td>
<td>String</td>
<td>¿Paga comisión por bajo promedio? (S/N).</td>
</tr>
<tr>
<td>pagaComisCantMovimientos</td>
<td>String</td>
<td>¿Paga comisión por cantidad de movimientos? (S/N).</td>
</tr>
<tr>
<td>pagaComisEstadoCuenta</td>
<td>String</td>
<td>¿Paga Comisión por estado de cuenta? (S/N).</td>
</tr>
<tr>
<td>sobregiroAutorizado</td>
<td>String</td>
<td>¿Sobregiro autorizado? (S/N).</td>
</tr>
<tr>
<td>diasSobregiro</td>
<td>Short</td>
<td>Días de Sobregiro.</td>
</tr>
<tr>
<td>cobraIntereses</td>
<td>String</td>
<td>¿Cobra intereses? (S/N).</td>
</tr>
<tr>
<td>chequeras</td>
<td>String</td>
<td>Datos de la chequera.</td>
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
<td>No se recuperó la operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta Corriente.</td>
</tr>
</tbody>
</table>
</div></template>


