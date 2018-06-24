<template>
  <div>
    <child-component>
      <div slot="text_a" slot-scope="props">
        child value -> {{ props.text }}
      </div>
      <template slot="text_b">
        slot contents from parent
      </template>
    </child-component>
  </div>
</template>

<script src="./script.ts" lang="ts"></script>
