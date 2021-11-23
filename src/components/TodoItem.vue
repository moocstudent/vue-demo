<template>
    <li>
        <slot name="pre-icon" :value="value"></slot>
        <span v-if="!del">{{title}}</span>
        <span v-else-if="del" style="text-decoration: line-through">{{title}}</span>
        <span v-else style="color: red">data error (not in if or else if)</span>
        <slot name="suf-icon">🙂</slot>
        <button v-show="!del" @click="handleClick">delete row</button>
    </li>
</template>

<script>
    export default {
        props: {
            title: String,
            del: {type: Boolean, default: false},
            // iconType:String,
        },
        data: function () {
            return {value: Math.random()}
        },
        methods: {
            handleClick() {
                console.log("click del button")
                this.$emit('delete', this.title)
            }
        },
    }
</script>

<style scoped>

</style>