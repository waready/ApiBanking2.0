<template><div><p>Para poder utilizar los servicios es necesario autenticarse a efectos de obtener el SessionToken.</p>
<details class="hint-container details"><summary>Ejemplo de Invocación</summary>
<CodeTabs id="4" :data='[{"id":"XML"},{"id":"JSON"}]' tab-id="Formato">
<template #title0="{ value, isActive }">XML</template>
<template #title1="{ value, isActive }">JSON</template>
<template #tab0="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soapenv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>bts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Header</span><span class="token punctuation">/></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Authenticate.Execute</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span>AV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Device</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span>MINSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Usuario</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Requerimiento</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Requerimiento</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Canal</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Token</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Btinreq</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>UserId</span><span class="token punctuation">></span></span>MINSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>UserId</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">bts:</span>UserPassword</span><span class="token punctuation">></span></span>Bantotal2015<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>UserPassword</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">bts:</span>Authenticate.Execute</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Envelope</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>curl -X POST \
  'http<span class="token operator">:</span><span class="token comment">//btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_Authenticate_v1?Execute' \</span>
  -H 'cache-control<span class="token operator">:</span> no-cache' \
  -H 'content-type<span class="token operator">:</span> application/json' \
  -H 'postman-token<span class="token operator">:</span> 6b958b92-122d-189b-a0b5-7a4a0569b79d' \
  -d '<span class="token punctuation">{</span>
	<span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"AV"</span><span class="token punctuation">,</span>
		<span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span>
		<span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span>
		<span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"fa2c02c95a4A8B5C60A82434"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">"UserId"</span><span class="token operator">:</span> <span class="token string">"BANTOTAL"</span><span class="token punctuation">,</span>
    <span class="token property">"UserPassword"</span><span class="token operator">:</span> <span class="token string">"z0na#1357"</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<details class="hint-container details"><summary>Ejemplo de Respuesta</summary>
<CodeTabs id="14" :data='[{"id":"XML"},{"id":"JSON"}]' tab-id="Formato">
<template #title0="{ value, isActive }">XML</template>
<template #title1="{ value, isActive }">JSON</template>
<template #tab0="{ value, isActive }">
<div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENV</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsd</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>SOAP-ENC</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.xmlsoap.org/soap/encoding/<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Authenticate.ExecuteResponse</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://uy.com.dlya.bantotal/BTSOA/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btinreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Device</span><span class="token punctuation">></span></span>AV<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Device</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Usuario</span><span class="token punctuation">></span></span>MINSTALADOR<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Usuario</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Token</span><span class="token punctuation">/></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btinreq</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SessionToken</span><span class="token punctuation">></span></span>7f582501004A8B5C60A82434<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SessionToken</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Erroresnegocio</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Erroresnegocio</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Btoutreq</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Numero</span><span class="token punctuation">></span></span>722<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Numero</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Estado</span><span class="token punctuation">></span></span>OK<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Estado</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Servicio</span><span class="token punctuation">></span></span>Authenticate.Execute<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Servicio</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Fecha</span><span class="token punctuation">></span></span>2017-11-24<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Fecha</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Requerimiento</span><span class="token punctuation">/></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Hora</span><span class="token punctuation">></span></span>12:52:24<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Hora</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Canal</span><span class="token punctuation">></span></span>BTDIGITAL<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Canal</span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Btoutreq</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Authenticate.ExecuteResponse</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">SOAP-ENV:</span>Envelope</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre v-pre class="language-json"><code>'<span class="token punctuation">{</span>
	<span class="token property">"Btinreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">"Device"</span><span class="token operator">:</span> <span class="token string">"AV"</span><span class="token punctuation">,</span>
		<span class="token property">"Usuario"</span><span class="token operator">:</span> <span class="token string">"MINSTALADOR"</span><span class="token punctuation">,</span>
		<span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
		<span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span><span class="token punctuation">,</span>
		<span class="token property">"Token"</span><span class="token operator">:</span> <span class="token string">"fa2c02c95a4A8B5C60A82434"</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"SessionToken"</span><span class="token operator">:</span> <span class="token string">"991ba47aac4A8B5C60A82434"</span><span class="token punctuation">,</span>
    <span class="token property">"Erroresnegocio"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"BTErrorNegocio"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"Btoutreq"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"Numero"</span><span class="token operator">:</span> <span class="token number">46</span><span class="token punctuation">,</span>
        <span class="token property">"Servicio"</span><span class="token operator">:</span> <span class="token string">"Authenticate.Execute"</span><span class="token punctuation">,</span>
        <span class="token property">"Estado"</span><span class="token operator">:</span> <span class="token string">"OK"</span><span class="token punctuation">,</span>
        <span class="token property">"Fecha"</span><span class="token operator">:</span> <span class="token string">"2019-10-24"</span><span class="token punctuation">,</span>
        <span class="token property">"Requerimiento"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token property">"Hora"</span><span class="token operator">:</span> <span class="token string">"20:55:06"</span><span class="token punctuation">,</span>
        <span class="token property">"Canal"</span><span class="token operator">:</span> <span class="token string">"BTDIGITAL"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
</details>
<h3 id="bar" tabindex="-1"><a class="header-anchor" href="#bar"><span>Bar</span></a></h3>
<ul>
<li><RouteLink to="/guide/bar/baz.html">baz</RouteLink></li>
<li>...</li>
</ul>
<h3 id="foo" tabindex="-1"><a class="header-anchor" href="#foo"><span>Foo</span></a></h3>
<ul>
<li><RouteLink to="/guide/foo/ray.html">ray</RouteLink></li>
<li>...</li>
</ul>
</div></template>


