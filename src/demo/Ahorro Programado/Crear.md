# Crear 

Método para dar de alta un ahorro programado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.Crear | RBTPG118 | Global 

> Ejemplo de invocación al método Crear: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.Crear> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtAhorroProgramado> 
            <bts:abono>1000</bts:abono> 
            <bts:productoUId>41</bts:productoUId> 
            <bts:fechaMetaAhorro></bts:fechaMetaAhorro> 
            <bts:clienteUId>81</bts:clienteUId> 
            <bts:personaUId>2</bts:personaUId> 
            <bts:diaIncremento>9</bts:diaIncremento> 
            <bts:depositoInicial></bts:depositoInicial> 
            <bts:montoMetaAhorro></bts:montoMetaAhorro> 
            <bts:cuentaOrigenUId>21</bts:cuentaOrigenUId> 
            <bts:cuentaDestinoUId>21</bts:cuentaDestinoUId> 
            <bts:motivoAhorro></bts:motivoAhorro> 
            <bts:fechaInicioAhorro></bts:fechaInicioAhorro> 
            <bts:plazo>360</bts:plazo> 
            <bts:periodicidadIncremento>1</bts:periodicidadIncremento> 
         </bts:sdtAhorroProgramado> 
      </bts:BTAhorroProgramado.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Crear' \ 
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
	"sdtAhorroProgramado": { 
		"personaUId": 2, 
		"clienteUId": 81, 
		"productoUId": 41, 
		"cuentaOrigenUId":  21, 
		"cuentaDestinoUId": 21, 
		"motivoAhorro": "", 
		"montoMetaAhorro": 0, 
		"fechaMetaAhorro": "0001-01-01", 
		"fechaInicioAhorro": "0001-01-01", 
		"diaIncremento": 9, 
		"abono": 1000, 
		"depositoInicial": 0, 
		"periodicidadIncremento": 1, 
		"plazo": 360 
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
      <BTAhorroProgramado.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <ahorroUId>61</ahorroUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>378</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.Crear</Servicio> 
            <Fecha>2018-04-30</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:25:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.CrearResponse> 
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
    "ahorroUId": "102", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "397", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.Crear", 
        "Fecha": "2018-05-02", 
        "Requerimiento": "1", 
        "Hora": "18:40:30", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtAhorroProgramado | sBTAhorroProgramadoAlta | Datos de la solicitud de ahorro programado. 

Los campos del tipo de dato estructurado sBTAhorroProgramadoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
abono | Decimal | Monto de abono periódico. 
productoUId | Long | Identificador único de producto. 
fechaMetaAhorro | Date | Fecha máxima para el cumplimiento del ahorro. 
clienteUId | Long | Identificador único de cliente. 
personaUId | Long | Identificador único de persona. 
diaIncremento | Int | Día del mes en el cual se realizara el incremento [1-31]. 
depositoInicial | Decimal | Depósito inicial del ahorro. 
montoMetaAhorro | Decimal | Monto de la meta de ahorro. 
cuentaOrigenUId | Long | Identificador único de operación de la cuenta origen del ahorro. 
cuentaDestinoUId | Long | Identificador único de operación de la cuenta destino del ahorro. 
motivoAhorro | String | Motivo por el cual se desea ahorrar. 
fechaInicioAhorro | Date | Fecha de inicio del ahorro. 
plazo | Int | Plazo para la acreditación de interes del ahorro en días. 
periodicidadIncremento | Int | Periodicidad del incremento en meses. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
ahorroUId | Long | Identificador único de operación del ahorro programado. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la persona. 
30002 | No se recibió el identificador del cliente. 
30003 | No se recibió el identificador del producto. 
30004 | No se recibió el identificador de la cuenta de origen del ahorro. 
30005 | No se recibió el identificador de la cuenta de destino del ahorro. 
30006 | No se recibió el abono para el ahorro. 
30007 | No se recibió el día de abono para el ahorro. 
30008 | No se recuperó la persona para el identificador: [Número de identificador]. 
30009 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
30010 | No se recuperó la cuenta origen del ahorro para el identificador: [Número de identificador]. 
30011 | No se recuperó la cuenta destino del ahorro para el identificador: [Número de identificador]. 
30012 | No se recuperó el producto de ahorro para el identificador: [Número de identificador]. 
40001 | La Sucursal indicada es incorrecta. 
40004 | El plazo indicado es menor al mínimo permitido. 
40005 | El plazo indicado es mayor al máximo permitido. 
40006 | La cuota indicada es menor al mínimo permitido. 
40007 | La cuota indicada es mayor al máximo permitido.   
40008 | La cantidad de periodos de gracia indicado es menor al mínimo permitido. 
40009 | La cantidad de periodos de gracia indicado es mayor al máximo permitido. 
40010 | La cantidad máxima de renovaciones indicado es menor al mínimo permitido. 
40011 | La cantidad máxima de renovaciones indicado es mayor al máximo permitido. 
40012 | La periodicidad de incremento de ahorro ingresado es menor al mínimo permitido. 
40013 | La periodicidad de incremento de ahorro ingresado es mayor al máximo permitido. 
40014 | El intento de incremento ingresado es menor al mínimo permitido. 
40015 | El intento de incremento ingresado es mayor al máximo permitido. 
40016 | La tasa ingresada no puede ser nula. 
40018 | Se debe modificar la periodicidad o el plazo. 
40023 | El abono no puede ser menor al abono vigente. 
40040 | La Tasa indicada está fuera de tolerancia. 
40050 | El abono no debe superar el máximo permitido. 
40051 | El abono no debe ser inferior al minimo permitido. 
40707 | La fecha de inicio debe corresponder a un día hábil. 
40708 | La fecha de inicio no puede ser menor a la del día. 
40709 | El día de incremento debe ser un día hábil según el calendario. 
40710 | Debe indicar un plazo válido. 
40711 | No se ha ingresado el depósito inicial. 
40712 | La periodicidad de incremento no es válida para el plazo indicado. 
40721 | La fecha de la meta de ahorro no puede ser menor a la del día. 
40800 | Error de configuración: Solicitud de tasa interactiva. 
40950 | El depósito inicial es inferior al mínimo permitido (?) 
40951 | La fecha del primer incremento debe ser antes del [Fecha] 

 
