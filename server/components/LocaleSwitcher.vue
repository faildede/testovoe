<template> 
    <select v-model="local" @change="changeLocale">
        <option value="ru">Русский</option>
        <option value="en">Английский</option>
        <option value="fr">Французский</option>
    </select>
</template>

<script setup>
    import { useLocale } from '../composables/useLocale';

    const { local, changeLocale } = useLocale();

    const changeLocale = (event) => {
        setLocale(event.target.value);
    }

</script>