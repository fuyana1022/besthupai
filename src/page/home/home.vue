<template>
  	<div class="home_container">
        <section class="my_epai_container">
            <router-link class="my_epai" :to="'/login/'">
                    我的e拍宝
            </router-link> 
        </section>
        <section class="introduction_container">
            图文介绍
        </section>
        <section class="download_android_container">
            Android下载
        </section>
        <section class="download_iOS_container">
            iOS下载
        </section>
        <section class="other_info_container">
            网站信息
        </section>
    </div>
</template>

<script>

export default {
    data(){
        return{
            
        }
    },

	mounted(){
        
    },

    components:{
        
    },

    computed:{
        
    },

    methods:{
        
    },
}

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';
    .home_container{
        width: 100%;
        height: 100%;
        position: relative;
        background-color: $blue;
    }
    .my_epai_container{
        position: absolute;
        top: 2rem;
        right: 1em;
        .my_epai{
            font-weight: bold;
            background-color: goldenrod;
        }
    }
    .introduction_container{
        @include cl;
        top: 5rem;
        text-align: center;
    }
    .download_android_container{
        width: 10rem;
        height: 2rem;
        background-color: grey;
        border-radius: .3rem;
        @include cl;
        top: 11rem;
        text-align: center;
        line-height: 2rem;
    }
    .download_iOS_container{
        width: 10rem;
        height: 2rem;
        background-color: grey;
        border-radius: .3rem;
        @include cl;
        top: 15rem;
        text-align: center;
        line-height: 2rem;
    }
    .other_info_container{
        @include cl;
        top: 20rem;
        text-align: center;
    }

</style>
