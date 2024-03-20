<template><div><h1 id="obtener-clasificaciones-internas" tabindex="-1"><a class="header-anchor" href="#obtener-clasificaciones-internas"><span>Obtener Clasificaciones Internas</span></a></h1>
<p>Método para obtener un listado de las clasificaciones internas ingresadas en Bantotal.</p>
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
<td>BTClientes.ObtenerClasificacionesInternas</td>
<td>RBTPG057</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Clasificaciones Internas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerClasificacionesInternas> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTClientes.ObtenerClasificacionesInternas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerClasificacionesInternas=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a2504c18-058f-9846-0d61-85f4904ec027' \ 
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
      <BTClientes.ObtenerClasificacionesInternasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtClasificacionesInternas> 
            <sBTClasificacionInterna> 
               <identificador>1</identificador> 
               <descripcion>IFE - Actividades bursátiles</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>3</identificador> 
               <descripcion>IFE - Adm. de Mer. Financieros</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>4</identificador> 
               <descripcion>IFE - Agencia de viajes</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>12</identificador> 
               <descripcion>Emp. Fin no bancaria</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>13</identificador> 
               <descripcion>IFE - Inmobiliarias</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>15</identificador> 
               <descripcion>Otros Tipos Inter. Financiera</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>17</identificador> 
               <descripcion>IFE - Hoteles</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>19</identificador> 
               <descripcion>Soc. Offshore inv/neg. inter</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>20</identificador> 
               <descripcion>IFE - Bancos</descripcion> 
            </sBTClasificacionInterna> 
            <sBTClasificacionInterna> 
               <identificador>9999</identificador> 
               <descripcion>No Corresponde</descripcion> 
            </sBTClasificacionInterna> 
         </sdtClasificacionesInternas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>849</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerClasificacionesInternas</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:32:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerClasificacionesInternasResponse> 
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
    "sdtClasificacionesInternas": { 
        "sBTClasificacionInterna": [ 
            { 
                "descripcion": "IFE - Actividades bursátiles", 
                "identificador": "1" 
            }, 
            { 
                "descripcion": "IFE - Adm. de Mer. Financieros", 
                "identificador": "3" 
            }, 
            { 
                "descripcion": "IFE - Agencia de viajes", 
                "identificador": "4" 
            }, 
            { 
                "descripcion": "Emp. Fin no bancaria", 
                "identificador": "12" 
            }, 
            { 
                "descripcion": "IFE - Inmobiliarias", 
                "identificador": "13" 
            }, 
            { 
                "descripcion": "Otros Tipos Inter. Financiera", 
                "identificador": "15" 
            }, 
            { 
                "descripcion": "IFE - Hoteles", 
                "identificador": "17" 
            }, 
            { 
                "descripcion": "Soc. Offshore inv/neg. inter", 
                "identificador": "19" 
            }, 
            { 
                "descripcion": "IFE - Bancos", 
                "identificador": "20" 
            }, 
            { 
                "descripcion": "No Corresponde", 
                "identificador": "9999" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "850", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerClasificacionesInternas", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:32:36", 
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
<td>sdtClasificacionesInternas</td>
<td>sBTClasificacionInterna</td>
<td>Listado de clasificaciones internas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTClasificacionInterna son los siguientes:</p>
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
<td>Identificador de clasificacion interna.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de clasificacion interna.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


