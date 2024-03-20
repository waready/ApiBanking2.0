# Obtener Comisión Chequera 

Método para devolver el importe de comisión que se cobrará, dada una cuenta y un tipo de chequera. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasCorrientes.ObtenerComisionChequera | RBTPG247 | Global 

> Ejemplo de invocación al servicio de Obtener Comisión Chequera: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerComisionChequera> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>64b082f7a84A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:operacionUId>601</bts:operacionUId> 
         <bts:tipoChequeraId>2</bts:tipoChequeraId> 
         <bts:cantidadChequeras>1</bts:cantidadChequeras> 
      </bts:BTCuentasCorrientes.ObtenerComisionChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerComisionChequera \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
      "operacionUId": "601", 
      "tipoChequeraId": "2", 
      "cantidadChequeras": "1" 
    } 
  } 
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
      <BTCuentasCorrientes.ObtenerComisionChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>64b082f7a84A8B5C60A82434</Token> 
         </Btinreq> 
         <moneda>$</moneda> 
         <importeComision>5000.0</importeComision> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>420</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerComisionChequera</Servicio> 
            <Fecha>2019-08-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:19:03</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerComisionChequeraResponse> 
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
      "moneda": "$", 
      "importeComision": "5000.0", 
      "Btoutreq": { 
        "Numero": "420", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerComisionChequera", 
        "Fecha": "2019-08-09", 
        "Requerimiento": "1", 
        "Hora": "10:19:03", 
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
tipoChequeraId | Short | Identificador de tipo de chequera. 
cantidadChequeras | Int | Cantidad de chequeras. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
moneda | String | Moneda de la cuenta.  
comision | Double | Importe de comisión a cobrar. 
impuestos | Double | Importe de impuestos a cobrar. 

### Errores 
Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de operación. 
30002 | No se recibió un tipo de chequera. 
40001 | El tipo de chequera indicado no cobra comisión. 
40002 | El código de comisión asignado al tipo de chequera no existe. 
40003 | El tipo de chequera indicado no existe. 

 
