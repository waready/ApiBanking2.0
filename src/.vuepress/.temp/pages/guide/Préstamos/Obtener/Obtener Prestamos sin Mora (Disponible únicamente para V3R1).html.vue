<template><div><h1 id="obtener-prestamos-sin-mora-disponible-unicamente-para-v3r1" tabindex="-1"><a class="header-anchor" href="#obtener-prestamos-sin-mora-disponible-unicamente-para-v3r1"><span>Obtener Prestamos sin Mora (Disponible únicamente para V3R1)</span></a></h1>
<p>Método para retornar préstamos sin mora.</p>
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
<td>BTPrestamos.ObtenerPrestamosSinMora</td>
<td>RBTPG471</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Prestamos sin Mora:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerPrestamosSinMora> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>45A5647518BC5FBB73003EA9</bts:Token> 
         </bts:Btinreq> 
         <bts:offset>1</bts:offset> 
         <bts:limit>5</bts:limit> 
         <bts:contarRegistros>S</bts:contarRegistros> 
      </bts:BTPrestamos.ObtenerPrestamosSinMora> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerPrestamosSinMora=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
    "Requerimiento": 0, 
    "Canal": "BTDIGITAL", 
    "Device": "GZ", 
    "Usuario": "Instalador", 
    "Token": "d51ae0498699865B3A2E76CF" 
  }, 
  "offset": 23, 
  "limit": 100, 
  "contarRegistros": "S" 
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
      <BTPrestamos.ObtenerPrestamosSinMoraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>papa</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>45A5647518BC5FBB73003EA9</Token> 
         </Btinreq> 
         <quedanRegistros>S</quedanRegistros> 
         <countRegistros>154</countRegistros> 
         <sdtDatosPrestamos> 
            <sBTDatosPrestamo> 
               <plazo>422</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>2623560.33</deudaTotalVencida> 
               <periodicidad>30</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2021-01-02</fechaVencimiento> 
               <producto> 
                  <moneda>CRC</moneda> 
                  <papel>$</papel> 
                  <otrosConceptos></otrosConceptos> 
                  <productoUId>72</productoUId> 
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre> 
               </producto> 
               <clienteUId>4</clienteUId> 
               <fechaProximoVencimiento/> 
               <tasaVigente>10.000000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2020-02-07</fechaPrimerCuotaImpaga> 
               <valorCuota>-34266.33</valorCuota> 
               <saldoCapital>30000.00</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas> 
               <capitalOriginal>30000.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>2623560.33</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>15</operacionUId> 
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas> 
               <deudaTotalAFecha>2623560.33</deudaTotalAFecha> 
               <nombreCliente>PRANKA ERIKA</nombreCliente> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>10.000000</tasaMoraVigente> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaValor>2019-11-07</fechaValor> 
               <cantidadCuotas>12</cantidadCuotas> 
            </sBTDatosPrestamo> 
            <sBTDatosPrestamo> 
               <plazo>452</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>7255644.02</deudaTotalVencida> 
               <periodicidad>30</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2021-03-05</fechaVencimiento> 
               <producto> 
                  <moneda>CRC</moneda> 
                  <papel>$</papel> 
                  <otrosConceptos></otrosConceptos> 
                  <productoUId>72</productoUId> 
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre> 
               </producto> 
               <clienteUId>4</clienteUId> 
               <fechaProximoVencimiento/> 
               <tasaVigente>10.000000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2020-06-08</fechaPrimerCuotaImpaga> 
               <valorCuota>21968.79</valorCuota> 
               <saldoCapital>109602.47</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>10</cantidadCuotasVencidas> 
               <capitalOriginal>120000.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>7255644.02</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>16</operacionUId> 
               <cantidadCuotasImpagas>10</cantidadCuotasImpagas> 
               <deudaTotalAFecha>7255644.02</deudaTotalAFecha> 
               <nombreCliente>PRANKA ERIKA</nombreCliente> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago>2020-02-07</fechaUltimoPago> 
               <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>10.000000</tasaMoraVigente> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaValor>2019-12-09</fechaValor> 
               <cantidadCuotas>12</cantidadCuotas> 
            </sBTDatosPrestamo> 
            <sBTDatosPrestamo> 
               <plazo>360</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>1818126.01</deudaTotalVencida> 
               <periodicidad>30</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2020-12-03</fechaVencimiento> 
               <producto> 
                  <moneda>CRC</moneda> 
                  <papel>$</papel> 
                  <otrosConceptos></otrosConceptos> 
                  <productoUId>72</productoUId> 
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre> 
               </producto> 
               <clienteUId>4</clienteUId> 
               <fechaProximoVencimiento/> 
               <tasaVigente>10.000000</tasaVigente> 
               <fechaPrimerCuotaImpaga/> 
               <valorCuota>-48039.65</valorCuota> 
               <saldoCapital>24289.29</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas> 
               <capitalOriginal>38000.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>1818126.01</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>17</operacionUId> 
               <cantidadCuotasImpagas>0</cantidadCuotasImpagas> 
               <deudaTotalAFecha>1818126.01</deudaTotalAFecha> 
               <nombreCliente>PRANKA ERIKA</nombreCliente> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>10.000000</tasaMoraVigente> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaValor>2019-12-09</fechaValor> 
               <cantidadCuotas>0</cantidadCuotas> 
            </sBTDatosPrestamo> 
            <sBTDatosPrestamo> 
               <plazo>452</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>6759733.33</deudaTotalVencida> 
               <periodicidad>30</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2021-03-05</fechaVencimiento> 
               <producto> 
                  <moneda>CRC</moneda> 
                  <papel>$</papel> 
                  <otrosConceptos></otrosConceptos> 
                  <productoUId>72</productoUId> 
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre> 
               </producto> 
               <clienteUId>4</clienteUId> 
               <fechaProximoVencimiento/> 
               <tasaVigente>10.000000</tasaVigente> 
               <fechaPrimerCuotaImpaga>2020-01-08</fechaPrimerCuotaImpaga> 
               <valorCuota>-113220.30</valorCuota> 
               <saldoCapital>89000.00</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>12</cantidadCuotasVencidas> 
               <capitalOriginal>89000.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>6759733.33</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>18</operacionUId> 
               <cantidadCuotasImpagas>12</cantidadCuotasImpagas> 
               <deudaTotalAFecha>6759733.33</deudaTotalAFecha> 
               <nombreCliente>PRANKA ERIKA</nombreCliente> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>10.000000</tasaMoraVigente> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaValor>2019-12-09</fechaValor> 
               <cantidadCuotas>12</cantidadCuotas> 
            </sBTDatosPrestamo> 
            <sBTDatosPrestamo> 
               <plazo>360</plazo> 
               <eventosPosteriores>N</eventosPosteriores> 
               <deudaTotalVencida>4996392.44</deudaTotalVencida> 
               <periodicidad>30</periodicidad> 
               <simboloMoneda>$</simboloMoneda> 
               <fechaVencimiento>2020-12-03</fechaVencimiento> 
               <producto> 
                  <moneda>CRC</moneda> 
                  <papel>$</papel> 
                  <otrosConceptos></otrosConceptos> 
                  <productoUId>72</productoUId> 
                  <nombre>PRÉSTAMOS-Amortización Automática TF</nombre> 
               </producto> 
               <clienteUId>4</clienteUId> 
               <fechaProximoVencimiento/> 
               <tasaVigente>10.000000</tasaVigente> 
               <fechaPrimerCuotaImpaga/> 
               <valorCuota>-66151.03</valorCuota> 
               <saldoCapital>52000.00</saldoCapital> 
               <otrosConceptos></otrosConceptos> 
               <cantidadCuotasVencidas>0</cantidadCuotasVencidas> 
               <capitalOriginal>52000.00</capitalOriginal> 
               <tir>0.000000</tir> 
               <deudaCancelacionTotal>4996392.44</deudaCancelacionTotal> 
               <diasMora>0</diasMora> 
               <operacionUId>19</operacionUId> 
               <cantidadCuotasImpagas>0</cantidadCuotasImpagas> 
               <deudaTotalAFecha>4996392.44</deudaTotalAFecha> 
               <nombreCliente>PRANKA ERIKA</nombreCliente> 
               <cuotasPagasConRetraso>0</cuotasPagasConRetraso> 
               <fechaUltimoPago/> 
               <tipoAmortizacion>Francés</tipoAmortizacion> 
               <datosAdicionales></datosAdicionales> 
               <estado>Normal</estado> 
               <tasaMoraVigente>10.000000</tasaMoraVigente> 
               <sucursal>Casa Matriz</sucursal> 
               <fechaValor>2019-12-09</fechaValor> 
               <cantidadCuotas>0</cantidadCuotas> 
            </sBTDatosPrestamo> 
         </sdtDatosPrestamos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16823</Numero> 
            <Servicio>BTPrestamos.ObtenerPrestamosSinMora</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-25</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>17:00:21</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerPrestamosSinMoraResponse> 
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
    "quedanRegistros": "S", 
    "countRegistros": 154, 
    "sdtDatosPrestamos": { 
        "sBTDatosPrestamo": [ 
        { 
            "plazo": 422, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 2623560.33, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-01-02", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-02-07", 
            "valorCuota": -34266.33, 
            "saldoCapital": 30000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 12, 
            "capitalOriginal": 30000, 
            "tir": 0, 
            "deudaCancelacionTotal": 2623560.33, 
            "diasMora": 0, 
            "operacionUId": 15, 
            "cantidadCuotasImpagas": 12, 
            "deudaTotalAFecha": 2623560.33, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-11-07", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 452, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 7255644.02, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-03-05", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-06-08", 
            "valorCuota": 21968.79, 
            "saldoCapital": 109602.47, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 10, 
            "capitalOriginal": 120000, 
            "tir": 0, 
            "deudaCancelacionTotal": 7255644.02, 
            "diasMora": 0, 
            "operacionUId": 16, 
            "cantidadCuotasImpagas": 10, 
            "deudaTotalAFecha": 7255644.02, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "2020-02-07", 
            "tipoAmortizacion": "Francés con Seg.e Impu.", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 360, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 1818126.01, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2020-12-03", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "", 
            "valorCuota": -48039.65, 
            "saldoCapital": 24289.29, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 0, 
            "capitalOriginal": 38000, 
            "tir": 0, 
            "deudaCancelacionTotal": 1818126.01, 
            "diasMora": 0, 
            "operacionUId": 17, 
            "cantidadCuotasImpagas": 0, 
            "deudaTotalAFecha": 1818126.01, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 0 
        }, 
        { 
            "plazo": 452, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 6759733.33, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2021-03-05", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "2020-01-08", 
            "valorCuota": -113220.3, 
            "saldoCapital": 89000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 12, 
            "capitalOriginal": 89000, 
            "tir": 0, 
            "deudaCancelacionTotal": 6759733.33, 
            "diasMora": 0, 
            "operacionUId": 18, 
            "cantidadCuotasImpagas": 12, 
            "deudaTotalAFecha": 6759733.33, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 12 
        }, 
        { 
            "plazo": 360, 
            "eventosPosteriores": "N", 
            "deudaTotalVencida": 4996392.44, 
            "periodicidad": 30, 
            "simboloMoneda": "$", 
            "fechaVencimiento": "2020-12-03", 
            "producto": { 
            "moneda": "CRC", 
            "papel": "$", 
            "otrosConceptos": "", 
            "productoUId": 72, 
            "nombre": "PRÉSTAMOS-Amortización Automática TF" 
            }, 
            "clienteUId": 4, 
            "fechaProximoVencimiento": "", 
            "tasaVigente": 10, 
            "fechaPrimerCuotaImpaga": "", 
            "valorCuota": -66151.03, 
            "saldoCapital": 52000, 
            "otrosConceptos": "", 
            "cantidadCuotasVencidas": 0, 
            "capitalOriginal": 52000, 
            "tir": 0, 
            "deudaCancelacionTotal": 4996392.44, 
            "diasMora": 0, 
            "operacionUId": 19, 
            "cantidadCuotasImpagas": 0, 
            "deudaTotalAFecha": 4996392.44, 
            "nombreCliente": "PRANKA ERIKA", 
            "cuotasPagasConRetraso": 0, 
            "fechaUltimoPago": "", 
            "tipoAmortizacion": "Francés", 
            "datosAdicionales": "", 
            "estado": "Normal", 
            "tasaMoraVigente": 10, 
            "sucursal": "Casa Matriz", 
            "fechaValor": "2019-12-09", 
            "cantidadCuotas": 0 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerPrestamosSinMora", 
        "Fecha": "2023-10-25", 
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
<td>diasMoraDesde</td>
<td>Int</td>
<td>[Hidden: Valor fijo 0 para este método].</td>
</tr>
<tr>
<td>diasMoraHasta</td>
<td>Int</td>
<td>[Hidden: Valor fijo 0 para este método].</td>
</tr>
<tr>
<td>stringAux</td>
<td>String</td>
<td>[Hidden: Valor fijo 'SIN_MORA' para este método].</td>
</tr>
<tr>
<td>update912</td>
<td>String</td>
<td>[Hidden: Valor fijo 'N' para este método].</td>
</tr>
<tr>
<td>offset</td>
<td>Int</td>
<td>Valor desde donde empieza a contar la cantidad de préstamos.</td>
</tr>
<tr>
<td>limit</td>
<td>int</td>
<td>Cantidad de préstamos que va a mostrar.</td>
</tr>
<tr>
<td>contarRegistros</td>
<td>Sting</td>
<td>¿Cuenta el total de préstamos? (S/N).</td>
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
<td>quedanRegistros</td>
<td>String</td>
<td>¿Quedan registros? (S/N).</td>
</tr>
<tr>
<td>countRegistros</td>
<td>Int</td>
<td>Muestra el total de préstamos sin mora.</td>
</tr>
<tr>
<td>sdtDatosPrestamos</td>
<td>sBTDatosPrestamo</td>
<td>Listado de los prestamos sin mora.</td>
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


