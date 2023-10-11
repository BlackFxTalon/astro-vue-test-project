<template>
    <div class="container">
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'UiContainer'
    }
</script>

<style scoped>

.container {
    --max-width: 1300px;
    --padding: 20px;
    margin: 0 auto;
    width: min(100%, var(--max-width));
    padding: 0px var(--padding);
}

</style>