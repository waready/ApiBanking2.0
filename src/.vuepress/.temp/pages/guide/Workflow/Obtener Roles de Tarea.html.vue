<template><div><h1 id="obtener-roles-de-tarea" tabindex="-1"><a class="header-anchor" href="#obtener-roles-de-tarea"><span>Obtener Roles de Tarea</span></a></h1>
<p>Método para obtener los roles de una determinada tarea de Workflow.</p>
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
<td>BTWorkflow.ObtenerRolesDeTarea</td>
<td>RBTPG465</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Roles De Tarea:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerRolesDeTarea> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>151D0C3440510F1D04029085</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:procesoId>1</bts:procesoId> 
         <bts:tareaId>11</bts:tareaId> 
      </bts:BTWorkflow.ObtenerRolesDeTarea> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerRolesDeTarea \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
   }, 
   "procesoId": "1", 
   "tareaId": "11" 
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
      <BTWorkflow.ObtenerRolesDeTareaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>151D0C3440510F1D04029085</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtRoles> 
            <sBTRolWF> 
               <descripcion>Gerente de Sucursal</descripcion> 
               <codigo>3</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Asesor de Créditos</descripcion> 
               <codigo>6</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gte. Microfinanzas</descripcion> 
               <codigo>7</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Consumo</descripcion> 
               <codigo>8</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Gerente Comercial</descripcion> 
               <codigo>9</codigo> 
            </sBTRolWF> 
            <sBTRolWF> 
               <descripcion>Comité de Crédito</descripcion> 
               <codigo>10</codigo> 
            </sBTRolWF> 
         </sdtRoles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-11-29</Fecha> 
            <Servicio>BTWorkflow.ObtenerRolesDeTarea</Servicio> 
            <Hora>13:11:02</Hora> 
            <Numero>225658</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTWorkflow.ObtenerRolesDeTareaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
' 
{ 
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "47D750A861C4243EDE981344" 
   }, 
   "sdtRoles": { 
      "sBTRolWF": [ 
         { 
            "descripcion": "Gerente de Sucursal", 
            "codigo": "3" 
         }, 
         { 
            "descripcion": "Asesor de Créditos", 
            "codigo": "6" 
         }, 
         { 
            "descripcion": "Gte. Microfinanzas", 
            "codigo": "7" 
         }, 
         { 
            "descripcion": "Gerente Consumo", 
            "codigo": "8" 
         }, 
         { 
            "descripcion": "Gerente Comercial", 
            "codigo": "9" 
         }, 
         { 
            "descripcion": "Comité de Crédito", 
            "codigo": "10" 
         } 
      ] 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Estado": "OK", 
      "Canal": "BTDIGITAL", 
      "Fecha": "2022-11-29", 
      "Servicio": "BTWorkflow.ObtenerRolesDeTarea", 
      "Hora": "13:11:02", 
      "Numero": "225658", 
      "Requerimiento": "1" 
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
<td>procesoId</td>
<td>Int</td>
<td>Identificador de proceso Workflow.</td>
</tr>
<tr>
<td>tareaId</td>
<td>Int</td>
<td>Identificador de tarea Workflow.</td>
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
<td>sdtRoles</td>
<td>sBTRolWF</td>
<td>Listado de roles de Workflow.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTRolWF son los siguientes:</p>
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
<td>codigo</td>
<td>Int</td>
<td>Código del rol.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del rol.</td>
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
<td>No se recibió el identificador de proceso.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de tarea.</td>
</tr>
<tr>
<td>40001</td>
<td>El proceso ingresado no existe.</td>
</tr>
<tr>
<td>40002</td>
<td>La tarea ingresada no existe para el proceso.</td>
</tr>
<tr>
<td>40003</td>
<td>No existen roles en el sistema para la tarea ingresada.</td>
</tr>
</tbody>
</table>
</div></template>


