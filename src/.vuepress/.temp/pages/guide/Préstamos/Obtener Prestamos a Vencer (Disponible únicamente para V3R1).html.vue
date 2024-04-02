<template><div><h1 id="obtener-prestamos-a-vencer-disponible-unicamente-para-v3r1" tabindex="-1"><a class="header-anchor" href="#obtener-prestamos-a-vencer-disponible-unicamente-para-v3r1"><span>Obtener Prestamos a Vencer (Disponible únicamente para V3R1)</span></a></h1>
<p>Método para obtener los préstamos que estan por vencer dentro de determinados días.</p>
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
<td>BTPrestamos.ObtenerPrestamosAVencer</td>
<td>RBTPG472</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Prestamos Por Rango Mora:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPrestamosAVencer> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>ad33e17b1199865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:diasVtoCuota>2</bts:diasVtoCuota> 
      </bts:BTPrestamos.ObtenerPrestamosAVencer> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosAVencer=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "ad33e17b1199865B3A2E76CF" 
  }, 
  "diasVtoCuota": 2 
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
        <BTPrestamos.ObtenerPrestamosAVencerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ad33e17b1199865B3A2E76CF</Token> 
         </Btinreq> 
         <sdtDatosPrestamos> 
            <sBTDatosPrestamo> 
               <plazo>124</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>0.00</deudaTotalVencida> 
               <periodicidad>15</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2023-05-31</fechaVencimiento> 
               <producto> 
                  <papel>$</papel> 
                  <moneda>S/</moneda> 
                  <productoUId>1</productoUId> 
                  <nombre>PRÉSTAMO-Financiero 9</nombre> 
               </producto> 
               <clienteUId>407</clienteUId> 
               <fechaProximoVencimiento>2023-03-31</fechaProximoVencimiento> 
               <tasaVigente>83.230000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2023-03-31</fechaPrimerCuotaImpaga> 
               <valorCuota>106.10</valorCuota> 
               <saldoCapital>458.21</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas> 
               <capitalOriginal>800.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>530.57</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>10752</operacionUId> 
               <cantidadCuotasImpagas>5</cantidadCuotasImpagas> 
               <deudaTotalAFecha>106.10</deudaTotalAFecha> 
               <cuotasPagasConRetraso>3</cuotasPagasConRetraso> 
               <fechaUltimoPago>2023-03-29</fechaUltimoPago> 
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>40.000000</tasaMoraVigente> 
               <sucursal>MIRAFLORES</sucursal> 
               <fechaValor>2023-01-27</fechaValor> 
               <cantidadCuotas>9</cantidadCuotas> 
            </sBTDatosPrestamo> 
         </sdtDatosPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>227484</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerPrestamosAVencer</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-05-09</Fecha> 
            <Hora>12:58:32</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPrestamosAVencerResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "d51ae0498699865B3A2E76CF" 
	}, 
    "sdtDatosPrestamos": { 
    "sBTDatosPrestamo": { 
      "plazo": 124, 
      "eventosPosteriores": "N", 
      "deudaTotalVencida": 0, 
      "periodicidad": 15, 
      "simboloMoneda": "$", 
      "fechaVencimiento": "2023-05-31", 
      "producto": { 
        "papel": "$", 
        "moneda": "S/", 
        "productoUId": 1, 
        "nombre": "PRÉSTAMO-Financiero 9" 
      }, 
      "clienteUId": 407, 
      "fechaProximoVencimiento": "2023-03-31", 
      "tasaVigente": 83.23, 
      "fechaPrimerCuotaImpaga": "2023-03-31", 
      "valorCuota": 106.1, 
      "saldoCapital": 458.21, 
      "otrosConceptos": "", 
      "cantidadCuotasVencidas": 0, 
      "capitalOriginal": 800, 
      "tir": 0, 
      "deudaCancelacionTotal": 530.57, 
      "diasMora": 0, 
      "operacionUId": 10752, 
      "cantidadCuotasImpagas": 5, 
      "deudaTotalAFecha": 106.1, 
      "cuotasPagasConRetraso": 3, 
      "fechaUltimoPago": "2023-03-29", 
      "tipoAmortizacion": "Francés con Seg.e Impu.", 
      "datosAdicionales": "", 
      "estado": "Normal", 
      "tasaMoraVigente": 40, 
      "sucursal": "MIRAFLORES", 
      "fechaValor": "2023-01-27", 
      "cantidadCuotas": 9 
    } 
  }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPrestamosAVencer", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "12:27:52", 
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
<td>diasVtoCuota</td>
<td>Int</td>
<td>Días que faltan para el vencimiento de los prestamos.</td>
</tr>
<tr>
<td>actualiza</td>
<td>String</td>
<td>Habilita la actualización en la tabla SNG912 con los datos del prestamo [Hidden: Valor fijo 'S'].</td>
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
<td>sdtDatosPrestamos</td>
<td>sBTDatosPrestamo</td>
<td>Listado de los prestamos que estan por vencer en determinados días.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosPrestamo son los siguientes:</p>
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
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>eventosPosteriores</td>
<td>String</td>
<td>Hay eventos posteriores (S/N).</td>
</tr>
<tr>
<td>deudaTotalVencida</td>
<td>Double</td>
<td>Monto de la deuda vencida a la fecha.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Int</td>
<td>Período entre cuotas.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>Sting</td>
<td>Símbolo monetario.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del préstamo.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Int</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Descripción del producto.</td>
</tr>
<tr>
<td>fechaProximoVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de la próxima cuota.</td>
</tr>
<tr>
<td>tasaVigente</td>
<td>Double</td>
<td>Tasa vigente.</td>
</tr>
<tr>
<td>fechaPrimerCuotaImpaga</td>
<td>Date</td>
<td>Fecha de la primera cuota impaga.</td>
</tr>
<tr>
<td>valorCuota</td>
<td>Double</td>
<td>Valor de la cuota.</td>
</tr>
<tr>
<td>saldoCapital</td>
<td>Double</td>
<td>Saldo de capital.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConceptos</td>
<td>Otros conceptos del prestamo.</td>
</tr>
<tr>
<td>cantidadCuotasVencidas</td>
<td>Int</td>
<td>Cantidad de cuotas vencidas.</td>
</tr>
<tr>
<td>capitalOriginal</td>
<td>Double</td>
<td>Capital original del préstamo.</td>
</tr>
<tr>
<td>tir</td>
<td>Double</td>
<td>Tir.</td>
</tr>
<tr>
<td>deudaCancelacionTotal</td>
<td>Double</td>
<td>Monto de cancelación total.</td>
</tr>
<tr>
<td>diasMora</td>
<td>Int</td>
<td>Días de mora del préstamo.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
</tr>
<tr>
<td>cantidadCuotasImpagas</td>
<td>Int</td>
<td>Cantidad de cuotas impagas.</td>
</tr>
<tr>
<td>cuotasPagasConRetraso</td>
<td>Int</td>
<td>Cantidad de cuotas pagas con retraso.</td>
</tr>
<tr>
<td>deudaTotalAFecha</td>
<td>Double</td>
<td>Monto a pagar para estar al día.</td>
</tr>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de cuota.</td>
</tr>
<tr>
<td>tipoAmortizacion</td>
<td>String</td>
<td>Tipo de amortización.</td>
</tr>
<tr>
<td>datosAdicionales</td>
<td>sbTDatoAdicional</td>
<td>Listado de datos adicionales.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado.</td>
</tr>
<tr>
<td>tasaMoraVigente</td>
<td>Double</td>
<td>Tasa de mora vigente.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal del préstamo.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta del préstamo.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas del préstamo.</td>
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
<p>Los campos del tipo de dato estructurado sBTConceptos son los siguientes:</p>
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
<p>Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:</p>
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
<td>detalle</td>
<td>String</td>
<td>Detalle de dato adicional.</td>
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
<td>30003</td>
<td>No existe registro para el producto indicado.</td>
</tr>
</tbody>
</table>
</div></template>


