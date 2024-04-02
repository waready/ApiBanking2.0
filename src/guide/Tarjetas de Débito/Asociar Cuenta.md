#  Asociar Cuenta 

Método para asociar una cuenta vista a una tarjeta de débito dada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.AsociarCuenta | RBTPG377 | Global 

 > Ejemplo de invocación al servicio Asociar Cuenta (V2R2): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.AsociarCuenta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1080548031CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10</bts:operacionUId> 
         <bts:tarjetaUId>1</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.AsociarCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 

    "operacionUId":"10", 
    "tarjetaUId"  :"1" 
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
      <BTTarjetasDeDebito.AsociarCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1080548031CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.AsociarCuenta</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>14:27:12</Hora> 
            <Requerimiento/> 
            <Numero>8451</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.AsociarCuentaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.AsociarCuenta", 
        "Fecha": "2021-10-29", 
        "Hora": "13:37:58", 
        "Requerimiento": "", 
        "Numero": 8449, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

> Ejemplo de invocación al servicio Asociar Cuenta (V2R3): 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.AsociarCuenta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1080548031CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10</bts:operacionUId> 
         <bts:tipoDeCuenta>1</bts:tipoDeCuenta> 
         <bts:tarjetaUId>1</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.AsociarCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 

    "operacionUId":"10", 
    "tipoDeCuenta":"1", 
    "tarjetaUId"  :"1" 
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
      <BTTarjetasDeDebito.AsociarCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1080548031CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.AsociarCuenta</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>14:27:12</Hora> 
            <Requerimiento/> 
            <Numero>8451</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.AsociarCuentaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.AsociarCuenta", 
        "Fecha": "2021-10-29", 
        "Hora": "13:37:58", 
        "Requerimiento": "", 
        "Numero": 8449, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Versión V2R2 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
tarjetaUId  | Long | Identificador único de tarjeta de débito. 

### Datos de salida 

No aplica.  

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el Identificador de tarjeta de débito. 
30002 | No se recibió el Identificador de operación a asociar. 

### Versión V2R3 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
tipoDeCuenta | Short | Tipo de la cuenta a asociar. 
tarjetaUId  | Long | Identificador único de tarjeta de débito. 

### Datos de salida 

No aplica.  

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el Identificador de tarjeta de débito. 
30002 | No se recibió el Identificador de operación a asociar. 
30003 | No se recibió el tipo de cuenta a asociar. 

 
