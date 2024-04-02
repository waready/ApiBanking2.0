# Asociar Documento Digital 

Método para asociar documento digital a la operación recibida. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.AsociarDocumentoDigital | RBTPG202 | Global 

### Configuración Backend 

1) Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011. 

> Ejemplo de invocación al método Asociar Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.AsociarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>1355f5da724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
         <bts:tipoDocumentoId>3</bts:tipoDocumentoId> 
         <bts:nombre>Prueba Asociar Contrato</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
      </bts:BTCuentasVista.AsociarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?AsociarDocumentoDigital=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId":"21", 
    "tipoDocumentoId":"3", 
    "nombre":"Prueba Asociar Contrato", 
    "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
    "fechaEmision":"2010-10-10", 
    "fechaVencimiento": "2020-10-10" 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCuentasVista.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1355f5da724A8B5C60A82434</Token> 
         </Btinreq> 
         <documentoId>87</documentoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>3089</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.AsociarDocumentoDigital</Servicio> 
            <Fecha>2018-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:59:33</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.AsociarDocumentoDigitalResponse> 
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
    "documentoId": 87, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 3089, 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.AsociarDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-20", 
        "Hora": "17:59:33", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
tipoDocumentoId | Long | Identificador del tipo de documento digital. 
nombre | String | Nombre del documento. 
archivoCodificado | String | Archivo a asociar codificado en Base 64. 
fechaEmision | Date | Fecha de emisión del documento (en caso que corresponda). 
fechaVencimiento | Date | Fecha de emisión del documento (en caso que corresponda). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
documentoId | Long | Identificador del documento asociado. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de tipo de documento digital. 
30002 | No se recibió nombre. 
30003 | No se recibió el identificador de la operación. 
30004 | No se recibió archivo codificado. 
30021 | No se recupero el identificador para la operación recibida. 
30051 | Debe ingresar la fecha de emisión del documento. 
30052 | Debe ingresar la fecha de vencimiento del documento. 
30531 | Ya existe el tipo de documento asociado a la Operación. 
31030 | Ocurrio un error al recibir el archivo, puede que el mismo este corrupto. 
31023 | Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío. 
31024 | Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora. 

 
