<template>
    <VPTeamMembers size="small" :members />
</template>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
        avatar: 'https://www.github.com/duibuqi-woyaoqifei.png',
        name: 'Lior Xu',
        title: '创始人',
        links: [
            { icon: 'github', link: 'https://github.com/duibuqi-woyaoqifei' },
        ]
    },
]
</script>

<style scoped></style>