<template><div><h1 id="simular-libre-amortizacion-sin-cliente" tabindex="-1"><a class="header-anchor" href="#simular-libre-amortizacion-sin-cliente"><span>Simular Libre Amortización Sin Cliente</span></a></h1>
<p>Método para simular el alta de un préstamo libre amortizacion sin cliente.</p>
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
<td>BTPrestamos.SimularLibreAmortizacionSinCliente</td>
<td>RBTPG267</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Libre Amortización Sin Cliente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.SimularLibreAmortizacionSinCliente> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>72e34bcd9d4A8B5C60A82434</bts:Token> 
            <bts:Device>AV</bts:Device>          
         </bts:Btinreq> 
         <bts:sdtDatosLibreAmortizacion> 
            <bts:actividad>11200</bts:actividad> 
            <bts:pizarra>0</bts:pizarra> 
            <bts:tasa>0</bts:tasa> 
            <bts:productoUId>75</bts:productoUId> 
            <bts:monto>10000</bts:monto> 
            <bts:cantidadCuotas>0</bts:cantidadCuotas> 
            <bts:periodoCuotas>30</bts:periodoCuotas> 
			   <bts:cuotasCapital> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-01-10</bts:fechaPago> 
					   <bts:importe>2000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-02-10</bts:fechaPago> 
					   <bts:importe>2000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-03-10</bts:fechaPago> 
					   <bts:importe>1000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-04-10</bts:fechaPago> 
					   <bts:importe>2000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-05-10</bts:fechaPago> 
					   <bts:importe>2000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
				   <bts:sBTCuotaPrestamoAlta> 
					   <bts:fechaPago>2019-06-10</bts:fechaPago> 
					   <bts:importe>1000</bts:importe> 
				   </bts:sBTCuotaPrestamoAlta> 
			   </bts:cuotasCapital> 
         </bts:sdtDatosLibreAmortizacion> 
      </bts:BTPrestamos.SimularLibreAmortizacionSinCliente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacionSinCliente' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
        "Btinreq": { 
          "Device": "AV", 
          "Usuario": "MINSTALADOR", 
          "Canal": "BTDIGITAL", 
          "Token": "658fcb0b034A8B5C60A82434" 
        }, 
		"sdtDatosLibreAmortizacion": { 
			"actividad": "11200", 
			"pizarra": "0", 
			"tasa": "0", 
			"productoUId": "75", 
			"monto": "10000", 
			"cantidadCuotas": "0", 
			"periodoCuotas": "30", 
			"cuotasCapital": { 
			  "sBTCuotaPrestamoAlta": [ 
			  	  { 
			  	  	"fechaPago": "2019-01-10", 
			  	  	"importe": "2000" 
			  	  }, 
			  	  { 
			  	  	"fechaPago": "2019-02-10", 
			  	  	"importe": "2000" 
			  	  }, 
			  	  { 
			  	  	"fechaPago": "2019-03-10", 
			  	  	"importe": "1000" 
			  	  }, 
			  	  { 
			  	  	"fechaPago": "2019-04-10", 
			  	  	"importe": "2000" 
			  	  }, 
			  	  { 
			  	  	"fechaPago": "2019-05-10", 
			  	  	"importe": "2000" 
			  	  }, 
			  	  { 
			  	  	"fechaPago": "2019-06-10", 
			  	  	"importe": "1000" 
			  	  } 
			  	] 
			  } 
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
      <BTPrestamos.SimularLibreAmortizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>fe9c2c642d4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSimulacion> 
            <otrosConceptos></otrosConceptos> 
            <cronograma> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-04-15</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>160.74</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>160.74</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-04-15</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>3000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>217.73</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>3217.73</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-05-15</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>102.21</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>102.21</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-05-15</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>3000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>216.38</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>3216.38</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-06-15</fechaPago> 
                  <tipoCuota>I</tipoCuota> 
                  <concepto/> 
                  <capital>60.37</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>0.00</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>60.37</cuota> 
               </sBTCuotaSimulacion> 
               <sBTCuotaSimulacion> 
                  <fechaPago>2020-06-15</fechaPago> 
                  <tipoCuota>K</tipoCuota> 
                  <concepto/> 
                  <capital>4000.00</capital> 
                  <intereses>0.00</intereses> 
                  <seguros>215.03</seguros> 
                  <impuestos>0.00</impuestos> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <cuota>4215.03</cuota> 
               </sBTCuotaSimulacion> 
            </cronograma> 
            <fechaValor>2020-03-13</fechaValor> 
            <capital>10000.00</capital> 
            <tasaEfectiva>0.000000</tasaEfectiva> 
            <impuestos>0.00</impuestos> 
            <intereses>323.32</intereses> 
            <tasaNominalAnual>17.522024</tasaNominalAnual> 
            <totalPrestamo>10000.00</totalPrestamo> 
            <tasaEfectivaAnual>19.000000</tasaEfectivaAnual> 
            <operacionUId>682</operacionUId> 
            <tasa>19.000000</tasa> 
            <fechaPrimerPago>2020-04-15</fechaPrimerPago> 
            <fechaVencimiento>2020-06-15</fechaVencimiento> 
            <plazo>0</plazo> 
            <producto> 
               <moneda>$</moneda> 
               <papel>$</papel> 
               <productoUId>0</productoUId> 
               <nombre>PRÉSTAMOS CONSUMO, Amortización Libre TF</nombre> 
            </producto> 
            <comisiones>0.00</comisiones> 
         </sdtSimulacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>12993</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.SimularLibreAmortizacion</Servicio> 
            <Requerimiento/> 
            <Fecha>2019-03-06</Fecha> 
            <Hora>13:00:00</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.SimularLibreAmortizacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "1017966210F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtSimulacion": { 
        "operacionUId": 0, 
        "producto": { 
            "productoUId": 0, 
            "nombre": "PRÉSTAMOS SECTORIALES (PASIVO), Irregular o Amort. Libre", 
            "moneda": "$", 
            "papel": "$" 
        }, 
        "fechaValor": "2016-08-15", 
        "fechaPrimerPago": "2019-01-10", 
        "fechaVencimiento": "2019-06-10", 
        "capital": 10000.00, 
        "intereses": 3946.66, 
        "impuestos": 868.26, 
        "comisiones": 0.00, 
        "totalPrestamo": 10000.00, 
        "plazo": 0, 
        "tasa": 15.000000, 
        "tasaEfectiva": 0.000000, 
        "tasaEfectivaAnual": 16.068320, 
        "tasaNominalAnual": 15.000000, 
        "otrosConceptos": { 
            "sBTConcepto": [] 
        }, 
        "cronograma": { 
            "sBTCuotaSimulacion": [ 
                { 
                    "fechaPago": "2019-01-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 3658.33, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 804.83, 
                    "otrosConceptos": 0.00, 
                    "cuota": 4463.16 
                }, 
                { 
                    "fechaPago": "2019-01-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-02-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 103.33, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 22.73, 
                    "otrosConceptos": 0.00, 
                    "cuota": 126.06 
                }, 
                { 
                    "fechaPago": "2019-02-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-03-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 70.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 15.40, 
                    "otrosConceptos": 0.00, 
                    "cuota": 85.40 
                }, 
                { 
                    "fechaPago": "2019-03-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 1000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 1000.00 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 64.58, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 14.21, 
                    "otrosConceptos": 0.00, 
                    "cuota": 78.79 
                }, 
                { 
                    "fechaPago": "2019-04-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 37.50, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 8.25, 
                    "otrosConceptos": 0.00, 
                    "cuota": 45.75 
                }, 
                { 
                    "fechaPago": "2019-05-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 2000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 2000.00 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "tipoCuota": "I", 
                    "concepto": "", 
                    "capital": 12.92, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 2.84, 
                    "otrosConceptos": 0.00, 
                    "cuota": 15.76 
                }, 
                { 
                    "fechaPago": "2019-06-10", 
                    "tipoCuota": "K", 
                    "concepto": "", 
                    "capital": 1000.00, 
                    "intereses": 0.00, 
                    "seguros": 0.00, 
                    "impuestos": 0.00, 
                    "otrosConceptos": 0.00, 
                    "cuota": 1000.00 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPrestamos.SimularLibreAmortizacionSinCliente", 
        "Fecha": "2019-11-20", 
        "Hora": "11:19:16", 
        "Requerimiento": "", 
        "Numero": 7035, 
        "Estado": "OK" 
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
<td>sdtDatosLibreAmortizacion</td>
<td>sBTDatosLibreAmortizacion</td>
<td>Datos de la simulación.</td>
</tr>
<tr>
<td>generaCuotaInteres</td>
<td>Character</td>
<td>Indica si se generan cuotas de intereses. [Hidden: Valores 'S'/'N'].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosLibreAmortizacion son los siguientes:</p>
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
<td>productoUId*</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Long</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>periodoCuotas</td>
<td>Long</td>
<td>Período entre vencimiento de cada cuota.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Capital solicitado.</td>
</tr>
<tr>
<td>pizarra</td>
<td>Short</td>
<td>Tipo de pizzarra. Si no se indica toma la preseteada para el producto.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa. Si no se indica toma la correspondiente al tipo de pizarra.</td>
</tr>
<tr>
<td>actividad</td>
<td>Long</td>
<td>Código de actividad (Destino del crédito).</td>
</tr>
<tr>
<td>cuotasCapital</td>
<td>sBTCuotaPrestamoAlta</td>
<td>Cuotas de capital.</td>
</tr>
<tr>
<td>cuotasInteres</td>
<td>sBTCuotaPrestamoAlta</td>
<td>Cuotas de intereses.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo estructurado sBTCuotaPrestamoAlta son los siguientes:</p>
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
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago de la cuota.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe de la cuota.</td>
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
<td>sdtSimulacion</td>
<td>sBTSimulacionPrestamoLA</td>
<td>Datos del préstamo simulado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionPrestamoLA son los siguientes:</p>
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
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital del préstamo.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos.</td>
</tr>
<tr>
<td>comisiones</td>
<td>Double</td>
<td>Comisiones.</td>
</tr>
<tr>
<td>totalPrestamo</td>
<td>Double</td>
<td>Total a pagar.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva.</td>
</tr>
<tr>
<td>tasaEfectivaAnual</td>
<td>Double</td>
<td>Tasa efectiva anual.</td>
</tr>
<tr>
<td>tasaNominalAnual</td>
<td>Double</td>
<td>Tasa nominal anual.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Importe otros conceptos.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCuotaSimulacion</td>
<td>Cronograma del préstamo.</td>
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
<td>Nombre de producto.</td>
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
<p>Los campos del tipo de dato estructurado sBTCuotaSimulacion son los siguientes:</p>
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
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago.</td>
</tr>
<tr>
<td>tipoCuota</td>
<td>String</td>
<td>Tipo de la cuota (Capital/Interés).</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Monto de capital en la cuota.</td>
</tr>
<tr>
<td>interes</td>
<td>Double</td>
<td>Monto de intereses en la cuota.</td>
</tr>
<tr>
<td>seguros</td>
<td>Double</td>
<td>Monto de seguros en la cuota.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Monto de impuestos en la cuota.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>Double</td>
<td>Importe correspondiente a otros conceptos.</td>
</tr>
<tr>
<td>cuota</td>
<td>Double</td>
<td>Importe total de la cuota.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
<tr>
<td>30004</td>
<td>El Identificador único de Producto es incorrecto.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió la Fecha de Primer Pago desde el origen.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el Monto de Capital desde el origen.</td>
</tr>
<tr>
<td>31001</td>
<td>La simulación no está vigente.</td>
</tr>
<tr>
<td>31002</td>
<td>La simulación no existe.</td>
</tr>
<tr>
<td>40001</td>
<td>La Cuenta indicada es incorrecta.</td>
</tr>
<tr>
<td>40012</td>
<td>La Fecha de Primer Pago indicada es menor a la Fecha Valor.</td>
</tr>
<tr>
<td>40013</td>
<td>La Fecha de Vencimiento indicada es menor a la Fecha Valor.</td>
</tr>
<tr>
<td>40014</td>
<td>La Fecha de Primer Pago indicada es mayor a la Fecha de Vencimien.</td>
</tr>
<tr>
<td>40015</td>
<td>El Plazo Total indicado es incorrecto.</td>
</tr>
<tr>
<td>40016</td>
<td>La Cantidad de Cuotas indicada es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40017</td>
<td>La Cantidad de Cuotas indicada es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40018</td>
<td>La Cantidad de Cuotas indicada es incorrecta.</td>
</tr>
<tr>
<td>40019</td>
<td>La Cantidad de Cuotas indicada no está preseteada.</td>
</tr>
<tr>
<td>40020</td>
<td>El período entre Cuotas indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40021</td>
<td>El período entre Cuotas indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40022</td>
<td>El período entre Cuotas indicado es incorrecto.</td>
</tr>
<tr>
<td>40023</td>
<td>El período entre Cuotas indicado no está preseteado.</td>
</tr>
<tr>
<td>40024</td>
<td>El Valor Cuota indicado es incorrecto.</td>
</tr>
<tr>
<td>40025</td>
<td>El Capital indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40026</td>
<td>El Capital indicado es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40027</td>
<td>El Capital indicado es incorrecto.</td>
</tr>
<tr>
<td>40037</td>
<td>La Clase de Tasa indicada es incorrecta.</td>
</tr>
<tr>
<td>40040</td>
<td>La Tasa Fija indicada está fuera de tolerancia.</td>
</tr>
<tr>
<td>40041</td>
<td>La Tasa indicada es mayor a la Tasa de Usura.</td>
</tr>
<tr>
<td>40048</td>
<td>El período indicado es incorrecto.</td>
</tr>
<tr>
<td>40049</td>
<td>El Tipo de Tasa indicado es incorrecto.</td>
</tr>
<tr>
<td>40054</td>
<td>La Tasa indicada es incorrecta.</td>
</tr>
<tr>
<td>40071</td>
<td>El Plazo Total de la Operación es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40072</td>
<td>El Plazo Total de la Operación es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40076</td>
<td>El Producto indicado no está Preseteado.</td>
</tr>
<tr>
<td>40147</td>
<td>No se cumple el período mínimo entre Fecha Valor y Fecha de Prime.</td>
</tr>
<tr>
<td>40148</td>
<td>El Capital indicado debe ser mayor al Valor Cuota.</td>
</tr>
<tr>
<td>40149</td>
<td>No se cumple el período máximo entre Fecha Valor y Fecha de Prime.</td>
</tr>
</tbody>
</table>
</div></template>


