<template>
    <header class="rar-header">
        <div class="rar-header__logo">
            Logo
        </div>
        <nav class="rar-header__nav">
            <div class="rar-header__menu">
                <rar-menu :items="menu" />
            </div>
            <div class="rar-header__extras">
                <slot name="extras"></slot>
            </div>
        </nav>
    </header>
</template>

<script>
    import RarMenu from './menu/RarMenu.vue'    

    export default {
        name: 'RarHeader',
        components: {
            RarMenu
        },
        data() {
            return {
            menu: [
                {
                name: 'Home',
                internal: true,
                url: '/',
                child: [
                    {
                        name: 'Home 01',
                        internal: true,
                        url: '/'
                    },
                    {
                        name: 'Home 02',
                        internal: true,
                        url: '#',
                        child: [
                            {
                                name: 'Home 021 - Alarms',
                                internal: true,
                                url: '/alarms'
                            },
                            {
                                name: 'Home 022 - Equipment',
                                internal: true,
                                url: '/equipment'
                            }
                        ]
                    },
                    {
                        name: 'Home 03',
                        internal: true,
                        url: '#',
                        child: [
                            {
                                name: 'Home 031',
                                internal: true,
                                url: '#'                  
                            },
                            {
                                name: 'Home 032',
                                internal: true,
                                url: '#'                  
                            },                            
                            {
                                name: 'Home 033',
                                internal: true,
                                url: '#',
                                child: [
                                    {
                                        name: 'Home 0331',
                                        internal: true,
                                        url: '#'                  
                                    },
                                    {
                                        name: 'Home 0332',
                                        internal: true,
                                        url: '#'                  
                                    }
                                ]
                            }
                        ]
                    }
                ]
                },        
                {
                    name: 'Equipment Browser',
                    internal: true,
                    url: '/equipment'
                },
                {
                    name: 'Alarms',
                    internal: true,
                    url: '/alarms'
                },
                {
                    name: 'XXXX',
                    internal: true,
                    url: '/alarms'
                },
                {
                    name: 'YYYY1',
                    internal: true,
                    url: '/alarms'
                },
                {
                    name: 'YYYY2',
                    internal: true,
                    url: '/alarms'
                },
                {
                    name: 'YYYY3',
                    internal: true,
                    url: '/alarms'
                }
            ]
            }
        }
    }
</script>

<style scoped>
    .rar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        height: 70px;
        background: #333;
    }
    .rar-header__logo {

    }    
    .rar-header__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .rar-header__menu {

    }
    .rar-header__extras {

    }
</style>
