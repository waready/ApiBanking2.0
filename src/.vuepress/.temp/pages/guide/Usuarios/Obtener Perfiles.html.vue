<template><div><h1 id="obtener-perfiles" tabindex="-1"><a class="header-anchor" href="#obtener-perfiles"><span>Obtener Perfiles</span></a></h1>
<p>Método para consultar los perfiles que tiene asignado un usuario.</p>
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
<td>BTUsuarios.ObtenerPerfiles</td>
<td>RBTPG407</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Perfiles:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerPerfiles> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.ObtenerPerfiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerPerfiles=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AC", 
		"Usuario": "BANTOTAL", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "2062732190F955E77534D3E0" 
	}, 
	"usuario": "INSTALADOR" 
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
      <BTUsuarios.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPerfiles> 
            <sBTPerfilBT> 
               <Perfil>COMERCIAL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>INSTALADOR</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>MFINSTALL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>PRECIOS</perfil> 
               <FechaAlta>2001-02-22</fechaAlta> 
               <FechaVencimiento>2035-03-03</fechaVencimiento> 
            </sBTPerfilBT> 
         </sdtPerfiles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.ObtenerPerfiles</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:29:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6995</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerPerfilesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "2062732190F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtPerfiles": { 
        "sBTPerfilBT": [ 
            { 
                "Perfil": "COMERCIAL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "INSTALADOR", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "MFINSTALL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "PRECIOS", 
                "FechaAlta": "2001-02-22", 
                "FechaVencimiento": "2035-03-03" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.ObtenerPerfiles", 
        "Fecha": "2019-11-19", 
        "Hora": "17:31:08", 
        "Requerimiento": "", 
        "Numero": 6997, 
        "Estado": "OK" 
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
<td>usuario</td>
<td>String</td>
<td>Usuario a consultar.</td>
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
<td>sdtPerfiles</td>
<td>sBTPerfilBT</td>
<td>Perfiles del usuario.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes:</p>
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
<td>Perfil</td>
<td>String</td>
<td>Identificación de perfil Bantotal.</td>
</tr>
<tr>
<td>FechaAlta</td>
<td>Date</td>
<td>Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil.</td>
</tr>
<tr>
<td>FechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del perfil para el usuario.</td>
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
<td>No se recibió Usuario.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el usuario ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


