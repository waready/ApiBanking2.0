<template><div><h1 id="obtener-metadata-de-tarea" tabindex="-1"><a class="header-anchor" href="#obtener-metadata-de-tarea"><span>Obtener Metadata De Tarea</span></a></h1>
<p>Método para obtener la metadata de una determinada tarea de Workflow.</p>
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
<td>BTWorkflow.ObtenerMetadataDeTarea</td>
<td>RBTPG463</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Metadata De Tarea:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerMetadataDeTarea> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>151D0C3440510F1D04029085</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:procesoId>1</bts:procesoId> 
         <bts:tareaId>11</bts:tareaId> 
      </bts:BTWorkflow.ObtenerMetadataDeTarea> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerMetadataDeTarea \ 
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
      <BTWorkflow.ObtenerMetadataDeTareaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>151D0C3440510F1D04029085</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtMetadatas> 
            <sBTMetadataWF> 
               <valor>S</valor> 
               <nombre>CONSULTA</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>EVAPOLIAPR</valor> 
               <nombre>ETQEVAPOLI</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>602</valor> 
               <nombre>EXPRESION</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>6</valor> 
               <nombre>MODELOPOLITICAS</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>RNG_98</valor> 
               <nombre>TEMA</nombre> 
            </sBTMetadataWF> 
            <sBTMetadataWF> 
               <valor>3</valor> 
               <nombre>TEMAPOLITICAS</nombre> 
            </sBTMetadataWF> 
         </sdtMetadatas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-11-29</Fecha> 
            <Servicio>BTWorkflow.ObtenerMetadataDeTarea</Servicio> 
            <Hora>13:34:13</Hora> 
            <Numero>225661</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTWorkflow.ObtenerMetadataDeTareaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "47D750A861C4243EDE981344" 
    }, 
    "sdtMetadatas": { 
        "sBTMetadataWF": [ 
        { 
            "valor": "S", 
            "nombre": "CONSULTA" 
        }, 
        { 
            "valor": "EVAPOLIAPR", 
            "nombre": "ETQEVAPOLI" 
        }, 
        { 
            "valor": "602", 
            "nombre": "EXPRESION" 
        }, 
        { 
            "valor": "6", 
            "nombre": "MODELOPOLITICAS" 
        }, 
        { 
            "valor": "RNG_98", 
            "nombre": "TEMA" 
        }, 
        { 
            "valor": "3", 
            "nombre": "TEMAPOLITICAS" 
        } 
        ] 
    }, 
    "Erroresnegocio": "", 
    "Btoutreq": { 
        "Estado": "OK", 
        "Canal": "BTDIGITAL", 
        "Fecha": "2022-11-29", 
        "Servicio": "BTWorkflow.ObtenerMetadataDeTarea", 
        "Hora": "13:34:13", 
        "Numero": "225661", 
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
<td>sdtMetadatas</td>
<td>sBTMetadataWF</td>
<td>Listado de datos de metadata Workflow.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMetadataWF son los siguientes:</p>
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
<td>nombre</td>
<td>String</td>
<td>Nombre del campo.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor del campo.</td>
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
<td>No existe metadata para la tarea ingresada.</td>
</tr>
</tbody>
</table>
</div></template>


