# Obtener Detalle de Préstamo Cancelado 

Devuelve el detalle del préstamo cancelado indicado. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDetallePrestamoCancelado | RBTPG248 | Global 

> Ejemplo de invocación al método Obtener Detalle de Préstamo Cancelado: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetallePrestamoCancelado> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1576177365F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10118</bts:operacionUId> 
      </bts:BTPrestamos.ObtenerDetallePrestamoCancelado> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetallePrestamoCancelado' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "10118" 
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
      <BTPrestamos.ObtenerDetallePrestamoCanceladoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1576177365F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPrestamo> 
            <operacionUId>10118</operacionUId> 
            <idOperacionFmt>74-0</idOperacionFmt> 
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT> 
            <producto> 
               <productoUId>36</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel>$</papel> 
            </producto> 
            <tipoProducto>AM</tipoProducto> 
            <sucursal>Casa Matriz</sucursal> 
            <simboloMoneda>$</simboloMoneda> 
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
            <capitalOriginal>19999.00</capitalOriginal> 
            <fechaValor>2018-05-15</fechaValor> 
            <fechaVencimiento>2019-05-16</fechaVencimiento> 
            <periodicidad>30</periodicidad> 
            <plazo>366</plazo> 
            <cantidadCuotas>12</cantidadCuotas> 
            <fechaCancelacion>2020-03-05</fechaCancelacion> 
            <claseTasa/> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <tipoDia>Meses Calendario</tipoDia> 
            <tipoAno>365 Días</tipoAno> 
            <tasaOriginal>23.000000</tasaOriginal> 
            <plus>0.000000</plus> 
            <cronograma> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2486.68</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2499.33</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2466.81</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2442.12</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2431.69</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2403.76</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2380.28</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2358.28</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2326.69</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2307.67</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2280.59</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2251.73</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
            </cronograma> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.ObtenerDetallePrestamoCancelado</Servicio> 
            <Fecha>2019-08-13</Fecha> 
            <Hora>10:04:44</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6656</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetallePrestamoCanceladoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1576177365F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"sdtPrestamo": { 
	  "operacionUId": "10118", 
	  "idOperacionFmt": "74-0", 
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001", 
	  "producto": { 
		"productoUId": "36", 
		"nombre": "Amortización Automática TF", 
		"moneda": "$", 
		"papel": "$" 
	  }, 
	  "tipoProducto": "AM", 
	  "sucursal": "Casa Matriz", 
	  "simboloMoneda": "$", 
	  "tipoAmortizacion": "Francés con Seg.e Impu.", 
	  "capitalOriginal": "19999.00", 
	  "fechaValor": "2018-05-15", 
	  "fechaVencimiento": "2019-05-16", 
	  "periodicidad": "30", 
	  "plazo": "366", 
	  "cantidadCuotas": "12", 
	  "fechaCancelacion": "2020-03-05", 
	  "tipoTasa": "Lineal Anual", 
	  "tipoDia": "Meses Calendario", 
	  "tipoAno": "365 Días", 
	  "tasaOriginal": "23.000000", 
	  "plus": "0.000000", 
	  "cronograma": { 
		"sBTCuotaCancelada": [ 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2486.68", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2499.33", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2466.81", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2442.12", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2431.69", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2403.76", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2380.28", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2358.28", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2326.69", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2307.67", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2280.59", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2251.73", 
			"diasMora": "0" 
		  } 
		] 
	  } 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrestamos.ObtenerDetallePrestamoCancelado", 
	  "Fecha": "2019-08-13", 
	  "Hora": "10:04:44", 
	  "Requerimiento": "1", 
	  "Numero": "6656", 
	  "Estado": "OK" 
	} 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamo | sBTPrestamoCancelado | Datos del préstamo cancelado. 

Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación simulada. 
producto | sBTProducto | Datos del Producto. 
sucursal | String | Sucursal del préstamo. 
plus | Double | Tasa plus. 
tasaOriginal | Double | Tasa original. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador texto de operación. 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
capitalOriginal | Double | Capital original del préstamo. 
tipoDia | String | Tipo de día del préstamo. 
claseTasa | String | Clase de tasa. 
tipoAmortizacion | String | Tipo de amortización. 
simboloMoneda | String | Símbolo monetario. 
plazo | Int | Plazo del préstamo. 
tipoTasa | String | Tipo de tasa. 
fechaValor | Date | Fecha de alta del préstamo. 
tasaEfectiva | Double | Tasa efectiva anual. 
periodicidad | Int | Período entre cuotas. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
tipoAno | String | Tipo de año. 
tipoProducto | String | Tipo de producto (Amortizable/Plan de pagos). 
fechaCancelacion | Date | Fecha de cancelación del préstamo. 
cronograma | sBTCuotaCancelada | Cronograma de pagos del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre de producto. 
moneda | String | Símbolo de moneda. 
papel | String | Símbolo de papel. 

Los campos del tipo de dato estructurado sBTCuotaCancelada son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago. 
importePago | Double | Importe total pago de la cuota. 
diasMora | Short | Días de mora con los que se pago la cuota. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador único de operación. 
30002 | No se recuperó la operación para el Identificador: [Número de Identificador].  
30003 | El préstamo no se encuentra cancelado. 

 
