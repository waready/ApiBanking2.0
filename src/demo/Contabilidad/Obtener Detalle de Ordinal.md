# Obtener Detalle de Ordinal 

Método para obtener el detalle del ordinal de un movimiento. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTContabilidad.ObtenerDetalleOrdinal | RBTPG337 | Global 

> Ejemplo de invocación al método Obtener Detalle de Ordinal: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerDetalleOrdinal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>12420485CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>8</bts:movimientoUId> 
         <bts:ordinal>1</bts:ordinal> 
         <bts:subOrdinal>1</bts:subOrdinal> 
      </bts:BTContabilidad.ObtenerDetalleOrdinal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleOrdinal' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "12420485CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "movimientoUId": "8", 
	 "ordinal":1, 
	 "subOrdinal":1 
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
      <BTContabilidad.ObtenerDetalleOrdinalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>IN</Usuario> 
            <Token>12420485CD285A89A23FBE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
	     <sdtOrdinal> 
			  <operacionUId>10189</operacionUId> 
			  <idOperacionBT>0010000100021000000000000000002700003000000000000</idOperacionBT> 
			  <debeHaber>D</debeHaber> debitoCredito 
			  <importe>10000.00</importe> 
			  <producto> 
				 <productoUId>0</productoUId>  
				 <nombre>CAJAS DE AHORRO, GENÉRICA</nombre> 
				 <moneda>$</moneda> 
				 <papel>$</papel> 
			  </producto> 
	     </sdtOrdinal> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.ObtenerDetalleOrdinal</Servicio> 
            <Fecha>2020-10-29</Fecha> 
            <Hora>16:13:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7704</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTContabilidad.ObtenerDetalleOrdinalResponse> 
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
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
   }, 
	"sdtOrdinal":  
	{ 
	  "operacionUId": "10189", 
	  "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
	  "debeHaber": "D", 
	  "importe": "10000.00", 
	  "producto": { 
		 "productoUId": "0", 
		 "nombre": "CAJAS DE AHORRO, GENÉRICA", 
		 "moneda": "$", 
		 "papel": "$" 
	  } 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleOrdinal", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
      "Estado": "OK" 
   } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
movimientoUId | Long | Identificador único de movimiento. 
ordinal  | Short | Ordinal del movimiento. 
subOrdinal | Short | Subordinal del movimiento. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtOrdinal | sBTOrdinal | Ordinale del movimiento. 

Los campos del tipo de dato estructurado sBTOrdinal son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionBT | String | Identificador String Bantotal. 
producto | sBTProducto | Datos del Producto. 
debeHaber | String | Debe/Haber (Crédito: 'C', Débito: 'D'). 
importe | Double | Importe. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió identificador de movimiento. 
30103 | No existe registro para el identificador único. 
40001 | No existe el asiento. 

 
