<template><div><h1 id="obtener-estados-civiles" tabindex="-1"><a class="header-anchor" href="#obtener-estados-civiles"><span>Obtener Estados Civiles</span></a></h1>
<p>Método para obtener un listado de los estados civiles registrados.</p>
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
<td>BTPersonas.ObtenerEstadoCiviles</td>
<td>RBTPG038</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Estados Civiles:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerEstadoCiviles> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerEstadoCiviles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerEstadoCiviles=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1ab76f4f-5fa9-2fcd-da62-beff5741cfc6' \ 
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
      <BTPersonas.ObtenerEstadoCivilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadosCiviles> 
            <sBTEstadoCivil> 
               <identificador>1</identificador> 
               <descripcion>Soltero/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>2</identificador> 
               <descripcion>Casado/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>3</identificador> 
               <descripcion>Separado/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>4</identificador> 
               <descripcion>Viudo/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>5</identificador> 
               <descripcion>Divorciado/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>6</identificador> 
               <descripcion>Concubino/a</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>7</identificador> 
               <descripcion>Casado c/Sep.de Bien</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>8</identificador> 
               <descripcion>Unión Libre</descripcion> 
            </sBTEstadoCivil> 
            <sBTEstadoCivil> 
               <identificador>9</identificador> 
               <descripcion>Otros</descripcion> 
            </sBTEstadoCivil> 
         </sdtEstadosCiviles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>819</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerEstadoCiviles</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:40:39</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerEstadoCivilesResponse> 
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
    "sdtEstadosCiviles": { 
        "sBTEstadoCivil": [ 
            { 
                "descripcion": "Soltero/a", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Casado/a", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Separado/a", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "Viudo/a", 
                "identificador": "4" 
            }, 
            { 
                "descripcion": "Divorciado/a", 
                "identificador": "5" 
            }, 
            { 
                "descripcion": "Concubino/a", 
                "identificador": "6" 
            }, 
            { 
                "descripcion": "Casado c/Sep.de Bien", 
                "identificador": "7" 
            }, 
            { 
                "descripcion": "Unión Libre", 
                "identificador": "8" 
            }, 
            { 
                "descripcion": "Otros", 
                "identificador": "9" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "820", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerEstadoCiviles", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:41:11", 
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
<td>sdtEstadosCiviles</td>
<td>sBTEstadoCivil</td>
<td>Listado de estados civiles.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTEstadoCivil son los siguientes:</p>
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
<td>String</td>
<td>Identificador de estado civil.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion de estado civil.</td>
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
<td>No existen Estados Civiles ingresados en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


