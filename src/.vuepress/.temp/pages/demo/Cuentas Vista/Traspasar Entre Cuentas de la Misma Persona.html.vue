<template><div><h1 id="traspasar-entre-cuentas-de-la-misma-persona" tabindex="-1"><a class="header-anchor" href="#traspasar-entre-cuentas-de-la-misma-persona"><span>Traspasar Entre Cuentas de la Misma Persona</span></a></h1>
<p>Método para realizar un traspaso entre cuentas cuyo titular sea la misma persona.</p>
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
<td>BTCuentasVista.TraspasarCuentasMismoTitular</td>
<td>RBTPG255</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Traspasar entre Cuentas de la misma Persona:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.TraspasarCuentasMismoTitular> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>cec2eed9744A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:personaUId>101</bts:personaUId> 
         <bts:sdtTraspaso> 
            <bts:operacionUIdOrigen>461</bts:operacionUIdOrigen> 
            <bts:operacionUIdDestino>465</bts:operacionUIdDestino> 
            <bts:monedaId>0</bts:monedaId> 
            <bts:importe>1000</bts:importe> 
            <bts:concepto>?</bts:concepto> 
         </bts:sdtTraspaso> 
      </bts:BTCuentasVista.TraspasarCuentasMismoTitular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarCuentasMismoTitular \ 
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
      "personaUId": "101", 
      "sdtTraspaso": { 
        "operacionUIdOrigen": "461", 
        "operacionUIdDestino": "465", 
        "monedaId": "0", 
        "importe": "1000", 
        "concepto": "?" 
      } 
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
      <BTCuentasVista.TraspasarCuentasMismoTitularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>cec2eed9744A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtResultadoTraspaso> 
            <operacionUIdOrigen>461</operacionUIdOrigen> 
            <idMovimiento>00100001000500075000000005320181210</idMovimiento> 
            <operacionUIdDestino>465</operacionUIdDestino> 
            <saldoOperacionOrigen>-1000.00</saldoOperacionOrigen> 
            <movimientoUId>324</movimientoUId> 
         </sdtResultadoTraspaso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>490</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.TraspasarCuentasMismoTitular</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-08-14</Fecha> 
            <Hora>15:03:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.TraspasarCuentasMismoTitularResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{  
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "MINSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "cec2eed9744A8B5C60A82434" 
   }, 
   "sdtResultadoTraspaso": { 
      "operacionUIdOrigen": "461", 
      "idMovimiento": "00100001000500075000000005320181210", 
      "operacionUIdDestino": "465", 
      "saldoOperacionOrigen": "-1000.00", 
      "movimientoUId": "324" 
   }, 
   "Btoutreq": { 
      "Numero": "490", 
      "Estado": "OK", 
      "Servicio": "BTCuentasVista.TraspasarCuentasMismoTitular", 
      "Requerimiento": "1", 
      "Fecha": "2019-08-14", 
      "Hora": "15:03:15", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>sdtTraspaso</td>
<td>sBTTraspaso</td>
<td>Datos del traspaso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTraspaso son los siguientes:</p>
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
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador de operación de destino del traspaso.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe del movimiento.</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto del traspaso.</td>
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
<td>sdtResultadoTraspaso</td>
<td>sBTResultadoTraspaso</td>
<td>Datos resultado del traspaso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes:</p>
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
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador de operación de destino del traspaso.</td>
</tr>
<tr>
<td>saldoOperacionOrigen</td>
<td>Double</td>
<td>Saldo Actual de operación de origen.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador de movimiento.</td>
</tr>
<tr>
<td>idMovimiento</td>
<td>String</td>
<td>Identificador de movimiento String.</td>
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
<td>No se recibió el identificador único de operación de origen.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador único de operación de destino.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar importe.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación origen para el Identificador.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación origen para el Identificador.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30007</td>
<td>La operación origen y operación destino no pueden ser iguales.</td>
</tr>
<tr>
<td>31003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>La persona no integra la cuenta de origen.</td>
</tr>
<tr>
<td>40002</td>
<td>La persona no integra la cuenta de destino.</td>
</tr>
<tr>
<td>51005</td>
<td>La moneda del traspaso debe coincidir con la moneda de la operación origen.</td>
</tr>
<tr>
<td>51006</td>
<td>La operación origen no existe.</td>
</tr>
<tr>
<td>51007</td>
<td>La operación destino no existe.</td>
</tr>
</tbody>
</table>
</div></template>


