<template><div><div class="hint-container note">
<p class="hint-container-title">Método para obtener los items de un determinado modelo PAE.</p>
<p><strong>Nombre publicación:</strong> BTPAE.ObtenerItemsModelo</p>
<p><strong>Programa:</strong> RBTPGP52</p>
<p><strong>Global/País:</strong> Global</p>
</div>
<Tabs id="11" :data='[{"id":"Datos de Entrada"},{"id":"Datos de Salida"},{"id":"Errores"}]' tab-id="Datos <!--ABRE LA TABLA DE DATOS -->">
<template #title0="{ value, isActive }">Datos de Entrada</template>
<template #title1="{ value, isActive }">Datos de Salida</template>
<template #title2="{ value, isActive }">Errores</template>
<template #tab0="{ value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">Nombre</th>
<th style="text-align:center">Tipo</th>
<th style="text-align:center">Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">modeloId</td>
<td style="text-align:center">Short</td>
<td style="text-align:center">Código de modelo.</td>
</tr>
</tbody>
</table>
</template>
<template #tab1="{ value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">Nombre</th>
<th style="text-align:center">Tipo</th>
<th style="text-align:center">Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">sdtItems</td>
<td style="text-align:center">sBTItemPAE</td>
<td style="text-align:center">Listado de items de modelo PAE.</td>
</tr>
</tbody>
</table>
<details class="hint-container details"><summary>Los campos del tipo de dato estructurado sBTItemPAE son los siguientes:</summary>
<table>
<thead>
<tr>
<th style="text-align:center">Nombre</th>
<th style="text-align:center">Tipo</th>
<th style="text-align:center">Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">itemId</td>
<td style="text-align:center">Short</td>
<td style="text-align:center">Código de item.</td>
</tr>
<tr>
<td style="text-align:center">tipoDato</td>
<td style="text-align:center">String</td>
<td style="text-align:center">Descripción de tipo de dato.</td>
</tr>
<tr>
<td style="text-align:center">nombre</td>
<td style="text-align:center">String</td>
<td style="text-align:center">Nombre de item.</td>
</tr>
</tbody>
</table>
</details>
</template>
<template #tab2="{ value, isActive }">
<table>
<thead>
<tr>
<th style="text-align:center">Código</th>
<th style="text-align:center">Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1011050</td>
<td style="text-align:center">No se recibio modelo de evaluacion PAE.</td>
</tr>
</tbody>
</table>
</template>
</Tabs>
<details class="hint-container details"><summary>Ejemplo de Invocación</summary>
<CodeTabs id="150" :data='[{"id":"XML"},{"id":"JSON"}]' tab-id="Formato">
<template #title0="{ value, isActive }">XML</template>
<template #title1="{ value, isActive }">JSON</template>
<template #tab0="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soapenv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>bts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Header</span><span class="token punctuation">/></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>BTPAE.ObtenerItemsModelo</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span>GP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span>INSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Requerimiento</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Requerimiento</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span>86b12d9cbaCD285A89A23FBE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>modeloId</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>modeloId</span><span class="token punctuation">></span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>BTPAE.ObtenerItemsModelo</span><span class="token punctuation">></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Envelope</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>curl -X POST \ 
    'http<span class="token operator">:</span><span class="token comment">//btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPAE?ObtenerItemsModelo' \ </span>
    -H 'cache-control<span class="token operator">:</span> no-cache' \ 
    -H 'content-type<span class="token operator">:</span> application/json' \ 
    -H 'postman-token<span class="token operator">:</span> 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '<span class="token punctuation">{</span> 
    <span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"GP"</span><span class="token punctuation">,</span> 
        <span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span> 
        <span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> 
        <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span> 
        <span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"bc8b678bc44A8B5C60A82434"</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"modeloId"</span><span class="token operator">:</span> <span class="token number">1</span> 
<span class="token punctuation">}</span>' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<details class="hint-container details"><summary>Ejemplo de Respuesta</summary>
<CodeTabs id="160" :data='[{"id":"XML"},{"id":"JSON"}]' tab-id="Formato">
<template #title0="{ value, isActive }">XML</template>
<template #title1="{ value, isActive }">JSON</template>
<template #tab0="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENV</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/encoding/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BTPAE.ObtenerItemsModeloResponse</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btinreq</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Device</span><span class="token punctuation">></span></span>GP<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Device</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Usuario</span><span class="token punctuation">></span></span>INSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Usuario</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Requerimiento</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Token</span><span class="token punctuation">></span></span>86b12d9cbaCD285A89A23FBE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Token</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btinreq</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sdtItems</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>105<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>ANTIG_LABORAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>115<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>MONTO_CRED_MN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>116<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>CANT_AVALES<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>117<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>PLAZO<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>118<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>TASA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>130<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>MONTO_MIN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>131<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>MONTO_MAX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>132<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>PLAZO_MIN<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>133<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>PLAZO_MAX<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>134<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>TASA_PRESETEO<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>C-Caracter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>138<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>DOC_NOREB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>C-Caracter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>139<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>DOC_NOING<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>142<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>SNG001ORI<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>145<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>CAP_PAGO<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>161<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>CPTO_16<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tipoDato</span><span class="token punctuation">></span></span>N-Numerico<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tipoDato</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>itemId</span><span class="token punctuation">></span></span>162<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>itemId</span><span class="token punctuation">></span></span> 
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nombre</span><span class="token punctuation">></span></span>VALOR_CUOTA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nombre</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SdtsBTItemPAE</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sdtItems</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Erroresnegocio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Erroresnegocio</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btoutreq</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Numero</span><span class="token punctuation">></span></span>43265<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Numero</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Estado</span><span class="token punctuation">></span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Estado</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Servicio</span><span class="token punctuation">></span></span>BTPAE.ObtenerItemsModelo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Servicio</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Fecha</span><span class="token punctuation">></span></span>2022-06-02<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Fecha</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Requerimiento</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hora</span><span class="token punctuation">></span></span>07:11:36<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hora</span><span class="token punctuation">></span></span> 
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span> 
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btoutreq</span><span class="token punctuation">></span></span> 
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BTPAE.ObtenerItemsModeloResponse</span><span class="token punctuation">></span></span> 
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Envelope</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span> 
    <span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"GP"</span><span class="token punctuation">,</span> 
        <span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span> 
        <span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> 
        <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span> 
        <span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"c2cfd09eff4A8B5C60A82434"</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"sdtItems"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
         <span class="token property">"SdtsBTItemPAE"</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"105"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"ANTIG_LABORAL"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"115"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"MONTO_CRED_MN"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"116"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"CANT_AVALES"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"117"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"PLAZO"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"118"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"TASA"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"130"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"MONTO_MIN"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"131"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"MONTO_MAX"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"132"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"PLAZO_MIN"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"133"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"PLAZO_MAX"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"134"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"TASA_PRESETEO"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"C-Caracter"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"138"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"DOC_NOREB"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"C-Caracter"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"139"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"DOC_NOING"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"142"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"SNG001ORI"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"145"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"CAP_PAGO"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"161"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"CPTO_16"</span> 
         <span class="token punctuation">}</span><span class="token punctuation">,</span> 
         <span class="token punctuation">{</span> 
            <span class="token property">"tipoDato"</span><span class="token operator">:</span> <span class="token string">"N-Numerico"</span><span class="token punctuation">,</span> 
            <span class="token property">"itemId"</span><span class="token operator">:</span> <span class="token string">"162"</span><span class="token punctuation">,</span> 
            <span class="token property">"nombre"</span><span class="token operator">:</span> <span class="token string">"VALOR_CUOTA"</span> 
         <span class="token punctuation">}</span> 
         <span class="token punctuation">]</span> 
      <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"Erroresnegocio"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token property">"Btoutreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
        <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span> 
        <span class="token property">"Servicio"</span><span class="token operator">:</span> <span class="token string">"BTPAE.ObtenerItemsModelo"</span><span class="token punctuation">,</span> 
        <span class="token property">"Fecha"</span><span class="token operator">:</span> <span class="token string">"2022-06-01"</span><span class="token punctuation">,</span> 
        <span class="token property">"Hora"</span><span class="token operator">:</span> <span class="token string">"15:38:59"</span><span class="token punctuation">,</span> 
        <span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span> 
        <span class="token property">"Numero"</span><span class="token operator">:</span> <span class="token string">"8881"</span><span class="token punctuation">,</span> 
        <span class="token property">"Estado"</span><span class="token operator">:</span> <span class="token string">"OK"</span> 
    <span class="token punctuation">}</span> 
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<div class="hint-container warning">
<p class="hint-container-title">Swagger</p>
<iframe src="https://pioneroapp2:3033/api-docs/#/AhorroProgramado/post_api_AhorroProgramado_v1_Crear" width="100%" height="450"/>
</div>
</div></template>


