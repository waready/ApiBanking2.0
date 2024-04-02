# Eliminar Documento Digital 

Método para eliminar un documento digital de un préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.EliminarDocumentoDigital | RBTPG174 | Global 

> Ejemplo de invocación al método Eliminar Documento Digital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.EliminarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>5744be79064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>121</bts:operacionUId> 
         <bts:documentoId>115</bts:documentoId> 
      </bts:BTPrestamos.EliminarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?EliminarDocumentoDigital' \ 
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
	"operacionUId":"121", 
    "documentoId":"123" 
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
      <BTPrestamos.EliminarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5744be79064A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>795</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.EliminarDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>16:29:16</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.EliminarDocumentoDigitalResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 838, 
        "Estado": "NEG_ERROR", 
        "Servicio": "BTPrestamos.EliminarDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-13", 
        "Hora": "12:23:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>   
### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
documentoId | Long | Identificador del documento asociado. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de instancia de documento digital. 
30003 | No se recibió el identificador de la operación. 
30421 | El registro no existe. 

 
