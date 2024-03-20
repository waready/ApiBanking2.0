# Modificar Límite 

Método para modificar el límite de una tarjeta de débito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ModificarLimite | RBTPG148 | Global 

> Ejemplo de invocación al método Modificar Límite: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ModificarLimite> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1820366692F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000002050</bts:tarjetaUId> 
         <bts:codigoDeLimiteId>1</bts:codigoDeLimiteId> 
      </bts:BTTarjetasDeDebito.ModificarLimite> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ModificarLimite' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "1820366692F955E77534D3E0", 
	  "bts:Device": "AC" 
	}, 
	"bts:tarjetaUId": "2000002050", 
	"bts:codigoDeLimiteId": "1" 
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
      <BTTarjetasDeDebito.ModificarLimiteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1820366692F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ModificarLimite</Servicio> 
            <Fecha>2020-11-13</Fecha> 
            <Hora>16:37:24</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7917</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ModificarLimiteResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTTarjetasDeDebito.ModificarLimite", 
	  "Fecha": "2020-11-13", 
	  "Hora": "16:37:24", 
	  "Requerimiento": "1", 
	  "Numero": "7917", 
	  "Estado": "OK" 
	} 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjetaUId | Long | Identificador de la tarjeta de débito. 
codigoDeLimiteId | Short | Código de límite. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de tarjeta. 
30002 | No se recibió código de límite 
40001 | No existe el tipo de límite 
40002 | No existe la tarjeta 
40014 | No se pudo confirmar la funcionalidad. 
40001 | No existe la tarjeta. 

 
