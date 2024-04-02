# Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas 

Método para simular un préstamo despejando fecha de vencimiento y cantidad de cuotas. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.SimularDespejandoFechaVtoCantCuotas | RBTPG322 | Global 

> Ejemplo de invocación al método Simular Despejando Fecha de Vencimiento y Cantidad de Cuotas: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas> 
         <bts:Btinreq> 
            <bts:Device>BTDIGITAL</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>d25cdaf98eCD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:sdtPrestamoAlta> 
            <bts:plazoTotal>300</bts:plazoTotal> 
            <bts:productoUId>181</bts:productoUId> 
            <bts:monto>20000</bts:monto> 
            <bts:clienteUId>342</bts:clienteUId> 
            <bts:actividad>1111</bts:actividad> 
            <bts:valorCuota>5000</bts:valorCuota> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas></bts:cantidadCuotas> 
            <bts:tasa>0</bts:tasa> 
            <bts:fechaPrimerPago>10-10-2021</bts:fechaPrimerPago> 
            <bts:pizarra>0</bts:pizarra> 
         </bts:sdtPrestamoAlta> 
      </bts:BTPrestamos.SimularDespejandoFechaVtoCantCuotas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularDespejandoFechaVtoCantCuotas' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
		"Btinreq": { 
			"Canal": "BTDIGITAL", 
			"Requerimiento": "1", 
			"Usuario": "INSTALADOR", 
			"Token": "d25cdaf98eCD285A89A23FBE", 
			"Device": "BTDIGITAL"		 
		},  
		"sdtPrestamoAlta":{ 
		   "plazoTotal": "300", 
		   "productoUId": "181", 
		   "monto": "20000", 
		   "clienteUId": "342", 
		   "actividad": "1111", 
		   "valorCuota": "5000", 
		   "periodoCuotas": "30", 
		   "cantidadCuotas": [], 
		   "tasa": "0", 
		   "fechaPrimerPago": "10-10-2021", 
		   "pizarra": "0" 
		} 
	} 
``` 
</code-block> 
</code-group> 

> El POST retornará la siguiente estructura: 

<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>BTDIGITAL</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>d25cdaf98eCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtSimulacionPrestamo> 
            <otrosConceptos></otrosConceptos> 
            <fechaValor>2020-01-01</fechaValor> 
            <capital>20000.00</capital> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>7059.37</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-02-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>6656.94</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-03-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>6247.60</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-04-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>5831.24</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-05-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1310.83</importe> 
                  <redondeo>0.00</redondeo> 
                  <fechaPago>2020-06-01</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>903.09</intereses> 
            <tasaNominalAnual>20.878536</tasaNominalAnual> 
            <totalPrestamo>27105.98</totalPrestamo> 
            <valorCuota>5421.20</valorCuota> 
            <tasaEfectivaAnual>23.000000</tasaEfectivaAnual> 
            <operacionUId>1606</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2020-02-01</fechaPrimerPago> 
            <fechaVencimiento>2020-06-01</fechaVencimiento> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>181</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
            <plazo>150</plazo> 
         </sdtSimulacionPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>110671</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularDespejandoFechaVtoCantCuotas</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-03-18</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:33:02</Hora> 
         </Btoutreq> 
      </BTPrestamos.SimularDespejandoFechaVtoCantCuotasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "d25cdaf98eCD285A89A23FBE" 
   }, 
   "sdtSimulacionPrestamo": { 
	  "otrosConceptos": { 
	  	"sBTConcepto": [] 
	  }, 
      "fechaValor": "2020-01-01", 
      "capital": "20000.00", 
      "cronograma": { 
         "sBTCuotaPrestamoAlta": [ 
            { 
               "importe": "7059.37", 
               "redondeo": "0.00", 
               "fechaPago": "2020-02-01" 
            }, 
            { 
               "importe": "6656.94", 
               "redondeo": "0.00", 
               "fechaPago": "2020-03-01" 
            }, 
            { 
               "importe": "6247.60", 
               "redondeo": "0.00", 
               "fechaPago": "2020-04-01" 
            }, 
            { 
               "importe": "5831.24", 
               "redondeo": "0.00", 
               "fechaPago": "2020-05-01" 
            }, 
            { 
               "importe": "1310.83", 
               "redondeo": "0.00", 
               "fechaPago": "2020-06-01" 
            } 
         ] 
      }, 
      "tasaEfectiva": "0.000000", 
      "intereses": "903.09", 
      "tasaNominalAnual": "20.878536", 
      "totalPrestamo": "27105.98", 
      "valorCuota": "5421.20", 
      "tasaEfectivaAnual": "23.000000", 
      "operacionUId": "1606", 
      "tasa": "23.000000", 
      "fechaPrimerPago": "2020-02-01", 
      "fechaVencimiento": "2020-06-01", 
      "producto": { 
         "papel": "$", 
         "moneda": "$", 
         "productoUId": "181", 
         "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF" 
      }, 
      "plazo": "150" 
   }, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "110671", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.SimularDespejandoFechaVtoCantCuotas", 
      "Requerimiento": "1", 
      "Fecha": "2021-03-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:33:02" 
   } 
} 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtPrestamoAlta | sBTPrestamoAltaConDespeje | Datos del préstamo a dar de alta. 
modoDespeje  | Short | [Hidden: Valor fijo 4 para este método]. 

Los campos del tipo de dato estructurado sBTPrestamoAltaConDespeje son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | -----------  
clienteUId | Long | Identificador del cliente. 
productoUId | Long | Identificador del producto. 
fechaPrimerPago | Date | Fecha primer pago. 
cantidadCuotas | Int | Cantidad de cuotas. 
periodoCuotas | Int | Período entre cuotas. 
plazoTotal | Int | Plazo total. 
valorCuota | Double | Valor cuota. 
monto | Double | Monto del préstamo. 
pizarra | Short | Código de pizarra. 
tasa | Double | Tasa. 
actividad | Long | Código de actividad. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacionPrestamo | sBTSimulacionPrestamo | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTSimulacionPrestamo son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
operacionUId | Long | Identificador único de operación. 
producto | sBTProducto | Datos del producto. 
capital | Double | Capital del préstamo. 
valorCuota | Double | Valor cuota. 
intereses | Double | Intereses. 
tasa | Double | Tasa. 
tasaEfectiva | Double | Tasa efectiva. 
tasaEfectivaAnual | Double | Tasa efectiva anual. 
tasaNominalAnual | Double | Tasa nominal anual. 
totalPrestamo | Double | Total a pagar. 
fechaValor | Date | Fecha valor. 
fechaVencimiento | Date | Fecha de vencimiento. 
fechaPrimerPago | Date | Fecha de primer pago. 
plazo | Int | Plazo. 
otrosConceptos | sBTConcepto | Importe otros conceptos.  
cronograma | sBTCuotaPrestamoAlta | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

Los campos del tipo de dato estructurado sBTCuotaPrestamoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago	| Date	| Fecha de pago de la cuota. 
importe	| Double	| Importe de la cuota. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador de producto. 
30003 | No se recuperó la cuenta para el Identificador:  

 
