<template><div><h1 id="obtener-cronograma-a-fecha" tabindex="-1"><a class="header-anchor" href="#obtener-cronograma-a-fecha"><span>Obtener Cronograma a Fecha</span></a></h1>
<p>Dada una operación, devuelve el cronograma de la misma respecto a una fecha dada.</p>
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
<td>BTPrestamos.ObtenerCronogramaAFecha</td>
<td>RBTPG222</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cronograma a Fecha:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerCronogramaAFecha> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>191631443CD285A89A23FBEE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>37675</bts:operacionUId> 
         <bts:fecha>2019-08-26</bts:fecha> 
      </bts:BTPrestamos.ObtenerCronogramaAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerCronogramaAFecha=' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "operacionUId": "37675", 
        "fecha": "2019-08-26" 
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
      <BTPrestamos.ObtenerCronogramaAFechaResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>191631443CD285A89A23FBEE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>1</nroCuota> 
               <fechaPago>2019-08-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>523.74</capital> 
               <intereses>1495.66</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>345.37</impuestos> 
               <interesMora>74.19</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2438.96</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>19</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>2</nroCuota> 
               <fechaPago>2019-09-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1125.28</capital> 
               <intereses>1002.60</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>220.57</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>3</nroCuota> 
               <fechaPago>2019-10-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1257.94</capital> 
               <intereses>893.86</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>196.65</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>4</nroCuota> 
               <fechaPago>2019-11-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1326.65</capital> 
               <intereses>837.54</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>184.26</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>5</nroCuota> 
               <fechaPago>2019-12-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1469.05</capital> 
               <intereses>720.82</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>158.58</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>6</nroCuota> 
               <fechaPago>2020-01-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1562.88</capital> 
               <intereses>643.91</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>141.66</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>7</nroCuota> 
               <fechaPago>2020-02-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1694.93</capital> 
               <intereses>535.67</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>117.85</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>8</nroCuota> 
               <fechaPago>2020-03-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1872.10</capital> 
               <intereses>390.45</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>85.90</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>9</nroCuota> 
               <fechaPago>2020-04-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>1996.32</capital> 
               <intereses>288.63</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>63.50</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
            <sBTCuotaPrestamo> 
               <nroCuota>10</nroCuota> 
               <fechaPago>2020-05-07</fechaPago> 
               <tipoCuota>M</tipoCuota> 
               <concepto>Capital/Interés</concepto> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <capital>2171.11</capital> 
               <intereses>145.36</intereses> 
               <comisiones>0.00</comisiones> 
               <seguros>0.00</seguros> 
               <subsidios>0.00</subsidios> 
               <impuestos>31.98</impuestos> 
               <interesMora>0.00</interesMora> 
               <otrosConceptos>0.00</otrosConceptos> 
               <detalleConceptos></detalleConceptos> 
               <total>2348.45</total> 
               <estado>Impaga</estado> 
               <estadoDsc/> 
               <diasMora>0</diasMora> 
               <fechaUltimoPago>0000-00-00</fechaUltimoPago> 
               <importePago>0.00</importePago> 
            </sBTCuotaPrestamo> 
         </sdtCuotaPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.ObtenerCronogramaAFecha</Servicio> 
            <Fecha>2019-07-26</Fecha> 
            <Hora>11:35:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>120420</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.ObtenerCronogramaAFechaResponse> 
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
    "planPagos": { 
        "sBTCuotaPrestamo": [ 
            { 
              "nroCuota": "1", 
              "fechaPago": "2019-08-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "523.74", 
              "intereses": "1495.66", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "345.37", 
              "interesMora": "74.19", 
              "otrosConceptos": "0.00", 
              "total": "2438.96", 
              "estado": "Impaga", 
              "diasMora": "19", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "2", 
              "fechaPago": "2019-09-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1125.28", 
              "intereses": "1002.60", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "220.57", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "3", 
              "fechaPago": "2019-10-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1257.94", 
              "intereses": "893.86", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "196.65", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "4", 
              "fechaPago": "2019-11-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1326.65", 
              "intereses": "837.54", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "184.26", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "5", 
              "fechaPago": "2019-12-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1469.05", 
              "intereses": "720.82", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "158.58", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "6", 
              "fechaPago": "2020-01-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1562.88", 
              "intereses": "643.91", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "141.66", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "7", 
              "fechaPago": "2020-02-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1694.93", 
              "intereses": "535.67", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "117.85", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "8", 
              "fechaPago": "2020-03-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1872.10", 
              "intereses": "390.45", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "85.90", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "9", 
              "fechaPago": "2020-04-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "1996.32", 
              "intereses": "288.63", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "63.50", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            }, 
            { 
              "nroCuota": "10", 
              "fechaPago": "2020-05-07", 
              "tipoCuota": "M", 
              "concepto": "Capital/Interés", 
              "fechaVencimiento": "0000-00-00", 
              "capital": "2171.11", 
              "intereses": "145.36", 
              "comisiones": "0.00", 
              "seguros": "0.00", 
              "subsidios": "0.00", 
              "impuestos": "31.98", 
              "interesMora": "0.00", 
              "otrosConceptos": "0.00", 
              "total": "2348.45", 
              "estado": "Impaga", 
              "diasMora": "0", 
              "fechaUltimoPago": "0000-00-00", 
              "importePago": "0.00" 
            } 
          ] 
        }, 
        "Btoutreq": { 
			"Numero": 54, 
			"Servicio": "BTPrestamos.ObtenerCronogramaAFecha", 
			"Estado": "OK", 
			"Fecha": "2019-10-25", 
			"Requerimiento": "1", 
			"Hora": "13:34:10", 
			"Canal": "BTDIGITAL" 
		} 
      } 
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
<td>Identificador de la operación.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha a consultar.</td>
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
<tr>
<td>30003</td>
<td>No se recibió fecha para consulta.</td>
</tr>
</tbody>
</table>
</div></template>


