<template><div><h1 id="obtener-productos-habilitados" tabindex="-1"><a class="header-anchor" href="#obtener-productos-habilitados"><span>Obtener Productos Habilitados</span></a></h1>
<p>Método para obtener un listado de los productos de deposito a plazo habilitados.</p>
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
<td>BTDepositoAPlazo.ObtenerProductosHabilitados</td>
<td>RBTPG447</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Configuración de productos válidos:</li>
</ol>
<ul>
<li>
<p>En adición a la guía 70100 se agrego que en el valor especifico 3 se indica el tipo de    producto, donde los valores posibles son: (1- Deposito al venicmiento, 2- Pago periódico de intereses).</p>
</li>
<li>
<p>Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera:</p>
</li>
</ul>
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
<td>Valor incremental</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Módulo</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Tipo de operación</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 2</td>
<td>Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 3</td>
<td>Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Productos Habilitados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerProductosHabilitados> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:tipoDeProducto></bts:tipoDeProducto> 
      </bts:BTDepositosAPlazo.ObtenerProductosHabilitados> 
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
         "tipoDeProducto": "" 
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
      <BTDepositosAPlazo.ObtenerProductosHabilitados xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTProductosDepositoAPlazo> 
            <Producto> 
               <Producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre> 
                  <moneda>S/.</moneda> 
                  <papel>$</papel> 
               </Producto> 
               <tipoDeDeposito>PP</tipoDeDeposito> 
               <DatosExtendidos></DatosExtendidos> 
            </Producto> 
         </sBTProductosDepositoAPlazo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.ObtenerProductosHabilitados</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:40:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>496</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerProductosHabilitados> 
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
        "sBTProductosDepositoAPlazo": { 
          "Producto": { 
            "Producto": { 
              "productoUId": 132, 
              "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.", 
              "moneda": "S/.", 
              "papel": "$" 
            }, 
            "tipoDeDeposito": "PP", 
            "DatosExtendidos": "" 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTDepositosAPlazo.ObtenerProductosHabilitados", 
          "Fecha": "2022-11-29", 
          "Hora": "10:40:47", 
          "Requerimiento": 1, 
          "Numero": 496, 
          "Estado": "OK" 
        } 
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
<td>tipoDeProducto</td>
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
<td>sdtProductosDepositoAPlazo</td>
<td>sBTProductosDepositoAPlazo</td>
<td>Listado de productos habilitados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProductosDepositoAPlazo son los siguientes:</p>
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
<td>producto</td>
<td>sBTProducto</td>
<td>Producto.</td>
</tr>
<tr>
<td>tipoDeDeposito</td>
<td>String</td>
<td>Tipo de depósito. (VTO: Vencimiento, PP: Pago periódico).</td>
</tr>
<tr>
<td>datosExtendidos</td>
<td>sBTDatosExtendidos</td>
<td>Listado de datos complementarios.</td>
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
<td>Lista de datos</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


