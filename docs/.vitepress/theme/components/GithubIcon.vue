<template>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="github-icon" :title="title">
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 0.3a12 12 0 00-3.8 23.4c0.6 0.1 0.8-0.2 0.8-0.5v-1.8c-3.3 0.7-4-1.6-4-1.6-0.6-1.4-1.4-1.8-1.4-1.8-1.2-0.8 0.1-0.8 0.1-0.8 1.3 0.1 2 1.3 2 1.3 1.1 1.9 3 1.3 3.7 1 0.1-0.8 0.4-1.3 0.7-1.6-2.7-0.3-5.5-1.3-5.5-5.8 0-1.3 0.5-2.3 1.2-3.2 0-0.3-0.5-1.3 0.1-2.7 0 0 1-0.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2 0.6 1.4 0.1 2.4 0.1 2.7 0.7 0.9 1.2 1.9 1.2 3.2 0 4.5-2.8 5.5-5.5 5.8 0.5 0.4 0.8 1.1 0.8 2.1v3c0 0.3 0.2 0.6 0.8 0.5A12 12 0 0012 0.3z" />
        </svg>
    </a>
</template>

<script setup>
defineProps({
    link: {
        type: String,
        default: 'https://github.com/your-org/your-repo',
    },
    title: {
        type: String,
        default: 'GitHub',
    },
})
</script>

<style scoped>
.github-icon {
    display: inline-block;
    transition: opacity 0.3s ease;
}

.github-icon:hover {
    opacity: 0.75;
}

.icon {
    position: relative;
    top: 3px;
    left: 10px;
    width: 22px;
    height: 22px;
    color: var(--vp-c-text-1);
}

.dark .icon {
    color: var(--vp-c-text-inverse);
    /* 自动变亮色 */
}
</style>