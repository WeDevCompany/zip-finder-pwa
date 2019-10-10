<template>
    <ion-button color="light" expand="block" v-if="info && Object.keys(info).length > 0" @click="$emit('clear-info')">
        Clear
    </ion-button>
</template>

<script>
export default {
    name: "ClearInfo",
    props: ["info"]
}
</script>