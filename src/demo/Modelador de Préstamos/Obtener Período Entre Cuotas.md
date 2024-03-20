#  Obtener Período Entre Cuotas 

Método para obtener los periodos entre cuotas parametrizados de un producto de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerPeriodoEntreCuotas | RBTPG350 | Global 

> Ejemplo de invocación al servicio de Obtener Período Entre Cuotas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerPeriodoEntreCuotas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerPeriodoEntreCuotas> 
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
      <BTModeladorPrestamos.ObtenerPeriodoEntreCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>194002532CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <minimo>0</minimo> 
         <maximo>0</maximo> 
         <valorPorDefecto>0</valorPorDefecto> 
         <tipo>Lista</tipo> 
         <sdtListaValores> 
            <SdtsBTValor> 
               <valor>30</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>60</valor> 
            </SdtsBTValor> 
         </sdtListaValores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerPeriodoEntreCuotas</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:10:12</Hora> 
            <Requerimiento/> 
            <Numero>8632</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerPeriodoEntreCuotasResponse> 
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
    "minimo": 0, 
    "maximo": 0, 
    "valorPorDefecto": 0, 
    "tipo": "Lista", 
    "sdtListaValores": { 
        "SdtsBTValor": [ 
            { 
                "valor": 30 
            }, 
            { 
                "valor": 60 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerPeriodoEntreCuotas", 
        "Fecha": "2021-11-03", 
        "Hora": "17:14:29", 
        "Requerimiento": "", 
        "Numero": 8487, 
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
parametro | Short | [Hidden: Valor 401 definido por defecto]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
minimo | Long | Valor mínimo de período de cuotas. 
maximo | Long | Valor máximo de período de cuotas. 
valorPorDefecto | Long | Valor por defecto de período de cuotas. 
tipo | Long | Tipo de cuotas. 
sdtListaValores | sBTValor | Listado de valores posibles. 

Los campos del tipo de dato estructurado sBTValor son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
valor | Long | Valor de período de cuotas. 

### Errores 

Código | Descripción 
--------- | -----------  
30002 | Existe registro con la cuenta indicada. 
30003 | No existe registro para el identificador único. 
30004 | No existe registro para el producto indicado. 

 
