<template><div><h1 id="obtener-periodos-habilitados" tabindex="-1"><a class="header-anchor" href="#obtener-periodos-habilitados"><span>Obtener Periodos Habilitados</span></a></h1>
<p>Método para obtener un listado de periodos habilitados para los casos que el alta de ahorro programado se realice mediante selección de período como lista de valores.</p>
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
<td>BTAhorroProgramado.ObtenerPeriodosHabilitados</td>
<td>RBTPG419</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Periodos Habilitados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerPeriodosHabilitados> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:productoUId>41</bts:productoUId> 
      </bts:BTAhorroProgramado.ObtenerPeriodosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerPeriodosHabilitados' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
		"productoUId": 41 
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
      <BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPeriodos> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>1 - Meses</Descripcion> 
               <Valor>1</Valor> 
            </sdtPeriodo> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>2 - Meses</Descripcion> 
               <Valor>2</Valor> 
            </sdtPeriodo> 
            <sdtPeriodo> 
               <Tipo>M</Tipo> 
               <Descripcion>3 - Meses</Descripcion> 
               <Valor>3</Valor> 
            </sdtPeriodo> 
         </sdtPeriodos> 
         <Erroresnegocio></Erroresnegocio> 
		 <Btoutreq> 
            <Numero>370</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerPeriodosHabilitados</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-04-30</Fecha> 
            <Hora>11:21:10</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerPeriodosHabilitadosResponse> 
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
    "sdtPeriodos": { 
        "sBTPeriodo": [ 
            { 
                "Tipo": "M", 
                "Descripcion": "1 - Meses", 
                "Valor": "1" 
            }, 
            { 
                "Tipo": "M", 
                "Descripcion": "2 - Meses", 
                "Valor": "2" 
            }, 
            { 
                "Tipo": "M", 
                "Descripcion": "3 - Meses", 
                "Valor": "3" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "401", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerPeriodosHabilitados", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "11:10:49", 
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
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
<td>sdtPeriodos</td>
<td>sBTPeriodo</td>
<td>Listado de periodos habilitados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPeriodo son los siguientes:</p>
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
<td>Valor</td>
<td>Int</td>
<td>Período.</td>
</tr>
<tr>
<td>Tipo</td>
<td>String</td>
<td>Tipo de período (Diario: 'D', Mensual: 'M', Anual: 'A').</td>
</tr>
<tr>
<td>Descripcion</td>
<td>String</td>
<td>Descripción extendida del período.</td>
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
<td>No se recibió el identificador del producto.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó el producto de ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>Error de configuración: No se definio listado de periodos.</td>
</tr>
</tbody>
</table>
</div></template>


