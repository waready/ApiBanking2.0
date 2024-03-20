<template><div><h1 id="obtener-periodos-habilitados" tabindex="-1"><a class="header-anchor" href="#obtener-periodos-habilitados"><span>Obtener Periodos Habilitados</span></a></h1>
<p>Servicio que obtiene los periodos habilitados de un deposito a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerPeriodosHabilitados</td>
<td>RBTPG492</td>
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
      <bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token> 
         </bts:Btinreq> 
         <bts:productoUId>184</bts:productoUId> 
      </bts:BTDepositosAPlazo.ObtenerPeriodosHabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerPeriodosHabilitados=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "productoUId": 184 
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
      <BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>45A5647518BC5FBB73003EA9</Token> 
         </Btinreq> 
         <sdtDatosExtendidos></sdtDatosExtendidos> 
         <sdtPeriodos> 
            <sBTPeriodoHabilitado> 
               <descripcion>Semanal</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>7</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Quincenal</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>14</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Mensual</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>30</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Bimestral</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>60</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Trimestral</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>90</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Cuatrimestral</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>120</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Quintumestral</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>150</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Semestral</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>180</periodo> 
            </sBTPeriodoHabilitado> 
            <sBTPeriodoHabilitado> 
               <descripcion>Anual</descripcion> 
               <datosExtendidos></datosExtendidos> 
               <periodo>360</periodo> 
            </sBTPeriodoHabilitado> 
         </sdtPeriodos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16830</Numero> 
            <Servicio>BTDepositosAPlazo.ObtenerPeriodosHabilitados</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-25</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>18:12:09</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerPeriodosHabilitadosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtDatosExtendidos": "", 
    "sdtPeriodos": { 
        "sBTPeriodoHabilitado": [ 
        { 
            "descripcion": "Semanal", 
            "datosExtendidos": "", 
            "periodo": 7 
        }, 
        { 
            "descripcion": "Quincenal", 
            "datosExtendidos": "", 
            "periodo": 14 
        }, 
        { 
            "descripcion": "Mensual", 
            "datosExtendidos": "", 
            "periodo": 30 
        }, 
        { 
            "descripcion": "Bimestral", 
            "datosExtendidos": "", 
            "periodo": 60 
        }, 
        { 
            "descripcion": "Trimestral", 
            "datosExtendidos": "", 
            "periodo": 90 
        }, 
        { 
            "descripcion": "Cuatrimestral", 
            "datosExtendidos": "", 
            "periodo": 120 
        }, 
        { 
            "descripcion": "Quintumestral", 
            "datosExtendidos": "", 
            "periodo": 150 
        }, 
        { 
            "descripcion": "Semestral", 
            "datosExtendidos": "", 
            "periodo": 180 
        }, 
        { 
            "descripcion": "Anual", 
            "datosExtendidos": "", 
            "periodo": 360 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "145", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ObtenerPeriodosHabilitados", 
        "Fecha": "2023-03-01", 
        "Requerimiento": "1", 
        "Hora": "12:04:07", 
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
<td>Identificador único del producto.</td>
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
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
<tr>
<td>sdtPeriodos</td>
<td>sBTPeriodoHabilitado</td>
<td>Identificador único del producto.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPeriodoHabilitado son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>datosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
<tr>
<td>periodo</td>
<td>Int</td>
<td>Periodo.</td>
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
<td>No se recibió el identificador del Producto.</td>
</tr>
<tr>
<td>30006</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>El producto no corresponde a un producto de depósito a plazo.</td>
</tr>
</tbody>
</table>
</div></template>


