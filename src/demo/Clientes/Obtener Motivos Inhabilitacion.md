# Obtener Motivos Inhabilitacion 

Método para obtener un listado de los motivos de inhabilitacion. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTClientes.ObtenerMotivosInhabilitacion | RBTPG449 | Global 

> Ejemplo de invocación al método Obtener Motivos Inhabilitacion: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerMotivosInhabilitacion> 
         <bts:Btinreq> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>289a9ca6a299865B3A2E76CF</bts:Token> 
            <bts:Device>2</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTClientes.ObtenerMotivosInhabilitacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerMotivosInhabilitacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Usuario": "Instalador", 
          "Token": "289a9ca6a299865B3A2E76CF", 
          "Device": 2, 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 0 
        } 
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
      <Prueba.ObtenerMotivosInhabilitacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>2</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>289a9ca6a299865B3A2E76CF</Token> 
         </Btinreq> 
         <sbtMotivosInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>Embargo</descripcion> 
               <codigo>1</codigo> 
            </SdtsBTMotivoInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>En Juicio</descripcion> 
               <codigo>3</codigo> 
            </SdtsBTMotivoInhabilitacion> 
            <SdtsBTMotivoInhabilitacion> 
               <descripcion>Retenciones</descripcion> 
               <codigo>10</codigo> 
            </SdtsBTMotivoInhabilitacion> 
         </sbtMotivosInhabilitacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1827</Numero> 
            <Servicio>Prueba.ObtenerMotivosInhabilitacion</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2022-10-27</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>09:39:20</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </Prueba.ObtenerMotivosInhabilitacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Device": 2, 
          "Usuario": "Instalador", 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Token": "289a9ca6a299865B3A2E76CF" 
        }, 
        "sbtMotivosInhabilitacion": { 
          "SdtsBTMotivoInhabilitacion": [ 
            { 
              "descripcion": "Embargo", 
              "codigo": 1 
            }, 
            { 
              "descripcion": "En Juicio", 
              "codigo": 3 
            }, 
            { 
              "descripcion": "Retenciones", 
              "codigo": 10 
            } 
          ] 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 1827, 
          "Servicio": "Prueba.ObtenerMotivosInhabilitacion", 
          "Estado": "OK", 
          "Fecha": "2022-10-27", 
          "Requerimiento": 0, 
          "Hora": "09:39:20", 
          "Canal": "BTDIGITAL" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtMotivosInhabilitacion | sBTMotivoInhabilitacion | Listado de motivos de inhabilitación. 

Los campos del tipo de dato estructurado sbtMotivosInhabilitacion son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Codigo | Long | Código del motivo de inhabilitación. 
Descripcion | String | Descripción del motivo de inhabilitación. 

### Errores 

Código | Descripción 
--------- | ----------- 
40001 | No existen motivos de inhabilitación. 

 
