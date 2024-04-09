# Eliminar Información Adicional 

Método para eliminar la información adicional de una persona. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.EliminarInformacionAdicional | RBTPG517 | Global 

> Ejemplo de invocación al servicio de Eliminar Información Adicional: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.EliminarInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>e2db881814CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>12217</bts:personaUId> 
         <bts:sdtInformacionAdicional> 
            <bts:sBTDatoLista> 
               <bts:clave>SCORE</bts:clave> 
               <bts:valor></bts:valor> 
            </bts:sBTDatoLista> 
         </bts:sdtInformacionAdicional> 
      </bts:BTPersonas.EliminarInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?EliminarInformacionAdicional' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "e2db881814CD285A89A23FBE", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"personaUId": 12217, 
        "sdtInformacionAdicional": { 
          "sBTDatoLista": { 
            "clave": "SCORE", 
            "valor": "" 
          } 
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
      <BTPersonas.EliminarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>e2db881814CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>589696</Numero> 
            <Servicio>BTPersonas.EliminarInformacionAdicional</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-10</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>17:40:47</Hora> 
         </Btoutreq> 
      </BTPersonas.EliminarInformacionAdicionalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 

   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.EliminarInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-10-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:21:52" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
sdtInformacionAdicional | sBTDatoLista | Listado de datos. 
modo | String | [Hidden, valor fijo 'DLT' para este método].  

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 


### Datos de salida 

No aplica. 


### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de persona. 
40001 | La persona ingresada no existe. 


 
