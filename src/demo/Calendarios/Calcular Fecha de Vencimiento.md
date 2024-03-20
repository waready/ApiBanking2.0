# Calcular Fecha de Vencimiento 

Método que calcula la fecha de vencimiento de un plazo dada la fecha de inicio. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTCalendarios.CalcularFechaVencimiento | RBTPG340 | Global 

> Ejemplo de invocación al método Calcular Fecha de Vencimiento: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.CalcularFechaVencimiento> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>573607534CD285A89A23FBEE</bts:Token> 
            <bts:Device>N</bts:Device> 
         </bts:Btinreq> 
         <bts:sucursalId></bts:sucursalId> 
         <bts:plazo>30</bts:plazo> 
         <bts:fechaInicio>2020-02-15</bts:fechaInicio> 
         <bts:tipoVencimiento>A</bts:tipoVencimiento> 
      </bts:BTCalendarios.CalcularFechaVencimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?CalcularFechaVencimiento' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "sucursalId": "", 
    "plazo": "30", 
    "fechaInicio": "2020-02-15", 
    "tipoVencimiento": "A" 
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
      <BTCalendarios.CalcularFechaVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>573607534CD285A89A23FBEE</Token> 
            <Device>N</Device> 
         </Btinreq> 
         <fechaFin>2020-03-13</fechaFin> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.CalcularFechaVencimiento</Servicio> 
            <Fecha>2021-04-07</Fecha> 
            <Hora>17:52:43</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8156</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.CalcularFechaVencimientoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "fechaFin": "2020-03-13", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.CalcularFechaVencimiento", 
      "Fecha": "2021-04-07", 
      "Hora": "17:52:43", 
      "Requerimiento": "1", 
      "Numero": "8156", 
      "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sucursalId  | Int | Identificador de sucursal. 
fechaInicio | Date | Fecha de inicio del plazo. 
plazo    | Int | Plazo. 
tipoDia     | Byte | [Hidden, valor fijo 1 para este método]. 
tipoVencimiento  | String | Tipo de ajuste al vencimiento ('A': Hábil anterior, 'P': Hábil posterior, 'N': No ajusta). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaVencimiento | Date | Fecha de vencimiento del plazo. 

### Errores 

No aplica 

 
