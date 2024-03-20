<template><div><h1 id="obtener-tipos-de-modelos" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-modelos"><span>Obtener Tipos De Modelos</span></a></h1>
<p>Método para obtener los diferentes tipos de modelos de evaluación.</p>
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
<td>BTPAE.ObtenerTiposDeModelos</td>
<td>RBTPG514</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
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
<td>sdtTModelosPAE</td>
<td>sBTTModeloPAE</td>
<td>Listado de los modelos de evaluacion.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTModeloPAE son los siguientes:</p>
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
<td>tipoModelo</td>
<td>Numerico</td>
<td>Identificador del tipo de modelo.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del tipo de modelo.</td>
</tr>
<tr>
<td>categoriaModelo</td>
<td>Numerico</td>
<td>Categoría de Modelo (1 - Lineal, 2 - Mínimo, 3 - Máximo, 4 - Especial).</td>
</tr>
<tr>
<td>programaEvaluacion</td>
<td>String</td>
<td>Programa particular para realizar la evaluación del modelo.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipos De Modelos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPAE.ObtenerTiposDeModelos> 
         <bts:Btinreq> 
            <bts:Requerimiento>10</bts:Requerimiento> 
            <bts:Device>FP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3789c5608bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPAE.ObtenerTiposDeModelos> 
   </soapenv:Body> 
</soapenv:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPAE_v1?ObtenerTiposDeModelos \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
  "Btinreq": { 
      "Requerimiento": 13, 
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
      <BTPAE.ObtenerTiposDeModelosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>FP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>10</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>3789c5608bCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtTModelosPAE> 
            <sBTTModeloPAE> 
               <descripcion>Lineal</descripcion> 
               <programaEvaluacion/> 
               <tipoModelo>1</tipoModelo> 
               <categoriaModelo>1</categoriaModelo> 
            </sBTTModeloPAE> 
            <sBTTModeloPAE> 
               <descripcion>Logístico</descripcion> 
               <programaEvaluacion/> 
               <tipoModelo>2</tipoModelo> 
               <categoriaModelo>5</categoriaModelo> 
            </sBTTModeloPAE> 
            <sBTTModeloPAE> 
               <descripcion>Mínimo Puntaje</descripcion> 
               <programaEvaluacion/> 
               <tipoModelo>3</tipoModelo> 
               <categoriaModelo>2</categoriaModelo> 
            </sBTTModeloPAE> 
            <sBTTModeloPAE> 
               <descripcion>Máximo Puntaje</descripcion> 
               <programaEvaluacion/> 
               <tipoModelo>4</tipoModelo> 
               <categoriaModelo>3</categoriaModelo> 
            </sBTTModeloPAE> 
            <sBTTModeloPAE> 
               <descripcion>Ejecución de algoritmo externo</descripcion> 
               <programaEvaluacion>PAISPRU</programaEvaluacion> 
               <tipoModelo>5</tipoModelo> 
               <categoriaModelo>4</categoriaModelo> 
            </sBTTModeloPAE> 
         </sdtTModelosPAE> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>31103</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPAE.ObtenerTiposDeModelos</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Requerimiento>10</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>10:38:28</Hora> 
         </Btoutreq> 
      </BTPAE.ObtenerTiposDeModelosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
  "Envelope": { 
    "Body": { 
      "BTPAE.ObtenerTiposDeModelosResponse": { 
        "Btinreq": { 
          "Device": "FP", 
          "Usuario": "INSTALADOR", 
          "Requerimiento": 10, 
          "Canal": "BTDIGITAL", 
          "Token": "3789c5608bCD285A89A23FBE" 
        }, 
        "sdtTModelosPAE": { 
          "sBTTModeloPAE": [ 
            { 
              "descripcion": "Lineal", 
              "programaEvaluacion": "", 
              "tipoModelo": 1, 
              "categoriaModelo": 1 
            }, 
            { 
              "descripcion": "Logístico", 
              "programaEvaluacion": "", 
              "tipoModelo": 2, 
              "categoriaModelo": 5 
            }, 
            { 
              "descripcion": "Mínimo Puntaje", 
              "programaEvaluacion": "", 
              "tipoModelo": 3, 
              "categoriaModelo": 2 
            }, 
            { 
              "descripcion": "Máximo Puntaje", 
              "programaEvaluacion": "", 
              "tipoModelo": 4, 
              "categoriaModelo": 3 
            }, 
            { 
              "descripcion": "Ejecución de algoritmo externo", 
              "programaEvaluacion": "PAISPRU", 
              "tipoModelo": 5, 
              "categoriaModelo": 4 
            } 
          ] 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 31103, 
          "Estado": "OK", 
          "Servicio": "BTPAE.ObtenerTiposDeModelos", 
          "Fecha": "2022-11-29", 
          "Requerimiento": 10, 
          "Canal": "BTDIGITAL", 
          "Hora": "10:38:28" 
        } 
      } 
    } 
  } 
} 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


