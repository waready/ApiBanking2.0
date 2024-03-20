# Obtener Precio Especie 

Método para devolver la cotización de una especie en moneda nacional. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrecios.ObtenerPrecioEspecie | RBTPG227 | Global 

> Ejemplo de invocación al método Obtener Precio Especie: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerPrecioEspecie> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1589809070F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:especie>50</bts:especie> 
      </bts:BTPrecios.ObtenerPrecioEspecie> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerPrecioEspecie=' \ 
  -H 'cache-control: no-cache,no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "especie": "50" 
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
      <BTPrecios.ObtenerPrecioEspecieResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1589809070F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <precio>3.0591</precio> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerPrecioEspecie</Servicio> 
            <Fecha>2019-07-26</Fecha> 
            <Hora>11:21:33</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6570</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerPrecioEspecieResponse> 
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
   "precio": 3.0591, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 56, 
      "Servicio": "BTPrecios.ObtenerPrecioEspecie", 
      "Estado": "OK", 
      "Fecha": "2019-10-25", 
      "Requerimiento": "1", 
      "Hora": "13:51:52", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
especie | Long | Identificador de la especie. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
precio | Double | Cotización. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió una especie. 
40001 | La especie no es un índice. 
40002 | La especie no existe. 

 
