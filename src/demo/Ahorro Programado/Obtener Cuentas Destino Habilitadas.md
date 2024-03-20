# Obtener Cuentas Destino Habilitadas 

Método para obtener un listado de cuentas habilitadas para acreditar el ahorro. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas | RBTPG112 | Global 

> Ejemplo de invocación al método Obtener Cuentas Destino Habilitadas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d927483a74A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:clienteDestinoUId>81</bts:clienteDestinoUId> 
         <bts:productoUId>41</bts:productoUId> 
         <bts:cuentaOrigenUId>21</bts:cuentaOrigenUId> 
      </bts:BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasDestinoHabilitadas' \ 
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
      "clienteUId": 81, 
      "clienteDestinoUId": 81, 
      "productoUId": 41, 
      "cuentaOrigenUId": 21 
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
      <BTAhorroProgramado.ObtenerCuentasDestinoHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d927483a74A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuentas> 
            <sBTProductoPasivo> 
               <operacionUId>21</operacionUId> 
               <idOperacionFmt>000000028_001</idOperacionFmt> 
               <idOperacionBT>0010010210000000000000028001000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>Mi account 1</subCuenta> 
               <saldo>10000000.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
            <sBTProductoPasivo> 
               <operacionUId>81</operacionUId> 
               <idOperacionFmt>000000028_002</idOperacionFmt> 
               <idOperacionBT>0010010210000000000000028002000000000001</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>CAJAS DE AHORRO, Caja de Ahorro P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <tipoProducto>CA</tipoProducto> 
               <sucursal>Casa Matriz</sucursal> 
               <subCuenta>Mi account 2</subCuenta> 
               <saldo>0.00</saldo> 
               <estado>Normal</estado> 
            </sBTProductoPasivo> 
         </sdtCuentas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>403</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas</Servicio> 
            <Fecha>2018-05-03</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:54:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerCuentasDestinoHabilitadasResponse> 
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
    "sdtCuentas": { 
        "sBTProductoPasivo": [ 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "Mi account 1", 
                "operacionUId": "21", 
                "saldo": "10000000.00", 
                "idOperacionFmt": "000000028_001", 
                "idOperacionBT": "0010010210000000000000028001000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Casa Matriz" 
            }, 
            { 
                "tipoProducto": "CA", 
                "estado": "Normal", 
                "subCuenta": "Mi account 2", 
                "operacionUId": "81", 
                "saldo": "0.00", 
                "idOperacionFmt": "000000028_002", 
                "idOperacionBT": "0010010210000000000000028002000000000001", 
                "producto": { 
                    "papel": "", 
                    "moneda": "$", 
                    "productoUId": "0", 
                    "nombre": "CAJAS DE AHORRO, Caja de Ahorro P.Física" 
                }, 
                "sucursal": "Casa Matriz" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "404", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerCuentasDestinoHabilitadas", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "11:57:10", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
clienteDestinoUId | Long | Identificador único de cliente destino de fondos de ahorro. 
productoUId | Long | Identificador único de producto. 
cuentaOrigenUId | Long | Identificador único de operación de la cuenta origen (seleccionada previamente invocando al servicio BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentas | sBTProductoPasivo | Listado de cuentas habilitadas para origen del ahorro. 

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String Bantotal (concatenación de todos los conceptos claves de la operación). 
producto | sBTProducto | Datos del Producto pasivo. 
tipoProducto | String | Tipo de producto pasivo (Cuenta Corriente: 'CC', Caja de Ahorro: 'CA'). 
sucursal | String | Nombre de la sucursal de origen de la operación. 
subcuenta | String | Nombre de la cuenta vista. 
saldo | Decimal | Saldo. 
estado | String | Descripción de estado. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
nombre | String | Nombre del producto. 
moneda | String | Símbolo de la moneda. 
papel | String | Símbolo del papel. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del cliente. 
30002 | No se recibió el identificador del cliente destino de fondos. 
30003 | No se recibió el identificador del producto de ahorro. 
30004 | No se recibió el identificador de la cuenta de origen del ahorro. 
30005 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
30006 | No se recuperó la cuenta destino para el identificador de cliente destino de fondos: [Número de identificador]. 
30007 | No se recuperó el producto de ahorro para el identificador: [Número de identificador]. 
30008 | No se recuperó cuenta de origen para el identificador: [Número de identificador]. 
30009 | La cuenta de origen no corresponde al cliente. 
40001 | El producto seleccionado no corresponde a un producto de ahorro. 
40101 | El cliente destino debe ser igual al cliente origen. 
40999 | Este producto no se encuentra habilitado para operar por este canal. 

 
