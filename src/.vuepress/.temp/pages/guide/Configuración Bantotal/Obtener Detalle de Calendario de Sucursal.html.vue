<template><div><h1 id="obtener-detalle-de-calendario-de-sucursal" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-calendario-de-sucursal"><span>Obtener Detalle de Calendario de Sucursal</span></a></h1>
<p>Método para obtener el detalle de los días del calendario de una sucursal dada.</p>
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
<td>BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal</td>
<td>RBTPG323</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Calendario de Sucursal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1749872094F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:sucursalId>1</bts:sucursalId> 
         <bts:fechaInicio>2020-11-11</bts:fechaInicio> 
         <bts:fechaFin>2020-12-12</bts:fechaFin> 
      </bts:BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerDetalleCalendarioDeSucursal' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "1749872094F955E77534D3E0", 
	  "bts:Device": "AC" 
	}, 
	"sucursalId": 1, 
	"fechaInicio": "2020-11-11", 
	"fechaFin": "2020-12-12" 
} 
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
      <BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1749872094F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <calendarioId>1</calendarioId> 
         <descripcionCalendario>Calendario 1</descripcionCalendario> 
         <sdtDetalleCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-11</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-12</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-13</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-14</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-15</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-16</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-17</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-18</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-19</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-20</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-21</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-22</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-23</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-24</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-25</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-26</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-27</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-28</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-29</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-11-30</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-01</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-02</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-03</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-04</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-05</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-06</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-07</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-08</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-09</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-10</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-11</fecha> 
               <habil>S</habil> 
            </sBTDiaCalendario> 
            <sBTDiaCalendario> 
               <fecha>2020-12-12</fecha> 
               <habil>N</habil> 
            </sBTDiaCalendario> 
         </sdtDetalleCalendario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal</Servicio> 
            <Fecha>2021-03-15</Fecha> 
            <Hora>14:29:49</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8025</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
 { 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "120320211555340000388219" 
	}, 
	"calendarioId": "1", 
	"descripcionCalendario": "Calendario 1", 
	"sdtDetalleCalendario": { 
	  "sBTDiaCalendario": [ 
		{ 
		  "fecha": "2020-11-11", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-12", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-13", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-14", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-15", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-16", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-17", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-18", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-19", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-20", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-21", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-22", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-23", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-24", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-25", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-26", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-27", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-11-28", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-29", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-11-30", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-01", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-02", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-03", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-04", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-05", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-12-06", 
		  "habil": "N" 
		}, 
		{ 
		  "fecha": "2020-12-07", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-08", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-09", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-10", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-11", 
		  "habil": "S" 
		}, 
		{ 
		  "fecha": "2020-12-12", 
		  "habil": "N" 
		} 
	  ] 
	}, 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTConfiguracionBantotal.ObtenerDetalleCalendarioDeSucursal", 
	  "Fecha": "2021-03-15", 
	  "Hora": "14:29:49", 
	  "Requerimiento": "1", 
	  "Numero": "8025", 
	  "Estado": "OK" 
	} 
} 
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de la sucursal</td>
</tr>
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha inicio de la consulta</td>
</tr>
<tr>
<td>fechaFin</td>
<td>Date</td>
<td>Fecha fin de la consulta</td>
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
<td>calendarioId</td>
<td>Short</td>
<td>Identificador de calendario</td>
</tr>
<tr>
<td>descripcionCalendario</td>
<td>String</td>
<td>Descripción del calendario</td>
</tr>
<tr>
<td>sdtDetalleCalendario</td>
<td>sBTDiaCalendario</td>
<td>Detalle de la consulta del calendario.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTDiaCalendario tiene los siguientes campos:</p>
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
<td>fecha</td>
<td>Date</td>
<td>Día del calendario.</td>
</tr>
<tr>
<td>habil</td>
<td>String</td>
<td>¿Día hábil? (S/N)</td>
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
<td>No se encontró un calendario para la sucursal indicada.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió fecha de inicio.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió fecha de fin.</td>
</tr>
</tbody>
</table>
</div></template>


