<template><div><h1 id="obtener-detalle" tabindex="-1"><a class="header-anchor" href="#obtener-detalle"><span>Obtener Detalle</span></a></h1>
<p>Método para obtener los datos de un préstamo.</p>
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
<td>BTPrestamos.ObtenerDetalle</td>
<td>RBTPG012</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalle> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:OperacionUId>142</bts:OperacionUId> 
      </bts:BTPrestamos.ObtenerDetalle> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalle=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "OperacionUId": 142 
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
      <BTPrestamos.ObtenerDetalleResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPrestamo> 
            <interesVigente>6812.75</interesVigente> 
            <deudaTotalVencida>17614.00</deudaTotalVencida> 
            <tipoTasaMora>Lineal Anual</tipoTasaMora> 
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso> 
            <sucursal>Sucursal Beta</sucursal> 
            <diasMoraPromedio>0</diasMoraPromedio> 
            <plus>0.000000</plus> 
            <actividad>01112 Trigo</actividad> 
            <tasaOriginal>10.000000</tasaOriginal> 
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT> 
            <diasMora>83</diasMora> 
            <cantidadCuotas>37</cantidadCuotas> 
            <estado>Normal</estado> 
            <capitalOriginal>180000.00</capitalOriginal> 
            <tipoDia>Meses Calendario</tipoDia> 
            <fechaPrimerPago>2018-07-18</fechaPrimerPago> 
            <claseTasa/> 
            <tipoAmortizacion>Leasing</tipoAmortizacion> 
            <simboloMoneda>$</simboloMoneda> 
            <operacionUId>142</operacionUId> 
            <fechaPrimerCuotaImpaga>2018-07-18</fechaPrimerCuotaImpaga> 
            <valorCuota>0.00</valorCuota> 
            <diasRevision>0</diasRevision> 
            <precioOriginal>0.000000</precioOriginal> 
            <tasaVigente>10.000000</tasaVigente> 
            <tasaMoraVigente>0.000000</tasaMoraVigente> 
            <interesDevengado>0.00</interesDevengado> 
            <interesSuspenso>0.00</interesSuspenso> 
            <deudaCancelacionTotal>213849.01</deudaCancelacionTotal> 
            <plazo>1096</plazo> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <interesMora>154.45</interesMora> 
            <saldoCapital>174180.15</saldoCapital> 
            <precioActual>0.000000</precioActual> 
            <cantidadCuotasVencidas>3</cantidadCuotasVencidas> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>0</productoUId> 
               <nombre>LEASING, Amort. - Capital F./Empr.- T/F</nombre> 
            </producto> 
            <fechaUltimoPago>2018-05-18</fechaUltimoPago> 
            <interesMoraDevengado>0.00</interesMoraDevengado> 
            <idOperacionFmt>326-0</idOperacionFmt> 
            <fechaProximoVencimiento>2018-10-18</fechaProximoVencimiento> 
            <fechaValor>2018-05-18</fechaValor> 
            <tasaMoraOriginal>10.000000</tasaMoraOriginal> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <totalImpuestos>0.00</totalImpuestos> 
            <coeficienteIVA>0.000000</coeficienteIVA> 
            <periodicidad>30</periodicidad> 
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado> 
            <fechaVencimiento>2021-05-18</fechaVencimiento> 
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas> 
            <cuentaContable>Ds.P/Arrend.Financ.No Reaj.Res.</cuentaContable> 
            <tipoAno>360 Días</tipoAno> 
            <interesPunitorio>0.00</interesPunitorio> 
            <tipoProducto>AM</tipoProducto> 
            <tasaPunitorios>0.000000</tasaPunitorios> 
            <deudaTotalAFecha>23433.85</deudaTotalAFecha> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>950</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDetalle</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>18:33:21</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleResponse> 
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
    "sdtPrestamo": { 
        "interesVigente": "6812.75", 
        "deudaTotalVencida": "17614.00", 
        "tipoTasaMora": "Lineal Anual", 
        "cuotasPagasConRetaso": "0", 
        "sucursal": "Sucursal Beta", 
        "diasMoraPromedio": "0", 
        "plus": "0.000000", 
        "actividad": "01112 Trigo", 
        "tasaOriginal": "10.000000", 
        "idOperacionBT": "0010000100115000000000000000002700000000000326001", 
        "diasMora": "83", 
        "cantidadCuotas": "37", 
        "estado": "Normal", 
        "capitalOriginal": "180000.00", 
        "tipoDia": "Meses Calendario", 
        "fechaPrimerPago": "2018-07-18", 
        "claseTasa": "", 
        "tipoAmortizacion": "Leasing", 
        "simboloMoneda": "$", 
        "operacionUId": "142", 
        "fechaPrimerCuotaImpaga": "2018-07-18", 
        "valorCuota": "0.00", 
        "diasRevision": "0", 
        "precioOriginal": "0.000000", 
        "tasaVigente": "10.000000", 
        "tasaMoraVigente": "0.000000", 
        "interesDevengado": "0.00", 
        "interesSuspenso": "0.00", 
        "deudaCancelacionTotal": "213849.01", 
        "plazo": "1096", 
        "tipoTasa": "Lineal Anual", 
        "interesMora": "154.45", 
        "saldoCapital": "174180.15", 
        "precioActual": "0.000000", 
        "cantidadCuotasVencidas": "3", 
        "producto": { 
            "papel": "$", 
            "moneda": "$", 
            "productoUId": "0", 
            "nombre": "LEASING, Amort. - Capital F./Empr.- T/F" 
        }, 
        "fechaUltimoPago": "2018-05-18", 
        "interesMoraDevengado": "0.00", 
        "idOperacionFmt": "326-0", 
        "fechaProximoVencimiento": "2018-10-18", 
        "fechaValor": "2018-05-18", 
        "tasaMoraOriginal": "10.000000", 
        "tasaEfectiva": "0.000000", 
        "totalImpuestos": "0.00", 
        "coeficienteIVA": "0.000000", 
        "periodicidad": "30", 
        "resultadoInteresNormalDevengado": "0.00", 
        "fechaVencimiento": "2021-05-18", 
        "cantidadCuotasImpagas": "36", 
        "cuentaContable": "Ds.P/Arrend.Financ.No Reaj.Res.", 
        "tipoAno": "360 Días", 
        "interesPunitorio": "0.00", 
        "tipoProducto": "AM", 
        "tasaPunitorios": "0.000000", 
        "deudaTotalAFecha": "23433.85" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "951", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerDetalle", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "18:34:34", 
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
<td>Identificador único de operación simulada.</td>
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
<td>sdtPrestamo</td>
<td>sBTPrestamo</td>
<td>Datos del préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:</p>
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
<td>Identificador único de la operación simulada.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador texto de operación.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Producto.</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto (Amortizable / Plan de pagos).</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal del préstamo.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Símbolo monetario.</td>
</tr>
<tr>
<td>tipoAmortizacion</td>
<td>String</td>
<td>Tipo de amortización.</td>
</tr>
<tr>
<td>cuentaContable</td>
<td>String</td>
<td>Descripción del rubro.</td>
</tr>
<tr>
<td>actividad</td>
<td>String</td>
<td>Actividad.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Esta del préstamo.</td>
</tr>
<tr>
<td>precioOriginal</td>
<td>Double</td>
<td>Precio original del papel.</td>
</tr>
<tr>
<td>precioActual</td>
<td>Double</td>
<td>Precio del papel actual.</td>
</tr>
<tr>
<td>coeficienteIVA</td>
<td>Double</td>
<td>Coeficiente de IVA.</td>
</tr>
<tr>
<td>capitalOriginal</td>
<td>Double</td>
<td>Capital original del préstamo.</td>
</tr>
<tr>
<td>saldoCapital</td>
<td>Double</td>
<td>Saldo de capital.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor de la cuota.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta del préstamo.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del préstamo.</td>
</tr>
<tr>
<td>interesDevengado</td>
<td>Double</td>
<td>Intereses devengados.</td>
</tr>
<tr>
<td>interesMoraDevengado</td>
<td>Double</td>
<td>Intereses de mora devengados.</td>
</tr>
<tr>
<td>resultadoInteresNormalDevengado</td>
<td>Double</td>
<td>Resultado de intereses normal devengados.</td>
</tr>
<tr>
<td>interesSuspenso</td>
<td>Double</td>
<td>Intereses en suspenso.</td>
</tr>
<tr>
<td>saldosPendiente</td>
<td>sBTConcepto</td>
<td>Saldos pendientes.</td>
</tr>
<tr>
<td>totalSaldosPendiente</td>
<td>Double</td>
<td>Total saldos pendiente.</td>
</tr>
<tr>
<td>deudaCancelacionTotal</td>
<td>Double</td>
<td>Monto de cancelación total.</td>
</tr>
<tr>
<td>deudaTotalAFecha</td>
<td>Double</td>
<td>Monto a pagar para estar al día.</td>
</tr>
<tr>
<td>cantidadCuotasVencidas</td>
<td>Int</td>
<td>Cantidad de cuotas vencidas.</td>
</tr>
<tr>
<td>deudaTotalVencida</td>
<td>Double</td>
<td>Monto de la deuda vencida a la fecha.</td>
</tr>
<tr>
<td>interesVigente</td>
<td>Double</td>
<td>Monto de interés vigente.</td>
</tr>
<tr>
<td>interesMora</td>
<td>Double</td>
<td>Intereses de mora.</td>
</tr>
<tr>
<td>interesPunitorio</td>
<td>Double</td>
<td>Intereses punitorios.</td>
</tr>
<tr>
<td>totalImpuestos</td>
<td>Double</td>
<td>Total de impuestos.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Int</td>
<td>Período entre cuotas.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del préstamo.</td>
</tr>
<tr>
<td>diasMora</td>
<td>Int</td>
<td>Días de mora del préstamo.</td>
</tr>
<tr>
<td>diasMoraPromedio</td>
<td>Int</td>
<td>Días de mora promedio.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>cantidadCuotasImpagas</td>
<td>Int</td>
<td>Cantidad de cuotas impagas.</td>
</tr>
<tr>
<td>cuotasPagasConRetaso</td>
<td>Int</td>
<td>Cantidad de cuotas pagas con atraso.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Fecha de primer pago.</td>
<td></td>
</tr>
<tr>
<td>fechaProximoVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de la próxima cuota.</td>
</tr>
<tr>
<td>fechaPrimerCuotaImpaga</td>
<td>Date</td>
<td>Fecha de la primera cuota impaga.</td>
</tr>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de cuota.</td>
</tr>
<tr>
<td>claseTasa</td>
<td>String</td>
<td>Clase de tasa.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>tipoDia</td>
<td>String</td>
<td>Tipo de día del préstamo.</td>
</tr>
<tr>
<td>tipoAno</td>
<td>String</td>
<td>Tipo de año.</td>
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
<td>plus</td>
<td>Double</td>
<td>Tasa plus.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva anual.</td>
</tr>
<tr>
<td>diasRevision</td>
<td>Int</td>
<td>Días de revisión (Tasa variable).</td>
</tr>
<tr>
<td>tipoTasaMora</td>
<td>String</td>
<td>Tipo de tasa de mora.</td>
</tr>
<tr>
<td>tasaMoraOriginal</td>
<td>Double</td>
<td>Tasa de mora original.</td>
</tr>
<tr>
<td>tasaMoraVigente</td>
<td>Double</td>
<td>Tasa de mora vigente.</td>
</tr>
<tr>
<td>tasaPunitorios</td>
<td>Double</td>
<td>Tasa punitorios.</td>
</tr>
<tr>
<td>costoFinancieroTotal</td>
<td>Double</td>
<td>Costo financiero total (Argentina).</td>
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
<td>Identificador único de producto</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de producto</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTConcepto son los siguientes:</p>
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
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>valor</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto.</td>
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


