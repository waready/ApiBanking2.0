# Obtener Tasa de Operación 

Método que devuelve la tasa de la operación junto con la fecha de vigencia. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrecios.ObtenerTasaOperacion | RBTPG318 | Global 

> Ejemplo de invocación al método Obtener Tasa de Operación con Fecha de Vigencia: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerTasaOperacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1600460797F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>1</bts:operacionUId> 
         <bts:fecha>2020-11-11</bts:fecha> 
         <bts:importe>100000</bts:importe> 
         <bts:plazo>360</bts:plazo> 
      </bts:BTPrecios.ObtenerTasaOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTasaOperacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "1600460797F955E77534D3E0", 
	  "bts:Device": "AC" 
	}, 
	"operacionUId": 10118, 
	"fecha": "2020-11-11", 
	"importe": 100000, 
	"plazo": 360 
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
      <BTPrecios.ObtenerTasaOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1600460797F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <tipoTasa>Efectiva Anual</tipoTasa> 
         <tasa>0.3</tasa> 
         <tasaMinima>0.3</tasaMinima> 
         <tasaMaxima>0.3</tasaMaxima> 
		 <fechaVigencia>2021-11-11</fechaVigencia>	  
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerTasaOperacion</Servicio> 
            <Fecha>2021-03-18</Fecha> 
            <Hora>14:13:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8063</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerTasaOperacionResponse> 
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
	  "Usuario": "BANTOTAL", 
	  "Token": "1600460797F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"tipoTasa": "Efectiva Anual", 
	"tasa": "0.3", 
	"tasaMinima": "0.3", 
	"tasaMaxima": "0.3", 
	"fechaVigencia": "2021-11-11", 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrecios.ObtenerTasaOperacion", 
	  "Fecha": "2021-03-18", 
	  "Hora": "14:13:11", 
	  "Requerimiento": "1", 
	  "Numero": "8063", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador de operación. 
fecha  | Date | Fecha de consulta. 
importe  | Long | Importe. 
plazo  | Int | Plazo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoTasa  | String | Tipo de tasa. 
tasa  | Double | Tasa. 
tasaMinima | Double | Tasa mínima. 
tasaMaxima | Double | Tasa máxima.  
fechaVigencia | Date | Fecha de vigencia 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar identificador de operación. 
30002 | Debe ingresar fecha. 
30003 | Debe ingresar importe. 
30004 | Debe ingresar plazo. 
40001 | No se recupero la operación para el identificador recibido. 
50001 | El registro no existe. 

 
