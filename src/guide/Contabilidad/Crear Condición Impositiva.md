# Crear Condición Impositiva 

Método para dar de alta una condición impositiva para una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.CrearCondicionImpositiva | RBTPG287 | Global 

> Ejemplo de invocación al método Crear Condicion Impositiva: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.CrearCondicionImpositiva> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>761768101CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>10003</bts:personaUId> 
         <bts:codigoImpuesto>1</bts:codigoImpuesto> 
         <bts:codigoCondicion>2</bts:codigoCondicion> 
      </bts:BTContabilidad.CrearCondicionImpositiva> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?CrearCondicionImpositiva=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"personaUId": 10003, 
	"codigoImpuesto": 1, 
	"codigoCondicion": 2 
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
      <BTContabilidad.CrearCondicionImpositivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>761768101CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.CrearCondicionImpositiva</Servicio> 
            <Fecha>2021-02-05</Fecha> 
            <Hora>13:37:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7984</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTContabilidad.CrearCondicionImpositivaResponse> 
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
	  "Token": "761768101CD285A89A23FBEE", 
	  "Device": "GP" 
	}, 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTContabilidad.CrearCondicionImpositiva", 
	  "Fecha": "2021-02-05", 
	  "Hora": "13:37:57", 
	  "Requerimiento": "1", 
	  "Numero": "7984", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
codigoImpuesto | Short | Código de impuesto. 
codigoCondicion | Short | Código de condición. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona. 

 
