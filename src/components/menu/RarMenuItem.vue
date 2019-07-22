<template>
    <li class="rar-menu__item">
        <div v-if="!this.item.child">
            <router-link :to="this.item.url" v-if="this.item.internal" class="rar-menu__item__link" @click.native="clickMenu">{{this.item.name + ' 1'}}</router-link>
            <a :href="this.item.url" v-else class="rar-menu__item__link" @click="clickMenu">{{this.item.name + ' 2'}}</a>
        </div>
        <div v-else>
            <div class="rar-menu__item__link" @click="toggleSubMenu(item)">{{this.item.name + ' 3'}}</div>
            <rar-sub-menu :parentItem="this.item" v-if="isSubShowed" :closeChild="!isSubShowed"/>
        </div>
    </li>
</template>

<script>
    import RarMenuService from './RarMenuService.js';
    import RarSubMenu from './RarSubMenu.vue';    

    export default {
        name: 'RarMenuItem',
        components: {
            RarSubMenu
        },
        data() {
            return {
                isSubShowed: false
            }
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        methods: {
            toggleSubMenu(item) {
                this.isSubShowed = !this.isSubShowed;
                item.isSubShowed = this.isSubShowed;
            },
            clickMenu() {
                RarMenuService.sendClickMenu();
            }
        }
    }
</script>

<style>
    .rar-menu__item {
        position: relative;
    }
    .rar-menu__item__link {
        text-decoration: none;
        color: inherit;
        padding: 10px 15px;
        color: rgba(255,255,255, .5);
        cursor: pointer;
    }
    .rar-menu__item__link:hover {
        color: rgba(255,255,255, .7);
    }
</style>
