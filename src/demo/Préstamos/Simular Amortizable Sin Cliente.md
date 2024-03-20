# Simular Amortizable Sin Cliente 

Método para simular el alta de un préstamo amortizable sin cliente. 

Nombre publicación | Programa | Global/País 
--------- | ----------- | ----------- 
BTPrestamos.SimularAmortizableSinCliente | RBTPG265 | Global 

> Ejemplo de invocación al método Simular Amortizable Sin Cliente: 

<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularAmortizableSinCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token> 
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq> 
         <bts:sdtDatosAmortizable> 
            <bts:monto>10000</bts:monto> 
            <bts:productoUId>61</bts:productoUId> 
            <bts:fechaPrimerPago>2019-01-12</bts:fechaPrimerPago> 
            <bts:pizarra></bts:pizarra> 
            <bts:tasa></bts:tasa> 
            <bts:actividad>11200</bts:actividad> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
            <bts:cantidadCuotas>12</bts:cantidadCuotas> 
         </bts:sdtDatosAmortizable> 
      </bts:BTPrestamos.SimularAmortizableSinCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?SimularAmortizableSinCliente=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtDatosAmortizable": { 
        "productoUId": 61, 
        "fechaPrimerPago": "2018-12-10", 
        "monto": 1000, 
        "cantidadCuotas": 12, 
        "periodoCuotas": 30, 
		"pizarra": 0, 
		"tasa": 0, 
		"actividad": 11200, 
		"periodoCuotas": 30, 
		"cantidadCuotas": 12 
    } 
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
      <BTPrestamos.SimularAmortizableSinClienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>72e34bcd9d4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-01-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-02-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-03-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-04-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-05-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-06-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-07-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-08-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-09-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-10-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.01</importe> 
                  <fechaPago>2019-11-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
               <sBTCuotaPrestamoAlta> 
                  <importe>1194.04</importe> 
                  <fechaPago>2019-12-12</fechaPago> 
               </sBTCuotaPrestamoAlta> 
            </cronograma> 
            <fechaValor>2018-12-11</fechaValor> 
            <capital>10000.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <intereses>1288.18</intereses> 
            <tasaNominalAnual>23.000000</tasaNominalAnual> 
            <totalPrestamo>14328.15</totalPrestamo> 
            <valorCuota>1194.01</valorCuota> 
            <tasaEfectivaAnual>25.590075</tasaEfectivaAnual> 
            <operacionUId>1</operacionUId> 
            <tasa>23.000000</tasa> 
            <fechaPrimerPago>2019-01-12</fechaPrimerPago> 
            <fechaVencimiento>2019-12-12</fechaVencimiento> 
            <plazo>361</plazo> 
            <producto> 
               <papel>$</papel> 
               <moneda>$</moneda> 
               <productoUId>61</productoUId> 
               <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
            </producto> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>623</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularAmortizableSinCliente</Servicio> 
            <Fecha>2019-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>09:23:04</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularAmortizableSinClienteResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 

<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "1", 
        "Usuario": "BANTOTAL", 
        "Token": "1017966210F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtSimulacionPrestamo": { 
        "operacionUId": 1, 
        "producto": { 
            "productoUId": 61, 
            "nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
            "moneda": "$", 
            "papel": "$" 
        }, 
        "capital": 1000.00, 
        "valorCuota": 420.44, 
        "intereses": 87.11, 
        "tasa": 3.052000, 
        "tasaEfectiva": 0.000000, 
        "tasaEfectivaAnual": 3.052000, 
        "tasaNominalAnual": 3.010070, 
        "totalPrestamo": 5045.27, 
        "fechaValor": "2016-08-15", 
        "fechaVencimiento": "2019-11-11", 
        "fechaPrimerPago": "2018-12-10", 
        "plazo": 1183, 
        "otrosConceptos": { 
            "sBTConcepto": [] 
        }, 
        "cronograma": { 
            "sBTCuotaPrestamoAlta": [ 
                { 
                    "fechaPago": "2018-12-10", 
                    "importe": 2934.49 
                }, 
                { 
                    "fechaPago": "2019-01-10", 
                    "importe": 192.14 
                }, 
                { 
                    "fechaPago": "2019-02-11", 
                    "importe": 192.11 
                }, 
                { 
                    "fechaPago": "2019-03-11", 
                    "importe": 192.00 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "importe": 191.98 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "importe": 191.93 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "importe": 191.89 
                }, 
                { 
                    "fechaPago": "2019-07-10", 
                    "importe": 191.83 
                }, 
                { 
                    "fechaPago": "2019-08-12", 
                    "importe": 191.81 
                }, 
                { 
                    "fechaPago": "2019-09-10", 
                    "importe": 191.73 
                }, 
                { 
                    "fechaPago": "2019-10-10", 
                    "importe": 191.69 
                }, 
                { 
                    "fechaPago": "2019-11-11", 
                    "importe": 191.67 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularAmortizableSinCliente", 
        "Fecha": "2019-11-20", 
        "Hora": "11:44:44", 
        "Requerimiento": "1", 
        "Numero": 7048, 
        "Estado": "OK" 
    } 
}' 
``` 
</code-block> 
</code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtDatosAmortizable | sBTDatosAmortizable | Datos de la simulación. 

Los campos del tipo de dato estructurado sBTDatosAmortizable son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId* | Long | Identificador único de producto. 
fechaPrimerPago | Date | Fecha de primer pago. 
cantidadCuotas* | Int | Cantidad de cuotas. 
monto* | Double | Capital solicitado. 
pizarra | Short | Tipo de pizzarra. Si no se indica toma la preseteada para el producto. 
tasa | Double | Tasa. Si no se indica toma la correspondiente al tipo de pizarra. 
actividad** | Long | Código de actividad (Destino del crédito). 
periodoCuotas | Int | Período entre cuotas. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
sdtSimulacion | sBTSimulacionPrestamo | Datos del préstamo simulado 

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
plazo | Int | Plazo del préstamo. 
otrosConceptos | sBTConcepto | Otros conceptos. 
cronograma | sBTCuotaPrestamoAlta | Cronograma del préstamo. 

Los campos del tipo de dato estructurado sBTProducto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
productoUId | Long | Identificador único de producto 
nombre | String | Nombre de producto 
moneda | String | Símbolo de moneda 
papel | String | Símbolo de papel 

Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
fechaPago | Date | Fecha de pago de la cuota. 
importe | Double | Importe de la cuota. 

Los campos del tipo de dato estructurado sBTConcepto son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
concepto | String | Concepto. 
valor | Double | Importe. 
texto | String | Texto. 

### Errores 

Código | Descripción 
--------- | ----------- 
30001 | No se recibió el identificador de cliente. 
30002 | No se recibió el identificador de producto. 
30003 | No se recuperó la cuenta para el Identificador. 
30004 | El Identificador único de Producto es incorrecto. 
30005 | No se recibió la Fecha de Primer Pago desde el origen. 
30006 | No se recibió el Monto de Capital desde el origen. 
31001 | La simulación no está vigente. 
31002 | La simulación no existe. 
40001 | La Cuenta indicada es incorrecta.                  
40012 | La Fecha de Primer Pago indicada es menor a la Fecha Valor.        
40013 | La Fecha de Vencimiento indicada es menor a la Fecha Valor.        
40014 | La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien. 
40015 | El Plazo Total indicado es incorrecto.                             
40016 | La Cantidad de Cuotas indicada es menor al mínimo permitido.       
40017 | La Cantidad de Cuotas indicada es mayor al máximo permitido.       
40018 | La Cantidad de Cuotas indicada es incorrecta.                      
40019 | La Cantidad de Cuotas indicada no está preseteada.                 
40020 | El período entre Cuotas indicado es menor al mínimo permitido.     
40021 | El período entre Cuotas indicado es mayor al máximo permitido.     
40022 | El período entre Cuotas indicado es incorrecto.                    
40023 | El período entre Cuotas indicado no está preseteado.               
40024 | El Valor Cuota indicado es incorrecto.                             
40025 | El Capital indicado es menor al mínimo permitido.                  
40026 | El Capital indicado es mayor al máximo permitido.                  
40027 | El Capital indicado es incorrecto.                                 
40037 | La Clase de Tasa indicada es incorrecta.                           
40040 | La Tasa Fija indicada está fuera de tolerancia.                    
40041 | La Tasa indicada es mayor a la Tasa de Usura.                      
40048 | El período indicado es incorrecto.                                 
40049 | El Tipo de Tasa indicado es incorrecto.                            
40054 | La Tasa indicada es incorrecta.                                    
40071 | El Plazo Total de la Operación es mayor al máximo permitido.       
40072 | El Plazo Total de la Operación es menor al mínimo permitido.       
40076 | El Producto indicado no está Preseteado.                           
40147 | No se cumple el período mínimo entre Fecha Valor y Fecha de Prime. 
40148 | El Capital indicado debe ser mayor al Valor Cuota.                 
40149 | No se cumple el período máximo entre Fecha Valor y Fecha de Prime. 

 
