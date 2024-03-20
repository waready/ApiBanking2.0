<template><div><h1 id="obtener-tarjetas-de-debito" tabindex="-1"><a class="header-anchor" href="#obtener-tarjetas-de-debito"><span>Obtener Tarjetas de Débito</span></a></h1>
<p>Método para obtener un listado de las tarjetas de débito de un cliente.</p>
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
<td>BTClientes.ObtenerTarjetasDebito</td>
<td>RBTPG015</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Si la opción general de procesos 20665 se encuentra activada o no se encuentra parametrizada, el servicio devuelve solo las tarjetas preferenciales. De lo contrario, si está parametrizada pero desactivada devolverá tanto las preferenciales como las adicionales.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tarjetas de Débito:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerTarjetasDebito> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
      </bts:BTClientes.ObtenerTarjetasDebito> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerTarjetasDebito=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: d89acb55-7235-c1e6-3866-0e89f6f76091' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": "81" 
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
      <BTClientes.ObtenerTarjetasDebitoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtProductosTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>1</tarjetaUId> 
               <numeroTarjeta>5010730101000000089</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>2</tarjetaUId> 
               <numeroTarjeta>5010730101000000132</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>3</tarjetaUId> 
               <numeroTarjeta>5010730101000000098</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>4</tarjetaUId> 
               <numeroTarjeta>5010730101000000105</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>5</tarjetaUId> 
               <numeroTarjeta>5010730101000000141</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
            <sBDProductoTarjeta> 
               <tarjetaUId>6</tarjetaUId> 
               <numeroTarjeta>5010730101000000123</numeroTarjeta> 
               <tipoTarjeta/> 
               <sucursal>Casa Matriz</sucursal> 
            </sBDProductoTarjeta> 
         </sdtProductosTarjeta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>839</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerTarjetasDebito</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>02:12:35</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerTarjetasDebitoResponse> 
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
    "sdtProductosTarjeta": { 
        "sBDProductoTarjeta": [ 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000089", 
                "tipoTarjeta": "", 
                "tarjetaUId": "1" 
            }, 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000132", 
                "tipoTarjeta": "", 
                "tarjetaUId": "2" 
            }, 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000098", 
                "tipoTarjeta": "", 
                "tarjetaUId": "3" 
            }, 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000105", 
                "tipoTarjeta": "", 
                "tarjetaUId": "4" 
            }, 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000141", 
                "tipoTarjeta": "", 
                "tarjetaUId": "5" 
            }, 
            { 
                "sucursal": "Casa Matriz", 
                "numeroTarjeta": "5010730101000000123", 
                "tipoTarjeta": "", 
                "tarjetaUId": "6" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "840", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerTarjetasDebito", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "02:16:29", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>sdtProductosTarjeta</td>
<td>sBDProductoTarjeta</td>
<td>Listado de tarjetas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDProductoTarjeta son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta de débito.</td>
</tr>
<tr>
<td>numeroTarjeta</td>
<td>String</td>
<td>Numero de tarjeta.</td>
</tr>
<tr>
<td>tipoTarjeta</td>
<td>String</td>
<td>Tipo de tarjeta.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal de la tarjeta.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
</tbody>
</table>
</div></template>


