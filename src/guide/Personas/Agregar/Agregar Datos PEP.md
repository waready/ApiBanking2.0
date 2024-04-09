# Agregar Datos PEP 

Método para agregar los datos de una persona expuesta políticamente.  

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPersonas.AgregarDatosPEP | RBTPG146 | Global 

> Ejemplo de invocación al método Agregar Datos PEP: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarDatosPEP> 
		   <Btinreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Device>AV</Device> 
			  <Requerimiento /> 
			  <Token>1254960580EF744F35AE6963</Token> 
			  <Usuario>INSTALADOR</Usuario> 
		   </Btinreq> 
		   <personaUId>3</personaUId>  
		   <esPEP>S</esPEP> 
		   <sdtDatosPEP> 
			  <cargoRelacion>politic00</cargoRelacion> 
			  <entidad>abc125</entidad> 
			  <fechaInicio>2014-05-20</fechaInicio> 
			  <fechaSalida /> 
			  <observacion>no corresponde</observacion> 
		   </sdtDatosPEP> 
	   </bts:BTPersonas.AgregarDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDatosPEP' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
   "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
   "personaUId": "3", 
   "esPEP": "S", 
   "sdtDatosPEP": { 
      "entidad": "abc125", 
      "cargoRelacion": "politic00", 
      "observacion": "no corresponde", 
      "fechaInicio": "2014-05-20", 
      "fechaSalida": "" 
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
      <BTPersonas.AgregarDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
		  <Btinreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Device>AV</Device> 
			  <Requerimiento /> 
			  <Token>1254960580EF744F35AE6963</Token> 
			  <Usuario>INSTALADOR</Usuario> 
		   </Btinreq> 
		   <Erroresnegocio></Erroresnegocio> 
		   <Btoutreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Estado>OK</Estado> 
			  <Fecha>2020-07-30</Fecha> 
			  <Hora>13:13:12</Hora> 
			  <Numero>50199</Numero> 
			  <Requerimiento /> 
			  <Servicio>BTPersonas.AgregarDatosPEP</Servicio> 
		   </Btoutreq> 
      </BTPersonas.AgregarDatosPEPResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 

``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.AgregarDatosPEP", 
        "Fecha": "2020-07-30", 
        "Hora": "13:13:12", 
        "Requerimiento": "", 
        "Numero": 50199, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
esPEP | String | Es persona políticamente expuesta? (S/N). 
sdtDatosPEP | sBTDatosPEP | Datos de la PEP. 

Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
entidad | String | Entidad. 
cargoRelacion | String | Cargo que ocupa. 
observacion | String | Observación.  
fechaInicio | Date | Fecha de inicio. 
fechaSalida | Date | Fecha de salida. 

### Datos de salida 

No aplica. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de la persona. 
30002 | No se recibió si la persona es políticamente expuesta. 
30003 | No se pudo determinar si la persona es políticamente expuesta. (¿Es PEP? S / N). 
50001 | Fecha Inicio cargo PEP es de ingreso obligatorio. 
50002 | Entidad es de ingreso obligatorio. 
50003 | Cargo y Relación es de ingreso obligatorio. 
50004 | Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP. 
50005 | Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy. 

 
