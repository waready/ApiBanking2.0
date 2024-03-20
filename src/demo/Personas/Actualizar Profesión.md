# Actualizar Profesión 

Método para actualizar la profesión de una persona física. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ActualizarProfesion | RBTPG328 | Global 

> Ejemplo de invocación al método Actualizar Profesión: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarProfesion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>761768101CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>10003</bts:personaUId> 
         <bts:profesionId>1000</bts:profesionId> 
         <bts:fechaInicioProfesion>2012-03-01</bts:fechaInicioProfesion> 
      </bts:BTPersonas.ActualizarProfesion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarProfesion=' \ 
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
	"profesionId": 1000, 
	"fechaInicioProfesion": 2012-03-01 
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
      <BTPersonas.ActualizarProfesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
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
            <Servicio>BTPersonas.ActualizarProfesion</Servicio> 
            <Fecha>2021-02-05</Fecha> 
            <Hora>13:37:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7984</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ActualizarProfesionResponse> 
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
	  "Servicio": "BTPersonas.ActualizarProfesion", 
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
profesionId | Short | Identificador de profesión. 
fechaInicioProfesion | Date | Fecha de inicio de la profesión. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de persona. 
30002 | El identificador no corresponde a una persona física. 
30003 | No se recibió fecha de inicio de profesión. 
30004 | No se recibió el identificador de profesión. 

 
