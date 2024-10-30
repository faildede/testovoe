<template> 
    <ul> 
        <TreeNode v-for="node in nodes" :key="node.id" :node="node" :locale="locale" />
    </ul>
</template>


<script setup>
    import { inject } from 'vue';
    import { useLocale } from '../composables/useLocale';
    import TreeNode from './TreeNode.vue';

    const tree = inject('tree');
    const { locale } = useLocale();

</script>