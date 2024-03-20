<template><div><h1 id="agregar-integrante-a-persona-juridica" tabindex="-1"><a class="header-anchor" href="#agregar-integrante-a-persona-juridica"><span>Agregar Integrante a Persona Jurídica</span></a></h1>
<p>Método para agregar un integrante a una persona jurídica.</p>
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
<td>BTPersonas.AgregarIntegrantePersonaJuridica</td>
<td>RBTPG280</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Integrante a Persona Juridica:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarIntegrantePersonaJuridica> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>14298073CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaJuridicaUId>2</bts:personaJuridicaUId> 
		 <bts:sdtIntegranteAlta> 
			 <bts:personaUId>1</bts:personaIntegranteUId> 
			 <bts:vinculoId>1</bts:vinculoId> 
			 <bts:participacion>50</bts:participacion> 
		 </bts:sdtIntegranteAlta> 
      </bts:BTPersonas.AgregarIntegrantePersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarIntegrantePersonaJuridica' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "14298073CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "personaJuridicaUId": "2", 
	 "sdtIntegranteAlta": { 
		 "personaUId": "1", 
		 "vinculoId": "1", 
		 "participacion": "50", 
	 } 
   } 
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
      <BTPersonas.AgregarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1429807CD285A89A23FBE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.AgregarIntegrantePersonaJuridica</Servicio> 
            <Fecha>2020-11-02</Fecha> 
            <Hora>12:06:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10140</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.AgregarIntegrantePersonaJuridicaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "14298073CD285A89A23FBE", 
		"Device": "MC" 
	}, 
	"Erroresnegocio": null, 
	"Btoutreq": { 
		"Canal": "BTDIGITAL", 
		"Servicio": "BTPersonas.AgregarIntegrantePersonaJuridica", 
		"Fecha": "2020-11-02", 
		"Hora": "12:06:37", 
		"Requerimiento": "1", 
		"Numero": "10140", 
		"Estado": "OK" 
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
<td>personaJuridicaUId</td>
<td>Long</td>
<td>Identificador único de persona jurídica.</td>
</tr>
<tr>
<td>sdtIntegranteAlta</td>
<td>sBTIntegranteJuridicoAlta</td>
<td>Datos de la persona física integrante de la persona jurídica indicada.</td>
</tr>
<tr>
<td>modo</td>
<td>String</td>
<td>[Hidden: Valor fijo 'INS' para este método].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>vinculoId</td>
<td>Short</td>
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>participacion</td>
<td>Double</td>
<td>Porcentaje de participación del integrante.</td>
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
<td>No se recibió identificador único de persona jurídica.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió identificador único de integrante de persona jurídica.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió identificador de vínculo del integrante de persona jurídica.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió identificador de vínculo del integrante de persona jurídica.</td>
</tr>
<tr>
<td>40001</td>
<td>La sumatoria de porcentajes asociados a los integrantes de la persona jurídica es mayor a 100%.</td>
</tr>
<tr>
<td>40003</td>
<td>Debe ingresar el % de participación del accionista.</td>
</tr>
<tr>
<td>40004</td>
<td>El % de Participación no puede ser mayor al 100%.</td>
</tr>
<tr>
<td>40005</td>
<td>Si la persona no es Accionista tiene que haber sido ingresado con Alta Normal para poder integrar a la persona.</td>
</tr>
<tr>
<td>40006</td>
<td>Debe ingresar al menos un Representante Legal.</td>
</tr>
<tr>
<td>40007</td>
<td>No se puede cambiar el vinculo, ya que es el unico Representante Legal.</td>
</tr>
<tr>
<td>40008</td>
<td>La persona a vincular no puede ser la misma.</td>
</tr>
<tr>
<td>40009</td>
<td>No puede asociar una persona jurídica como representante legal.</td>
</tr>
<tr>
<td>40010</td>
<td>No existe el identificador de vínculo ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


