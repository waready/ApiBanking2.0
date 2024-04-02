# Modificar Fecha de Abono 

Método para modificar la fecha del abono para el ahorro. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ModificarFechaDeAbono | RBTPG116 | Global 

> Ejemplo de invocación al método Modificar Fecha de Abono: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ModificarFechaDeAbono> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:ahorroUId>61</bts:ahorroUId> 
         <bts:diaIncremento>13</bts:diaIncremento> 
      </bts:BTAhorroProgramado.ModificarFechaDeAbono> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarFechaDeAbono' \ 
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
      "clienteUId": 81, 
      "ahorroUId": 61, 
      "diaIncremento": 13 
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
      <BTAhorroProgramado.ModificarFechaDeAbonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>382</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ModificarFechaDeAbono</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-04-30</Fecha> 
            <Hora>17:12:20</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ModificarFechaDeAbonoResponse> 
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
        "Numero": "406", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ModificarFechaDeAbono", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "13:24:23", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
ahorroUId | Long | Identificador único de operación de ahorro. 
diaIncremento | Int | Nuevo día de incremento. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del cliente. 
30002 | No se recibió el identificador del ahorro. 
30004 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
30005 | No se recuperó la operación del ahorro para el identificador: [Número de identificador]. 
30006 | El ahorro no pertenece al identificador del cliente: [Número de identificador]. 
40001 | No existe registro para el producto de ahorro seleccionado. 
40050 | El ahorro seleccionado no se encuentra habilitado para operar. 
40706 | Debe indicar día de incremento. 
40709 | El día de incremento debe ser un día hábil según el calendario. 

 
