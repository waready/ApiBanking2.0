<template><div><h1 id="buscar-cliente" tabindex="-1"><a class="header-anchor" href="#buscar-cliente"><span>Buscar Cliente</span></a></h1>
<p>Método para buscar una persona y sus cuentas cliente.</p>
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
<td>BTMicrofinanzas.BuscarCliente</td>
<td>RBTPG411</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Buscar Cliente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.BuscarCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:paisDocumento>320</bts:paisDocumento> 
         <bts:tipoDocumento>1</bts:tipoDocumento> 
         <bts:numeroDocumento>2131248150408</bts:numeroDocumento> 
      </bts:BTMicrofinanzas.BuscarCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?BuscarCliente \ 
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
        "paisDocumento": "320", 
        "tipoDocumento": "1", 
        "numeroDocumento": "2131248150408" 
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
      <BTMicrofinanzas.BuscarClienteResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtCuentas> 
            <Cuenta> 
               <clienteUId>2</clienteUId> 
               <titularidad> 
                  <identificador>1</identificador> 
                  <descripcion>Titular</descripcion> 
               </titularidad> 
               <representativo>S</representativo> 
            </Cuenta> 
         </sdtCuentas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.BuscarCliente</Servicio> 
            <Fecha>2019-09-11</Fecha> 
            <Hora>11:32:30</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>128</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.BuscarClienteResponse> 
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
          "Cuenta": { 
            "clienteUId": "2", 
            "titularidad": { 
              "identificador": "1", 
              "descripcion": "Titular" 
            }, 
            "representativo": "S" 
          } 
        }, 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTMicrofinanzas.BuscarCliente", 
          "Fecha": "2019-09-11", 
          "Hora": "11:32:30", 
          "Requerimiento": "95", 
          "Numero": "128", 
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
<td>paisDocumentoId</td>
<td>Short</td>
<td>Identificador del país de origen del documento.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador del tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Número de documento de la persona.</td>
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
<td>sBTCuentasCliente</td>
<td>Listado de cuentas de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuentaCliente son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cuenta.</td>
</tr>
<tr>
<td>titularidad</td>
<td>sBTTipoIntegrante</td>
<td>Tipo de integrante.</td>
</tr>
<tr>
<td>representativo</td>
<td>String</td>
<td>Indica si es titular representativo (S/N).</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador del integrante.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del integrante.</td>
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
<td>No se recibió el identificador del País de documento.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del Tipo de documento.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el número de documento.</td>
</tr>
<tr>
<td>30004</td>
<td>No existe registro de la Persona.</td>
</tr>
<tr>
<td>30005</td>
<td>No se pudo obtener identificador único de la persona.</td>
</tr>
<tr>
<td>30006</td>
<td>No se pudo obtener identificador único de la cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


