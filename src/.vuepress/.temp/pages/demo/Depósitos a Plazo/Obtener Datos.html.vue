<template><div><h1 id="obtener-datos" tabindex="-1"><a class="header-anchor" href="#obtener-datos"><span>Obtener Datos</span></a></h1>
<p>Método para obtener los datos de un producto de depósito a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerDatos</td>
<td>RBTPG014</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Datos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>5</bts:operacionUId> 
      </bts:BTDepositosAPlazo.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDatos=' \ 
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
   "operacionUId": 5, 
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
      <BTDepositosAPlazo.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPlazoFijo> 
            <plazo>360</plazo> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <periodicidad>0</periodicidad> 
            <simboloMoneda>$</simboloMoneda> 
            <fechaVencimiento>2016-12-22</fechaVencimiento> 
            <producto> 
               <papel/> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
            </producto> 
            <intereses>55465.38</intereses> 
            <fechaProximoVencimiento>0000-00-00</fechaProximoVencimiento> 
            <tasaVigente>3.750000</tasaVigente> 
            <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT> 
            <renovacionAutomatica>N</renovacionAutomatica> 
            <idOperacionFmt>85-0</idOperacionFmt> 
            <interesesPendientes>0.00</interesesPendientes> 
            <cantidadRenovaciones>0</cantidadRenovaciones> 
            <tasaOriginal>3.750000</tasaOriginal> 
            <interesesAcreditados>0.00</interesesAcreditados> 
            <tipoTasa>Efectiva Anual</tipoTasa> 
            <acreditacionPeriodicaIntereses>N</acreditacionPeriodicaIntereses> 
            <cuentaContable/> 
            <operacionUId>5</operacionUId> 
            <instruccionVencimiento> 
               <sucursal>Casa Matriz</sucursal> 
               <producto> 
                  <papel/> 
                  <moneda>$</moneda> 
                  <productoUId>0</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
               </producto> 
               <descripcion>Cancelar y Acreditar al vto.</descripcion> 
               <operacionUId>9</operacionUId> 
               <idOperacionFmt>000000027_001</idOperacionFmt> 
            </instruccionVencimiento> 
            <instruccionAcreditacion> 
               <sucursal/> 
               <producto> 
                  <papel/> 
                  <moneda/> 
                  <productoUId>0</productoUId> 
                  <nombre/> 
               </producto> 
               <descripcion/> 
               <operacionUId>0</operacionUId> 
               <idOperacionFmt/> 
            </instruccionAcreditacion> 
            <saldo>0.00</saldo> 
            <montoInicial>1500000.00</montoInicial> 
            <estado/> 
            <diasHastaVencimiento>0</diasHastaVencimiento> 
            <montoFinal>0.00</montoFinal> 
            <sucursal>Casa Matriz</sucursal> 
            <fechaValor>2015-12-28</fechaValor> 
         </sdtPlazoFijo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>986</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerDatos</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-22</Fecha> 
            <Hora>14:57:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerDatosResponse> 
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
    }, 
    "sdtPlazoFijo": { 
      "plazo": "360", 
      "tasaEfectiva": "0.000000", 
      "periodicidad": "0", 
      "simboloMoneda": "$", 
      "fechaVencimiento": "2016-12-22", 
      "producto": { 
        "papel": "", 
        "moneda": "$", 
        "productoUId": "0", 
        "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible" 
      }, 
      "intereses": "55465.38", 
      "fechaProximoVencimiento": "0000-00-00", 
      "tasaVigente": "3.750000", 
      "idOperacionBT": "0010100000022000000000000000002700000000000085001", 
      "renovacionAutomatica": "N", 
      "idOperacionFmt": "85-0", 
      "interesesPendientes": "0.00", 
      "cantidadRenovaciones": "0", 
      "tasaOriginal": "3.750000", 
      "interesesAcreditados": "0.00", 
      "tipoTasa": "Efectiva Anual", 
      "acreditacionPeriodicaIntereses": "N", 
      "cuentaContable": "", 
      "operacionUId": "5", 
      "instruccionVencimiento": { 
        "sucursal": "Casa Matriz", 
        "producto": { 
          "papel": "", 
          "moneda": "$", 
          "productoUId": "0", 
          "nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física" 
        }, 
        "descripcion": "Cancelar y Acreditar al vto.", 
        "operacionUId": "9", 
        "idOperacionFmt": "000000027_001" 
      }, 
      "instruccionAcreditacion": { 
        "sucursal": "", 
        "producto": { 
          "papel": "", 
          "moneda": "", 
          "productoUId": "0", 
          "nombre": "" 
        }, 
        "descripcion": "", 
        "operacionUId": "0", 
        "idOperacionFmt": "" 
      }, 
      "saldo": "0.00", 
      "montoInicial": "1500000.00", 
      "estado": "", 
      "diasHastaVencimiento": "0", 
      "montoFinal": "0.00", 
      "sucursal": "Casa Matriz", 
      "fechaValor": "2015-12-28" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
      "Numero": "986", 
      "Estado": "OK", 
      "Servicio": "BTDepositosAPlazo.ObtenerDatos", 
      "Requerimiento": "", 
      "Fecha": "2017-12-22", 
      "Hora": "14:57:24", 
      "Canal": "BTDIGITAL" 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>expresadoEn</td>
<td>String</td>
<td>[M-Moneda / E-Especie]</td>
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
<td>sdtPlazoFijo</td>
<td>sBTPlazoFijo</td>
<td>Datos del depósito a plazo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPlazoFijo son los siguientes:</p>
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
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal de alta.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Simbolo moneda.</td>
</tr>
<tr>
<td>cuentaContable</td>
<td>String</td>
<td>Nombre de la cuenta contable.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripción de estado.</td>
</tr>
<tr>
<td>montoInicial</td>
<td>Double</td>
<td>Capital inicial del depósito.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Total de intereses del depósito.</td>
</tr>
<tr>
<td>interesesAcreditados</td>
<td>Double</td>
<td>Intereses acreditados.</td>
</tr>
<tr>
<td>interesesPendientes</td>
<td>Double</td>
<td>Intereses pendientes.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>diasHastaVencimiento</td>
<td>Int</td>
<td>Dias restantes hasta el vencimiento.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo Actual.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo en días.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Int</td>
<td>Periodicidad de acreditación de intereses.</td>
</tr>
<tr>
<td>fechaProximoVencimiento</td>
<td>Date</td>
<td>Fecha para proximo vencimiento.</td>
</tr>
<tr>
<td>tasaOriginal</td>
<td>Double</td>
<td>Tasa original.</td>
</tr>
<tr>
<td>tasaVigente</td>
<td>Double</td>
<td>Tasa vigente.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva.</td>
</tr>
<tr>
<td>cantidadRenovaciones</td>
<td>Short</td>
<td>Cantidad de renovaciones del depósito.</td>
</tr>
<tr>
<td>renovacionAutomatica</td>
<td>String</td>
<td>Renovación automatica (S/N).</td>
</tr>
<tr>
<td>acreditacionPeriodicaIntereses</td>
<td>String</td>
<td>Acredita periodicamente intereses (S/N).</td>
</tr>
<tr>
<td>instruccionVencimiento</td>
<td>sBTInstruccion</td>
<td>Datos de la instrucción al vencimiento.</td>
</tr>
<tr>
<td>instruccionAcreditacion</td>
<td>sBTInstruccion</td>
<td>Datos de la instrucción de acreditación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTInstruccion son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción de la instrucción.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos de producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la Sucursal de la operación.</td>
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
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


