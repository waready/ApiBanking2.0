# Bloquear Saldo 

Método para realizar un bloqueo de saldo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.BloquearSaldo | RBTPG090 | Global 

> Ejemplo de invocación al método Bloquear Saldo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.BloquearSaldo> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>3</bts:operacionUId> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:importe>5</bts:importe> 
         <bts:fechaVencimiento>2018-05-14</bts:fechaVencimiento> 
         <bts:motivo>Motivo Bloqueo 01</bts:motivo> 
      </bts:BTCuentasVista.BloquearSaldo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?BloquearSaldo=' \ 
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
   "operacionUId": 3, 
	"clienteUId": 61, 
	"importe": 10, 
	"fechaVencimiento": "2018-05-14", 
	"Motivo": "Motivo Bloqueo 02"	 
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
      <BTCuentasVista.BloquearSaldoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b1848faff14A8B5C60A82434</Token> 
         </Btinreq> 
         <idBloqueo>18</idBloqueo> 
         <movimientoUId>4</movimientoUId> 
         <saldo>4924.0</saldo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>194</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.BloquearSaldo</Servicio> 
            <Fecha>2018-05-08</Fecha> 
            <Requerimiento>3</Requerimiento> 
            <Hora>14:59:44</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.BloquearSaldoResponse> 
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
    "idBloqueo": "19", 
    "movimientoUId": "5", 
    "saldo": "4913.0", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "200", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.BloquearSaldo", 
        "Fecha": "2018-05-08", 
        "Requerimiento": "2", 
        "Hora": "15:16:17", 
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
clienteUId | Long | Identificador único de cliente. 
importe | Long | Importe a bloquear. 
fechaVencimiento | Date | Fecha vencimiento de bloqueo. 
motivo | String | Motivo del bloqueo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
idBloqueo | Long | Identificador de bloqueo. 
movimientoUId | Long | Identificador único de movimiento. 
saldo | Double | Saldo disponioble de la operación. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la Operación a bloquear. 
30002 | No se encontró el Id de Operación para la Cuenta Vista a bloquear. 
30003 | No se recibió el identificador del Cliente. 
30004 | No se encontró el Id del Cliente. 
30005 | La Cuenta Vista a bloquear no pertence al Cliente. 
30100 | Error en la contabilización. 

 
