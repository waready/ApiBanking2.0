<template>
    <div class="two-column-layout">
      <div class="left-column">
        <slot name="left"></slot>
      </div>
      <div class="right-column">
        <slot name="right"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TwoColumnLayout'
  }
  </script>
  
  <style scoped>
  /* Estilos CSS para el componente */
  .two-column-layout {
    display: flex;
    justify-content: space-between;
  }
  
  .left-column {
    width: 70%;
  }
  
  .right-column {
    width: 28%;
  }
  </style>