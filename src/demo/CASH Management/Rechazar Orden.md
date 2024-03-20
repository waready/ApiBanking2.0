# Rechazar Orden 

Método para rechazar una orden determinada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCASHManagement.RechazarOrden | RBTPGC08R | Global 

> Ejemplo de invocación al método Rechazar Orden: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.RechazarOrden> 
         <bts:Btinreq> 
            <bts:Device>001</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1e39d33c824A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:ordenId>1417</bts:ordenId> 
      </bts:BTCASHManagement.RechazarOrden> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?RechazarOrden=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 06191f8d-106c-4488-a7b5-730f3b882c53,535c5b35-7b4f-48d0-b34c-c7d41e19aea6' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "ordenId": "1418" 
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
      <BTCASHManagement.RechazarOrdenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>001</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1e39d33c824A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>7191</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCASHManagement.RechazarOrden</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-04-25</Fecha> 
            <Hora>10:50:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.RechazarOrdenResponse> 
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
        "Numero": 7192, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.RechazarOrden", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-25", 
        "Hora": "10:53:19", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
ordenId | Long | Identificador de la orden. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
1030726 | No se encontro orden a rechazar. 
1030724 | El estado de la orden, no permite rechazar. 

 
