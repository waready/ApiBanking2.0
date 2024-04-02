<template><div><h1 id="obtener-informacion-financiera" tabindex="-1"><a class="header-anchor" href="#obtener-informacion-financiera"><span>Obtener Información Financiera</span></a></h1>
<p>Método para obtener la información financiera de una persona.</p>
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
<td>BTPersonas.ObtenerInformacionFinanciera</td>
<td>RBTPCO03</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Información Financiera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerInformacionFinanciera> 
         <bts:Btinreq> 
            <bts:Token>098705dd29CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.ObtenerInformacionFinanciera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerInformacionFinanciera \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "21" 
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
      <BTPersonas.ObtenerInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>098705dd29CD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtInformacionFinanciera> 
            <paisOrigenRecursos>URUGUAY</paisOrigenRecursos> 
            <otrosIngresosMensualesDesc>Alquileres</otrosIngresosMensualesDesc> 
            <operacionesInternacionales> 
               <tipoProducto>Producto</tipoProducto> 
               <moneda>FRANCO FRANCES EFECTIVO</moneda> 
               <ciudadId>1465</ciudadId> 
               <nombreEntidad>Nombre Entidad</nombreEntidad> 
               <monto>884561.00</monto> 
               <pais>URUGUAY</pais> 
               <ciudad>Colonia Nicolich</ciudad> 
               <operaMonedaExtranjera>S</operaMonedaExtranjera> 
               <numeroProducto>AAALLL</numeroProducto> 
               <tipoOperacion>Compra</tipoOperacion> 
               <monedaId>801</monedaId> 
               <paisId>845</paisId> 
            </operacionesInternacionales> 
            <totalPasivos>450000.00</totalPasivos> 
            <origenRecursos>C</origenRecursos> 
            <totalIngresosMensuales>450030.00</totalIngresosMensuales> 
            <egresosMensuales>380000.00</egresosMensuales> 
            <otrosIngresosMensuales>450015.00</otrosIngresosMensuales> 
            <ingresosMensuales>15.00</ingresosMensuales> 
            <totalActivos>950000.00</totalActivos> 
            <paisOrigenRecursosId>845</paisOrigenRecursosId> 
         </sdtInformacionFinanciera> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1803</Numero> 
            <Servicio>BTPersonas.ObtenerInformacionFinanciera</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-06</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>08:36:34</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerInformacionFinancieraResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtInformacionFinanciera": { 
		"paisOrigenRecursos": "URUGUAY", 
		"otrosIngresosMensualesDesc": "Alquileres", 
		"totalPasivos": "450000.00", 
		"origenRecursos": "C", 
		"totalIngresosMensuales": "450030.00", 
		"egresosMensuales": "380000.00", 
		"otrosIngresosMensuales": "450015.00", 
		"ingresosMensuales": "15.00", 
		"totalActivos": "950000.00", 
		"paisOrigenRecursosId": "845", 
		"operacionesInternacionales": { 
			  "tipoProducto": "Producto", 
			  "moneda": "FRANCO FRANCES EFECTIVO", 
			  "ciudadId": "1465", 
			  "nombreEntidad": "Nombre Entidad", 
			  "monto": "884561.00", 
			  "pais": "URUGUAY", 
			  "ciudad": "Colonia Nicolich", 
			  "operaMonedaExtranjera": "S", 
			  "numeroProducto": "AAALLL", 
			  "tipoOperacion": "Compra", 
			  "monedaId": "801", 
			  "paisId": "845" 
		}, 
	}, 
	"Btoutreq": { 
	  "Numero": "1729", 
	  "Estado": "OK", 
	  "Servicio": "BTPersonas.ObtenerInformacionFinanciera", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-03-05", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "13:10:51" 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtInformacionFinanciera</td>
<td>sBTPCOInformacionFinanciera</td>
<td>Datos de información financiera de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPCOInformacionFinanciera son los siguientes:</p>
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
<td>ingresosMensuales</td>
<td>Double</td>
<td>Importe de ingresos mensuales.</td>
</tr>
<tr>
<td>egresosMensuales</td>
<td>Double</td>
<td>Importe de egresos mensuales.</td>
</tr>
<tr>
<td>otrosIngresosMensuales</td>
<td>Double</td>
<td>Importe de otros ingresos mensuales.</td>
</tr>
<tr>
<td>otrosIngresosMensualesDesc</td>
<td>String</td>
<td>Descripción de otros ingresos mensuales.</td>
</tr>
<tr>
<td>totalIngresosMensuales</td>
<td>Double</td>
<td>Importe del total de ingresos mensuales.</td>
</tr>
<tr>
<td>totalActivos</td>
<td>Double</td>
<td>Importe del total de activos.</td>
</tr>
<tr>
<td>totalPasivos</td>
<td>Double</td>
<td>Importe del total de pasivos.</td>
</tr>
<tr>
<td>origenRecursos</td>
<td>String</td>
<td>(C = Colombia / O = Otro).</td>
</tr>
<tr>
<td>paisOrigenRecursosId</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>paisOrigenRecursos</td>
<td>String</td>
<td>Nombre de país.</td>
</tr>
<tr>
<td>operacionesInternacionales</td>
<td>sBTPCOOperacionesInternacionales</td>
<td>Datos de operaciones internacionales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPCOOperacionesInternacionales son los siguientes:</p>
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
<td>operaMonedaExtranjera</td>
<td>String</td>
<td>(S = Si / N = No).</td>
</tr>
<tr>
<td>tipoOperacion</td>
<td>String</td>
<td>(Importación / Exportación / Inversiones / Préstamos / Otro).</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>(Cuenta de ahorros / Cuenta Corriente / CDT).</td>
</tr>
<tr>
<td>numeroProducto</td>
<td>String</td>
<td>Número del producto.</td>
</tr>
<tr>
<td>nombreEntidad</td>
<td>String</td>
<td>Nombre de la entidad.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Nombre de moneda</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto.</td>
</tr>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>Nombre de país.</td>
</tr>
<tr>
<td>ciudadId</td>
<td>Short</td>
<td>Identificador de ciudad.</td>
</tr>
<tr>
<td>ciudad</td>
<td>String</td>
<td>Nombre de ciudad.</td>
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
<td>No se recibió identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe el Registro.</td>
</tr>
</tbody>
</table>
</div></template>


