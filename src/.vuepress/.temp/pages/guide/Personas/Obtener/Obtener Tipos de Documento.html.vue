<template><div><h1 id="obtener-tipos-de-documento" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-documento"><span>Obtener Tipos de Documento</span></a></h1>
<p>Método para obtener un listado de los tipos de documento registrados.</p>
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
<td>BTPersonas.ObtenerTiposdeDocumento</td>
<td>RBTPG039</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipos de Documento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerTiposdeDocumento> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerTiposdeDocumento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerTiposdeDocumento=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: c6d7699e-ce1e-9e63-d444-212c5ee5ce80' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTPersonas.ObtenerTiposdeDocumentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTipoDocumentos> 
            <sBTTipoDocumento> 
               <identificador>1</identificador> 
               <descripcion>Cédula Identidad</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>2</identificador> 
               <descripcion>RUT</descripcion> 
               <tipoPersona>J</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>3</identificador> 
               <descripcion>Pasaporte</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>4</identificador> 
               <descripcion>NRE</descripcion> 
               <tipoPersona>A</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>6</identificador> 
               <descripcion>LEN(ARG.LIBR.ENROLAM</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>7</identificador> 
               <descripcion>CIA(ARGENT.C.DE ID.)</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>8</identificador> 
               <descripcion>CI (BRASIL C.DE ID.)</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>9</identificador> 
               <descripcion>CPF(BRAS.CONTR.R.PER</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
            <sBTTipoDocumento> 
               <identificador>10</identificador> 
               <descripcion>CIP(PARAG.C.DE ID.)</descripcion> 
               <tipoPersona>F</tipoPersona> 
            </sBTTipoDocumento> 
         </sdtTipoDocumentos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>826</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerTiposdeDocumento</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:45:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerTiposdeDocumentoResponse> 
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
    "sdtTipoDocumentos": { 
        "sBTTipoDocumento": [ 
            { 
                "tipoPersona": "F", 
                "descripcion": "Cédula Identidad", 
                "identificador": "1" 
            }, 
            { 
                "tipoPersona": "J", 
                "descripcion": "RUT", 
                "identificador": "2" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "Pasaporte", 
                "identificador": "3" 
            }, 
            { 
                "tipoPersona": "A", 
                "descripcion": "NRE", 
                "identificador": "4" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "LEN(ARG.LIBR.ENROLAM", 
                "identificador": "6" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "CIA(ARGENT.C.DE ID.)", 
                "identificador": "7" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "CI (BRASIL C.DE ID.)", 
                "identificador": "8" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "CPF(BRAS.CONTR.R.PER", 
                "identificador": "9" 
            }, 
            { 
                "tipoPersona": "F", 
                "descripcion": "CIP(PARAG.C.DE ID.)", 
                "identificador": "10" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "825", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerTiposdeDocumento", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:44:49", 
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
<td>sdtTipoDocumentos</td>
<td>sBTTipoDocumento</td>
<td>Listado de tipos de documento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoDocumento son los siguientes:</p>
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
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de tipo de documento.</td>
</tr>
<tr>
<td>tipoPersona</td>
<td>String</td>
<td>Tipo de Persona (F/J).</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>40001 | No existen Tipos de Documentos ingresados en el sistema.</p>
</div></template>


