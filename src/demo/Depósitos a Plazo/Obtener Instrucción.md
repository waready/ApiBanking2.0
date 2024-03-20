# Obtener Instrucción 

Método para obtener una lista de las instrucciones de un depósito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositosAPlazo.ObtenerInstruccion | RBTPG109 | Global 

> Ejemplo de invocación al método Obtener Instrucción: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerInstruccion> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6c275823524A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:depositoUId>4</bts:depositoUId> 
      </bts:BTDepositosAPlazo.ObtenerInstruccion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerInstruccion=' \ 
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
   "clienteUId": 61, 
	"depositoUId": 4 
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
      <BTDepositosAPlazo.ObtenerInstruccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6c275823524A8B5C60A82434</Token> 
         </Btinreq> 
         <instruccionVencimiento> 
            <sBTInstruccion> 
               <descripcion>Cancelar y Acreditar al vto.</descripcion> 
               <operacionUId>2</operacionUId> 
               <idOperacionFmt>000000029_001</idOperacionFmt> 
               <producto> 
                  <productoUId>21</productoUId> 
                  <nombre>CUENTA CORRIENTE, int.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTInstruccion> 
         </instruccionVencimiento> 
         <instruccionAcreditacion> 
            <sBTInstruccion> 
               <descripcion>Acreditación</descripcion> 
               <operacionUId>2</operacionUId> 
               <idOperacionFmt>000000029_001</idOperacionFmt> 
               <producto> 
                  <productoUId>21</productoUId> 
                  <nombre>CUENTA CORRIENTE, int.</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
            </sBTInstruccion> 
         </instruccionAcreditacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>144</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerInstruccion</Servicio> 
            <Fecha>2018-03-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:07:39</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerInstruccionResponse> 
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
   "instruccionVencimiento": { 
      "sBTInstruccion": [ { 
         "descripcion": "Cancelar y Acreditar al vto.", 
         "operacionUId": 2, 
         "idOperacionFmt": "000000029_001", 
         "sucursal": "Casa Matriz", 
         "producto": [ { 
           "productoUId": 21, 
               "nombre": "CUENTA CORRIENTE, int.", 
               "moneda": "$", 
               "papel": "" 
            } 
         ] 
      } 
      ] 
   }, 
   "instruccionAcreditacion": { 
      "sBTInstruccion": [ { 
         "descripcion": "Acreditación", 
         "operacionUId": 2, 
         "idOperacionFmt": "000000029_001", 
         "sucursal": "Casa Matriz", 
         "producto": [ { 
               "productoUId": 21, 
               "nombre": "CUENTA CORRIENTE, int.", 
               "moneda": "$", 
               "papel": "" 
            } 
         ], 
      } 
      ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "144", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ObtenerInstruccion", 
        "Fecha": "2018-03-01", 
        "Requerimiento": "1", 
        "Hora": "11:07:39", 
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
depositoUId | Long | Identificador único de operación del depósito. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
instruccionVencimiento | sBTInstruccion | Datos de instrucción al vencimiento. 
instruccionAcreditacion | sBTInstruccion | Datos de instrucción de acreditación. 

Los campos del tipo de dato estructurado sBTInstruccion son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
descripcion | String | Descripción de la instrucción. 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
producto | sBTProducto | Datos de producto. 
sucursal | String | Nombre de la Sucursal de la operación. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del cliente. 
30002 | No se recibió el identificador de la operación del depósito. 
30003 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
30004 | No se recuperó la operación del depósito para el identificador: [Número de identificador]. 
30005 | La operación asociada al identificador: ? no pertenece a un depósito a plazo 
30006 | La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador]. 
30007 | No se encontró instrucción de acreditación para el depósito ingresado 
30008 | No se encontró código de instrucción. 
30009 | No se recuperó la operación de la instrucción para el identificador: [Número de identificador]. 
30012 | No se recuperó la sucursal de la cuenta. 
30015 | No se recuperó la sucursal de la cuenta. 
30016 | No se encontró instrucción de acreditación para el depósito ingresado. 
30017 | No se encontró código de instrucción. 
30018 | No se recuperó la operación de la instrucción para el identificador: [Número de identificador]. 
30021 | No se recuperó la sucursal de la cuenta. 

 
