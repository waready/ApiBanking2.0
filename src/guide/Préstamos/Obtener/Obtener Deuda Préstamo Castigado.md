# Obtener Deuda Préstamo Castigado 

Método para obtener la deuda de un préstamo castigado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDeudaPrestamoCastigado | RBTPG080 | Global 

> Ejemplo de invocación al método Obtener Deuda Prestamo Castigado: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDeudaPrestamoCastigado> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>908433382F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10164</bts:operacionUId> 
      </bts:BTPrestamos.ObtenerDeudaPrestamoCastigado> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDeudaPrestamoCastigado=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AC", 
		"Usuario": "BANTOTAL", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "908433382F955E77534D3E02" 
	}, 
    "operacionUId": 10164 
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
      <BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>908433382F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPrestamoCastigado> 
            <interes>0.00</interes> 
            <interesSuspenso>0.00</interesSuspenso> 
            <mora>0.00</mora> 
            <moraSuspenso>0.00</moraSuspenso> 
            <seguros>0.00</seguros> 
            <saldoCapital>10456.01</saldoCapital> 
         </sdtPrestamoCastigado> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.ObtenerDeudaPrestamoCastigado</Servicio> 
            <Fecha>2020-04-13</Fecha> 
            <Hora>17:33:24</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7295</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDeudaPrestamoCastigadoResponse> 
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
    "sdtPrestamoCastigado": { 
        "interes": 0.00,  
        "interesSuspenso": 0.00,  
        "mora": 0.00,  
        "moraSuspenso": 0.00,  
        "seguros": 0.00,  
        "saldoCapital": 10456.01,  
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "951", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerDeudaPrestamoCastigado", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "18:34:34", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación simulada. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamoCastigado | sBTPrestamoCastigado | Datos del préstamo. 

Los campos del tipo de dato estructurado sBTPrestamoCastigado son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
interes | Double | Interés generado. 
interesSuspenso | Double | Interés suspenso. 
mora | Double | Mora generada. 
moraSuspenso | Double | Mora suspenso. 
seguros | Double | Seguros. 
saldoCapital | Double | Saldo capital del préstamo. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el identificador: [Número de identificador]. 

 
