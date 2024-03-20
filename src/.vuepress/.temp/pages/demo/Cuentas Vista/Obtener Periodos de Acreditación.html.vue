<template><div><h1 id="obtener-periodos-de-acreditacion" tabindex="-1"><a class="header-anchor" href="#obtener-periodos-de-acreditacion"><span>Obtener Periodos de Acreditación</span></a></h1>
<p>Método para obtener los periodos de acreditacion cargados en el sistema.</p>
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
<td>BTCuentasVista.ObtenerPeriodosDeAcreditacion</td>
<td>RBTPG365</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Periodos de Acreditacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1080548031CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
      </bts:BTCuentasVista.ObtenerPeriodosDeAcreditacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
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
      <BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1080548031CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtPeriodosDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Diario</descripcion> 
               <valor>1</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Semanal</descripcion> 
               <valor>5</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Quincenal</descripcion> 
               <valor>15</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Mensual</descripcion> 
               <valor>30</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Trimestral</descripcion> 
               <valor>90</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Semestral</descripcion> 
               <valor>180</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
            <SdtsBTPeriodoDeAcreditacion> 
               <descripcion>Anual</descripcion> 
               <valor>360</valor> 
            </SdtsBTPeriodoDeAcreditacion> 
         </sdtPeriodosDeAcreditacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerPeriodosDeAcreditacion</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>14:27:12</Hora> 
            <Requerimiento/> 
            <Numero>8451</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerPeriodosDeAcreditacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 
    "sdtPeriodosDeAcreditacion": { 
        "SdtsBTPeriodoDeAcreditacion": [ 
            { 
                "descripcion": "Diario", 
                "valor": 1 
            }, 
            { 
                "descripcion": "Semanal", 
                "valor": 5 
            }, 
            { 
                "descripcion": "Quincenal", 
                "valor": 15 
            }, 
            { 
                "descripcion": "Mensual", 
                "valor": 30 
            }, 
            { 
                "descripcion": "Trimestral", 
                "valor": 90 
            }, 
            { 
                "descripcion": "Semestral", 
                "valor": 180 
            }, 
            { 
                "descripcion": "Anual", 
                "valor": 360 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasVista.ObtenerPeriodosDeAcreditacion", 
        "Fecha": "2021-10-29", 
        "Hora": "13:37:58", 
        "Requerimiento": "", 
        "Numero": 8449, 
        "Estado": "OK" 
    } 
} 
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
<td>sdtPeriodosDeAcreditacion</td>
<td>sBTPeriodoDeAcreditacion</td>
<td>Listado de períodos de acreditación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPeriodoDeAcreditacion son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripcion del período.</td>
</tr>
<tr>
<td>valor</td>
<td>Int</td>
<td>Valor del período.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


