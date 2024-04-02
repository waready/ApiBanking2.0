<template><div><h1 id="obtener-facultades" tabindex="-1"><a class="header-anchor" href="#obtener-facultades"><span>Obtener Facultades</span></a></h1>
<p>Método para obtener una lista de las facultades de una cuenta vista.</p>
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
<td>BTCuentasVista.ObtenerFacultades</td>
<td>RBTPG451</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Facultades:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerFacultades> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>BC79E967434CDFE2512C069E</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>1138</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerFacultades> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "papa", 
          "Usuario": "INSTALADOR", 
          "Token": "BC79E967434CDFE2512C069E" 
        }, 
        "operacionUId": 1138 
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
      <BTCuentasVista.ObtenerFacultadesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sdtFacultades> 
            <SdtsBTFacultad> 
                <grupos></grupos> 
                <firmantes></firmantes> 
                <descripcion>Firma de Cheques</descripcion> 
                <tipo>Categoría</tipo> 
                <codigo>1</codigo> 
            </SdtsBTFacultad> 
            <SdtsBTFacultad> 
                <grupos> 
                    <SdtsBTFacultadGrupo> 
                        <moneda>$</moneda> 
                        <codigoMoneda>0</codigoMoneda> 
                        <vigenciaHasta>2022-10-04</vigenciaHasta> 
                        <monto>99999990.00</monto> 
                        <habilitado>S</habilitado> 
                        <firmantes> 
                            <SdtsBTFacultadFirmante> 
                                <potestad>Titular</potestad> 
                                <personaUId>161</personaUId> 
                                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre> 
                                <categoria/> 
                            </SdtsBTFacultadFirmante> 
                        </firmantes> 
                        <codigoPapel>0</codigoPapel> 
                        <papel>$</papel> 
                        <numero>1</numero> 
                        <vigenciaDesde>2020-01-02</vigenciaDesde> 
                    </SdtsBTFacultadGrupo> 
                </grupos> 
                <firmantes></firmantes> 
                <descripcion>Retiro de cuentas vista</descripcion> 
                <tipo>Persona</tipo> 
                <codigo>2</codigo> 
            </SdtsBTFacultad> 
        </sdtFacultades> 
        <sdtFirmantes> 
            <SdtsBTFacultadFirmante> 
                <potestad>Titular</potestad> 
                <personaUId>161</personaUId> 
                <nombre>AZQUEZ SZENTANDRASI LEJANDRO</nombre> 
                <categoria/> 
            </SdtsBTFacultadFirmante> 
        </sdtFirmantes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerFacultades</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:23:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>486</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerFacultadesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "INSTALADOR", 
          "Token": "30F74741A02C318CEFD55684", 
          "Device": "GL" 
        }, 
        "sdtFacultades": { 
          "SdtsBTFacultad": [ 
            { 
              "grupos": "", 
              "firmantes": "", 
              "descripcion": "Firma de Cheques", 
              "tipo": "Categoría", 
              "codigo": 1 
            }, 
            { 
              "grupos": { 
                "SdtsBTFacultadGrupo": { 
                  "moneda": "$", 
                  "codigoMoneda": 0, 
                  "vigenciaHasta": "2022-10-04", 
                  "monto": 99999990, 
                  "habilitado": "S", 
                  "firmantes": { 
                    "SdtsBTFacultadFirmante": { 
                      "potestad": "Titular", 
                      "personaUId": 161, 
                      "nombre": "AZQUEZ SZENTANDRASI LEJANDRO", 
                      "categoria": "" 
                    } 
                  }, 
                  "codigoPapel": 0, 
                  "papel": "$", 
                  "numero": 1, 
                  "vigenciaDesde": "2020-01-02" 
                } 
              }, 
              "firmantes": "", 
              "descripcion": "Retiro de cuentas vista", 
              "tipo": "Persona", 
              "codigo": 2 
            } 
          ] 
        }, 
        "sdtFirmantes": { 
          "SdtsBTFacultadFirmante": { 
            "potestad": "Titular", 
            "personaUId": 161, 
            "nombre": "AZQUEZ SZENTANDRASI LEJANDRO", 
            "categoria": "" 
          } 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTCuentasVista.ObtenerFacultades", 
          "Fecha": "2022-11-29", 
          "Hora": "10:23:37", 
          "Requerimiento": 1, 
          "Numero": 486, 
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
<td>sdtFacultades</td>
<td>sBTFacultades</td>
<td>Listado de datos de facultades.</td>
</tr>
<tr>
<td>sdtFirmantes</td>
<td>sBTFacultadFirmantes</td>
<td>Listado de datos de firmantes.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultades son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Código.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo.</td>
</tr>
<tr>
<td>grupos</td>
<td>sBTFacultadGrupo</td>
<td>Listado de grupos de la facultad.</td>
</tr>
<tr>
<td>firmantes</td>
<td>sBTFacultadFirmante</td>
<td>Listado de firmantes de la facultad.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadGrupo son los siguientes:</p>
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
<td>numero</td>
<td>Short</td>
<td>Número de grupo.</td>
</tr>
<tr>
<td>habilitado</td>
<td>String</td>
<td>¿Habilitado? (S/N).</td>
</tr>
<tr>
<td>vigenciaDesde</td>
<td>Date</td>
<td>Fecha de vigencia desde.</td>
</tr>
<tr>
<td>vigenciaHasta</td>
<td>Date</td>
<td>Fecha de vigencia hasta.</td>
</tr>
<tr>
<td>codigoMoneda</td>
<td>Int</td>
<td>Código de moneda.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Moneda.</td>
</tr>
<tr>
<td>codigoPapel</td>
<td>Long</td>
<td>Código de papel.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Papel.</td>
</tr>
<tr>
<td>monto</td>
<td>Long</td>
<td>Monto.</td>
</tr>
<tr>
<td>firmantes</td>
<td>sBTFacultadFirmante</td>
<td>Listado de firmantes.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTFacultadFirmante son los siguientes:</p>
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
<td>personaUId</td>
<td>long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre.</td>
</tr>
<tr>
<td>categoria</td>
<td>String</td>
<td>Categoría.</td>
</tr>
<tr>
<td>potestad</td>
<td>String</td>
<td>Potestad.</td>
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
<td>No se recibió el identificador único de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta corriente / cuenta de ahorro.</td>
</tr>
</tbody>
</table>
</div></template>


