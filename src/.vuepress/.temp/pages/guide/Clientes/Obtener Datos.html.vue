<template><div><h1 id="obtener-datos" tabindex="-1"><a class="header-anchor" href="#obtener-datos"><span>Obtener Datos</span></a></h1>
<p>Método para obtener datos de un cliente.</p>
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
<td>BTClientes.ObtenerDatos</td>
<td>RBTPG441</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Datos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCliente.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>8A7B3C4E6F4A275BC67245E5</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUID>10010</bts:clienteUID> 
      </bts:BTCliente.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
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
		"clienteUID": 10010 
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
      <BTPrueba.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>0</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>50F9EC89DBFA778E70454A66</Token> 
            <Device>papa</Device> 
         </Btinreq> 
         <sdtDatosCuentaCliente> 
            <empresaId>1</empresaId> 
            <cuentaBT>27</cuentaBT> 
            <fechaAlta>2015-12-23</fechaAlta> 
            <nombre>PRANKA ERIKA</nombre> 
            <sucursalId>1000</sucursalId> 
            <sucursal>Casa Matriz</sucursal> 
            <asesorId>0</asesorId> 
            <asesor/> 
            <ejecutivoId>1</ejecutivoId> 
            <ejecutivo>Instalador</ejecutivo> 
            <clasificacionInternaId>43</clasificacionInternaId> 
            <clasificacionInterna>Venta. Art. x menor Ferreteria</clasificacionInterna> 
            <fechaVtoClasificacion>2018-12-14</fechaVtoClasificacion> 
            <segmentoId>1</segmentoId> 
            <segmento>Independiente</segmento> 
            <actividadLaboralId>14100</actividadLaboralId> 
            <actividadLaboral>14100 Extracción de piedra, arena y arcilla</actividadLaboral> 
            <sectorId>1</sectorId> 
            <sector>Privado no Financiero</sector> 
            <residente>S</residente> 
            <empleado>N</empleado> 
            <proveedor>N</proveedor> 
            <retenerCorrespondencia>N</retenerCorrespondencia> 
            <correoElectronico>ZEPORAYTE@HOTMAIL.COM.UY</correoElectronico> 
            <estado>Inhabilitada</estado> 
            <estadoId>3</estadoId> 
         </sdtDatosCuentaCliente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrueba.ObtenerDatos</Servicio> 
            <Fecha>2022-11-15</Fecha> 
            <Hora>14:04:48</Hora> 
            <Requerimiento>0</Requerimiento> 
            <Numero>438</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrueba.ObtenerDatosResponse> 
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
    "sdtDatosCuentaCliente": { 
          "empresaId": 1, 
          "cuentaBT": 27, 
          "fechaAlta": "2015-12-23", 
          "nombre": "PRANKA ERIKA", 
          "sucursalId": 1000, 
          "sucursal": "Casa Matriz", 
          "asesorId": 0, 
          "asesor": "", 
          "ejecutivoId": 1, 
          "ejecutivo": "Instalador", 
          "clasificacionInternaId": 43, 
          "clasificacionInterna": "Venta. Art. x menor Ferreteria", 
          "fechaVtoClasificacion": "2018-12-14", 
          "segmentoId": 1, 
          "segmento": "Independiente", 
          "actividadLaboralId": 14100, 
          "actividadLaboral": "14100 Extracción de piedra, arena y arcilla", 
          "sectorId": 1, 
          "sector": "Privado no Financiero", 
          "residente": "S", 
          "empleado": "N", 
          "proveedor": "N", 
          "retenerCorrespondencia": "N", 
          "correoElectronico": "ZEPORAYTE@HOTMAIL.COM.UY", 
          "estado": "Inhabilitada", 
          "estadoId": 3 
        }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "401", 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerDatos", 
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
<td>sdtDatosCuentaCliente</td>
<td>sbtDatosCuentaCliente</td>
<td>Datos de la cuenta cliente.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sbtDatosCuentaCliente son los siguientes:</p>
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
<td>empresaId</td>
<td>Int</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>cuentaBT</td>
<td>Int</td>
<td>Cuenta Bantotal.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha del alta.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del cliente.</td>
</tr>
<tr>
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de la sucursal.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>asesorId</td>
<td>Int</td>
<td>Identificador del asesor.</td>
</tr>
<tr>
<td>asesor</td>
<td>String</td>
<td>Nombre del asesor.</td>
</tr>
<tr>
<td>ejecutivoId</td>
<td>Int</td>
<td>Identificador del ejecutivo.</td>
</tr>
<tr>
<td>ejecutivo</td>
<td>String</td>
<td>Nombre del ejecutivo.</td>
</tr>
<tr>
<td>clasificacionInternaId</td>
<td>Int</td>
<td>Identificador de clasificación interna.</td>
</tr>
<tr>
<td>clasificacionInterna</td>
<td>String</td>
<td>Descripción de clasificación interna.</td>
</tr>
<tr>
<td>fechaVtoClasificacion</td>
<td>Date</td>
<td>Fecha de vencimiento de clasificación.</td>
</tr>
<tr>
<td>segmentoId</td>
<td>Int</td>
<td>Identificador de segmento.</td>
</tr>
<tr>
<td>segmento</td>
<td>String</td>
<td>Descripción del segmento.</td>
</tr>
<tr>
<td>actividadLaboralId</td>
<td>Int</td>
<td>Identificador de la actividad laboral.</td>
</tr>
<tr>
<td>actividadLaboral</td>
<td>String</td>
<td>Descripción de la actividad laboral.</td>
</tr>
<tr>
<td>sectorId</td>
<td>Int</td>
<td>Identificador de sector.</td>
</tr>
<tr>
<td>sector</td>
<td>String</td>
<td>Descripción del sector.</td>
</tr>
<tr>
<td>residente</td>
<td>String</td>
<td>¿Es residente? (S/N).</td>
</tr>
<tr>
<td>empleado</td>
<td>String</td>
<td>¿Es empleado de la institución? (S/N).</td>
</tr>
<tr>
<td>proveedor</td>
<td>String</td>
<td>¿Es proveedor? (S/N).</td>
</tr>
<tr>
<td>retenerCorrespondencia</td>
<td>String</td>
<td>¿Retiene correspondencia? (S/N).</td>
</tr>
<tr>
<td>correoElectronico</td>
<td>String</td>
<td>Correo electrónico.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripcion de estado.</td>
</tr>
<tr>
<td>estadoId</td>
<td>Int</td>
<td>Identificador de estado.</td>
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
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>No existe titular representativo para la cuenta.</td>
</tr>
<tr>
<td>40099</td>
<td>La cuenta fue dada de baja.</td>
</tr>
</tbody>
</table>
</div></template>


