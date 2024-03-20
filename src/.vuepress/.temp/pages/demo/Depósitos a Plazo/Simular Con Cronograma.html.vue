<template><div><h1 id="simular-con-cronograma" tabindex="-1"><a class="header-anchor" href="#simular-con-cronograma"><span>Simular Con Cronograma</span></a></h1>
<p>Método para simular el alta de un depósito a plazo fijo.</p>
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
<td>BTDepositoAPlazo.SimularConCronograma</td>
<td>RBTPG454</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Configuración de productos válidos:</p>
<ul>
<li>
<p>En adición a la guía 70100 se agrego que en el valor especifico 3 se indica el tipo de    producto, donde los valores posibles son: (1- Deposito al venicmiento, 2- Pago periódico de intereses)</p>
</li>
<li>
<p>Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera:</p>
</li>
</ul>
</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>Valor incremental</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Módulo</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Tipo de operación</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 2</td>
<td>Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 3</td>
<td>Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Con Cronograma:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.SimularConCronograma> 
       <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>30F74741A02C318CEFD55684</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:productoUId>132</bts:productoUId> 
         <bts:capital>20000</bts:capital> 
         <bts:plazo>360</bts:plazo> 
         <bts:periodicidad>30</bts:periodicidad> 
         <bts:sBTDatosExtendidos/> 
      </bts:BTDepositosAPlazo.SimularConCronograma> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ObtenerDatos' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": 1, 
         "Usuario": "INSTALADOR", 
         "Token": "30F74741A02C318CEFD55684", 
         "Device": "GL" 
      }, 
      "clienteUId": 10009, 
      "productoUId": 132, 
      "capital": 20000, 
      "plazo": 360, 
      "periodicidad": 30, 
      "sBTDatosExtendidos": "" 
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
      <BTDepositosAPlazo.SimularConCronograma xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>30F74741A02C318CEFD55684</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <sBTDatosExtendidos></sBTDatosExtendidos> 
         <sBTSimulacionDepositoAPlazo> 
            <simulacionId>92</simulacionId> 
            <producto> 
               <productoUId>132</productoUId> 
               <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.</nombre> 
               <moneda>S/.</moneda> 
               <papel>$</papel> 
            </producto> 
            <clienteUId>10009</clienteUId> 
            <Sucursal>Sucursal Principal</Sucursal> 
            <TipoProducto>PP</TipoProducto> 
            <Capital>20000.00</Capital> 
            <ValorNominal>0.00</ValorNominal> 
            <Precio>0.00000000</Precio> 
            <TipoTasa>Efectiva Anual</TipoTasa> 
            <Tasa>11.200000</Tasa> 
            <TipoAnio>360 Días</TipoAnio> 
            <Plazo>360</Plazo> 
            <TipoDia>Días Comerciales</TipoDia> 
            <FechaInicio>2022-04-21</FechaInicio> 
            <FechaVencimiento>2023-04-21</FechaVencimiento> 
            <Periodicidad>30</Periodicidad> 
            <Intereses>2132.71</Intereses> 
            <Impuestos> 
               <SdtsBTConcepto> 
                  <concepto>GANANCIA</concepto> 
                  <valor>106.65</valor> 
                  <texto>Impuestos a las ganancias Totales</texto> 
               </SdtsBTConcepto> 
            </Impuestos> 
            <otrosConceptos></otrosConceptos> 
            <Cronograma> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-05-23</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-06-23</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-07-25</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-08-25</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-09-26</FechaPago> 
                  <Plazo>31</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>183.67</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.18</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-10-26</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-11-28</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2022-12-28</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-01-30</FechaPago> 
                  <Plazo>32</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>189.62</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>9.48</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-02-28</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-03-31</FechaPago> 
                  <Plazo>30</Plazo> 
                  <TipoCuota>I</TipoCuota> 
                  <Capital>0.00</Capital> 
                  <Interes>177.72</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>8.89</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
               <SdtsBTCuotaPlanDeposito> 
                  <FechaPago>2023-04-21</FechaPago> 
                  <Plazo>21</Plazo> 
                  <TipoCuota>M</TipoCuota> 
                  <Capital>20000.00</Capital> 
                  <Interes>124.24</Interes> 
                  <Impuestos> 
                     <SdtsBTConcepto> 
                        <concepto>GANANCIA</concepto> 
                        <valor>6.21</valor> 
                        <texto>Impuestos a las ganancias</texto> 
                     </SdtsBTConcepto> 
                  </Impuestos> 
                  <OtrosConceptos></OtrosConceptos> 
               </SdtsBTCuotaPlanDeposito> 
            </Cronograma> 
         </sBTSimulacionDepositoAPlazo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositosAPlazo.SimularConCronograma</Servicio> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>10:43:24</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>497</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositosAPlazo.SimularConCronograma> 
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
      "sBTDatosExtendidos": "", 
      "sBTSimulacionDepositoAPlazo": { 
         "simulacionId": 92, 
         "producto": { 
         "productoUId": 132, 
         "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible Mda. Nac.", 
         "moneda": "S/.", 
         "papel": "$" 
         }, 
         "clienteUId": 10009, 
         "Sucursal": "Sucursal Principal", 
         "TipoProducto": "PP", 
         "Capital": 20000, 
         "ValorNominal": 0, 
         "Precio": 0, 
         "TipoTasa": "Efectiva Anual", 
         "Tasa": 11.2, 
         "TipoAnio": "360 Días", 
         "Plazo": 360, 
         "TipoDia": "Días Comerciales", 
         "FechaInicio": "2022-04-21", 
         "FechaVencimiento": "2023-04-21", 
         "Periodicidad": 30, 
         "Intereses": 2132.71, 
         "Impuestos": { 
         "SdtsBTConcepto": { 
            "concepto": "GANANCIA", 
            "valor": 106.65, 
            "texto": "Impuestos a las ganancias Totales" 
         } 
         }, 
         "otrosConceptos": "", 
         "Cronograma": { 
         "SdtsBTCuotaPlanDeposito": [ 
            { 
               "FechaPago": "2022-05-23", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-06-23", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-07-25", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-08-25", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-09-26", 
               "Plazo": 31, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 183.67, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.18, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-10-26", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-11-28", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2022-12-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-01-30", 
               "Plazo": 32, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 189.62, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 9.48, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-02-28", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-03-31", 
               "Plazo": 30, 
               "TipoCuota": "I", 
               "Capital": 0, 
               "Interes": 177.72, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 8.89, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            }, 
            { 
               "FechaPago": "2023-04-21", 
               "Plazo": 21, 
               "TipoCuota": "M", 
               "Capital": 20000, 
               "Interes": 124.24, 
               "Impuestos": { 
               "SdtsBTConcepto": { 
                  "concepto": "GANANCIA", 
                  "valor": 6.21, 
                  "texto": "Impuestos a las ganancias" 
               } 
               }, 
               "OtrosConceptos": "" 
            } 
         ] 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>capital</td>
<td>Short</td>
<td>Importe capital.</td>
</tr>
<tr>
<td>plazo</td>
<td>Short</td>
<td>Plazo.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Short</td>
<td>Período entre pagos de intereses.</td>
</tr>
<tr>
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosLista son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave de dato de la lista.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato de la lista.</td>
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
<td>sdtDatosExtendidos</td>
<td>sBTDatoExtendido</td>
<td>Listado de datos complementarios.</td>
</tr>
<tr>
<td>sBTSimulacionDepositoAPlazo</td>
<td>sBTSimulacionDepositoAPlazo</td>
<td>Datos de simulación del depósito.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoExtendido son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave del dato extendido.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de dato extendido.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato extendido.</td>
</tr>
<tr>
<td>Lista</td>
<td>sBTDatosLista</td>
<td>Lista de datos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosLista son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Clave de dato de la lista.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de dato de la lista.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSimulacionDepositoAPlazo son los siguientes:</p>
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
<td>simulacionId</td>
<td>Long</td>
<td>Identificador de simulación.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador de cliente.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal.</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital del cronograma.</td>
</tr>
<tr>
<td>valorNominal</td>
<td>Double</td>
<td>Valor nominal.</td>
</tr>
<tr>
<td>precio</td>
<td>Long</td>
<td>Precio.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>tasa</td>
<td>Long</td>
<td>Tasa.</td>
</tr>
<tr>
<td>tipoAnio</td>
<td>String</td>
<td>Tipo de año.</td>
</tr>
<tr>
<td>plazo</td>
<td>Long</td>
<td>Plazo.</td>
</tr>
<tr>
<td>tipoDia</td>
<td>String</td>
<td>Tipo de día.</td>
</tr>
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha de inicio.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Long</td>
<td>Periodicidad.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses.</td>
</tr>
<tr>
<td>impuestos</td>
<td>sBTConceptos</td>
<td>Datos de impuestos.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConceptos</td>
<td>Otros conceptos.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCronogramaDeposito</td>
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
<p>Los campos del tipo de dato estructurado sBTCronogramaDeposito son los siguientes:</p>
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
<td>sBTCronogramaDeposito</td>
<td>sbtCuotaPlanDeposito</td>
<td>Cronograma deposito.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sbtCuotaPlanDeposito son los siguientes:</p>
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
<td>plazo</td>
<td>Long</td>
<td>Plazo.</td>
</tr>
<tr>
<td>tipoCuota</td>
<td>String</td>
<td>Tipo de cuota.</td>
</tr>
<tr>
<td>capital</td>
<td>Double</td>
<td>Capital.</td>
</tr>
<tr>
<td>interes</td>
<td>Double</td>
<td>Interés.</td>
</tr>
<tr>
<td>impuestos</td>
<td>sBTConceptos</td>
<td>Datos de impuestos.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConceptos</td>
<td>Otros conceptos.</td>
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
<td>No se recibió el identificador del Producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el capital del Producto.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el plazo del Producto.</td>
</tr>
<tr>
<td>40001</td>
<td>El plazo ingresado es menor al plazo mínimo parametrizado para el producto.</td>
</tr>
<tr>
<td>40003</td>
<td>El plazo ingresado es mayor al plazo máximo parametrizado para el producto.</td>
</tr>
<tr>
<td>40004</td>
<td>El monto ingresado es menor al monto mínimo parametrizado para el producto.</td>
</tr>
<tr>
<td>40005</td>
<td>El monto ingresado es mayor al monto máximo parametrizado para el producto.</td>
</tr>
<tr>
<td>40006</td>
<td>No se encontró Tasa para el producto a Simular.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


