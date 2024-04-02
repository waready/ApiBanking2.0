<template><div><h1 id="obtener-ocupaciones" tabindex="-1"><a class="header-anchor" href="#obtener-ocupaciones"><span>Obtener Ocupaciones</span></a></h1>
<p>Método para obtener un listado de las ocupaciones registradas.</p>
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
<td>BTPersonas.ObtenerOcupaciones</td>
<td>RBTPG037</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Ocupaciones:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerOcupaciones> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerOcupaciones> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerOcupaciones=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 92bdbb62-f954-c1ae-9ca8-5a6289bace3b' \ 
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
      <BTPersonas.ObtenerOcupacionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtOcupaciones> 
            <sBTOcupacion> 
               <identificador>1</identificador> 
               <descripcion>Empleado</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>2</identificador> 
               <descripcion>Obrero</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>3</identificador> 
               <descripcion>Empresario</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>4</identificador> 
               <descripcion>Jubilado/ Pensionista</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>5</identificador> 
               <descripcion>Ama de casa</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>6</identificador> 
               <descripcion>Militar</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>7</identificador> 
               <descripcion>Policía</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>8</identificador> 
               <descripcion>Agropecuario</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>9</identificador> 
               <descripcion>Estudiante</descripcion> 
            </sBTOcupacion> 
            <sBTOcupacion> 
               <identificador>10</identificador> 
               <descripcion>Profesional Independiente</descripcion> 
            </sBTOcupacion> 
         </sdtOcupaciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>821</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerOcupaciones</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:41:53</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerOcupacionesResponse> 
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
    "sdtOcupaciones": { 
        "sBTOcupacion": [ 
            { 
                "descripcion": "Empleado", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Obrero", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Empresario", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "Jubilado/ Pensionista", 
                "identificador": "4" 
            }, 
            { 
                "descripcion": "Ama de casa", 
                "identificador": "5" 
            }, 
            { 
                "descripcion": "Militar", 
                "identificador": "6" 
            }, 
            { 
                "descripcion": "Policía", 
                "identificador": "7" 
            }, 
            { 
                "descripcion": "Agropecuario", 
                "identificador": "8" 
            }, 
            { 
                "descripcion": "Estudiante", 
                "identificador": "9" 
            }, 
            { 
                "descripcion": "Profesional Independiente", 
                "identificador": "10" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "822", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerOcupaciones", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:42:22", 
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
<td>sdtOcupaciones</td>
<td>sBTOcupacion</td>
<td>Listado de ocupaciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOcupacion son los siguientes:</p>
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
<td>Identificador de ocupación.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de ocupación.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


