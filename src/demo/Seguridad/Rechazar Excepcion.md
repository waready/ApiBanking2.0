# Rechazar Excepcion 

Método para rechazar una excepción. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTSeguridad.RechazarExcepcion | RBTPG088 | Global 

> Ejemplo de invocación al método Rechazar Excepcion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTSeguridad.RechazarExcepcion> 
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:idExcepcion>1852</bts:idExcepcion> 
         <bts:usuario>BANTOTAL</bts:usuario> 
         <bts:contraseña>z0na#1357</bts:contraseña> 
      </bts:BTSeguridad.RechazarExcepcion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?AutorizarExcepcion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 08206ddb-aee6-e62e-eb5a-0eb81f95e87f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "idExcepcion": 1854, 
    "usuario": "BANTOTAL", 
    "contraseña": "z0na#1357" 
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
      <BTSeguridad.RechazarExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>ES</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dac8c7fdec4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>890</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTSeguridad.RechazarExcepcion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2017-12-20</Fecha> 
            <Hora>16:39:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTSeguridad.RechazarExcepcionResponse> 
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
        "Numero": "959", 
        "Estado": "OK", 
        "Servicio": "BTSeguridad.RechazarExcepcion", 
        "Fecha": "2017-12-22", 
        "Requerimiento": "", 
        "Hora": "10:58:58", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
idExcepcion | Int | Identificador de excepción. 
usuario | String | Usuario. 
contraseña | String | Contraseña. 
autoriza | String | Autoriza [Hidden: Valor fijo 'N' para este método]. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Excepción asignada a otro Usuario 
30011 | No se recibió el identificador de excepción. 
30012 | No se recibió Usuario. 

 
