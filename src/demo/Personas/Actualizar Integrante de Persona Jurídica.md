# Actualizar Integrante de Persona Jurídica 

Método para actualizar un integrante de una persona jurídica. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ActualizarIntegrantePersonaJuridica | RBTPG280 | Global 

> Ejemplo de invocación al método Actualizar Integrante de Persona Jurídica: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarIntegrantePersonaJuridica> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>14298073CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaJuridicaUId>2</bts:personaJuridicaUId> 
		 <bts:sdtIntegranteAlta> 
			 <bts:personaUId>1</bts:personaIntegranteUId> 
			 <bts:vinculoId>1</bts:vinculoId> 
			 <bts:participacion>50</bts:participacion> 
		 </bts:sdtIntegranteAlta> 
      </bts:BTPersonas.ActualizarIntegrantePersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarIntegrantePersonaJuridica' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "14298073CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "personaJuridicaUId": "2", 
	 "sdtIntegranteAlta": { 
		 "personaUId": "1", 
		 "vinculoId": "1", 
		 "participacion": "50", 
	 } 
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
      <BTPersonas.ActualizarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1429807CD285A89A23FBE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ActualizarIntegrantePersonaJuridica</Servicio> 
            <Fecha>2020-11-02</Fecha> 
            <Hora>12:06:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10140</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ActualizarIntegrantePersonaJuridicaResponse> 
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
		"Usuario": "IN", 
		"Token": "14298073CD285A89A23FBE", 
		"Device": "MC" 
	}, 
	"Erroresnegocio": null, 
	"Btoutreq": { 
		"Canal": "BTDIGITAL", 
		"Servicio": "BTPersonas.ActualizarIntegrantePersonaJuridica", 
		"Fecha": "2020-11-02", 
		"Hora": "12:06:37", 
		"Requerimiento": "1", 
		"Numero": "10140", 
		"Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaJuridicaUId | Long | Identificador único de persona jurídica. 
sdtIntegranteAlta | sBTIntegranteJuridicoAlta | Datos de la persona física integrante de la persona jurídica indicada. 
modo | String | [Hidden: Valor fijo 'UP1' para este método]. 

Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
vinculoId | Short | Identificador de vínculo. 
participacion | Double | Porcentaje de participación del integrante. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió identificador único de persona jurídica. 
30002 | No se recibió identificador único de integrante de persona jurídica. 
30003 | No se recibió identificador de vínculo del integrante de persona jurídica. 
30003 | No se recibió identificador de vínculo del integrante de persona jurídica. 
40001 | La sumatoria de porcentajes asociados a los integrantes de la persona jurídica es mayor a 100%. 
40003 | Debe ingresar el % de participación del accionista. 
40004 | El % de Participación no puede ser mayor al 100%. 
40005 | Si la persona no es Accionista tiene que haber sido ingresado con Alta Normal para poder integrar a la persona. 
40006 | Debe ingresar al menos un Representante Legal. 
40007 | No se puede cambiar el vinculo, ya que es el unico Representante Legal. 
40008 | La persona a vincular no puede ser la misma. 
40009 | No puede asociar una persona jurídica como representante legal. 
40010 | No existe el identificador de vínculo ingresado. 


 
