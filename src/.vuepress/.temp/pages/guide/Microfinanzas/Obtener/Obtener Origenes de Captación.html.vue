<template><div><h1 id="obtener-origenes-de-captacion" tabindex="-1"><a class="header-anchor" href="#obtener-origenes-de-captacion"><span>Obtener Origenes de Captación</span></a></h1>
<p>Método para obtener los orígenes de captación.</p>
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
<td>BTMicrofinanzas.ObtenerOrigenesCaptacion</td>
<td>RBTPG421</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Origenes de Captacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerOrigenesCaptacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>419385365CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
      </bts:BTMicrofinanzas.ObtenerOrigenesCaptacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerOrigenesCaptacion \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
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
      <BTMicrofinanzas.ObtenerOrigenesCaptacionResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>419385365CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtOrigenesCaptacion> 
            <OrigenCaptación> 
               <identificador>1</identificador> 
               <descripcion>Red de Agencias</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>2</identificador> 
               <descripcion>Call Center</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>3</identificador> 
               <descripcion>Visita Página Web</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>4</identificador> 
               <descripcion>Referencia de otro cliente</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>5</identificador> 
               <descripcion>Publicidad Masiva</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>6</identificador> 
               <descripcion>Correos masivos</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>7</identificador> 
               <descripcion>Promotor Comunitario</descripcion> 
            </OrigenCaptación> 
            <OrigenCaptación> 
               <identificador>8</identificador> 
               <descripcion>Otro</descripcion> 
            </OrigenCaptación> 
         </sdtOrigenesCaptacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerOrigenesCaptacion</Servicio> 
            <Fecha>2019-09-10</Fecha> 
            <Hora>14:52:38</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>123</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerOrigenesCaptacionResponse> 
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
      "sdtOrigenesCaptacion": { 
        "OrigenCaptación": [ 
          { 
            "identificador": "1", 
            "descripcion": "Red de Agencias" 
          }, 
          { 
            "identificador": "2", 
            "descripcion": "Call Center" 
          }, 
          { 
            "identificador": "3", 
            "descripcion": "Visita Página Web" 
          }, 
          { 
            "identificador": "4", 
            "descripcion": "Referencia de otro cliente" 
          }, 
          { 
            "identificador": "5", 
            "descripcion": "Publicidad Masiva" 
          }, 
          { 
            "identificador": "6", 
            "descripcion": "Correos masivos" 
          }, 
          { 
            "identificador": "7", 
            "descripcion": "Promotor Comunitario" 
          }, 
          { 
            "identificador": "8", 
            "descripcion": "Otro" 
          } 
        ] 
      }, 
      "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTMicrofinanzas.ObtenerOrigenesCaptacion", 
        "Fecha": "2019-09-10", 
        "Hora": "14:52:38", 
        "Requerimiento": "95", 
        "Numero": "123", 
        "Estado": "OK" 
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
<td>sdtOrigenesCaptacion</td>
<td>sBTOrigenCaptacion</td>
<td>Listado de orígenes de captación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOrigenCaptacion son los siguientes:</p>
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
<td>Identificador de orígen de captación.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de orígen de captación.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


