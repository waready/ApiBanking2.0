# Obtener Instrucciones Habilitados 

Método para obtener un listado de las instrucciones de un producto. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTDepositoAPlazo.ObtenerInstruccionesHabilitados | RBTPG455 | Global 

### Configuración Backend 

1) Configuración de productos válidos: 

   * Se debe agregar en la guía especial 70101, para cada producto de la siguiente manera: 

Campo | Valor 
--------- | -----------  
Correlativo 1 | Módulo. 
Correlativo 2 | Tipo de operación (El valor 999 indica todos los tipos de operación). 
Correlativo 3 | Valor incremental. 
Valor específico 1 | Moneda (El valor 9999 indica todas las monedas). 
Valor específico 2 | Papel (El valor 999999 indica todos los papeles). 
Valor específico 3 | Código de instrucción a habilitar. 
Importe específico 1 | Tipo de deposito (1- Deposito al venicmiento, 2- Pago periódico de intereses). 

> Ejemplo de invocación al método Obtener Instrucciones Habilitados: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerInstruccionesHaiblitadas> 
       <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>132</bts:productoUId> 
         <bts:tipoProducto></bts:tipoProducto> 
      </bts:BTDepositosAPlazo.ObtenerInstruccionesHaiblitadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "productoUId": 132, 
        "tipoProducto": "" 
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
      <BTDepositosAPlazo.ObtenerInstruccionesHaiblitadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <Instrucciones> 
            <Instruccion> 
               <codigo>2</codigo> 
               <descripcion>Cancelar y Acreditar al vto.</descripcion> 
               <datosExtendidos> 
                  <SdtsBTDatoExtendido> 
                     <Clave>TIPO_PRODUCTO</Clave> 
                     <Tipo>D</Tipo> 
                     <Valor>VTO</Valor> 
                     <Lista></Lista> 
                  </SdtsBTDatoExtendido> 
               </datosExtendidos> 
            </Instruccion> 
            <Instruccion> 
               <codigo>6</codigo> 
               <descripcion>Renovación Automática</descripcion> 
               <datosExtendidos> 
                  <SdtsBTDatoExtendido> 
                     <Clave>TIPO_PRODUCTO</Clave> 
                     <Tipo>D</Tipo> 
                     <Valor>VTO</Valor> 
                     <Lista></Lista> 
                  </SdtsBTDatoExtendido> 
               </datosExtendidos> 
            </Instruccion> 
            <Instruccion> 
               <codigo>7</codigo> 
               <descripcion>Acreditación</descripcion> 
               <datosExtendidos> 
                  <SdtsBTDatoExtendido> 
                     <Clave>TIPO_PRODUCTO</Clave> 
                     <Tipo>D</Tipo> 
                     <Valor>PP</Valor> 
                     <Lista></Lista> 
                  </SdtsBTDatoExtendido> 
               </datosExtendidos> 
            </Instruccion> 
            <Instruccion> 
               <codigo>8</codigo> 
               <descripcion>Capitalización Periódica Int.</descripcion> 
               <datosExtendidos> 
                  <SdtsBTDatoExtendido> 
                     <Clave>TIPO_PRODUCTO</Clave> 
                     <Tipo>D</Tipo> 
                     <Valor>PP</Valor> 
                     <Lista></Lista> 
                  </SdtsBTDatoExtendido> 
               </datosExtendidos> 
            </Instruccion> 
         </Instrucciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ObtenerInstruccionesHaiblitadas</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:23:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>486</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerInstruccionesHaiblitadasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "Instrucciones": { 
          "Instruccion": [ 
            { 
              "codigo": 2, 
              "descripcion": "Cancelar y Acreditar al vto.", 
              "datosExtendidos": { 
                "SdtsBTDatoExtendido": { 
                  "Clave": "TIPO_PRODUCTO", 
                  "Tipo": "D", 
                  "Valor": "VTO", 
                  "Lista": "" 
                } 
              } 
            }, 
            { 
              "codigo": 6, 
              "descripcion": "Renovación Automática", 
              "datosExtendidos": { 
                "SdtsBTDatoExtendido": { 
                  "Clave": "TIPO_PRODUCTO", 
                  "Tipo": "D", 
                  "Valor": "VTO", 
                  "Lista": "" 
                } 
              } 
            }, 
            { 
              "codigo": 7, 
              "descripcion": "Acreditación", 
              "datosExtendidos": { 
                "SdtsBTDatoExtendido": { 
                  "Clave": "TIPO_PRODUCTO", 
                  "Tipo": "D", 
                  "Valor": "PP", 
                  "Lista": "" 
                } 
              } 
            }, 
            { 
              "codigo": 8, 
              "descripcion": "Capitalización Periódica Int.", 
              "datosExtendidos": { 
                "SdtsBTDatoExtendido": { 
                  "Clave": "TIPO_PRODUCTO", 
                  "Tipo": "D", 
                  "Valor": "PP", 
                  "Lista": "" 
                } 
              } 
            } 
          ] 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTDepositosAPlazo.ObtenerInstruccionesHaiblitadas", 
          "Fecha": "2022-11-29", 
          "Hora": "10:23:37", 
          "Requerimiento": 1, 
          "Numero": 486, 
          "Estado": "OK" 
        } 
}' 
``` 
</code-block> 
</code-group>  

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto. 
tipoProducto | String | Tipo de producto (VTO: Vencimiento, PP: Pago periódico). 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 
sdtCodigoInstrucciones | sBTCodigoInstrucciones | Listado de codigos de instrucciones. 

Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Clave del dato extendido. 
tipo | String | Tipo de dato extendido. 
valor | String | Valor de dato extendido. 
Lista | sBTDatosLista | Lista de datos. 

Los campos del tipo de dato estructurado sBTCodigoInstrucciones son los siguientes:  

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
codigo | Short | Código. 
descripcion | String | Descripción. 
datosExtendidos | sBTDatoExtendido | Listado de datos complementarios. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador del Producto. 
30006 | No existe registro para el producto indicado. 
40001 | No existen Instrucciones ingresados en el sistema. 

 
