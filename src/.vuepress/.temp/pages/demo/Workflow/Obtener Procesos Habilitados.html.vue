<template><div><h1 id="obtener-procesos-habilitados" tabindex="-1"><a class="header-anchor" href="#obtener-procesos-habilitados"><span>Obtener Procesos Habilitados</span></a></h1>
<p>Método para obtener los procesos habilitados de Workflow.</p>
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
<td>BTWorkflow.ObtenerProcesosHabilitados</td>
<td>RBTPG515</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Procesos Habilitados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTWorkflow.ObtenerProcesosHabilitados> 
         <bts:Btinreq> 
            <bts:Requerimiento>2</bts:Requerimiento> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTWorkflow.ObtenerProcesosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTWorkflow_v1?ObtenerProcesosHabilitados \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
        "Requerimiento": 2, 
        "Device": "FP", 
        "Canal": "BTDIGITAL", 
        "Usuario": "INSTALADOR", 
        "Token": "3789c5608bCD285A89A23FBE" 
    }, 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTWorkflow.ObtenerProcesosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>2</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>3789c5608bCD285A89A23FBE</Token> 
         </Btinreq> 
         <sBTProcesosWF> 
            <sBTProcesoWF> 
               <idProceso>3</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2014-05-26</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2014-07-28</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>ALTA PRODUCTO</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>6</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2013-08-06</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-08-06</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>LIM_CAJA_SUC</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>8</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2014-07-21</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2014-07-21</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Aplicaciones_Móviles</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>9</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-09</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2015-09-09</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>ALTA_MOD_CONTRATO</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>10</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>2</idVersion> 
               <nombre>Créditos Individuales</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>11</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Créditos Grupales</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>12</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Creditos Retorno</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>13</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-09-14</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2013-02-26</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>Créditos Nuevos Reducido</nombre> 
            </sBTProcesoWF> 
            <sBTProcesoWF> 
               <idProceso>14</idProceso> 
               <descripcion/> 
               <fechaActualizacion>2015-05-13</fechaActualizacion> 
               <warning>0.00</warning> 
               <deadline>0.00</deadline> 
               <fechaCreacion>2015-05-06</fechaCreacion> 
               <idVersion>1</idVersion> 
               <nombre>FLUJO_ALERTAS</nombre> 
            </sBTProcesoWF> 
         </sBTProcesosWF> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>31109</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTWorkflow.ObtenerProcesosHabilitados</Servicio> 
            <Requerimiento>2</Requerimiento> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>13:04:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTWorkflow.ObtenerProcesosHabilitadosResponse> 
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
  "sBTProcesosWF": { 
      "sBTProcesoWF": [ 
        { 
          "idProceso": 3, 
          "descripcion": "", 
          "fechaActualizacion": "2014-05-26", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2014-07-28", 
          "idVersion": 1, 
          "nombre": "ALTA PRODUCTO" 
        }, 
        { 
          "idProceso": 6, 
          "descripcion": "", 
          "fechaActualizacion": "2013-08-06", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-08-06", 
          "idVersion": 1, 
          "nombre": "LIM_CAJA_SUC" 
        }, 
        { 
          "idProceso": 8, 
          "descripcion": "", 
          "fechaActualizacion": "2014-07-21", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2014-07-21", 
          "idVersion": 1, 
          "nombre": "Aplicaciones_Móviles" 
        }, 
        { 
          "idProceso": 9, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-09", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2015-09-09", 
          "idVersion": 1, 
          "nombre": "ALTA_MOD_CONTRATO" 
        }, 
        { 
          "idProceso": 10, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 2, 
          "nombre": "Créditos Individuales" 
        }, 
        { 
          "idProceso": 11, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Créditos Grupales" 
        }, 
        { 
          "idProceso": 12, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Creditos Retorno" 
        }, 
        { 
          "idProceso": 13, 
          "descripcion": "", 
          "fechaActualizacion": "2015-09-14", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2013-02-26", 
          "idVersion": 1, 
          "nombre": "Créditos Nuevos Reducido" 
        }, 
        { 
          "idProceso": 14, 
          "descripcion": "", 
          "fechaActualizacion": "2015-05-13", 
          "warning": 0, 
          "deadline": 0, 
          "fechaCreacion": "2015-05-06", 
          "idVersion": 1, 
          "nombre": "FLUJO_ALERTAS" 
        } 
      ] 
  }, 
  "Erroresnegocio": "", 
  "Btoutreq": { 
      "Numero": 31109, 
      "Estado": "OK", 
      "Servicio": "BTWorkflow.ObtenerProcesosHabilitados", 
      "Requerimiento": 2, 
      "Fecha": "2022-11-29", 
      "Hora": "13:04:36", 
      "Canal": "BTDIGITAL" 
  } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtProcesos</td>
<td>sBTProcesoWF</td>
<td>Listado de procesos habilitados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProcesoWF son los siguientes:</p>
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
<td>idProceso</td>
<td>Numerico</td>
<td>Código de proceso.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del proceso.</td>
</tr>
<tr>
<td>fechaCreacion</td>
<td>Date</td>
<td>Fecha de creación.</td>
</tr>
<tr>
<td>fechaActualizacion</td>
<td>Date</td>
<td>Fecha de actualización.</td>
</tr>
<tr>
<td>warning</td>
<td>Double</td>
<td>Tiempo de warning.</td>
</tr>
<tr>
<td>deadline</td>
<td>Double</td>
<td>Tiempo de deadline.</td>
</tr>
<tr>
<td>idVersion</td>
<td>Numerico</td>
<td>Versión del proceso.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


