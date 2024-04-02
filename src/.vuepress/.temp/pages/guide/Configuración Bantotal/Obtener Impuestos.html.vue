<template><div><h1 id="obtener-impuestos" tabindex="-1"><a class="header-anchor" href="#obtener-impuestos"><span>Obtener Impuestos</span></a></h1>
<p>Método para obtener un listado de los impuestos ingresados en Bantotal.</p>
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
<td>BTConfiguracionBantotal.ObtenerImpuestos</td>
<td>RBTPG710</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Impuestos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerImpuestos> 
         <bts:Btinreq> 
            <bts:Device>BTDIGITAL</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>670752960CD285A89A23FBEE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerImpuestos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerImpuestos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "558273287F955E77534D3E02", 
	  "bts:Device": "AC" 
	} 
} 
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
      <BTConfiguracionBantotal.ObtenerImpuestosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>670752960CD285A89A23FBEE</Token> 
            <Device>BTDIGITAL</Device> 
         </Btinreq> 
         <sdtImpuestos> 
            <SdtsBTImpuesto> 
               <codigo>1</codigo> 
               <descripcion>I.V.A.</descripcion> 
               <condiciones> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>1</codigo> 
                     <descripcion>Gravado</descripcion> 
                     <tipo>A</tipo> 
                  </SdtsBTImpuestoCondicion> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>2</codigo> 
                     <descripcion>Responsable Inscripto</descripcion> 
                     <tipo>J</tipo> 
                  </SdtsBTImpuestoCondicion> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>4</codigo> 
                     <descripcion>Exento o  No Alcanzado</descripcion> 
                     <tipo>A</tipo> 
                  </SdtsBTImpuestoCondicion> 
               </condiciones> 
            </SdtsBTImpuesto> 
            <SdtsBTImpuesto> 
               <codigo>2</codigo> 
               <descripcion>Ingresos Brutos Percepciones</descripcion> 
               <condiciones> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>1</codigo> 
                     <descripcion>Gravado</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>2</codigo> 
                     <descripcion>Responsable Inscripto</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
               </condiciones> 
            </SdtsBTImpuesto> 
            <SdtsBTImpuesto> 
               <codigo>4</codigo> 
               <descripcion>Impuesto de Sellos</descripcion> 
               <condiciones> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>1</codigo> 
                     <descripcion>Gravado</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>2</codigo> 
                     <descripcion>Exento</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
               </condiciones> 
            </SdtsBTImpuesto> 
            <SdtsBTImpuesto> 
               <codigo>5</codigo> 
               <descripcion>Ret. Impuesto a las Ganancias</descripcion> 
               <condiciones> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>1</codigo> 
                     <descripcion>Gravado</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
                  <SdtsBTImpuestoCondicion> 
                     <codigo>4</codigo> 
                     <descripcion>Excento</descripcion> 
                     <tipo/> 
                  </SdtsBTImpuestoCondicion> 
               </condiciones> 
            </SdtsBTImpuesto> 
         </sdtImpuestos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTConfiguracionBantotal.ObtenerImpuestos</Servicio> 
            <Fecha>2021-05-27</Fecha> 
            <Hora>11:58:08</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8353</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerImpuestosResponse> 
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
      "Usuario": "INSTALADOR", 
      "Token": "670752960CD285A89A23FBEE", 
      "Device": "BTDIGITAL" 
   }, 
   "sdtImpuestos": { 
      "SdtsBTImpuesto": [ 
         { 
            "codigo": "1", 
            "descripcion": "I.V.A.", 
            "condiciones": { 
               "SdtsBTImpuestoCondicion": [ 
                  { 
                     "codigo": "1", 
                     "descripcion": "Gravado", 
                     "tipo": "A" 
                  }, 
                  { 
                     "codigo": "2", 
                     "descripcion": "Responsable Inscripto", 
                     "tipo": "J" 
                  }, 
                  { 
                     "codigo": "4", 
                     "descripcion": "Exento o  No Alcanzado", 
                     "tipo": "A" 
                  } 
               ] 
            } 
         }, 
         { 
            "", 
            "": "Ingresos Brutos Percepciones", 
            "condiciones": { 
               "SdtsBTImpuestoCondicion": [ 
                  { 
                     "codigo": "1", 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": "2", 
                     "descripcion": "Responsable Inscripto", 
                     "tipo": null 
                  } 
               ] 
            } 
         }, 
         { 
            "codigo": "4", 
            "descripcion": "Impuesto de Sellos", 
            "condiciones": { 
               "SdtsBTImpuestoCondicion": [ 
                  { 
                     "codigo": "1", 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": "2", 
                     "descripcion": "Exento", 
                     "tipo": null 
                  } 
               ] 
            } 
         }, 
         { 
            "codigo": "5", 
            "descripcion": "Ret. Impuesto a las Ganancias", 
            "condiciones": { 
               "SdtsBTImpuestoCondicion": [ 
                  { 
                     "codigo": "1", 
                     "descripcion": "Gravado", 
                     "tipo": null 
                  }, 
                  { 
                     "codigo": "4", 
                     "descripcion": "Excento", 
                     "tipo": null 
                  } 
               ] 
            } 
         } 
      ] 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTConfiguracionBantotal.ObtenerImpuestos", 
      "Fecha": "2021-05-27", 
      "Hora": "11:58:08", 
      "Requerimiento": "1", 
      "Numero": "8353", 
      "Estado": "OK" 
   } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica</p>
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
<td>sdtImpuestos</td>
<td>sBTImpuesto</td>
<td>Colección de datos de impuestos.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTImpuesto tiene los siguientes campos:</p>
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
<td>Código de impuesto.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del impuesto.</td>
</tr>
<tr>
<td>condiciones</td>
<td>sBTImpuestoCondicion</td>
<td>Colección de condiciones del impuesto.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTImpuestoCondicion tiene los siguientes campos:</p>
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
<td>Código de condición.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de condición.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de condición.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica</p>
</div></template>


