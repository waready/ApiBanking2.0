# Habilitar Usuario 

Método para habilitar un usuario que se encuentra inhabilitado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTUsuarios.HabilitarUsuario | RBTPG394 | Global 

> Ejemplo de invocación al servicio de Habilitar Usuario: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.HabilitarUsuario> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
         <bts:fechaDesde>2022-01-01</bts:fechaDesde> 
      </bts:BTUsuarios.HabilitarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?HabilitarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
   "Usuario": "GPONTES", 
   "fechaDesde": "2022-01-01" 
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
      <BTUsuarios.HabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bc8b678bc44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>839</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.HabilitarUsuario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-05-12</Fecha> 
            <Hora>15:35:54</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.HabilitarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.HabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
usuario | String | Identificador del usuario.  
fechaDesde | Date | Fecha desde la que se encuentra inhabilitado.  

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | Debe ingresar usuario a habilitar. 
30002 | Debe ingresar fecha desde. 
40003 | No se puede eliminar. Registro no existe. 

 
