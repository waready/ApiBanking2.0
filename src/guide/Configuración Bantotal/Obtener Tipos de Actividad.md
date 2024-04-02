# Obtener Tipos de Actividad 

Método para obtener tipos de actividad. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerTiposDeActividad | RBTPG477 | Global 

> Ejemplo de invocación al servicio de Obtener Tipos de Actividad: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposDeActividad> 
         <bts:Btinreq> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1EF0C356A692E3706CFA0201</bts:Token> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposDeActividad> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeActividad' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "fa2c02c95a4A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 

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
      <BTConfiguracionBantotal.ObtenerTiposDeActividadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1EF0C356A692E3706CFA0201</Token> 
         </Btinreq> 
         <sdtTipoActividad> 
            <SdtsBTActividad> 
               <descripcion>Actividad Principal</descripcion> 
               <identificador>1</identificador> 
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora> 
            </SdtsBTActividad> 
            <SdtsBTActividad> 
               <descripcion>Prueba</descripcion> 
               <identificador>2</identificador> 
               <identificadorEntidadReguladora>0</identificadorEntidadReguladora> 
            </SdtsBTActividad> 
         </sdtTipoActividad> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10261</Numero> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposDeActividad</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-04</Fecha> 
            <Hora>17:05:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposDeActividadResponse> 
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
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
     "sdtActividades": { 
      "sBTActividad": [             
         { 
               "descripcion": "Actividad Principal", 
               "identificador": "1", 
               "identificadorEntidadReguladora": "0" 
         }, 
         { 
               "descripcion": "Prueba", 
               "identificador": "2", 
               "identificadorEntidadReguladora": "0" 
         }, 
      ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "111598", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerActividadesPorTipo", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-04", 
      "Canal": "BTDIGITAL", 
      "Hora": "16:20:35" 
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
sdtActividades | sBTActividad | Listado de actividades. 

Los campos del tipo de dato estructurado sBTActividad son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
identificador | Int | Identificador de actividad. 
descripcion | String | Descripción de actividad. 
identificadorEntidadReguladora	 | Long | Identificador de entidad reguladora. 

### Errores 

No aplica. 


 
