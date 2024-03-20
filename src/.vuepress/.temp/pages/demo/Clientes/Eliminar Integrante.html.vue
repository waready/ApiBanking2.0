<template><div><h1 id="eliminar-integrante" tabindex="-1"><a class="header-anchor" href="#eliminar-integrante"><span>Eliminar Integrante</span></a></h1>
<p>Método para eliminar un integrante de una cuenta cliente.</p>
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
<td>BTClientes.EliminarIntegrantes</td>
<td>RBTPG386</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Eliminar Integrante:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.EliminarIntegrante> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>c2cfd09eff4A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTClientes.EliminarIntegrante> 
      <bts:clienteUId>1</bts:clienteUId> 
      <bts:personaUId>853</bts:personaUId> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?EliminarIntegrante' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "clienteUId": 1, 
    "personaUId": 853 
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
      <BTClientes.EliminarIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTClientes.EliminarIntegrante</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTClientes.EliminarIntegranteResponse> 
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
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTClientes.EliminarIntegrante", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>30001</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe cuenta para el identificador único: [Nùmero de identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>No existe persona para el identificador único: [Nùmero de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La persona ingresada no integra la cuenta.</td>
</tr>
<tr>
<td>40002</td>
<td>No se puede realizar esta accion para este tipo de titular.</td>
</tr>
<tr>
<td>40003</td>
<td>No se pueden realizar cambios de integrantes cuando la cuenta cliente tiene productos activos.</td>
</tr>
<tr>
<td>40004</td>
<td>No se puede eliminar el titular representativo.</td>
</tr>
<tr>
<td>40005</td>
<td>No se puede eliminar el representante legal.</td>
</tr>
<tr>
<td>40006</td>
<td>Error: La Autorización a sido negada.</td>
</tr>
</tbody>
</table>
</div></template>


