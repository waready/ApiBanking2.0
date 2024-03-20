<template><div><h1 id="obtener-barrios-y-colonias" tabindex="-1"><a class="header-anchor" href="#obtener-barrios-y-colonias"><span>Obtener Barrios y Colonias</span></a></h1>
<p>Método para obtener un listado de los barrios/colonias ingresados en Bantotal para una determinada ciudad de un país.</p>
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
<td>BTConfiguracionBantotal.ObtenerBarriosColonias</td>
<td>RBTPG045</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Barrios y Colonias:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerBarriosColonias> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:pais>845</bts:pais> 
         <bts:estado>10</bts:estado> 
         <bts:ciudad>10</bts:ciudad> 
      </bts:BTConfiguracionBantotal.ObtenerBarriosColonias> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerBarriosColonias=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 31d2b4c2-4885-03aa-98ba-969ccb380b6d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "pais": 845, 
    "estado": 10, 
    "ciudad": 10 
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
      <BTConfiguracionBantotal.ObtenerBarriosColoniasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtBarrios>             
            <sBTBarrio> 
               <identificador>910</identificador> 
               <descripcion>Paso de la Arena</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>920</identificador> 
               <descripcion>Paso Molino</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>960</identificador> 
               <descripcion>Pocitos</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>970</identificador> 
               <descripcion>Porvenir</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>980</identificador> 
               <descripcion>Prado</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>990</identificador> 
               <descripcion>Prosperidad</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1000</identificador> 
               <descripcion>Pueblo Victoria</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1010</identificador> 
               <descripcion>Puente Carrasco</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1020</identificador> 
               <descripcion>Punta Carretas</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1030</identificador> 
               <descripcion>Punta de Rieles</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1040</identificador> 
               <descripcion>Punta Espinillo</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1050</identificador> 
               <descripcion>Punta Gorda</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1060</identificador> 
               <descripcion>Puntas de Manga</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1070</identificador> 
               <descripcion>R. Farre</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1080</identificador> 
               <descripcion>Reducto</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1090</identificador> 
               <descripcion>Rivadavia</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1100</identificador> 
               <descripcion>Santa Catalina</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1110</identificador> 
               <descripcion>Santiago Vazquez</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1120</identificador> 
               <descripcion>Sarandi</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1130</identificador> 
               <descripcion>Sayago</descripcion> 
            </sBTBarrio>             
            <sBTBarrio> 
               <identificador>1200</identificador> 
               <descripcion>Unión</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1210</identificador> 
               <descripcion>Villa Colon</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1220</identificador> 
               <descripcion>Villa del Cerro</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1230</identificador> 
               <descripcion>Villa Dolores</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1240</identificador> 
               <descripcion>Villa García</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1250</identificador> 
               <descripcion>Villa Muñoz</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1260</identificador> 
               <descripcion>Villa Prosperidad</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>1270</identificador> 
               <descripcion>Villa Teresa</descripcion> 
            </sBTBarrio> 
            <sBTBarrio> 
               <identificador>2000</identificador> 
               <descripcion>Otro</descripcion> 
            </sBTBarrio> 
         </sdtBarrios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>795</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerBarriosColonias</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>17:52:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerBarriosColoniasResponse> 
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
    "sdtBarrios": { 
        "sBTBarrio": [ 
            { 
                "descripcion": "Santa Catalina", 
                "identificador": "1100" 
            }, 
            { 
                "descripcion": "Santiago Vazquez", 
                "identificador": "1110" 
            }, 
            { 
                "descripcion": "Sarandi", 
                "identificador": "1120" 
            }, 
            { 
                "descripcion": "Sayago", 
                "identificador": "1130" 
            }, 
            { 
                "descripcion": "Toledo Chico", 
                "identificador": "1140" 
            }, 
            { 
                "descripcion": "Tres Cruces", 
                "identificador": "1150" 
            }, 
            { 
                "descripcion": "Tres Esquinas", 
                "identificador": "1160" 
            }, 
            { 
                "descripcion": "Tres Ombúes", 
                "identificador": "1170" 
            }, 
            { 
                "descripcion": "Tres Palmas", 
                "identificador": "1180" 
            }, 
            { 
                "descripcion": "Trouville", 
                "identificador": "1190" 
            }, 
            { 
                "descripcion": "Unión", 
                "identificador": "1200" 
            }, 
            { 
                "descripcion": "Villa Colon", 
                "identificador": "1210" 
            }, 
            { 
                "descripcion": "Villa del Cerro", 
                "identificador": "1220" 
            }, 
            { 
                "descripcion": "Villa Dolores", 
                "identificador": "1230" 
            }, 
            { 
                "descripcion": "Villa García", 
                "identificador": "1240" 
            }, 
            { 
                "descripcion": "Villa Muñoz", 
                "identificador": "1250" 
            }, 
            { 
                "descripcion": "Villa Prosperidad", 
                "identificador": "1260" 
            }, 
            { 
                "descripcion": "Villa Teresa", 
                "identificador": "1270" 
            }, 
            { 
                "descripcion": "Otro", 
                "identificador": "2000" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "797", 
        "Estado": "OK", 
        "Servicio": "BTConfiguracionBantotal.ObtenerBarriosColonias", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "17:58:50", 
        "Canal": "BTDIGITAL" 
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
<td>pais</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>estado</td>
<td>Int</td>
<td>Identificador de estado.</td>
</tr>
<tr>
<td>ciudad</td>
<td>Int</td>
<td>Identificador de ciudad.</td>
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
<td>sdtBarrios</td>
<td>sBTBarrio</td>
<td>Listado de barrios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTBarrio son los siguientes:</p>
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
<td>Identificador de barrio.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion de barrio.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


