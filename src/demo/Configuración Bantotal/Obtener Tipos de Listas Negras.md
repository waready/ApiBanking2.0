# Obtener Tipos de Listas Negras 

Método para obtener un listado de los tipos de listas negras ingresados en Bantotal. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTConfiguracionBantotal.ObtenerTiposListasNegras | RBTPG214 | Global 

> Ejemplo de invocación al método Obtener Tipos de Listas Negras: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposListasNegras> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2e2434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposListasNegras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposListasNegras' \ 
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
      <BTConfiguracionBantotal.ObtenerTiposListasNegrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2e2434</Token> 
         </Btinreq> 
         <sdtTiposListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LAVADO DE DINERO</Descripcion> 
               <Codigo>1</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LISTA DEL BANCO</Descripcion> 
               <Codigo>2</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LISTA DE CLIENTES INDESEABLES</Descripcion> 
               <Codigo>3</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>INHABILITADOS CAMBIOS</Descripcion> 
               <Codigo>4</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>TERRORISTA</Descripcion> 
               <Codigo>16</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion/> 
               <Codigo>18</Codigo> 
            </sBTTipoListaNegra> 
         </sdtTiposListaNegra> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8514</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposListasNegras</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:43:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposListasNegrasResponse> 
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
	"sdtTiposListaNegra": { 
		"sBTTipoListaNegra": [ 
			{ 
         "Descripcion": "LAVADO DE DINERO", 
         "Codigo": "1" 
			}, 
			{ 
         "Descripcion": "LISTA DEL BANCO", 
         "Codigo": "2" 
			}, 
			{ 
         "Descripcion": "LISTA DE CLIENTES INDESEABLES", 
         "Codigo": "3" 
			}, 
			{ 
         "Descripcion": "INHABILITADOS CAMBIOS", 
         "Codigo": "4" 
			}, 
			{ 
         "Descripcion": "TERRORISTA", 
         "Codigo": "16" 
			}, 
			{ 
         "Descripcion": "", 
         "Codigo": "18" 
			} 
		] 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 8396, 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposListasNegras", 
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

No aplica. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtTiposListaNegra | sBTTipoListaNegra | Listado de tipos de listas negras. 

Los campos del tipo de dato estructurado sBTTipoListaNegra son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
Descripcion	| String	| Descripción de tipo de lista negra. 
Codigo | Long | Identificador de tipo de lista negra. 

### Errores 

Código | Descripción 
--------- | ----------- 
30011 | No existen Tipos de Lista Negra ingresados en el sistema. 

 
