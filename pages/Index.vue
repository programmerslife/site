<template>
    <div>
        <div class="content">
            <v-card>
                <v-img
                src="https://refined-x.com/asset/wechat.jpg"
                aspect-ratio="1"
                ></v-img>

                <v-card-title primary-title>
                <div>
                    <div>一个程序员的技术、认知、生活、购物、理财相关集散地。</div>
                </div>
                </v-card-title>

            </v-card>

            <div class="tags">
                <a href="http://host.refined-x.com/bing.php" download="bing-wallpaper.jpg" target="_blank">
                    下载Bing壁纸
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'index',
    metaInfo: {
        title: '看风景'
    },
    middleware: ["login-client"],
    async asyncData({store, route}) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showMenu: true,
            showBack: false,
            showLogo: false,
            actions: [
                // {
                //     icon: 'search',
                //     route: '/search'
                // }
            ]
        });
    }
};
</script>

<style lang="stylus" scoped>
.content
    display flex
    align-items center
    justify-content center
    height 100%
    flex-wrap wrap
.tags
    position absolute
    left 0
    bottom 0
    width 100%
    padding 1rem 0
    text-align center
    
</style>
