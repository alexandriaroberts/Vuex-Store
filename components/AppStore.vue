<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
               <span>{{ product.id }}</span>
               <p>{{ product.description }}</p>
                <p>{{ product.model }}</p>
               
            </li>

        </ul>

    </div>
</template>
<script>

export default {
    props: {
        data: {
            required: true
        }
    },
    computed: {
        products() {
            return this.$store.state;
             console.log(product)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>