# Obtener Tipos de Integrante 

Método para obtener los tipos de integrante correspondientes a un tipo de grupo de crédito. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTMicrofinanzas.ObtenerTiposDeIntegrante | RBTPG432 | Global 

> Ejemplo de invocación al método Obtener Tipos de Integrante: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerTiposDeIntegrante> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1414147105CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:tipoGrupoId>1</bts:tipoGrupoId> 
      </bts:BTMicrofinanzas.ObtenerTiposDeIntegrante> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposDeIntegrante=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"tipoGrupoId": 1 
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
      <BTMicrofinanzas.ObtenerTiposDeIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1414147105CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtTiposIntegrantesGrupo> 
            <sBTTipoIntegranteGrupo> 
               <codigo>1</codigo> 
               <descripcion>Coordinador</descripcion> 
               <cantidadPermitida>1</cantidadPermitida> 
               <coordinador>S</coordinador> 
               <vigente>S</vigente> 
            </sBTTipoIntegranteGrupo> 
            <sBTTipoIntegranteGrupo> 
               <codigo>2</codigo> 
               <descripcion>Integrantes</descripcion> 
               <cantidadPermitida>9</cantidadPermitida> 
               <coordinador>N</coordinador> 
               <vigente>S</vigente> 
            </sBTTipoIntegranteGrupo> 
         </sdtTiposIntegrantesGrupo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerTiposDeIntegrante</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>16:35:36</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>4998</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerTiposDeIntegranteResponse> 
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
    "sdtTiposIntegrantesGrupo": { 
		"sBTTipoIntegranteGrupo": [ 
		  { 
			"codigo": "1", 
			"descripcion": "Coordinador", 
			"cantidadPermitida": "1", 
			"coordinador": "S", 
			"vigente": "S" 
		  }, 
		  { 
			"codigo": "2", 
			"descripcion": "Integrantes", 
			"cantidadPermitida": "9", 
			"coordinador": "N", 
			"vigente": "S" 
		  } 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ObtenerTiposDeIntegrante", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "16:35:22", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
tipoGrupoId | Short | Identificador del tipo de grupo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtTiposIntegrantesGrupo | sBTTipoIntegranteGrupo | Listado de tipos de integrantes. 

Los campos del tipo de dato estructurado sBTTipoIntegrantesGrupo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Identificador del tipo de integrante.  
descripcion | String | Descripcion del tipo de integrante. 
cantidadPermitida | Int | Cantidad máxima de integrantes de este tipo permitidos. 
coordinador | String | Indica si el integrante es coordinador o no (S/N). 
vigente | String | Indica si el tipo de integrante está vigente (S/N). 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No existen Tipos de Grupo ingresados en el sistema. 

 
