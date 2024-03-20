# Contratar Simulación 

Método para crear un ahorro programado a partir de una simulación. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ContratarSimulacion | RBTPG445 | Global 

> Ejemplo de invocación al método Contratar Simulación: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ContratarSimulacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>GL</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtDatos> 
            <bts:simulacionId>741</bts:simulacionId> 
            <bts:cuentaDestinoUid>661</bts:cuentaDestinoUid> 
            <bts:motivoAhorro>Prueba</bts:motivoAhorro> 
            <bts:cuentaOrigenUid>661</bts:cuentaOrigenUid> 
            <bts:clienteUid>61</bts:clienteUid> 
         </bts:sdtDatos> 
      </bts:BTAhorroProgramado.ContratarSimulacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ContratarSimulacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Device": "GL", 
          "Requerimiento": 1, 
          "Token": "01D45E9964612A4C8CCB1055" 
        }, 
        "sdtDatos": { 
          "simulacionId": 741, 
          "cuentaDestinoUid": 661, 
          "motivoAhorro": "Prueba", 
          "cuentaOrigenUid": 661, 
          "clienteUid": 61 
        } 
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
      <BTAhorroProgramado.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>MINSTALADOR</Usuario> 
            <Device>GL</Device> 
            <Requerimiento>1</Requerimiento> 
            <Token>01D45E9964612A4C8CCB1055</Token> 
         </Btinreq> 
         <ahorroUId>1102</ahorroUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>17:23:23</Hora> 
            <Numero>11097</Numero> 
            <Servicio>BTAhorroProgramado.ContratarSimulacion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ContratarSimulacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Usuario": "MINSTALADOR", 
        "Device": "GL", 
        "Requerimiento": 1, 
        "Token": "01D45E9964612A4C8CCB1055" 
    }, 
    "ahorroUId": 1102, 
    "Erroresnegocio": "", 
    "Btoutreq": { 
        "Estado": "OK", 
        "Fecha": "2022-11-29", 
        "Hora": "17:23:23", 
        "Numero": 11097, 
        "Servicio": "BTAhorroProgramado.ContratarSimulacion", 
        "Requerimiento": 1, 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatos | sBTCrearSolicitudAhorro | Datos de la solicitud de ahorro. 

Los campos del tipo de dato estructurado sBTCrearSolicitudAhorro son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUid | Long | Identificador de cliente. 
simulacionId | Long | Identificador de simulación. 
cuentaOrigenUid | Long | Identificador de cuenta origen. 
cuentaDestinoUid | Long | Identificador de cuenta destino. 
motivoAhorro | String | Motivo de ahorro. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
ahorroUId | Long | Identificador de ahorro. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la simulación. 
30002 | No se recibió el identificador del cliente. 
30009 | No se recuperó la cuenta para el identificador de cliente: [Número de Identificador]. 
30010 | No se recuperó la cuenta origen del ahorro para el identificador: [Número de Identificador]. 
30011 | No se recuperó la cuenta destino del ahorro para el identificador: [Número de Identificador]. 

 
