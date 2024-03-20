#  Obtener Capital 

Método para obtener capital mínimo, máximo y promedio de un producto de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerCapital | RBTPG352 | Global 

> Ejemplo de invocación al servicio de Obtener Capital: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerCapital> 
       <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerCapital> 
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
        "Token": "1511184612CD285A89A23FBE", 
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
      <BTModeladorPrestamos.ObtenerCapitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>194002532CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <minimo>1</minimo> 
         <maximo>999999999999</maximo> 
         <valorPorDefecto>1000</valorPorDefecto> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerCapital</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:13:56</Hora> 
            <Requerimiento/> 
            <Numero>8634</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerCapitalResponse> 
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
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "minimo": 1.0, 
    "maximo": 999999999999.0, 
    "valorPorDefecto": 1000.0, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerCapital", 
        "Fecha": "2021-11-03", 
        "Hora": "17:46:33", 
        "Requerimiento": "", 
        "Numero": 8620, 
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

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
minimo | Double | Capital mínimo posible para el producto. 
maximo | Double | Capital máximo posible para el producto. 
valorPorDefecto | Double | Capital por defecto para el producto. 

### Errores 

Código | Descripción 
--------- | -----------  
30002 | Existe registro con la cuenta indicada. 
30003 | No existe registro para el identificador único. 
30004 | No existe registro para el producto indicado. 

 
