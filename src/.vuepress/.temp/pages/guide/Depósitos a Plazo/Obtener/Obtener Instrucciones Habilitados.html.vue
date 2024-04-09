<template><div><h1 id="obtener-instrucciones-habilitados" tabindex="-1"><a class="header-anchor" href="#obtener-instrucciones-habilitados"><span>Obtener Instrucciones Habilitados</span></a></h1>
<p>Método para obtener un listado de las instrucciones de un producto.</p>
<table>
<thead>
<tr>
<th>Nombre publicación</th>
<th>Programa</th>
<th>Global/País</th>
</tr>
</thead>
<tbody>
<tr>
<td>BTDepositoAPlazo.ObtenerInstruccionesHabilitados</td>
<td>RBTPG455</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Configuración de productos válidos:</p>
<ul>
<li>Se debe agregar en la guía especial 70101, para cada producto de la siguiente manera:</li>
</ul>
</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>Módulo.</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Tipo de operación (El valor 999 indica todos los tipos de operación).</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Valor incremental.</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda (El valor 9999 indica todas las monedas).</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel (El valor 999999 indica todos los papeles).</td>
</tr>
<tr>
<td>Valor específico 3</td>
<td>Código de instrucción a habilitar.</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de deposito (1- Deposito al venicmiento, 2- Pago periódico de intereses).</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Instrucciones Habilitados:</p>
</blockquote>
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
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
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
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto (VTO: Vencimiento, PP: Pago periódico).</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
<tr>
<td>sdtCodigoInstrucciones</td>
<td>sBTCodigoInstrucciones</td>
<td>Listado de codigos de instrucciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCodigoInstrucciones son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>codigo</td>
<td>Short</td>
<td>Código.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>datosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador del Producto.</td>
</tr>
<tr>
<td>30006</td>
<td>No existe registro para el producto indicado.</td>
</tr>
<tr>
<td>40001</td>
<td>No existen Instrucciones ingresados en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


