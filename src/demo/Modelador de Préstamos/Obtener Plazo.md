#  Obtener Plazo 

Método para obtener los plazos parametrizados de un producto de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerPlazo | RBTPG350 | Global 

> Ejemplo de invocación al servicio de Obtener Plazo: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerPlazo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1047454914CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerPlazo> 
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
        "Token": "1047454914CD285A89A23FBE", 
        "Device": "" 
    }, 
    "productoUId": "105" 
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
      <BTModeladorPrestamos.ObtenerPlazoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1047454914CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <minimo>1</minimo> 
         <maximo>99999</maximo> 
         <valorPorDefecto>30</valorPorDefecto> 
         <tipo>Valor</tipo> 
         <sdtListaValores></sdtListaValores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerPlazo</Servicio> 
            <Fecha>2021-11-04</Fecha> 
            <Hora>10:00:29</Hora> 
            <Requerimiento/> 
            <Numero>8652</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerPlazoResponse> 
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
        "Token": "1047454914CD285A89A23FBE", 
        "Device": "" 
    }, 
    "minimo": 1, 
    "maximo": 99999, 
    "valorPorDefecto": 30, 
    "tipo": "Valor", 
    "sdtListaValores": { 
        "SdtsBTValor": [] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerPlazo", 
        "Fecha": "2021-11-04", 
        "Hora": "09:57:14", 
        "Requerimiento": "", 
        "Numero": 8650, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador de producto. 
parametro | Short | [Hidden: Valor 410 definido por defecto]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
minimo | Long | Valor mínimo de palzo de cuotas. 
maximo | Long | Valor máximo de palzo de cuotas. 
valorPorDefecto | Long | Valor por defecto de palzo de cuotas. 
tipo | Long | Tipo de cuotas. 
sdtListaValores | sBTValor | Listado de valores posibles. 

Los campos del tipo de dato estructurado sBTValor son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
valor | Long | Valor de plazo de cuotas. 

### Errores 

Código | Descripción 
--------- | -----------  
30002 | Existe registro con la cuenta indicada. 
30003 | No existe registro para el identificador único. 
30004 | No existe registro para el producto indicado. 

 
