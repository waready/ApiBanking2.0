<template><div><h2 id="simular-libre-amortizacion" tabindex="-1"><a class="header-anchor" href="#simular-libre-amortizacion"><span>Simular Libre Amortizacion</span></a></h2>
<p>Método para simular el alta de un préstamo libre amortizacion en Bantotal.</p>
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
<td>BTPrestamos.SimularLibreAmortizacion</td>
<td>RBTPG231</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular Libre Amortización:</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soapenv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>bts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Header</span><span class="token punctuation">/></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>BTPrestamos.SimularLibreAmortizacion</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span>AV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span>MINSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Requerimiento</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span>fe9c2c642d4A8B5C60A82434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>sdtPrestamo</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>productoUId</span><span class="token punctuation">></span></span>75<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>productoUId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>monto</span><span class="token punctuation">></span></span>10000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>monto</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>clienteUId</span><span class="token punctuation">></span></span>221<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>clienteUId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>actividad</span><span class="token punctuation">></span></span>1111<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>actividad</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>periodoCuotas</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>cantidadCuotas</span><span class="token punctuation">></span></span>?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>cantidadCuotas</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>tasa</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>cuotasInteres</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>pizarra</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>cuotasCapital</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>2020-04-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>2020-05-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>3000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>2020-06-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>fechaPago</span><span class="token punctuation">></span></span>
            		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>4000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>importe</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>sBTCuotaPrestamoAlta</span><span class="token punctuation">></span></span>
            	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>cuotasCapital</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>sdtPrestamo</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>BTPrestamos.SimularLibreAmortizacion</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Envelope</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>curl -X POST \
  'http<span class="token operator">:</span><span class="token comment">//btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?SimularLibreAmortizacion \</span>
  -H 'cache-control<span class="token operator">:</span> no-cache' \
  -H 'content-type<span class="token operator">:</span> application/json' \
  -H 'postman-token<span class="token operator">:</span> 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '<span class="token punctuation">{</span>
        <span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"AV"</span><span class="token punctuation">,</span>
          <span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span>
          <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span>
          <span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"658fcb0b034A8B5C60A82434"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"sdtPrestamo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"productoUId"</span><span class="token operator">:</span> <span class="token string">"75"</span><span class="token punctuation">,</span>
          <span class="token property">"monto"</span><span class="token operator">:</span> <span class="token string">"10000"</span><span class="token punctuation">,</span>
          <span class="token property">"clienteUId"</span><span class="token operator">:</span> <span class="token string">"221"</span><span class="token punctuation">,</span>
          <span class="token property">"actividad"</span><span class="token operator">:</span> <span class="token string">"1111"</span><span class="token punctuation">,</span>
          <span class="token property">"cantidadCuotas"</span><span class="token operator">:</span> <span class="token string">"?"</span><span class="token punctuation">,</span>
          <span class="token property">"cuotasCapital"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"sBTCuotaPrestamoAlta"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-04-15"</span><span class="token punctuation">,</span>
                <span class="token property">"importe"</span><span class="token operator">:</span> <span class="token string">"3000"</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-05-15"</span><span class="token punctuation">,</span>
                <span class="token property">"importe"</span><span class="token operator">:</span> <span class="token string">"3000"</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-06-15"</span><span class="token punctuation">,</span>
                <span class="token property">"importe"</span><span class="token operator">:</span> <span class="token string">"4000"</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENV</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/encoding/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BTPrestamos.SimularLibreAmortizacionResponse</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btinreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Device</span><span class="token punctuation">></span></span>AV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Device</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Usuario</span><span class="token punctuation">></span></span>MINSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Usuario</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Token</span><span class="token punctuation">></span></span>fe9c2c642d4A8B5C60A82434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Token</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btinreq</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sdtSimulacion</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cronograma</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-04-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>I<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>160.74<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>160.74<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-04-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>K<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>3000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>217.73<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>3217.73<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-05-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>I<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>102.21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>102.21<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-05-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>K<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>3000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>216.38<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>3216.38<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-06-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>I<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>60.37<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>60.37<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPago</span><span class="token punctuation">></span></span>2020-06-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPago</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoCuota</span><span class="token punctuation">></span></span>K<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoCuota</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>concepto</span><span class="token punctuation">/></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>4000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>seguros</span><span class="token punctuation">></span></span>215.03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>seguros</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otrosConceptos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otrosConceptos</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cuota</span><span class="token punctuation">></span></span>4215.03<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cuota</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sBTCuotaSimulacion</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>cronograma</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaValor</span><span class="token punctuation">></span></span>2020-03-13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaValor</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>capital</span><span class="token punctuation">></span></span>10000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>capital</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasaEfectiva</span><span class="token punctuation">></span></span>0.000000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasaEfectiva</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>impuestos</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>impuestos</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>intereses</span><span class="token punctuation">></span></span>323.32<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>intereses</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasaNominalAnual</span><span class="token punctuation">></span></span>17.522024<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasaNominalAnual</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>totalPrestamo</span><span class="token punctuation">></span></span>10000.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>totalPrestamo</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasaEfectivaAnual</span><span class="token punctuation">></span></span>19.000000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasaEfectivaAnual</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>operacionUId</span><span class="token punctuation">></span></span>682<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>operacionUId</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasa</span><span class="token punctuation">></span></span>19.000000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasa</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaPrimerPago</span><span class="token punctuation">></span></span>2020-04-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaPrimerPago</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fechaVencimiento</span><span class="token punctuation">></span></span>2020-06-15<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fechaVencimiento</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plazo</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plazo</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>producto</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>moneda</span><span class="token punctuation">></span></span>$<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>moneda</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>papel</span><span class="token punctuation">></span></span>$<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>papel</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>productoUId</span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>productoUId</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>PRÉSTAMOS CONSUMO, Amortización Libre TF<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>producto</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comisiones</span><span class="token punctuation">></span></span>0.00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comisiones</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sdtSimulacion</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Erroresnegocio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Erroresnegocio</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btoutreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Numero</span><span class="token punctuation">></span></span>12993<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Numero</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Estado</span><span class="token punctuation">></span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Estado</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Servicio</span><span class="token punctuation">></span></span>BTPrestamos.SimularLibreAmortizacion<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Servicio</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Fecha</span><span class="token punctuation">></span></span>2019-03-06<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Fecha</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hora</span><span class="token punctuation">></span></span>13:00:00<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hora</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btoutreq</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BTPrestamos.SimularLibreAmortizacionResponse</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Envelope</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>'<span class="token punctuation">{</span>
	<span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"AV"</span><span class="token punctuation">,</span>
		<span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span>
		<span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span>
		<span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"fa2c02c95a4A8B5C60A82434"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"sdtSimulacion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"sBTConcepto"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"10000.00"</span><span class="token punctuation">,</span>
        <span class="token property">"fechaValor"</span><span class="token operator">:</span> <span class="token string">"2018-10-30"</span><span class="token punctuation">,</span>
        <span class="token property">"cronograma"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"sBTCuotaSimulacion"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"2937.53"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"2937.53"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-04-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"0.00"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"3000.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"K"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"3245.50"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-04-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"245.50"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"102.21"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"102.21"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-05-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"0.00"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"3000.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"K"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"3244.15"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-05-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"244.15"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"60.37"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"I"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"60.37"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-06-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"0.00"</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"otrosConceptos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"capital"</span><span class="token operator">:</span> <span class="token string">"4000.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
                    <span class="token property">"concepto"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
                    <span class="token property">"tipoCuota"</span><span class="token operator">:</span> <span class="token string">"K"</span><span class="token punctuation">,</span>
                    <span class="token property">"cuota"</span><span class="token operator">:</span> <span class="token string">"4242.80"</span><span class="token punctuation">,</span>
                    <span class="token property">"fechaPago"</span><span class="token operator">:</span> <span class="token string">"2020-06-15"</span><span class="token punctuation">,</span>
                    <span class="token property">"seguros"</span><span class="token operator">:</span> <span class="token string">"242.80"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"impuestos"</span><span class="token operator">:</span> <span class="token string">"0.00"</span><span class="token punctuation">,</span>
        <span class="token property">"tasaEfectiva"</span><span class="token operator">:</span> <span class="token string">"0.000000"</span><span class="token punctuation">,</span>
        <span class="token property">"intereses"</span><span class="token operator">:</span> <span class="token string">"3100.11"</span><span class="token punctuation">,</span>
        <span class="token property">"tasaNominalAnual"</span><span class="token operator">:</span> <span class="token string">"17.522024"</span><span class="token punctuation">,</span>
        <span class="token property">"totalPrestamo"</span><span class="token operator">:</span> <span class="token string">"10000.00"</span><span class="token punctuation">,</span>
        <span class="token property">"tasaEfectivaAnual"</span><span class="token operator">:</span> <span class="token string">"19.000000"</span><span class="token punctuation">,</span>
        <span class="token property">"operacionUId"</span><span class="token operator">:</span> <span class="token string">"761"</span><span class="token punctuation">,</span>
        <span class="token property">"tasa"</span><span class="token operator">:</span> <span class="token string">"19.000000"</span><span class="token punctuation">,</span>
        <span class="token property">"fechaPrimerPago"</span><span class="token operator">:</span> <span class="token string">"2020-04-15"</span><span class="token punctuation">,</span>
        <span class="token property">"fechaVencimiento"</span><span class="token operator">:</span> <span class="token string">"2020-06-15"</span><span class="token punctuation">,</span>
        <span class="token property">"plazo"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
        <span class="token property">"producto"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"papel"</span><span class="token operator">:</span> <span class="token string">"$"</span><span class="token punctuation">,</span>
            <span class="token property">"moneda"</span><span class="token operator">:</span> <span class="token string">"$"</span><span class="token punctuation">,</span>
            <span class="token property">"productoUId"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span>
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"PRÉSTAMOS CONSUMO, Amortización Libre TF"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"comisiones"</span><span class="token operator">:</span> <span class="token string">"0.00"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"Erroresnegocio"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"BTErrorNegocio"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"Btoutreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"Numero"</span><span class="token operator">:</span> <span class="token string">"13299"</span><span class="token punctuation">,</span>
        <span class="token property">"Estado"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span>
        <span class="token property">"Servicio"</span><span class="token operator">:</span> <span class="token string">"BTPrestamos.SimularLibreAmortizacion"</span><span class="token punctuation">,</span>
        <span class="token property">"Fecha"</span><span class="token operator">:</span> <span class="token string">"2019-04-24"</span><span class="token punctuation">,</span>
        <span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"Hora"</span><span class="token operator">:</span> <span class="token string">"10:35:16"</span><span class="token punctuation">,</span>
        <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
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
<td>sdtPrestamo</td>
<td>sBTPrestamoAltaLA</td>
<td>Datos de la simulación.</td>
</tr>
<tr>
<td>generaCuotaInteres</td>
<td>Character</td>
<td>Indica si se generan cuotas de intereses. [Hidden: Valores 'S'/'N'].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPrestamoAltaLA son los siguientes:</p>
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
<td>clienteUId*</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
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
<td>Fecha de pago de la cuota</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe de la cuota</td>
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
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
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
<td>totalPrestamo</td>
<td>Double</td>
<td>Total a pagar.</td>
</tr>
<tr>
<td>fechaPrimerPago</td>
<td>Date</td>
<td>Fecha de primer pago.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
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
<td>plazo</td>
<td>Int</td>
<td>Plazo .</td>
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
<td>La Cuenta indicada es incorrecta..</td>
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


