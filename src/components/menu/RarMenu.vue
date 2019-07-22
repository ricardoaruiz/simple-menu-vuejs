<template>
    <ul class="rar-menu">
        <rar-menu-item v-for="item in this.itemsMenu" :item="item" :key="item.name"/>
    </ul>
</template>

<script>
    import RarMenuService from './RarMenuService.js'
    import RarMenuItem from './RarMenuItem.vue';

    export default {
        name: 'RarMenu',
        components: {
            RarMenuItem
        },
        data() {
            return {
                itemsMenu: []
            }
        },
        props: {
            items: {
                type: Array,
                required: true
            }
        },
        methods: {
            closeMenus(menu) {      
                menu.forEach(item => {
                    if(item.child) {
                        this.closeMenus(item.child)
                    }
                    item.isSubShowed = false;        
                });
            },
            closeAllMenus() {
                this.closeMenus(this.itemsMenu);
                const tempMenu = this.itemsMenu;
                this.itemsMenu = [];
                setTimeout(() => {
                    this.itemsMenu = tempMenu;          
                }, 10);
            }
        },
        created() {

            this.itemsMenu = this.items;

            this.onClickMenuSubject = RarMenuService.onClickMenu().subscribe(() => {
                this.closeAllMenus();
            });

            window.addEventListener('click', (event) => { 
                const classList = [ ...event.target.classList ];
                const isMenu = classList.some(clazz => {
                    return clazz.includes('rar-menu') || clazz.includes('rar-submenu');
                });

                if(!isMenu) {
                    this.closeAllMenus();
                }
            });
        },
        destroyed() {
            this.onClickMenuSubject.unsubscribe();
        }
    }
</script>

<style scoped>
    .rar-menu {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }
</style>
