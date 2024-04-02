<template><div><h1 id="actualizar-informacion-financiera" tabindex="-1"><a class="header-anchor" href="#actualizar-informacion-financiera"><span>Actualizar Información Financiera</span></a></h1>
<p>Método para modificar la información financiera de una persona.</p>
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
<td>BTPersonas.ActualizarInformacionFinanciera</td>
<td>RBTPCO02</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Información Financiera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarInformacionFinanciera> 
         <bts:Btinreq> 
            <bts:Token>042638a184CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>42</bts:personaUId> 
         <bts:sdtInformacionFinanciera> 
            <bts:paisOrigenRecursos></bts:paisOrigenRecursos> 
            <bts:otrosIngresosMensualesDesc>Alquileres</bts:otrosIngresosMensualesDesc> 
            <bts:operacionesInternacionales> 
               <bts:tipoProducto>CDT</bts:tipoProducto> 
               <bts:moneda></bts:moneda> 
               <bts:ciudadId>1465</bts:ciudadId> 
               <bts:nombreEntidad>Nombre Entidad Prueba</bts:nombreEntidad> 
               <bts:monto>884561.00</bts:monto> 
               <bts:pais></bts:pais> 
               <bts:ciudad></bts:ciudad> 
               <bts:operaMonedaExtranjera>S</bts:operaMonedaExtranjera> 
               <bts:numeroProducto>AAALLL</bts:numeroProducto> 
               <bts:tipoOperacion>Inversiones</bts:tipoOperacion> 
               <bts:monedaId>801</bts:monedaId> 
               <bts:paisId>845</bts:paisId> 
            </bts:operacionesInternacionales> 
            <bts:totalPasivos>450000.00</bts:totalPasivos> 
            <bts:origenRecursos>C</bts:origenRecursos> 
            <bts:totalIngresosMensuales>550015.00</bts:totalIngresosMensuales> 
            <bts:egresosMensuales>380000.00</bts:egresosMensuales> 
            <bts:otrosIngresosMensuales>450015.00</bts:otrosIngresosMensuales> 
            <bts:ingresosMensuales>100000.00</bts:ingresosMensuales> 
            <bts:totalActivos>950000.00</bts:totalActivos> 
            <bts:paisOrigenRecursosId></bts:paisOrigenRecursosId> 
         </bts:sdtInformacionFinanciera> 
      </bts:BTPersonas.ActualizarInformacionFinanciera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarInformacionFinanciera \ 
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
	"personaUId": "42", 
	"totalPasivos": "450000.00", 
	"origenRecursos": "C", 
	"totalIngresosMensuales": "550015.00", 
	"egresosMensuales": "380000.00", 
	"otrosIngresosMensuales": "450015.00", 
	"ingresosMensuales": "100000.00", 
	"totalActivos": "950000.00", 
	"sdtInformacionFinanciera": { 
	  "otrosIngresosMensualesDesc": "Alquileres", 
	  "operacionesInternacionales": { 
		"tipoProducto": "CDT", 
		"ciudadId": "1465", 
		"nombreEntidad": "Nombre Entidad Prueba", 
		"monto": "884561.00", 
		"operaMonedaExtranjera": "S", 
		"numeroProducto": "AAALLL", 
		"tipoOperacion": "Inversiones", 
		"monedaId": "801", 
		"paisId": "845" 
	 },   
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
      <BTPersonas.ActualizarInformacionFinancieraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2098</Numero> 
            <Servicio>BTPersonas.ActualizarInformacionFinanciera</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-03-10</Fecha> 
            <Hora>08:54:28</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarInformacionFinancieraResponse> 
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
        "Btoutreq": { 
          "Numero": "2098", 
          "Servicio": "BTPersonas.ActualizarInformacionFinanciera", 
          "Estado": "OK", 
          "Requerimiento": "1", 
          "Fecha": "2020-03-10", 
          "Hora": "08:54:28", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
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
<td>Descripción de otros ingresos mensuales (Se ingresa si se ingresó valor en el campo otrosIngresosMensuales).</td>
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
<td>Identificador de país (Se pide si el país de origen de recursos es O = Otro).</td>
</tr>
<tr>
<td>paisOrigenRecursos</td>
<td>String</td>
<td>País (Se pide si el país de origen de recursos es O = Otro).</td>
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
<td>(S = Si / N = No) (El resto de los datos solo se piden si se indica S = Si).</td>
</tr>
<tr>
<td>tipoOperacion</td>
<td>String</td>
<td>(Importación / Exportación / Inversiones / Préstamos / Si el tipo de operación es &quot;Otro&quot;, se debe ingresar aquí).</td>
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
<td>Nombre de moneda.</td>
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
<td>Int</td>
<td>Identificador de ciudad.</td>
</tr>
<tr>
<td>ciudad</td>
<td>String</td>
<td>Nombre de ciudad.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Int</td>
<td>Identificador de departamento.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>40001</td>
<td>Debe ingresar ingresos mensuales.</td>
</tr>
<tr>
<td>40002</td>
<td>Los ingresos mensuales deben ser mayor a [Importe parametrizado].</td>
</tr>
<tr>
<td>40003</td>
<td>El campo ¿Cuales? debe ser [alfabético / numérico].</td>
</tr>
<tr>
<td>40004</td>
<td>Debe ingresar valor en campo ¿Cuales?.</td>
</tr>
<tr>
<td>40005</td>
<td>Debe ingresar total de egresos.</td>
</tr>
<tr>
<td>40006</td>
<td>El total de egresos debe ser mayor a [Importe parametrizado].</td>
</tr>
<tr>
<td>40007</td>
<td>Debe ingresar total de activos.</td>
</tr>
<tr>
<td>40008</td>
<td>El total de activos debe ser mayor a [Importe parametrizado].</td>
</tr>
<tr>
<td>40009</td>
<td>Debe ingresar valor en origen de recursos.</td>
</tr>
<tr>
<td>40010</td>
<td>Debe ingresar cual es el país de origen de recursos.</td>
</tr>
<tr>
<td>40011</td>
<td>El país de origen de recursos ingresado no es válido.</td>
</tr>
<tr>
<td>40012</td>
<td>El valor ingresado en el campo Origen Recursos no es válido.</td>
</tr>
<tr>
<td>40013</td>
<td>Debe ingresar si opera o no en moneda extranjera.</td>
</tr>
<tr>
<td>40014</td>
<td>Debe ingresar tipo de operación.</td>
</tr>
<tr>
<td>40015</td>
<td>El campo tipo de operación debe ser [alfabético / numérico].</td>
</tr>
<tr>
<td>40016</td>
<td>Debe ingresar tipo de producto.</td>
</tr>
<tr>
<td>40017</td>
<td>El campo tipo de producto debe ser [alfabético / numérico].</td>
</tr>
<tr>
<td>40018</td>
<td>El tipo de producto ingresado no es válido.</td>
</tr>
<tr>
<td>40019</td>
<td>Debe ingresar número de producto.</td>
</tr>
<tr>
<td>40020</td>
<td>El campo número de producto debe ser [alfabético / numérico].</td>
</tr>
<tr>
<td>40021</td>
<td>Debe ingresar nombre de entidad.</td>
</tr>
<tr>
<td>40022</td>
<td>El campo nombre de entidad debe ser [alfabético / numérico].</td>
</tr>
<tr>
<td>40023</td>
<td>Debe ingresar moneda.</td>
</tr>
<tr>
<td>40024</td>
<td>La moneda ingresada no es válida.</td>
</tr>
<tr>
<td>40025</td>
<td>Debe ingresar monto.</td>
</tr>
<tr>
<td>40026</td>
<td>El monto no puede ser menor a 0.</td>
</tr>
<tr>
<td>40027</td>
<td>Debe ingresar país de operaciones internacionales.</td>
</tr>
<tr>
<td>40028</td>
<td>El país de operaciones internacionales ingresado no es válido.</td>
</tr>
<tr>
<td>40029</td>
<td>Debe ingresar ciudad de operaciones internacionales.</td>
</tr>
<tr>
<td>40030</td>
<td>La ciudad ingresada no es válida.</td>
</tr>
<tr>
<td>40031</td>
<td>El valor ingresado en Opera en Moneda Extranjera no es válido.</td>
</tr>
</tbody>
</table>
</div></template>


