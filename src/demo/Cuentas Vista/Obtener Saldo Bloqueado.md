# Obtener Saldo Bloqueado 

Método para obtener el total de saldo bloqueado de una cuenta vista. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ObtenerSaldoBloqueado | RBTPG141 | Global 

> Ejemplo de invocación al método Obtener Saldo Bloqueado: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerSaldoBloqueado> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>3</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerSaldoBloqueado> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerSaldoBloqueado=' \ 
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
    "operacionUId": 3 
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
      <BTCuentasVista.ObtenerSaldoBloqueadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b1848faff14A8B5C60A82434</Token> 
         </Btinreq> 
         <saldoBloqueado>1487.0</saldoBloqueado> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>219</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerSaldoBloqueado</Servicio> 
            <Requerimiento>3</Requerimiento> 
            <Fecha>2018-05-08</Fecha> 
            <Hora>15:56:21</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerSaldoBloqueadoResponse> 
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
    "saldoBloqueado": "1487.0", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "220", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerSaldoBloqueado", 
        "Requerimiento": "2", 
        "Fecha": "2018-05-08", 
        "Hora": "15:58:32", 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
saldoBloqueado | Double | Total de saldo bloqueado. 

### Errores 

Código | Descripción 
--------- | ----------- 
30002 | No se encontró el Id de Operación para la Cuenta Vista Bloqueada. 

 
