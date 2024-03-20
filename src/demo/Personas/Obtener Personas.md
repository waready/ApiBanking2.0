# Obtener Personas 

Método para obtener los datos de la/s persona/s con el nombre ingresado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.ObtenerPersonas | RBTPG300 | Global 

> Ejemplo de invocación al método Obtener Personas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonas> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d402ef5c94A84</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:primerNombre>ALEJANDRO</bts:primerNombre> 
         <bts:segundoNombre></bts:segundoNombre> 
         <bts:primerApellido>VAZQUEZ</bts:primerApellido> 
         <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido> 
      </bts:BTPersonas.ObtenerPersonas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerPersonas=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"primerNombre":"ALEJANDRO", 
	"segundoNombre":"", 
	"primerApellido":"VAZQUEZ", 
	"segundoApellido":"SZENTANDRASI" 
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
      <BTPersonas.ObtenerPersonasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402ef5c94A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPersonas> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27573084</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1956-02-26</fechaNacimiento> 
               <personaUId>43</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>11380673</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1966-02-26</fechaNacimiento> 
               <personaUId>44</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27512189</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1976-02-26</fechaNacimiento> 
               <personaUId>48</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27510989</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1986-02-26</fechaNacimiento> 
               <personaUId>50</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
         </sdtPersonas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8477</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerPersonas</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>16:54:26</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtPersonas": { 
		"sBTPersonaBusqueda": [ 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "43496418", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "23", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "43496419", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "46", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27511184", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "21", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27510189", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "49", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27510989", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "50", 
				"paisId": "845" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerPersonas", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
primerNombre | String | Primer nombre. 
segundoNombre | String | Segundo nombre. 
primerApellido | String | Primer apellido. 
segundoApellido | String | Segundo apellido. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPersonas | sBTPersonaBusqueda | Listado de datos de persona. 

Los campos del tipo de dato estructurado sBTPersonaBusqueda son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
primerNombre |	String | Primer nombre. 
segundoNombre | String | Segundo nombre. 
primerApellido	| String | Primer apellido. 
segundoApellido | String | Segundo apellido. 
nroDocumento | String | Número de documento. 
paisId | Short | Identificador del país. 
pais | String | Nombre del país. 
tipoDocumentoId | Short | Identificador de tipo de documento. 
tipoDocumento | String | Descripción del tipo de documento. 
fechaNacimiento |	Date | Fecha de nacimiento. 

### Errores 

Código | Descripción 
--------- | ----------- 
30002 | Campo primer nombre requerido. 
30003 | Campo primer apellido requerido. 
40001 | No se encontro persona(s) con el patron de busqueda ingresado. 

 
