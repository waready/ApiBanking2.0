<template><div><h1 id="obtener-cronograma-con-pagos-a-fecha" tabindex="-1"><a class="header-anchor" href="#obtener-cronograma-con-pagos-a-fecha"><span>Obtener Cronograma con Pagos a Fecha</span></a></h1>
<p>Método para obtener el cronograma de un préstamo teniendo en cuenta solamente los pagos hasta la fecha indicada.</p>
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
<td>BTPrestamos.ObtenerCronogramaConPagosAFecha</td>
<td>RBTPG440</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cronograma con Pagos a Fecha:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerCronogramaConPagosAFecha> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>9aaec33a3bCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>8892</bts:operacionUId> 
         <bts:fecha>2022-11-16</bts:fecha> 
      </bts:BTPrestamos.ObtenerCronogramaConPagosAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronogramaConPagosAFecha=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId" : 8892, 
    "fecha" : "2022-11-16" 
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
      <BTPrestamos.ObtenerCronogramaConPagosAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
        <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
        </Btinreq> 
        <sdtCuotasPrestamos> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>292.6</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>1</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-07</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-09-21</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>282.1</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>2</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-10-15</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>270.89</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>0</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>3</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Paga</estado> 
                <fechaPago>2022-10-31</fechaPago> 
                <total>0</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>0</impuestos> 
                <importePago>112.51</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>0</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>0</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>147.89</capital> 
                <diasMora>1</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>4</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago>2022-11-16</fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Pago parcial</estado> 
                <fechaPago>2022-11-15</fechaPago> 
                <total>147.89</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>6.22</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>6.22</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>29.68</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>218.9</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>5</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-11-30</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>5.22</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>5.22</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>24.08</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>225.5</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>6</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-12-15</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>4.4</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>4.4</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>19.56</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>230.84</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>7</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2022-12-31</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>3.12</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>3.12</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>12.42</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>239.26</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>8</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2023-01-15</fechaPago> 
                <total>259.7</total> 
            </SdtsBTCuotaPrestamo> 
            <SdtsBTCuotaPrestamo> 
                <impuestos>2.1</impuestos> 
                <importePago>0</importePago> 
                <subsidios>0</subsidios> 
                <detalleConceptos> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>2.1</valor> 
                        <concepto>Impuesto al Interés</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a la Mora</concepto> 
                    </SdtsBTConcepto> 
                    <SdtsBTConcepto> 
                        <texto></texto> 
                        <valor>0</valor> 
                        <concepto>Impuesto a las Comisiones</concepto> 
                    </SdtsBTConcepto> 
                </detalleConceptos> 
                <fechaVencimiento></fechaVencimiento> 
                <intereses>6.74</intereses> 
                <estadoDsc></estadoDsc> 
                <comisiones>4.9</comisiones> 
                <otrosConceptos>0</otrosConceptos> 
                <concepto>Capital/Interés</concepto> 
                <interesMora>0</interesMora> 
                <capital>246.9</capital> 
                <diasMora>0</diasMora> 
                <tipoCuota>M</tipoCuota> 
                <nroCuota>9</nroCuota> 
                <seguros>0</seguros> 
                <fechaUltimoPago></fechaUltimoPago> 
                <redondeo>0</redondeo> 
                <estado>Impaga</estado> 
                <fechaPago>2023-01-31</fechaPago> 
                <total>260.64</total> 
            </SdtsBTCuotaPrestamo> 
	    </sdtCuotasPrestamos> 
	    <Erroresnegocio></Erroresnegocio> 
        <Btoutreq> 
            <Numero>898</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerCronogramaConPagosAFechaResponse</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>11:44:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
        </Btoutreq> 
      </BTPrestamos.ObtenerCronogramaConPagosAFechaResponse> 
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
    "sdtCuotasPrestamos": { 
        "SdtsBTCuotaPrestamo": [ 
            { 
                "impuestos": 0, 
                "importePago": 292.6, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 1, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-07", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-09-21", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 282.1, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 2, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-10-15", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 270.89, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 0, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 3, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Paga", 
                "fechaPago": "2022-10-31", 
                "total": 0 
            }, 
            { 
                "impuestos": 0, 
                "importePago": 112.51, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 0, 
                "estadoDsc": "", 
                "comisiones": 0, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 147.89, 
                "diasMora": 1, 
                "tipoCuota": "M", 
                "nroCuota": 4, 
                "seguros": 0, 
                "fechaUltimoPago": "2022-11-16", 
                "redondeo": 0, 
                "estado": "Pago parcial", 
                "fechaPago": "2022-11-15", 
                "total": 147.89 
            }, 
            { 
                "impuestos": 6.22, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 6.22, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 29.68, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 218.9, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 5, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-11-30", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 5.22, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 5.22, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 24.08, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 225.5, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 6, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-12-15", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 4.4, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 4.4, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 19.56, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 230.84, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 7, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2022-12-31", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 3.12, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 3.12, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 12.42, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 239.26, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 8, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2023-01-15", 
                "total": 259.7 
            }, 
            { 
                "impuestos": 2.1, 
                "importePago": 0, 
                "subsidios": 0, 
                "detalleConceptos": { 
                    "SdtsBTConcepto": [ 
                        { 
                            "texto": "", 
                            "valor": 2.1, 
                            "concepto": "Impuesto al Interés" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a la Mora" 
                        }, 
                        { 
                            "texto": "", 
                            "valor": 0, 
                            "concepto": "Impuesto a las Comisiones" 
                        } 
                    ] 
                }, 
                "fechaVencimiento": "\n\t\t", 
                "intereses": 6.74, 
                "estadoDsc": "", 
                "comisiones": 4.9, 
                "otrosConceptos": 0, 
                "concepto": "Capital/Interés", 
                "interesMora": 0, 
                "capital": 246.9, 
                "diasMora": 0, 
                "tipoCuota": "M", 
                "nroCuota": 9, 
                "seguros": 0, 
                "fechaUltimoPago": "\n\t\t", 
                "redondeo": 0, 
                "estado": "Impaga", 
                "fechaPago": "2023-01-31", 
                "total": 260.64 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerCronograma", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de los pagos.</td>
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
<td>sdtCuotasPrestamos</td>
<td>sBTCuotaPrestamo</td>
<td>Cronograma del préstamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuotaPrestamo son los siguientes:</p>
<p>###Versión V2R2</p>
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
<td>nroCuota</td>
<td>Int</td>
<td>Número de cuota.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago prevista .</td>
</tr>
<tr>
<td>tipoCuota</td>
<td>String</td>
<td>Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F).</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>(Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos de la cuota.</td>
</tr>
<tr>
<td>subsidios</td>
<td>Double</td>
<td>Subsidios  de la cuota.</td>
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
<td>interesMora</td>
<td>Double</td>
<td>Intereses de mora de la cuota.</td>
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
<tr>
<td>diasMora</td>
<td>Int</td>
<td>Días de mora de la cuota.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado de la cuota.</td>
</tr>
<tr>
<td>estadoDsc</td>
<td>String</td>
<td>Descripción del estado de la cuota.</td>
</tr>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de la cuota.</td>
</tr>
<tr>
<td>importePago</td>
<td>Double</td>
<td>Importe pagado.</td>
</tr>
</tbody>
</table>
<p>###Versión V2R3</p>
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
<td>nroCuota</td>
<td>Int</td>
<td>Número de cuota.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago prevista .</td>
</tr>
<tr>
<td>tipoCuota</td>
<td>String</td>
<td>Tipo de cuota (Capital - K / Interés - I / Capital-Interés - M / Pago Mínimo - T / Cuota Fija - F).</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>(Capital / Interés / Capital-Interés / Pago Mínimo / Cuota Fija).</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Impuestos de la cuota.</td>
</tr>
<tr>
<td>subsidios</td>
<td>Double</td>
<td>Subsidios  de la cuota.</td>
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
<td>interesMora</td>
<td>Double</td>
<td>Intereses de mora de la cuota.</td>
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
<tr>
<td>diasMora</td>
<td>Int</td>
<td>Días de mora de la cuota.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado de la cuota.</td>
</tr>
<tr>
<td>estadoDsc</td>
<td>String</td>
<td>Descripción del estado de la cuota.</td>
</tr>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de la cuota.</td>
</tr>
<tr>
<td>importePago</td>
<td>Double</td>
<td>Importe pagado.</td>
</tr>
<tr>
<td>redondeo</td>
<td>Double</td>
<td>Redondeo.</td>
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
<td>No se recuperó la operación para el Identificador.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió fecha para consulta.</td>
</tr>
</tbody>
</table>
</div></template>


