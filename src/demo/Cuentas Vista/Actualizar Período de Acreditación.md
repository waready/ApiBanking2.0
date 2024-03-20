# Actualizar Período de Acreditación 

Método para actualizar el período de acreditación de intereses de una subcuenta contratada. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCuentasVista.ActualizarPeriodoDeAcreditacion | RBTPG359 | Global 

> Ejemplo de invocación al servicio de Actualizar Período de Acreditación: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ActualizarPeriodoDeAcreditacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>599605168CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10209</bts:operacionUId> 
         <bts:periodoAcreditacion>1</bts:periodoAcreditacion> 
      </bts:BTCuentasVista.ActualizarPeriodoDeAcreditacion> 
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
        "Token": "1121622302CD285A89A23FBE", 
        "Device": "" 
    }, 
    "operacionUId": "10209", 
    "periodoAcreditacion": "15" 
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
      <BTCuentasVista.ActualizarPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>599605168CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ActualizarPeriodoDeAcreditacion</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>13:28:31</Hora> 
            <Requerimiento/> 
            <Numero>8447</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ActualizarPeriodoDeAcreditacionResponse> 
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
        "Token": "1121622302CD285A89A23FBE", 
        "Device": "" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasVista.ActualizarPeriodoDeAcreditacion", 
        "Fecha": "2021-10-29", 
        "Hora": "12:53:57", 
        "Requerimiento": "", 
        "Numero": 8445, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador de subcuenta. 
periodoAcreditacion | Int | Período de acreditación. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de Operacion. 
30002 | El período de acreditación ingresado es inválido. 
30003 | No se recuperó la Operacion para el Identificador: [Número de identificador]. 

 
