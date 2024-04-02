<template><div><h1 id="obtener" tabindex="-1"><a class="header-anchor" href="#obtener"><span>Obtener</span></a></h1>
<p>Método para obtener los datos de un usuario.</p>
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
<td>BTUsuarios.Obtener</td>
<td>RBTPG406</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Obtener> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Obtener=' \ 
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
      <BTUsuarios.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtDatosUsuario> 
            <usuario>INSTALADOR</usuario> 
            <nombre>INSTALADOR</nombre> 
            <email>moralesa@dlya.com.uy</email> 
            <telefono>26012777</telefono> 
            <sucursal>Sucursal Beta</sucursal> 
            <programaInicial>MINICIO</programaInicial> 
            <espaciosDeTrabajo>0</espaciosDeTrabajo> 
            <cantidadSesionesAbiertas>9</cantidadSesionesAbiertas> 
            <cajero>S</cajero> 
            <numeroCaja>400</numeroCaja> 
            <nivel>9</nivel> 
            <perfiles> 
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
            </perfiles> 
         </sdtDatosUsuario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.Obtener</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:19:56</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6991</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerResponse> 
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
    "sdtDatosUsuario": { 
        "usuario": "INSTALADOR", 
        "nombre": "INSTALADOR", 
        "email": "moralesa@dlya.com.uy", 
        "telefono": "26012777", 
        "sucursal": "Sucursal Beta", 
        "programaInicial": "MINICIO", 
        "espaciosDeTrabajo": 0, 
        "cantidadSesionesAbiertas": 9, 
        "cajero": "S", 
        "numeroCaja": 400, 
        "nivel": 9, 
        "perfiles": { 
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
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.Obtener", 
        "Fecha": "2019-11-19", 
        "Hora": "17:21:59", 
        "Requerimiento": "", 
        "Numero": 6992, 
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
<td>sdtDatosUsuario</td>
<td>sBTDatosUsuario</td>
<td>Datos del usuario.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosUsuario son los siguientes:</p>
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
<td>usuario</td>
<td>String</td>
<td>Identificador del usuario.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>email</td>
<td>String</td>
<td>Email del usuario.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono del usuario.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal donde se encuentra el usuario.</td>
</tr>
<tr>
<td>programaInicial</td>
<td>String</td>
<td>Nombre de programa incial que se invoca al acceder a Bantotal.</td>
</tr>
<tr>
<td>espaciosDeTrabajo</td>
<td>Int</td>
<td>Cantidad máxima de espacios de trabajos que puede tener abierta el usuario.</td>
</tr>
<tr>
<td>cantidadSesionesAbiertas</td>
<td>Short</td>
<td>Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal.</td>
</tr>
<tr>
<td>cajero</td>
<td>String</td>
<td>Es cajero? (S/N).</td>
</tr>
<tr>
<td>numeroCaja</td>
<td>Int</td>
<td>Número de caja del usuario.</td>
</tr>
<tr>
<td>nivel</td>
<td>short</td>
<td>Nivel del usuario.</td>
</tr>
<tr>
<td>perfiles</td>
<td>sBTPerfilBT</td>
<td>Perfiles asociados al usuario.</td>
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
<td>Identificador de perfil Bantotal.</td>
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


