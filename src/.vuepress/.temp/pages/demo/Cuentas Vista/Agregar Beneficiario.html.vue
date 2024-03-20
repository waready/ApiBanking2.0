<template><div><h1 id="agregar-beneficiario" tabindex="-1"><a class="header-anchor" href="#agregar-beneficiario"><span>Agregar Beneficiario</span></a></h1>
<p>Método para agregar un beneficiario a una Cuenta Vista.</p>
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
<td>BTCuentasVista.AgregarBeneficiario</td>
<td>RBTPG316</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Beneficiario:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.AgregarBeneficiario> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>6fc29caa9d4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>2</bts:operacionUId> 
         <bts:sdtBeneficiarios> 
            <bts:sBTBeneficiario> 
               <bts:parentesco></bts:parentesco> 
               <bts:participacion>100</bts:participacion> 
               <bts:nombre>PRUEBA</bts:nombre> 
               <bts:correlativo>1</bts:correlativo> 
               <bts:parentescoId>1</bts:parentescoId> 
            </bts:sBTBeneficiario> 
         </bts:sdtBeneficiarios> 
      </bts:BTCuentasVista.AgregarBeneficiario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AgregarBeneficiario=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": "1", 
          "Device": "AC", 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Token": "6fc29caa9d4A8B5C60A82434" 
	}, 
	"operacionUId": "2", 
	"sdtBeneficiarios": { 
	  "sBTBeneficiario": { 
		"parentesco": "", 
		"participacion": "100", 
		"nombre": "PRUEBA", 
		"correlativo": "1", 
		"parentescoId": "1" 
	  } 
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
      <BTCuentasVista.AgregarBeneficiarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6fc29caa9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10403</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.AgregarBeneficiario</Servicio> 
            <Fecha>2021-01-29</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:10:17</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.AgregarBeneficiarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "MINSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "6fc29caa9d4A8B5C60A82434" 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
	"Btoutreq": { 
	  "Numero": "10403", 
	  "Estado": "OK", 
	  "Servicio": "BTCuentasVista.AgregarBeneficiario", 
	  "Fecha": "2021-01-29", 
	  "Requerimiento": "1", 
	  "Hora": "13:10:17", 
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
<td>Identificador único de la operación.</td>
</tr>
<tr>
<td>sdtBeneficiarios</td>
<td>sBTBeneficiario</td>
<td>Listado de beneficiarios a agregar.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTBeneficiario son los siguientes:</p>
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
<td>correlativo</td>
<td>Short</td>
<td>Correlativo del beneficiario.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre beneficiario.</td>
</tr>
<tr>
<td>parentescoId</td>
<td>Short</td>
<td>Identificador del parentesco.</td>
</tr>
<tr>
<td>parentesco</td>
<td>String</td>
<td>Parentesco.</td>
</tr>
<tr>
<td>participacion</td>
<td>Double</td>
<td>Porcentaje de participación.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>30002</td>
<td>No se recibió el identificador único de Operacion.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la Operacion para el Identificador: ?</td>
</tr>
<tr>
<td>30004</td>
<td>La operación ingresada no corresponde a una cuenta vista.</td>
</tr>
<tr>
<td>30011</td>
<td>Nombre Beneficiario Requerido.</td>
</tr>
<tr>
<td>30012</td>
<td>Porcentaje Participacion Requerido.</td>
</tr>
<tr>
<td>30013</td>
<td>No existe identificador de parentesco.</td>
</tr>
<tr>
<td>30014</td>
<td>El porcentaje de participación acumulado difiere del 100%.</td>
</tr>
<tr>
<td>30015</td>
<td>El identificador de parentesco ingresado no es válido.</td>
</tr>
<tr>
<td>30016</td>
<td>El porcentaje de participación acumulado no puede superar el 100%.</td>
</tr>
</tbody>
</table>
</div></template>


