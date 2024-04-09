<template><div><h1 id="obtener-facultades" tabindex="-1"><a class="header-anchor" href="#obtener-facultades"><span>Obtener Facultades</span></a></h1>
<p>Método para obtener un listado de las facultades de una persona.</p>
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
<td>BTPersonas.ObtenerFacultades</td>
<td>RBTPG453</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Facultades:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerFacultades> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>5f7c5e6a6f99865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:personasUId>183</bts:personasUId> 
      </bts:BTPersonas.ObtenerFacultades> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "GZ", 
          "Usuario": "INSTALADOR", 
          "Token": "5f7c5e6a6f99865B3A2E76CF" 
        }, 
        "personaUId": 183 
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
      <BTPersonas.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5f7c5e6a6f99865B3A2E76CF</Token> 
         </Btinreq> 
         <sdtFacultades> 
            <facultadesOperacion> 
               <SdtsBTFacultadPersonaOperacion> 
                  <producto> 
                     <papel>$</papel> 
                     <moneda>$</moneda> 
                     <productoUId>41</productoUId> 
                     <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  </producto> 
                  <descripcion>Retiro de cuentas vista</descripcion> 
                  <operacionUId>1011</operacionUId> 
                  <tipo>Persona</tipo> 
                  <potestad>Titular</potestad> 
                  <grupo> 
                     <numero>1</numero> 
                     <monto>0.00</monto> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                     <vigenciaHasta/> 
                     <codigoMoneda>0</codigoMoneda> 
                     <vigenciaDesde>2018-11-05</vigenciaDesde> 
                     <codigoPapel>0</codigoPapel> 
                  </grupo> 
                  <codigo>2</codigo> 
                  <categoria>-</categoria> 
               </SdtsBTFacultadPersonaOperacion> 
            </facultadesOperacion> 
            <facultadesCliente> 
               <SdtsBTFacultadPersonaCliente> 
                  <clienteUId>340</clienteUId> 
                  <descripcion>Firma de Cheques</descripcion> 
                  <potestad>Titular</potestad> 
                  <tipo>Categoría</tipo> 
                  <grupo> 
                     <numero>1</numero> 
                     <monto>2000000.00</monto> 
                     <moneda>$</moneda> 
                     <papel>$</papel> 
                     <vigenciaHasta>2022-09-23</vigenciaHasta> 
                     <codigoMoneda>0</codigoMoneda> 
                     <vigenciaDesde>2018-12-10</vigenciaDesde> 
                     <codigoPapel>0</codigoPapel> 
                  </grupo> 
                  <codigo>4</codigo> 
                  <categoria>A</categoria> 
               </SdtsBTFacultadPersonaCliente> 
            </facultadesCliente> 
         </sdtFacultades> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2957</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerFacultades</Servicio> 
            <Fecha>2023-03-27</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>11:40:36</Hora> 
         </Btoutreq> 
      </BTPersonas.ObtenerFacultadesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Device": "GZ", 
          "Usuario": "Instalador", 
          "Requerimiento": "0", 
          "Canal": "BTDIGITAL", 
          "Token": "5f7c5e6a6f99865B3A2E76CF" 
        }, 
        "sdtFacultades": { 
          "facultadesOperacion": { 
            "SdtsBTFacultadPersonaOperacion": { 
              "producto": { 
                "papel": "$", 
                "moneda": "$", 
                "productoUId": "41", 
                "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
              }, 
              "descripcion": "Retiro de cuentas vista", 
              "operacionUId": "1011", 
              "tipo": "Persona", 
              "potestad": "Titular", 
              "grupo": { 
                "numero": "1", 
                "monto": "0.00", 
                "moneda": "$", 
                "papel": "$", 
                "vigenciaHasta": { 
                  "-self-closing": "true" 
                }, 
                "codigoMoneda": "0", 
                "vigenciaDesde": "2018-11-05", 
                "codigoPapel": "0" 
              }, 
              "codigo": "2", 
              "categoria": "-" 
            } 
          }, 
          "facultadesCliente": { 
            "SdtsBTFacultadPersonaCliente": { 
              "clienteUId": "340", 
              "descripcion": "Firma de Cheques", 
              "potestad": "Titular", 
              "tipo": "Categoría", 
              "grupo": { 
                "numero": "1", 
                "monto": "2000000.00", 
                "moneda": "$", 
                "papel": "$", 
                "vigenciaHasta": "2022-09-23", 
                "codigoMoneda": "0", 
                "vigenciaDesde": "2018-12-10", 
                "codigoPapel": "0" 
              }, 
              "codigo": "4", 
              "categoria": "A" 
            } 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTPersonas.ObtenerFacultades", 
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
<td>personasUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtFacultades</td>
<td>sBTFacultadesPersona</td>
<td>Listado de datos de facultades.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadesPersona son los siguientes:</p>
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
<td>sBTFacultadesCliente</td>
<td>sBTFacultadPersonaCliente</td>
<td>Listado de datos de cliente.</td>
</tr>
<tr>
<td>sBTFacultadesOperacion</td>
<td>sBTFacultadPersonaOperacion</td>
<td>Listado de datos de operación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadPersonaCliente son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
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
<td>tipo</td>
<td>String</td>
<td>Tipo.</td>
</tr>
<tr>
<td>categoria</td>
<td>String</td>
<td>Categoria.</td>
</tr>
<tr>
<td>potestad</td>
<td>String</td>
<td>Potestad.</td>
</tr>
<tr>
<td>grupo</td>
<td>sBTFacultadGrupoPersona</td>
<td>Listado de grupos de la facultad.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadPersonaOperacion son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
</tr>
<tr>
<td>producto</td>
<td>sbtProducto</td>
<td>Datos de producto.</td>
</tr>
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
<td>tipo</td>
<td>String</td>
<td>Tipo.</td>
</tr>
<tr>
<td>categoria</td>
<td>String</td>
<td>Categoria.</td>
</tr>
<tr>
<td>potestad</td>
<td>String</td>
<td>Potestad.</td>
</tr>
<tr>
<td>grupo</td>
<td>sBTFacultadGrupoPersona</td>
<td>Listado de grupos de la facultad.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo del papel.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadGrupoPersona son los siguientes:</p>
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
<td>numero</td>
<td>Short</td>
<td>Número de grupo.</td>
</tr>
<tr>
<td>vigenciaDesde</td>
<td>Date</td>
<td>Fecha de vigencia desde.</td>
</tr>
<tr>
<td>vigenciaHasta</td>
<td>Date</td>
<td>Fecha de vigencia hasta.</td>
</tr>
<tr>
<td>monto</td>
<td>Decimal</td>
<td>Monto.</td>
</tr>
<tr>
<td>codigoMoneda</td>
<td>Int</td>
<td>Código de moneda.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Moneda.</td>
</tr>
<tr>
<td>codigoPapel</td>
<td>Int</td>
<td>Código de papel.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Papel.</td>
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
<td>No se recibió el identificador único de persona.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recuperó la persona  para el Identificador: [Número de identificador].</td>
</tr>
</tbody>
</table>
</div></template>


