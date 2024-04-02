# Obtener Detalle a Fecha 

Método para obtener los datos de un préstamo a una fecha especifica 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.ObtenerDetalleAFecha | RBTPG223 | Global 

> Ejemplo de invocación al método Obtener Detalle A Fecha: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleAFecha> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>324915377F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:fecha>2018-11-15</bts:fecha> 
      </bts:BTPrestamos.ObtenerDetalleAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleAFecha=' \ 
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
    "operacionUId": 142, 
	"fecha": "2018-11-15" 
}' 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.ObtenerDetalleAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>324915377F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPrestamo> 
            <claseTasa/> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <tipoDia>Meses Calendario</tipoDia> 
            <tipoAno>360 Días</tipoAno> 
            <tasaOriginal>19.000000</tasaOriginal> 
            <tasaVigente>19.000000</tasaVigente> 
            <plus>0.000000</plus> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <diasRevision>0</diasRevision> 
            <tipoTasaMora>Lineal Anual</tipoTasaMora> 
            <tasaMoraOriginal>19.000000</tasaMoraOriginal> 
            <tasaMoraVigente>0.000000</tasaMoraVigente> 
            <tasaPunitorios>0.000000</tasaPunitorios> 
            <operacionUId>15</operacionUId> 
            <idOperacionFmt>189-0</idOperacionFmt> 
            <idOperacionBT>0010000100103000000000000000002700000000000189001</idOperacionBT> 
            <producto> 
               <productoUId>0</productoUId> 
               <nombre>PRÉSTAMOS CONSUMO, Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel>$</papel> 
            </producto> 
            <tipoProducto>AM</tipoProducto> 
            <sucursal>Sucursal Beta</sucursal> 
            <simboloMoneda>$</simboloMoneda> 
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
            <cuentaContable>Consumo reajustables</cuentaContable> 
            <actividad>01112 Trigo</actividad> 
            <estado>Normal</estado> 
            <precioOriginal>0.000000</precioOriginal> 
            <precioActual>0.000000</precioActual> 
            <coeficienteIVA>22.000000</coeficienteIVA> 
            <capitalOriginal>12000.00</capitalOriginal> 
            <saldoCapital>12000.00</saldoCapital> 
            <valorCuota>1231.74</valorCuota> 
            <fechaValor>2018-09-25</fechaValor> 
            <fechaVencimiento>2019-09-25</fechaVencimiento> 
            <interesDevengado>0.00</interesDevengado> 
            <interesMoraDevengado>0.00</interesMoraDevengado> 
            <resultadoInteresNormalDevengado>0.00</resultadoInteresNormalDevengado> 
            <interesSuspenso>0.00</interesSuspenso> 
            <deudaCancelacionTotal>14793.06</deudaCancelacionTotal> 
            <deudaTotalAFecha>2475.64</deudaTotalAFecha> 
            <cantidadCuotasVencidas>1</cantidadCuotasVencidas> 
            <deudaTotalVencida>1243.90</deudaTotalVencida> 
            <interesVigente>313.03</interesVigente> 
            <interesMora>9.97</interesMora> 
            <interesPunitorio>0.00</interesPunitorio> 
            <totalImpuestos>287.27</totalImpuestos> 
            <periodicidad>30</periodicidad> 
            <plazo>365</plazo> 
            <diasMora>21</diasMora> 
            <diasMoraPromedio>0</diasMoraPromedio> 
            <cantidadCuotas>12</cantidadCuotas> 
            <cantidadCuotasImpagas>12</cantidadCuotasImpagas> 
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso> 
            <fechaPrimerPago>2018-10-25</fechaPrimerPago> 
            <fechaProximoVencimiento>2018-11-26</fechaProximoVencimiento> 
            <fechaPrimerCuotaImpaga>2018-10-25</fechaPrimerCuotaImpaga> 
            <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.ObtenerDetalleAFecha</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>16:03:15</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6975</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleAFechaResponse> 
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
        "Servicio": "BTPrestamos.ObtenerDetalleAFecha", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "18:34:34", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación simulada. 
fecha | Date | Fecha a consultar. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamo | sBTPrestamo | Datos del préstamo. 

Los campos del tipo de dato estructurado sBTPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de la operación simulada. 
idOperacionFmt | String | Identificador String (concatenación de algunos conceptos claves de la operación). 
idOperacionBT | String | Identificador texto de operación. 
producto | sBTProducto | Producto. 
tipoProducto | String | Tipo de producto (Amortizable / Plan de pagos). 
sucursal | String | Sucursal del préstamo. 
simboloMoneda | String | Símbolo monetario. 
tipoAmortizacion | String | Tipo de amortización. 
cuentaContable | String | Descripción del rubro. 
actividad | String | Actividad. 
estado | String | Esta del préstamo. 
precioOriginal | Double | Precio original del papel. 
precioActual | Double | Precio del papel actual. 
coeficienteIVA | Double | Coeficiente de IVA. 
capitalOriginal | Double | Capital original del préstamo. 
saldoCapital | Double | Saldo de capital. 
valorCuota | Double | Valor de la cuota. 
fechaValor | Date | Fecha de alta del préstamo. 
fechaVencimiento | Date | Fecha de vencimiento del préstamo. 
interesDevengado | Double | Intereses devengados. 
interesMoraDevengado | Double | Intereses de mora devengados. 
resultadoInteresNormalDevengado | Double | Resultado de intereses normal devengados. 
interesSuspenso | Double | Intereses en suspenso. 
saldosPendiente | sBTConcepto | Saldos pendientes. 
totalSaldosPendiente | Double | Total saldos pendiente. 
deudaCancelacionTotal | Double | Monto de cancelación total. 
deudaTotalAFecha | Double | Monto a pagar para estar al día. 
cantidadCuotasVencidas | Int | Cantidad de cuotas vencidas. 
deudaTotalVencida | Double | Monto de la deuda vencida a la fecha. 
interesVigente | Double | Monto de interés vigente. 
interesMora | Double | Intereses de mora. 
interesPunitorio | Double | Intereses punitorios. 
totalImpuestos | Double | Total de impuestos. 
periodicidad | Int | Período entre cuotas. 
plazo | Int | Plazo del préstamo. 
diasMora | Int | Días de mora del préstamo. 
diasMoraPromedio | Int | Días de mora promedio. 
cantidadCuotas | Int | Cantidad de cuotas del préstamo. 
cantidadCuotasImpagas | Int | Cantidad de cuotas impagas. 
cuotasPagasConRetaso | Int | Cantidad de cuotas pagas con atraso. 
fechaPrimerPago | Fecha de primer pago. 
fechaProximoVencimiento | Date | Fecha de vencimiento de la próxima cuota. 
fechaPrimerCuotaImpaga | Date | Fecha de la primera cuota impaga. 
fechaUltimoPago | Date | Fecha de último pago de cuota. 
claseTasa | String | Clase de tasa. 
tipoTasa | String | Tipo de tasa. 
tipoDia | String | Tipo de día del préstamo. 
tipoAno | String | Tipo de año. 
tasaOriginal | Double | Tasa original. 
tasaVigente | Double | Tasa vigente. 
plus | Double | Tasa plus. 
tasaEfectiva | Double | Tasa efectiva anual. 
diasRevision | Int | Días de revisión (Tasa variable). 
tipoTasaMora | String | Tipo de tasa de mora. 
tasaMoraOriginal | Double | Tasa de mora original. 
tasaMoraVigente | Double | Tasa de mora vigente. 
tasaPunitorios | Double | Tasa punitorios. 
costoFinancieroTotal | Double | Costo financiero total (Argentina). 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto 
nombre | String | Nombre de producto 
moneda | String | Símbolo de moneda 
papel | String | Símbolo de papel 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de operación. 
30002 | No se recuperó la operación para el identificador. 
30003 | No se recibió fecha. 

 
