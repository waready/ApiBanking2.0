#  Obtener Tasa de Precancelación 

Método para obtener la tasa de precancelación de un depósito a plazo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositosAPlazo.ObtenerTasaPrecancelacion | RBTPG292 | Global 

> Ejemplo de invocación al método Obtener Tasa de Precancelacion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerTasaPrecancelacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>170320211539200000477790</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>2</bts:operacionUId> 
         <bts:fecha>2020-10-10</bts:fecha> 
      </bts:BTDepositosAPlazo.ObtenerTasaPrecancelacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo_v1?ObtenerTasaPrecancelacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
  	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "INSTALADOR", 
	  "bts:Token": "170320211539200000477790", 
	  "bts:Device": "AC" 
	}, 
	"operacionUId": 2, 
	"fecha": 2020-10-10 
  } 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTDepositosAPlazo.ObtenerTasaPrecancelacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>170320211539200000477790</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <tasa>10.00</tasa> 
         <tipoTasa>Efectiva</tipoTasa> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ObtenerTasaPrecancelacion</Servicio> 
            <Fecha>2021-03-17</Fecha> 
            <Hora>15:44:26</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10689</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerTasaPrecancelacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "170320211539200000477790", 
	  "Device": "AC" 
	}, 
	"apellidoMatrimonio": { 
	  "-self-closing": "true" 
	}, 
	"tipoTasa":Efectiva, 
	"tasa":10.00, 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTDepositosAPlazo.ObtenerTasaPrecancelacion", 
	  "Fecha": "2021-03-17", 
	  "Hora": "15:44:26", 
	  "Requerimiento": "1", 
	  "Numero": "10689", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador de operación del depósito a plazo.  

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tasa | Double | Tasa de precancelación. 
tipoTasa | String | Tipo de tasa. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 

 
