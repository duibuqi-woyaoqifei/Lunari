<!-- .vitepress/theme/components/TechStack.vue -->
<template>
    <div class="tech-stack">
        <a v-for="tag in tags" :key="tag.name" class="tech-button" :href="tag.url" target="_blank"
            rel="noopener noreferrer">
            {{ tag.name }}
        </a>
    </div>
</template>

<script setup>
const tags = [
    { name: 'Vite', url: 'https://vitejs.dev/' },
    { name: 'Vue 3', url: 'https://vuejs.org/' },
    { name: 'VitePress', url: 'https://vitepress.dev/' },
    { name: 'TypeScript', url: 'https://www.tslang.cn/' },
    { name: 'Markdown', url: 'https://www.markdownguide.org/' },
    { name: 'GitHub Pages', url: 'https://pages.github.com/' }
]
</script>

<style scoped>
.tech-stack {
    margin-top: 1.5em;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.tech-button {
    display: inline-block;
    background: linear-gradient(145deg, #2c3e50, #34495e);
    color: #ffffff;
    padding: 6px 14px;
    border-radius: 22px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
}

.tech-button:hover {
    background: linear-gradient(145deg, #3a539b, #4b77be);
    transform: scale(1.06);
    color: #ffffff;
}

a {
    all: unset;
    display: inline;
    cursor: pointer;
}
</style>