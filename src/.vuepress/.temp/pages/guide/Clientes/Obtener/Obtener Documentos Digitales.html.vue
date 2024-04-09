<template><div><h1 id="obtener-documentos-digitales" tabindex="-1"><a class="header-anchor" href="#obtener-documentos-digitales"><span>Obtener Documentos Digitales</span></a></h1>
<p>Dados los datos del cliente el método devolverá un listado de los documento digitales asociados al mismo.</p>
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
<td>BTClientes.ObtenerDocumentosDigitales</td>
<td>RBTPG181</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documentos Digitales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerDocumentosDigitales> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
      </bts:BTClientes.ObtenerDocumentosDigitales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDocumentosDigitales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId": "61", 
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
      <BTClientes.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosDigitales> 
            <sBTDocumentoDigital> 
               <Titulo>Balnace</Titulo> 
               <FechaActualizacion>2017-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Balance</TipoDocumentoDigital> 
               <Instancia>56</Instancia> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>C.I</Titulo> 
               <FechaActualizacion>2007-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Cédula de Identidad Vigente o Comprobante</TipoDocumentoDigital> 
               <Instancia>58</Instancia> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>C.I 2</Titulo> 
               <FechaActualizacion>2017-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Cédula de Identidad Vigente o Comprobante</TipoDocumentoDigital> 
               <Instancia>59</Instancia> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>Estado</Titulo> 
               <FechaActualizacion>2017-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Estados financieros</TipoDocumentoDigital> 
               <Instancia>60</Instancia> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>Estado 2</Titulo> 
               <FechaActualizacion>2017-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Estados financieros</TipoDocumentoDigital> 
               <Instancia>61</Instancia> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>Solicitud</Titulo> 
               <FechaActualizacion>2017-03-24</FechaActualizacion> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Solicitud de Préstamo - Persona Jurídica</TipoDocumentoDigital> 
               <Instancia>62</Instancia> 
            </sBTDocumentoDigital> 
         </sdtDocumentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>792</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerDocumentosDigitales</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>16:27:59</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerDocumentosDigitalesResponse> 
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
    "sdtDocumentosDigitales": { 
        "sBTDocumentoDigital": [ 
            { 
                "Titulo": "Balnace", 
                "FechaActualizacion": "2017-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Balance", 
                "Instancia": 56 
            }, 
            { 
                "Titulo": "C.I", 
                "FechaActualizacion": "2007-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Cédula de Identidad Vigente o Comprobante", 
                "Instancia": 58 
            }, 
            { 
                "Titulo": "C.I 2", 
                "FechaActualizacion": "2017-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Cédula de Identidad Vigente o Comprobante", 
                "Instancia": 59 
            }, 
            { 
                "Titulo": "Estado", 
                "FechaActualizacion": "2017-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Estados financieros", 
                "Instancia": 60 
            }, 
            { 
                "Titulo": "Estado 2", 
                "FechaActualizacion": "2017-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Estados financieros", 
                "Instancia": 61 
            }, 
            { 
                "Titulo": "Solicitud", 
                "FechaActualizacion": "2017-03-24", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Solicitud de Préstamo - Persona Jurídica", 
                "Instancia": 62 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 794, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerDocumentosDigitales", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "16:29:06", 
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
<td>sdtDocumentosDigitales</td>
<td>sBTDocumentoDigital</td>
<td>Listado de documentos digitales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes:</p>
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
<td>Titulo</td>
<td>String</td>
<td>Titulo del documento digital.</td>
</tr>
<tr>
<td>FechaActualizacion</td>
<td>Date</td>
<td>Fecha de actualizacion del documento digital.</td>
</tr>
<tr>
<td>FechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del documento digital.</td>
</tr>
<tr>
<td>TipoDocumentoDigital</td>
<td>String</td>
<td>Tipo del documento digital.</td>
</tr>
<tr>
<td>Instancia</td>
<td>Long</td>
<td>Instancia del documento digital.</td>
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
<td>No se recibió el identificador de la cuenta.</td>
</tr>
<tr>
<td>30024</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30033</td>
<td>El cliente indicado no existe.</td>
</tr>
</tbody>
</table>
</div></template>


