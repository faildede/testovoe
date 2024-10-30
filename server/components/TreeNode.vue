<template>
    <li>
      <div @click="toggle">
        {{ getLocaleValue(node, 'cg_name') }}
        <small>{{ breadcrumbs }}</small>
      </div>
      <a :href="getLocaleValue(node, 'link')">{{ getLocaleValue(node, 'link') }}</a>
      <ul v-if="isOpen">
        <TreeNode v-for="child in node.children" :key="child.id" :node="child" :locale="locale" />
      </ul>
    </li>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import TreeNode from './TreeNode.vue';
  import { useLocale } from '@/composables/useLocale';
  
  const props = defineProps({
    node: Object,
    locale: String,
  });
  
  const { getLocaleValue } = useLocale();
  
  const isOpen = ref(false);
  
  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  
  const breadcrumbs = computed(() => {
    return props.node.path_to_top.join(' -> ');
  });
  </script>