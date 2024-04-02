<template><div><h1 id="cargar-servicios-disponibles" tabindex="-1"><a class="header-anchor" href="#cargar-servicios-disponibles"><span>Cargar Servicios Disponibles</span></a></h1>
<p>Método para obtener los servicios disponibles para el cliente.</p>
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
<td>BTCASHManagement.CargarServiciosDisponibles</td>
<td>RBTPGC07</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Cargar Servicios Disponibles:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.CargarServiciosDisponibles> 
        <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
      </bts:BTCASHManagement.CargarServiciosDisponibles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
<p>'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarServiciosDisponibles=' \ 
-H 'Cache-Control: no-cache' \ 
-H 'Content-Type: application/json' \ 
-H 'Postman-Token: bf6451e8-330a-48c4-a537-af3b936653dd,c3f7702b-a97d-46c4-972f-b9b37d2a8027' \</p>
<p>-d '{<br>
&quot;Btinreq&quot;: {<br>
&quot;Device&quot;: &quot;001&quot;,<br>
&quot;Usuario&quot;: &quot;MINSTALADOR&quot;,<br>
&quot;Requerimiento&quot;: &quot;1&quot;,<br>
&quot;Canal&quot;: &quot;BTDIGITAL&quot;,
&quot;Token&quot;: &quot;1e39d33c824A8B5C60A82434&quot;
},
&quot;clienteUId&quot;: &quot;1&quot;
}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTCASHManagement.CargarServiciosDisponiblesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Device>001&lt;/Device> 
            &lt;Usuario>MINSTALADOR&lt;/Usuario> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Token>1e39d33c824A8B5C60A82434&lt;/Token> 
         &lt;/Btinreq> 
         &lt;sdtServicios> 
            &lt;sBTConvServicioCASH> 
               &lt;descServicio>Pagos por Planilla&lt;/descServicio> 
               &lt;tipoServicio>P&lt;/tipoServicio> 
               &lt;servicio>1&lt;/servicio> 
               &lt;idContrato>1&lt;/idContrato> 
            &lt;/sBTConvServicioCASH> 
         &lt;/sdtServicios> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Numero>7161&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
            &lt;Servicio>BTCASHManagement.CargarServiciosDisponibles&lt;/Servicio> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Fecha>2019-04-23&lt;/Fecha> 
            &lt;Hora>18:32:37&lt;/Hora> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
         &lt;/Btoutreq> 
      &lt;/BTCASHManagement.CargarServiciosDisponiblesResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
	"sdtServicios": {                   
        "sBTConvServicioCASH": [ 
			{ 
				"descServicio": "Pagos por Planilla",  
				"tipoServicio": "P",  
				"servicio": 1,  
				"idContrato": 1 
			} 
		] 
	}, 
	"Erroresnegocio": { 
		"BTErrorNegocio": []    
    }, 
<pre><code>&quot;Btoutreq&quot;: { 

  &quot;Numero&quot;: 7168, 
  &quot;Estado&quot;: &quot;OK&quot;, 
  &quot;Servicio&quot;: &quot;BTCASHManagement.CargarServiciosDisponibles&quot;, 
  &quot;Requerimiento&quot;: &quot;1&quot;, 
  &quot;Fecha&quot;: &quot;2019-04-24&quot;, 
  &quot;Hora&quot;: &quot;12:43:25&quot;, 
  &quot;Canal&quot;: &quot;BTDIGITAL&quot; 
 } 
</code></pre>
<p>}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtServicios | sBTConvServicioCASH | Lista de servicios del contrato. 

Los campos del tipo de dato estructurado sBTConvServicioCASH son los siguientes: 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
idContrato | Long | Identificador del contrato CASH. 
servicio | Short | Servicio CASH. 
descServicio | String | Descripcion de servicios. 
tipoServicio | String | Tipo de servicio. 

### Errores 

Código | Descripción 
--------- | ----------- 
1030705 | Cuenta cliente sin contrato vinculado. 
1030709 | Se requiere identificacion de cuenta cliente. 


 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


