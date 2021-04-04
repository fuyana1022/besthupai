 <template>
    <div class="bidding_page">
        <head-top head-title="开通e拍宝" go-back='true'></head-top>
        <h4>标书信息</h4>
        <h6>请确认以下信息和标书一致，否则将导致无法拍牌</h6>
        <form class="bidForm">
            <section class="input_container">
                <input type="text" placeholder="标书持有者姓名" name="name" maxlength="11" v-model="phoneNumber">
            </section>
            <section class="input_container">
                <input type="text" placeholder="标书持有者身份证号码" name="idCard" maxlength="6" v-model="mobileCode">
            </section>
            <section class="input_container">
                <input type="text" placeholder="标书号码" name="bidNo" maxlength="6" v-model="mobileCode">
            </section>
            <section class="input_container">
                <input type="text" placeholder="标书密码" name="bidPassword" maxlength="6" v-model="mobileCode">
            </section>
        </form>
        <div class="bidding_btn" >
            <div class="bidding_btn_open">
                确定
            </div>
            <div class="bidding_btn_cancel">取消</div>
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
                showLoading: false, //显示加载动画,
                phoneNumber: '',
                mobileCode: ''
            }
        },
        mounted(){
            this.initData();
            this.orderList = [{
                key:1
            },{
                key:2
            },{
                key:3
            }]
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
            async initData(){
                if (this.userInfo && this.userInfo.user_id) {
                    
                }
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
    
    .bidding_page{
        height: 100%;
        background-color: #fff;
        padding-top: 1.95rem;
        padding-bottom: 1.95rem;
        p, span, h4{
            font-family: Helvetica Neue,Tahoma,Arial;
        }
        h4{
            padding: .3rem 1rem;
        }
        h6{
            padding: .3rem 1rem;
        }
    }
    .bidForm{
        background-color: #fff;
        margin-top: .6rem;
        .input_container{
            display: flex;
            justify-content: space-between;
            padding: .6rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            input{
                @include sc(.7rem, #666);
            }
            button{
                @include sc(.65rem, #fff);
                font-family: Helvetica Neue,Tahoma,Arial;
                padding: .28rem .4rem;
                border: 1px;
                border-radius: 0.15rem;
            }
            .right_phone_number{
                background-color: #4cd964;
            }
        }
        .phone_number{
            padding: .3rem .8rem;
        }
        .captcha_code_container{
            height: 2.2rem;
            .img_change_img{
                display: flex;
                align-items: center;
                img{
                    @include wh(3.5rem, 1.5rem);
                    margin-right: .2rem;
                }
                .change_img{
                    display: flex;
                    flex-direction: 'column';
                    flex-wrap: wrap;
                    width: 2rem;
                    justify-content: center;
                    p{
                        @include sc(.55rem, #666);
                    }
                    p:nth-of-type(2){
                        color: #3b95e9;
                        margin-top: .2rem;
                    }
                }
            }
        }
    }
    .bidding_btn{
        display: flex;
        justify-content: flex-end;
        font-size: .6rem;
        margin-top: 3rem;
    }
    .bidding_btn_open{
        padding: .2rem .5rem;
        margin-right: .5rem;
        margin-bottom: .5rem;
        background-color: $blue;
        border-radius: .2rem;
        font-weight: bold;
        color: #fff;
    }
    .bidding_btn_cancel{
        padding: .2rem .5rem;
        margin-right: .5rem;
        margin-bottom: .5rem;
        background-color: lightgrey;
        border-radius: .2rem;
        font-weight: bold;
        color: red;
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
