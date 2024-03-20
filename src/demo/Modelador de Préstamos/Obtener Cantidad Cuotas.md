#  Obtener Cantidad Cuotas 

Método para obtener las cantidades de cuotas parametrizadas de un producto de préstamo. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTModeladorPrestamos.ObtenerCantidadCuotas | RBTPG350 | Global 

> Ejemplo de invocación al servicio de Obtener Cantidad Cuotas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerCantidadCuotas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerCantidadCuotas> 
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
      <BTModeladorPrestamos.ObtenerCantidadCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
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
               <valor>6</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>10</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>12</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>15</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>18</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>20</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>24</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>36</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>60</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>90</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>120</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>180</valor> 
            </SdtsBTValor> 
            <SdtsBTValor> 
               <valor>240</valor> 
            </SdtsBTValor> 
         </sdtListaValores> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerCantidadCuotas</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:08:24</Hora> 
            <Requerimiento/> 
            <Numero>8631</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerCantidadCuotasResponse> 
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
                "valor": 6 
            }, 
            { 
                "valor": 10 
            }, 
            { 
                "valor": 12 
            }, 
            { 
                "valor": 15 
            }, 
            { 
                "valor": 18 
            }, 
            { 
                "valor": 20 
            }, 
            { 
                "valor": 24 
            }, 
            { 
                "valor": 36 
            }, 
            { 
                "valor": 60 
            }, 
            { 
                "valor": 90 
            }, 
            { 
                "valor": 120 
            }, 
            { 
                "valor": 180 
            }, 
            { 
                "valor": 240 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerCantidadCuotas", 
        "Fecha": "2021-11-03", 
        "Hora": "17:30:49", 
        "Requerimiento": "", 
        "Numero": 8556, 
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
parametro | Short | [Hidden: Valor 409 definido por defecto]. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
minimo | Long | Valor mínimo de cantidad de cuotas. 
maximo | Long | Valor máximo de cantidad de cuotas. 
valorPorDefecto | Long | Valor por defecto de cantidad de cuotas. 
tipo | Long | Tipo de cuotas. 
sdtListaValores | sBTValor | Listado de valores. 

Los campos del tipo de dato estructurado sBTValor son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
valor | Long | Valor de cantidad de cuotas. 

### Errores 

Código | Descripción 
--------- | -----------  
30002 | Existe registro con la cuenta indicada. 
30003 | No existe registro para el identificador único. 
30004 | No existe registro para el producto indicado. 

 
