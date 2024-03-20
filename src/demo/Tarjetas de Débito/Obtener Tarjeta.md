# Obtener Tarjeta 

Método para devolver la tarjeta encriptada segun las normas PCI. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTTarjetasDeDebito.ObtenerTarjetas | RBTPG805 | Global 

### Configuración Backend 

1) Se debe parametrizar el programa particular que resuelve la encriptación de la tarjeta en la FST900 con programa estándar RBTSTD13. 

> Ejemplo de invocación al método Obtener Obtener Tarjetas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTarjeta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>933853107F955E77534D3E02</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUID>679</bts:personaUID> 
         <bts:tarjetaUID>2000001751</bts:tarjetaUID> 
      </bts:BTTarjetasDeDebito.ObtenerTarjeta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetas' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "BANTOTAL", 
          "Token": "933853107F955E77534D3E02", 
          "Device": "GL" 
        }, 
        "personaUID": 679, 
        "tarjetaUID": 2000001751 
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
      <BTTarjetasDeDebito.ObtenerTarjetaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>933853107F955E77534D3E02</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <Tarjeta>Z0YQCOAcMVX8Z40fu1vi/zbnphu39GQ4bbgWcnjXc7k=</Tarjeta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerTarjeta</Servicio> 
            <Fecha>2022-11-30</Fecha> 
            <Hora>15:37:32</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>887444</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTarjetaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "BANTOTAL", 
          "Token": "933853107F955E77534D3E02", 
          "Device": "GL" 
        }, 
        "Tarjeta": "Z0YQCOAcMVX8Z40fu1vi/zbnphu39GQ4bbgWcnjXc7k=", 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTTarjetasDeDebito.ObtenerTarjeta", 
          "Fecha": "2022-11-30", 
          "Hora": "15:37:32", 
          "Requerimiento": 1, 
          "Numero": 887444, 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
tarjetaUId | Long | Identificador único de tarjeta. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tarjeta | String | Tarjeta encriptada. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de persona. 
30002 | No se recibió el Identificador de Tarjeta. 

 
