<template><div><h1 id="habilitar-cheque-electronico" tabindex="-1"><a class="header-anchor" href="#habilitar-cheque-electronico"><span>Habilitar Cheque Electronico</span></a></h1>
<p>Método para habilitar un cheque electrónico de una chequera existente.</p>
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
<td>BTCuentasCorrientes.HabilitarChequeElectronico</td>
<td>RBTPAR30</td>
<td>Argentina</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Habilitar Cheque Electronico:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.HabilitarChequeElectronico> 
         <bts:Btinreq> 
           <bts:Device>10</bts:Device> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>ec8CE93AA1</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:numeroCheque>1</bts:numeroCheque> 
         <bts:CUITBeneficiario>342</bts:CUITBeneficiario> 
         <bts:paisBeneficiarioId>845</bts:paisBeneficiarioId> 
         <bts:tipoDocumentoBeneficiarioId>2</bts:tipoDocumentoBeneficiarioId> 
      </bts:BTCuentasCorrientes.HabilitarChequeElectronico> 
   </soapenv:Body> 
</soapenv:Envelope></soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?HabilitarChequeElectronico=' \ 
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
	"operacionUId": "15", 
	"numeroCheque": "1", 
	"CUITBeneficiario": "342", 
	"paisBeneficiarioId": "845", 
	"tipoDocumentoBeneficiarioId": "2" 
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
      <BTCuentasCorrientes.HabilitarChequeElectronicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>BA</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ec8CE93AA1</Token> 
         </Btinreq> 
         <listaCheques> 
			<sBTChequeElectronico> 
               <beneficiario/> 
               <numeroCheque>0</numeroCheque> 
               <importe>0.00</importe> 
               <numeroChequera>50245</numeroChequera> 
               <CMC7/> 
            </sBTChequeElectronico> 
		 </listaCheques> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2565</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.HabilitarChequeElectronico</Servicio> 
            <Fecha>2019-05-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:40:41</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.HabilitarChequeElectronicoResponse> 
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
	"listaCheques": { 
		"sBTChequeElectronico": { 
            "beneficiario": "", 
            "numeroCheque": "0", 
            "importe": "0.00", 
            "numeroChequera": "50245", 
            "CMC7": "" 
		} 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.HabilitarChequeElectronico", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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
<td>Identificador único de operación de subcuenta.</td>
</tr>
<tr>
<td>numeroCheque</td>
<td>Int</td>
<td>Número de cheque a habilitar.</td>
</tr>
<tr>
<td>CUITBeneficiario</td>
<td>String</td>
<td>CUIT de beneficiario.</td>
</tr>
<tr>
<td>paisBeneficiarioId</td>
<td>Short</td>
<td>Identificador del pais del beneficiario.</td>
</tr>
<tr>
<td>tipoDocumentoBeneficiarioId</td>
<td>Byte</td>
<td>Identificador de tipo de documento del beneficiario.</td>
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
<td>listaCheques</td>
<td>sBTChequeElectronico</td>
<td>Lista de cheques.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTChequeElectronico son los siguientes:</p>
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
<td>numeroChequera</td>
<td>Long</td>
<td>Numero de chequera electrónica.</td>
</tr>
<tr>
<td>numeroCheque</td>
<td>Long</td>
<td>Numero de cheque electrónico.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>beneficiario</td>
<td>String</td>
<td>Nombre del beneficiario.</td>
</tr>
<tr>
<td>CMC7</td>
<td>Long</td>
<td>Identificador CMC7 de cheque electrónico.</td>
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
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
</tbody>
</table>
</div></template>


