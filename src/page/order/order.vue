 <template>
    <div class="order_page">
        <head-top head-title="我的e拍宝" go-back='true'></head-top>
        <ul class="order_list_ul">
            <li class="order_list_li" v-for="item in orderList" :key="item.id">
                <div class="order_list_li_container">
                    <h4>e拍宝2021测试版</h4>
                    <div class="order_item">
                        当前状态：
                    </div>
                    <div class="order_item">
                        订单号码：
                    </div>
                    <div class="order_item">
                        下单日期：
                    </div>
                    <div class="order_item">
                        订单金额
                    </div>
                    <div class="order_item">
                        标书号码
                    </div>
                    <div class="order_item order_item_sp">
                        <div class="order_btn_pay">支付宝付款</div>
                        <div class="order_btn_cancel">取消</div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="open_epai_container">
            <div class="open_epai_btn">
                <router-link :to="'/bidding/'">开通e拍宝</router-link>
            </div>
        </div>
        <transition name="loading">
            <loading v-show="showLoading"></loading>
        </transition>
 
    </div>
</template>

<script>
    import headTop from 'src/components/header/head'
    import computeTime from 'src/components/common/computeTime'
    import loading from 'src/components/common/loading'
    import {getImgPath} from 'src/components/common/mixin'
    import {loadMore} from 'src/components/common/mixin'


    export default {
      data(){
            return{
                orderList: null, //订单列表
                offset: 0, 
                preventRepeat: false,  //防止重复获取
                showLoading: false, //显示加载动画
            }
        },
        mounted(){
            this.initData();
        },
        mixins: [loadMore],
        components: {
            headTop,
            loading,
            computeTime,
        },
        computed: {
        },
        methods: {
            //初始化获取信息
            initData(){
                this.orderList = [{
                key:1
            },{
                key:2
            },{
                key:3
            }]
            },
            //加载更多
            
            //生产环境与发布环境隐藏loading方式不同
            hideLoading(){
                if (process.env.NODE_ENV !== 'development') {
                    clearTimeout(this.timer);
                    this.timer = setTimeout(() => {
                        clearTimeout(this.timer);
                        this.showLoading = false;
                    }, 400)
                }else{
                    this.showLoading = false;
                }
            },
        },
        watch: {
            userInfo: function (value) {
                if (value && value.user_id && !this.orderList) {
                    this.initData();
                }
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    @import 'src/style/mixin';
    
    .order_page{
        background-color: #f1f1f1;
        padding-bottom: 1.95rem;
        p, span, h4{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
    }
    .order_list_ul{    
        padding-top: 1.95rem;
        .order_list_li{
            background-color: #fff;
            padding: .3rem .4rem;
            .order_list_li_container{
                border-radius: 0.4rem;
                border-width: .1rem;
                border-color: $blue;
                border-style: solid;
                padding: .1rem .2rem;
                .order_item{
                    font-size: .6rem;
                }
                .order_item_sp{
                    display: flex;
                    justify-content: flex-end;
                }
                .order_btn_pay{
                    padding: .2rem .5rem;
                    margin-right: .5rem;
                    margin-bottom: .5rem;
                    background-color: $blue;
                    border-radius: .2rem;
                    font-weight: bold;
                    color: #fff;
                }
                .order_btn_cancel{
                    padding: .2rem .5rem;
                    margin-right: .5rem;
                    margin-bottom: .5rem;
                    background-color: lightgrey;
                    border-radius: .2rem;
                    font-weight: bold;
                    color: red;
                }
            }
            .restaurant_image{
                @include wh(2rem, 2rem);
                margin-right: 0.4rem;
            }
            .order_item_right{
                flex: 5;
                .order_item_right_header{
                    border-bottom: 0.025rem solid #f5f5f5;
                    padding-bottom: .3rem;
                    @include fj;
                    .order_header{
                        h4{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            @include sc(.75rem, #333);
                            line-height: 1rem;
                            width: 9rem;

                            .arrow_right{
                                @include wh(.4rem, .4rem);
                                fill: #ccc;
                                margin-right: .2rem;
                            }
                        }
                        .order_time{
                            @include sc(.55rem, #999);
                            line-height: .8rem;
                        }
                    }
                    .order_status{
                        @include sc(.6rem, #333);
                    }
                }
                .order_basket{
                    @include fj;
                    line-height: 2rem;
                    border-bottom: 0.025rem solid #f5f5f5;
                    .order_name{
                        @include sc(.6rem, #666);
                        width: 10rem;
                    }
                    .order_amount{
                        @include sc(.6rem, #f60);
                        font-weight: bold;
                    }
                }
                .order_again{
                    text-align: right;
                    line-height: 1.6rem;
                    .buy_again{
                        @include sc(.55rem, #3190e8);
                        border: 0.025rem solid #3190e8;
                        padding: .1rem .2rem;
                        border-radius: .15rem;
                    }
                }
            }
        }
    }
    .open_epai_container{
        width: 100%;
        font-size: .6rem;
        background-color: #fff;
        padding: .1rem .1rem .5rem .1rem;
        
        .open_epai_btn{
            height: 1.8rem;
            line-height: 1.8rem;
            border-radius: .2rem;
            background-color: $blue;
            color: #fff;
            text-align: center;
            font-weight: bold;
        }
    }
    .loading-enter-active, .loading-leave-active {
        transition: opacity .7s
    }
    .loading-enter, .loading-leave-active {
        opacity: 0
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>
