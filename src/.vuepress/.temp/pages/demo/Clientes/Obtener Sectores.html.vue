<template><div><h1 id="obtener-sectores" tabindex="-1"><a class="header-anchor" href="#obtener-sectores"><span>Obtener Sectores</span></a></h1>
<p>Método para obtener un listado de los sectores ingresados en Bantotal.</p>
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
<td>BTClientes.ObtenerSectores</td>
<td>RBTPG056</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Sectores:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerSectores> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTClientes.ObtenerSectores> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerSectores=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6d04ae50-6df0-d940-bc8e-b7a9954868d4' \ 
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
      <BTClientes.ObtenerSectoresResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSectores> 
            <sBTSector> 
               <identificador>1</identificador> 
               <descripcion>Privado no Financiero</descripcion> 
            </sBTSector> 
            <sBTSector> 
               <identificador>2</identificador> 
               <descripcion>Privado Financiero</descripcion> 
            </sBTSector> 
            <sBTSector> 
               <identificador>3</identificador> 
               <descripcion>Público Nacional</descripcion> 
            </sBTSector> 
            <sBTSector> 
               <identificador>4</identificador> 
               <descripcion>Público Extranjero</descripcion> 
            </sBTSector> 
            <sBTSector> 
               <identificador>99</identificador> 
               <descripcion>No Corresponde</descripcion> 
            </sBTSector> 
         </sdtSectores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>845</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerSectores</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:27:17</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerSectoresResponse> 
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
    "sdtSectores": { 
        "sBTSector": [ 
            { 
                "descripcion": "Privado no Financiero", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "Privado Financiero", 
                "identificador": "2" 
            }, 
            { 
                "descripcion": "Público Nacional", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "Público Extranjero", 
                "identificador": "4" 
            }, 
            { 
                "descripcion": "No Corresponde", 
                "identificador": "99" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "846", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerSectores", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:27:57", 
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
<td>sdtSectores</td>
<td>sBTSector</td>
<td>Listado de sectores.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSector son los siguientes:</p>
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
<td>Identificador de sector.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de sector.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


