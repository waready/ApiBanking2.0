<template><div><h1 id="obtener-cronograma" tabindex="-1"><a class="header-anchor" href="#obtener-cronograma"><span>Obtener Cronograma</span></a></h1>
<p>Método para obtener el cronograma de un préstamo.</p>
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
<td>BTPrestamos.ObtenerCronograma</td>
<td>RBTPG072</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cronograma:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerCronograma> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>361</bts:operacionUId> 
      </bts:BTPrestamos.ObtenerCronograma> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerCronograma=' \ 
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
    "operacionUId": 361 
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
      <BTPrestamos.ObtenerCronogramaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>1</nroCuota> 
               <fechaPago>2018-11-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>0.00</total> 
               <estado>Paga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>2018-11-05</fechaUltimoPago> 
               <importePago>1287.08</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>2</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>1287.08</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>1287.08</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>3</nroCuota> 
               <fechaPago>2018-12-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>4</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>2027.16</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2027.16</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>5</nroCuota> 
               <fechaPago>2019-01-07</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>6</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>I</tipoCuota> 
               <concepto>Interés Vencido</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>0.00</capital> 
               <intereses>622.09</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>622.09</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>7</nroCuota> 
               <fechaPago>2019-02-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>8</nroCuota> 
               <fechaPago>2019-03-05</fechaPago> 
               <tipoCuota>K</tipoCuota> 
               <concepto>Capital</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>25000.00</capital> 
               <intereses>0.00</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>200.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>0.00</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>25200.00</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
         </sdtCuotaPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>898</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerCronograma</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>11:44:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerCronogramaResponse> 
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
    "sdtCuotaPrestamo": { 
        "sBTCuotaPrestamo": [ 
            { 
                "impuestos": "0.00", 
                "importePago": "1287.08", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "1", 
                "seguros": "0.00", 
                "fechaUltimoPago": "2018-11-05", 
                "estado": "Paga", 
                "fechaPago": "2018-11-05", 
                "total": "0.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "1287.08", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "2", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "1287.08" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "3", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2018-12-05", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "2027.16", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "4", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "2027.16" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "5", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-01-07", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "622.09", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Interés Vencido", 
                "interesMora": "0.00", 
                "capital": "0.00", 
                "diasMora": "0", 
                "tipoCuota": "I", 
                "nroCuota": "6", 
                "seguros": "0.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "622.09" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "7", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-02-05", 
                "total": "25200.00" 
            }, 
            { 
                "impuestos": "0.00", 
                "importePago": "0.00", 
                "subsidios": "0.00", 
                "detalleConceptos": { 
                    "sBTConcepto": [] 
                }, 
                "fechaVencimiento": "0000-00-00", 
                "intereses": "0.00", 
                "estadoDsc": "", 
                "comisiones": "0.00", 
                "otrosConceptos": "0.00", 
                "concepto": "Capital", 
                "interesMora": "0.00", 
                "capital": "25000.00", 
                "diasMora": "0", 
                "tipoCuota": "K", 
                "nroCuota": "8", 
                "seguros": "200.00", 
                "fechaUltimoPago": "0000-00-00", 
                "estado": "Impaga", 
                "fechaPago": "2019-03-05", 
                "total": "25200.00" 
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
<td>sdtCuotaPrestamo</td>
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
</tbody>
</table>
</div></template>


