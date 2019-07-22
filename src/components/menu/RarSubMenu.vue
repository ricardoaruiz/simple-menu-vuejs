<template>
    <ul class="rar-submenu" :class="{'rar-submenu--isSub' : isSub}">        
        <li class="rar-submenu__item" v-for="(item, index) in this.parentItem.child" :key="item.name">
            <div v-if="!item.child">
                <router-link :to="item.url" v-if="item.internal" class="rar-submenu__item_link" @click.native="clickMenu">{{item.name}}</router-link>
                <a :href="item.url" v-else class="rar-submenu__item_link" @click="clickMenu">{{item.name}}</a>
            </div>
            <div v-else>
                <div class="rar-submenu__item_link" @click="toggleSubMenu(item, index)">{{item.name}}</div>
                <rar-sub-menu :parentItem="item" :isSub="true" v-if="isSubShowed[index]" :closeChild="!isSubShowed[index]"/>
            </div>
        </li>
    </ul>
</template>

<script>
    import RarMenuService from './RarMenuService.js';
    
    export default {
        name: 'RarSubMenu',
        data() {
            return {
                isSubShowed: []
            }
        },
        props: {
            parentItem: {
                type: Object,
                required: true
            },
            isSub: {
                type: Boolean,
                required: false,
                default: false
            },
            closeChild: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            toggleSubMenu(item, index) {
                const newState = !this.isSubShowed[index];
                item.isSubShowed = newState;

                const temp = [];
                for(let i=0; i<this.isSubShowed.length; i++) {
                    temp[i] = i != index ? false : newState;
                }
                
                this.isSubShowed = [];                
                setTimeout(() => {
                    this.isSubShowed = temp;
                }, 50);
            },
            clickMenu() {
                RarMenuService.sendClickMenu();
            }
        },
        watch: {
            closeChild(val) {
                this.isSubShowed = val;
            }
        },
        created() {
            for(let i=0; i<this.parentItem.child.length; i++) {
                this.isSubShowed[i] = false;
            }
        }        
    }
</script>

<style scoped>
    .rar-submenu {
        position: absolute;
        margin: 10px 0 0 0;
        padding: 0;
        width: 200px;
        background: #fff;
        list-style: none;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 3px;
    }
    .rar-submenu--isSub {
        left: 199px;
        top: -10px;
    }
    .rar-submenu__item {
        margin: 0;
        position: relative;
    }
    .rar-submenu__item_link {
        display: block;
        color: #333;
        padding: 10px 0 10px 5px;
        text-decoration: none;
        cursor: pointer;
    }
    .rar-submenu__item_link:hover {
        background: #333;
        color: #fff;
    }
</style>
