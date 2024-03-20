# Detener Archivo 

Método para detener la realización de pagos o transferencias ya autorizadas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.DetenerArchivo | RBTPGC12 | Global 

> Ejemplo de invocación al método Detener Archivo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.DetenerArchivo> 
         <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:archivoId>77</bts:archivoId> 
      </bts:BTCASHManagement.DetenerArchivo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?DetenerArchivo=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: a3abeef5-c6e8-489a-a545-f8cd71ab0d0b,96462f7f-a32a-4d49-8f49-57e1403cfd0a' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "archivoId": "103" 
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
      <BTCASHManagement.DetenerArchivoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7171</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.DetenerArchivo</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-24</Fecha> 
            <Hora>15:12:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.DetenerArchivoResponse> 
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
        "Numero": 7172, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.DetenerArchivo", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "15:13:38", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
archivoId | Long | Identificador de archivo. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
1030711 | No se recuperó informacion para el identificador de archivo recibido. 
1030727 | Solo se pueden detener ordenes autorizadas. 
1030728 | No se recuperaron ordenes para el archivo recibido. 

 
