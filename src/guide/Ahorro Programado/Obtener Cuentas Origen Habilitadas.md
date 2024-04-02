# Obtener Cuentas Origen Habilitadas 

Método para obtener un listado de cuentas habilitadas para debitar periódicamente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas | RBTPG111 | Global 

> Ejemplo de invocación al método Obtener Cuentas Origen Habilitadas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>2</bts:personaUId> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:productoUId>41</bts:productoUId> 
      </bts:BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ObtenerCuentasOrigenHabilitadas' \ 
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
		"personaUId": 2, 
		"clienteUId": 81, 
		"productoUId": 41 
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
      <BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
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
         </sdtCuentas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>371</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-04-30</Fecha> 
            <Hora>11:32:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerCuentasOrigenHabilitadasResponse> 
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
        "Numero": "402", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ObtenerCuentasOrigenHabilitadas", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "11:24:55", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
clienteUId | Long | Identificador único de cliente. 
productoUId | Long | Identificador único de producto. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtCuentas | sBTProductoPasivo | Listado de cuentas habilitadas para origen del ahorro. 

Los campos del tipo de dato estructurado sBTProductoPasivo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador String bantotal (concatenación de todos los conceptos claves de la operación). 
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
30001 | No se recibió el identificador de la persona. 
30002 | No se recibió el identificador del cliente. 
30003 | No se recibió el identificador del producto de ahorro. 
30004 | No se recuperó el producto de ahorro para el identificador: [Número de identificador]. 
30005 | No se recuperó la persona para el identificador: [Número de identificador]. 
30006 | No se recuperó la cuenta para el identificador de cliente: [Número de identificador]. 
40001 | El producto seleccionado no corresponde a un producto de ahorro. 
40002 | La persona seleccionada no integra la cuenta-cliente. 
40101 | El cliente no se encuentra facultado para operar con cuenta vista. 


 
