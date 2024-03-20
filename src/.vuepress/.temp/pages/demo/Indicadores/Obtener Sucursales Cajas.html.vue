<template><div><h1 id="obtener-sucursales-cajas" tabindex="-1"><a class="header-anchor" href="#obtener-sucursales-cajas"><span>Obtener Sucursales Cajas</span></a></h1>
<p>Método para obtener porcentajes y listados de sucursales y cajas del sistema.</p>
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
<td>BTIndicadores.ObtenerSucursalesCajas</td>
<td>RBTPG705</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Sucursales Cajas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerSucursalesCajas> 
         <bts:Btinreq> 
           <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerSucursalesCajas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerSucursalesCajas' \ 
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
      <BTIndicadores.ObtenerSucursalesCajasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtSucursalesCajas> 
            <cajasCerradas>0</cajasCerradas> 
            <porcentajeCajasA>100.00</porcentajeCajasA> 
            <listadoCajasA> 
               <sBTCaja> 
                  <usuario>ASESOR</usuario> 
                  <nombre>ASESOR</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>BANTOTAL</usuario> 
                  <nombre>BANTOTAL</nombre> 
                  <indicador>111</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAJERO</usuario> 
                  <nombre>CAJERO</nombre> 
                  <indicador>402</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAPTACCONF</usuario> 
                  <nombre>CAPTACCONF</nombre> 
                  <indicador>350</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>CAPTACION</usuario> 
                  <nombre>CAPTACION</nombre> 
                  <indicador>401</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>EJECCUENTA</usuario> 
                  <nombre>EJECCUENTA</nombre> 
                  <indicador>23</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>GERENTE</usuario> 
                  <nombre>GERENTE</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>INSTALADOR</usuario> 
                  <nombre>INSTALADOR</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>INSTALADORBANTOTAL</usuario> 
                  <nombre>INSTALADOR BANTOTAL2</nombre> 
                  <indicador>5000</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>JEFE</usuario> 
                  <nombre>JEFE</nombre> 
                  <indicador>400</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>SEGURIDAD</usuario> 
                  <nombre>SEGURIDAD</nombre> 
                  <indicador>55</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>TESORSUC</usuario> 
                  <nombre>TESORSUC</nombre> 
                  <indicador>403</indicador> 
                  <sucursalId>1000</sucursalId> 
               </sBTCaja> 
               <sBTCaja> 
                  <usuario>USUARIOBIT</usuario> 
                  <nombre/> 
                  <indicador>17</indicador> 
                  <sucursalId>1</sucursalId> 
               </sBTCaja> 
            </listadoCajasA> 
            <listadoSucursalesC> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Sucursal 25634</descripcion> 
                  <direccion/> 
                  <identificador>25634</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
            </listadoSucursalesC> 
            <cajasAbiertas>13</cajasAbiertas> 
            <listadoSucursalesA> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Casa Matriz</descripcion> 
                  <direccion/> 
                  <identificador>1</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
               <sBTSucursal> 
                  <telefono/> 
                  <descripcion>Sucursal Ciudad de la Costa</descripcion> 
                  <direccion/> 
                  <identificador>1000</identificador> 
                  <longitud>0E-14</longitud> 
                  <latitud>0E-14</latitud> 
               </sBTSucursal> 
            </listadoSucursalesA> 
            <sucursalesCerradas>1</sucursalesCerradas> 
            <sucursalesAbiertas>2</sucursalesAbiertas> 
            <porcentajeSucursalesC>33.33</porcentajeSucursalesC> 
            <totalCajas>13</totalCajas> 
            <porcentajeSucursalesA>66.66</porcentajeSucursalesA> 
            <porcentajeCajasC>0.00</porcentajeCajasC> 
            <totalSucursales>3</totalSucursales> 
            <listadoCajasC></listadoCajasC> 
         </sdtSucursalesCajas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11992</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerSucursalesCajas</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:20:16</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerSucursalesCajasResponse> 
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
   "sdtSucursalesCajas": { 
      "cajasCerradas": 0, 
      "porcentajeCajasA": 100, 
      "listadoCajasA": { 
      "sBTCaja": [ 
         { 
            "usuario": "ASESOR", 
            "nombre": "ASESOR", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "indicador": 111, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "indicador": 402, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAPTACCONF", 
            "nombre": "CAPTACCONF", 
            "indicador": 350, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "CAPTACION", 
            "nombre": "CAPTACION", 
            "indicador": 401, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "EJECCUENTA", 
            "nombre": "EJECCUENTA", 
            "indicador": 23, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "INSTALADOR", 
            "nombre": "INSTALADOR", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "INSTALADORBANTOTAL", 
            "nombre": "INSTALADOR BANTOTAL2", 
            "indicador": 5000, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "JEFE", 
            "nombre": "JEFE", 
            "indicador": 400, 
            "sucursalId": 1 
         }, 
         { 
            "usuario": "SEGURIDAD", 
            "nombre": "SEGURIDAD", 
            "indicador": 55, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "TESORSUC", 
            "nombre": "TESORSUC", 
            "indicador": 403, 
            "sucursalId": 1000 
         }, 
         { 
            "usuario": "USUARIOBIT", 
            "nombre": "", 
            "indicador": 17, 
            "sucursalId": 1 
         } 
      ] 
      }, 
      "listadoSucursalesC": { 
      "sBTSucursal": { 
         "telefono": "", 
         "descripcion": "Sucursal 25634", 
         "direccion": "", 
         "identificador": 25634, 
         "longitud": 0, 
         "latitud": 0 
      } 
      }, 
      "cajasAbiertas": 13, 
      "listadoSucursalesA": { 
      "sBTSucursal": [ 
         { 
            "telefono": "", 
            "descripcion": "Casa Matriz", 
            "direccion": "", 
            "identificador": 1, 
            "longitud": 0, 
            "latitud": 0 
         }, 
         { 
            "telefono": "", 
            "descripcion": "Sucursal Ciudad de la Costa", 
            "direccion": "", 
            "identificador": 1000, 
            "longitud": 0, 
            "latitud": 0 
         } 
      ] 
      }, 
      "sucursalesCerradas": 1, 
      "sucursalesAbiertas": 2, 
      "porcentajeSucursalesC": 33.33, 
      "totalCajas": 13, 
      "porcentajeSucursalesA": 66.66, 
      "porcentajeCajasC": 0, 
      "totalSucursales": 3, 
      "listadoCajasC": "" 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11992, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerSucursalesCajas", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "15:20:16" 
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
<td>totalSucursales</td>
<td>Int</td>
<td>Número total de sucursales.</td>
</tr>
<tr>
<td>sucursalesCerradas</td>
<td>Int</td>
<td>Número de sucursales cerradas.</td>
</tr>
<tr>
<td>sucursalesAbiertas</td>
<td>Int</td>
<td>Número de sucursales abiertas.</td>
</tr>
<tr>
<td>porcentajeSucursalesC</td>
<td>Int</td>
<td>Porcentaje de sucursales cerradas.</td>
</tr>
<tr>
<td>porcentajeSucursalesA</td>
<td>Int</td>
<td>Porcentaje de sucursales abiertas.</td>
</tr>
<tr>
<td>listadoSucursalesC</td>
<td>sBTSucursal</td>
<td>Listado de sucursales cerradas.</td>
</tr>
<tr>
<td>listadoSucursalesA</td>
<td>sBTSucursal</td>
<td>Listado de sucursales abiertas.</td>
</tr>
<tr>
<td>totalCajas</td>
<td>Int</td>
<td>Número total de cajas.</td>
</tr>
<tr>
<td>cajasCerradas</td>
<td>Int</td>
<td>Número de cajas cerradas.</td>
</tr>
<tr>
<td>cajasAbiertas</td>
<td>Int</td>
<td>Número de cajas abiertas.</td>
</tr>
<tr>
<td>porcentajeCajasC</td>
<td>Int</td>
<td>Porcentaje de cajas cerradas.</td>
</tr>
<tr>
<td>porcentajeCajasA</td>
<td>Int</td>
<td>Porcentaje de ajas abiertas.</td>
</tr>
<tr>
<td>listadoCajasC</td>
<td>sBTCaja</td>
<td>Listado de cajas cerradas.</td>
</tr>
<tr>
<td>listadoCajasA</td>
<td>sBTCaja</td>
<td>Listado de cajas abiertas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSucursal son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de la sucursal.</td>
</tr>
<tr>
<td>direccion</td>
<td>String</td>
<td>Dirección de la sucursal.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono de la sucursal.</td>
</tr>
<tr>
<td>latitud</td>
<td>Int</td>
<td>Latitud de la sucursal.</td>
</tr>
<tr>
<td>longitud</td>
<td>Int</td>
<td>Longitud de la sucursal.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCaja son los siguientes:</p>
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de la sucursal.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Usuario de la caja.</td>
</tr>
<tr>
<td>indicador</td>
<td>Int</td>
<td>Indicador de la caja.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de la caja.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


