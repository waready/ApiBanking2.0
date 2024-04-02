<template><div><h1 id="obtener-rubros-bolsa" tabindex="-1"><a class="header-anchor" href="#obtener-rubros-bolsa"><span>Obtener Rubros Bolsa</span></a></h1>
<p>Método para obtener posibles rubros de bolsa ingresados en el sistema.</p>
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
<td>BTIndicadores.ObtenerRubrosBolsa</td>
<td>RBTPG708</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Rubros Bolsa:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerRubrosBolsa> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerRubrosBolsa> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerRubrosBolsa' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
   "Btinreq": { 
      "Device": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?" 
   } 
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
      <BTIndicadores.ObtenerRubrosBolsaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtRubrosBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>0</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>9</ocurrencias> 
               <descripcion>Mon.Y Bill.En Empresa-Ventanilla</descripcion> 
               <subOperacion>400</subOperacion> 
               <rubro>101002001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>119</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>3</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>51</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>176</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>1</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>176</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Fis.Residentes</descripcion> 
               <subOperacion>2</subOperacion> 
               <rubro>140102001</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>1</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>59</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>Cuentas Corrientes P.Jur.Residentes</descripcion> 
               <subOperacion>1</subOperacion> 
               <rubro>140102002</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>2</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>166</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>BLOQUEO DE CUENTAS CORRIENTES</descripcion> 
               <subOperacion>3</subOperacion> 
               <rubro>902010150</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>0</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
            <sBTRubroBolsa> 
               <moneda>0</moneda> 
               <cuentaCliente>166</cuentaCliente> 
               <signoMoneda>$</signoMoneda> 
               <ocurrencias>2</ocurrencias> 
               <descripcion>CC. BLOQUEO DE CUENTAS CORRIENTES</descripcion> 
               <subOperacion>3</subOperacion> 
               <rubro>902020150</rubro> 
               <papel>0</papel> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <nombrePapel>Billete</nombrePapel> 
               <empresa>1</empresa> 
               <tipoOperacion>0</tipoOperacion> 
               <operacion>11</operacion> 
               <sucursal>1</sucursal> 
               <nombreEmpresa>Finaxis</nombreEmpresa> 
            </sBTRubroBolsa> 
         </sdtRubrosBolsa> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11987</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerRubrosBolsa</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:55:55</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerRubrosBolsaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
  "Btinreq": { 
      "Device": 1, 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?", 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7" 
   }, 
   "sdtRubrosBolsa": { 
      "sBTRubroBolsa": [ 
      { 
         "moneda": 0, 
         "cuentaCliente": 0, 
         "signoMoneda": "$", 
         "ocurrencias": 9, 
         "descripcion": "Mon.Y Bill.En Empresa-Ventanilla", 
         "subOperacion": 400, 
         "rubro": 101002001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 119, 
         "signoMoneda": "$", 
         "ocurrencias": 3, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 51, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 176, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 1, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 176, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Fis.Residentes", 
         "subOperacion": 2, 
         "rubro": 140102001, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 1, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 59, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "Cuentas Corrientes P.Jur.Residentes", 
         "subOperacion": 1, 
         "rubro": 140102002, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 2, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 166, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "BLOQUEO DE CUENTAS CORRIENTES", 
         "subOperacion": 3, 
         "rubro": 902010150, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 0, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      }, 
      { 
         "moneda": 0, 
         "cuentaCliente": 166, 
         "signoMoneda": "$", 
         "ocurrencias": 2, 
         "descripcion": "CC. BLOQUEO DE CUENTAS CORRIENTES", 
         "subOperacion": 3, 
         "rubro": 902020150, 
         "papel": 0, 
         "nombreSucursal": "Casa Matriz", 
         "nombrePapel": "Billete", 
         "empresa": 1, 
         "tipoOperacion": 0, 
         "operacion": 11, 
         "sucursal": 1, 
         "nombreEmpresa": "Finaxis" 
      } 
      ] 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11987, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerRubrosBolsa", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "13:55:55" 
   } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtRubrosBolsa</td>
<td>sBTRubroBolsa</td>
<td>Listado de rubros de bolsa.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTRubroBolsa son los siguientes:</p>
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
<td>empresa</td>
<td>Int</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>sucursal</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>rubro</td>
<td>Int</td>
<td>Número de rubro.</td>
</tr>
<tr>
<td>moneda</td>
<td>Int</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>Int</td>
<td>Identificador de papel.</td>
</tr>
<tr>
<td>cuentaCliente</td>
<td>Int</td>
<td>Cuenta cliente.</td>
</tr>
<tr>
<td>operacion</td>
<td>Int</td>
<td>Identificador de operación.</td>
</tr>
<tr>
<td>subOperacion</td>
<td>Int</td>
<td>Identificador de sub operación.</td>
</tr>
<tr>
<td>tipoOperacion</td>
<td>Int</td>
<td>Identificador de tipo de operación.</td>
</tr>
<tr>
<td>signoMoneda</td>
<td>String</td>
<td>Signo de la moneda.</td>
</tr>
<tr>
<td>nombreEmpresa</td>
<td>String</td>
<td>Nombre de la empresa.</td>
</tr>
<tr>
<td>nombreSucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>nombrePapel</td>
<td>String</td>
<td>Nombre del papel.</td>
</tr>
<tr>
<td>ocurrencias</td>
<td>Int</td>
<td>Ocurrencias.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Nombre del rubro.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


