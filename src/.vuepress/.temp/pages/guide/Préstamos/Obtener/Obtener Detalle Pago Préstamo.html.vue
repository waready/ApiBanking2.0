<template><div><h1 id="obtener-detalle-pago-prestamo" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-pago-prestamo"><span>Obtener Detalle Pago Préstamo</span></a></h1>
<p>Método de obtención de detalle de un pago de prestamo a partir del movimiento.</p>
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
<td>BTPrestamos.ObtenerDetallePagoPrestamo</td>
<td>RBTPG838</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle Pago Prestamo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetallePagoPrestamo> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>ae6041cefd4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>751</bts:operacionUId> 
         <bts:movimientoUId>981</bts:movimientoUId> 
      </bts:BTPrestamos.ObtenerDetallePagoPrestamo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetallePagoPrestamo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "1", 
          "Usuario": "MINSTALADOR", 
          "Token": "ae6041cefd4A8B5C60A82434" 
        }, 
        "operacionUId": 751, 
        "movimientoUId": 981 
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
      <BTPrestamos.ObtenerDetallePagoPrestamoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ae6041cefd4A8B5C60A82434</Token> 
         </Btinreq> 
         <sbtDetallePagoPrestamo> 
            <redondeos>0.00</redondeos> 
            <otrosConceptos>0.00</otrosConceptos> 
            <capital>883.21</capital> 
            <impuestos>26.92</impuestos> 
            <intereses>109.13</intereses> 
            <detalle> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>126.50</capital> 
                  <impuestos>0.88</impuestos> 
                  <intereses>0.00</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-05-27</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>0.88</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión Mora</texto> 
                        <valor>77.70</valor> 
                        <concepto>COMISION_MORA</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>82.60</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>98.19</capital> 
                  <impuestos>5.20</impuestos> 
                  <intereses>23.99</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-06-12</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>23.99</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>5.20</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>98.15</capital> 
                  <impuestos>5.21</impuestos> 
                  <intereses>24.02</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-06-30</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>24.02</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>5.21</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>105.90</capital> 
                  <impuestos>4.02</impuestos> 
                  <intereses>17.46</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-07-15</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>17.46</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>4.02</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>107.91</capital> 
                  <impuestos>3.72</impuestos> 
                  <intereses>15.75</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-07-31</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>15.75</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>3.72</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>112.35</capital> 
                  <impuestos>3.04</impuestos> 
                  <intereses>11.99</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-08-15</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>11.99</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>3.04</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>115.00</capital> 
                  <impuestos>2.64</impuestos> 
                  <intereses>9.74</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-08-31</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>9.74</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>2.64</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>119.21</capital> 
                  <impuestos>1.99</impuestos> 
                  <intereses>6.18</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-09-15</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Interés</texto> 
                        <valor>6.18</valor> 
                        <concepto>INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>1.99</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>4.90</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>4.90</comisiones> 
               </sBTDetallePagoCuota> 
               <sBTDetallePagoCuota> 
                  <otrosConceptos>0.00</otrosConceptos> 
                  <capital>0.00</capital> 
                  <impuestos>0.22</impuestos> 
                  <intereses>0.00</intereses> 
                  <redondeo>0.00</redondeo> 
                  <total>0.00</total> 
                  <fechaPago>2022-09-30</fechaPago> 
                  <detalleConceptos> 
                     <sBTConcepto> 
                        <texto>Impuesto de Interés</texto> 
                        <valor>0.22</valor> 
                        <concepto>IMPUESTO_INTERES</concepto> 
                     </sBTConcepto> 
                     <sBTConcepto> 
                        <texto>Comisión</texto> 
                        <valor>1.23</valor> 
                        <concepto>COMISION</concepto> 
                     </sBTConcepto> 
                  </detalleConceptos> 
                  <seguros>0.00</seguros> 
                  <comisiones>1.23</comisiones> 
               </sBTDetallePagoCuota> 
            </detalle> 
            <fechaPago>2022-09-15</fechaPago> 
            <total>1137.39</total> 
            <seguros>0.00</seguros> 
            <comisiones>118.13</comisiones> 
         </sbtDetallePagoPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>155926</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDetallePagoPrestamo</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2022-12-01</Fecha> 
            <Hora>18:43:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetallePagoPrestamoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Device": "1", 
          "Usuario": "MINSTALADOR", 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Token": "ae6041cefd4A8B5C60A82434" 
        }, 
        "sbtDetallePagoPrestamo": { 
          "redondeos": 0, 
          "otrosConceptos": 0, 
          "capital": 883.21, 
          "impuestos": 26.92, 
          "intereses": 109.13, 
          "detalle": { 
            "sBTDetallePagoCuota": [ 
              { 
                "otrosConceptos": 0, 
                "capital": 126.5, 
                "impuestos": 0.88, 
                "intereses": 0, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-05-27", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 0.88, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    }, 
                    { 
                      "texto": "Comisión Mora", 
                      "valor": 77.7, 
                      "concepto": "COMISION_MORA" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 82.6 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 98.19, 
                "impuestos": 5.2, 
                "intereses": 23.99, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-06-12", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 23.99, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 5.2, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 98.15, 
                "impuestos": 5.21, 
                "intereses": 24.02, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-06-30", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 24.02, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 5.21, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 105.9, 
                "impuestos": 4.02, 
                "intereses": 17.46, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-07-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 17.46, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 4.02, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 107.91, 
                "impuestos": 3.72, 
                "intereses": 15.75, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-07-31", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 15.75, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 3.72, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 112.35, 
                "impuestos": 3.04, 
                "intereses": 11.99, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-08-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 11.99, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 3.04, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 115, 
                "impuestos": 2.64, 
                "intereses": 9.74, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-08-31", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 9.74, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 2.64, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 119.21, 
                "impuestos": 1.99, 
                "intereses": 6.18, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-09-15", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Interés", 
                      "valor": 6.18, 
                      "concepto": "INTERES" 
                    }, 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 1.99, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 4.9, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 4.9 
              }, 
              { 
                "otrosConceptos": 0, 
                "capital": 0, 
                "impuestos": 0.22, 
                "intereses": 0, 
                "redondeo": 0, 
                "total": 0, 
                "fechaPago": "2022-09-30", 
                "detalleConceptos": { 
                  "sBTConcepto": [ 
                    { 
                      "texto": "Impuesto de Interés", 
                      "valor": 0.22, 
                      "concepto": "IMPUESTO_INTERES" 
                    }, 
                    { 
                      "texto": "Comisión", 
                      "valor": 1.23, 
                      "concepto": "COMISION" 
                    } 
                  ] 
                }, 
                "seguros": 0, 
                "comisiones": 1.23 
              } 
            ] 
          }, 
          "fechaPago": "2022-09-15", 
          "total": 1137.39, 
          "seguros": 0, 
          "comisiones": 118.13 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Numero": 155926, 
          "Estado": "OK", 
          "Servicio": "BTPrestamos.ObtenerDetallePagoPrestamo", 
          "Requerimiento": 0, 
          "Fecha": "2022-12-01", 
          "Hora": "18:43:49", 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
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
<td>sdtDetallePagoPrestamo</td>
<td>sBTDetallePagoPrestamo</td>
<td>Detalle del pago del prestamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetallePagoPrestamo son los siguientes:</p>
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
<td>Fecha de pago prevista.</td>
</tr>
<tr>
<td>detalle</td>
<td>sBTDetallePagoCuota</td>
<td>Detalle pago de la cuota.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses de la cuota.</td>
</tr>
<tr>
<td>comisiones</td>
<td>Double</td>
<td>Comisiones de la cuota.</td>
</tr>
<tr>
<td>seguros</td>
<td>Double</td>
<td>Seguros de la cuota.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos de la cuota.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>Double</td>
<td>Importe otros conceptos.</td>
</tr>
<tr>
<td>redondeos</td>
<td>Double</td>
<td>Redondeos.</td>
</tr>
<tr>
<td>total</td>
<td>Double</td>
<td>Total de la cuota.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetallePagoCuota son los siguientes:</p>
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
<td>Fecha de pago prevista.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital de la cuota.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses de la cuota.</td>
</tr>
<tr>
<td>comisiones</td>
<td>Double</td>
<td>Comisiones de la cuota.</td>
</tr>
<tr>
<td>seguros</td>
<td>Double</td>
<td>Seguros de la cuota.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos de la cuota.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>Double</td>
<td>Importe otros conceptos.</td>
</tr>
<tr>
<td>detalleConceptos</td>
<td>sBTConcepto</td>
<td>Detalle de los conceptos adicionales.</td>
</tr>
<tr>
<td>total</td>
<td>Double</td>
<td>Total de la cuota.</td>
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
<td>No se recibió el identificador de movimiento.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó el préstamo para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30103</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>30104</td>
<td>No existe registro para el movimiento indicado.</td>
</tr>
</tbody>
</table>
</div></template>


