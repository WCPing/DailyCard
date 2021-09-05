<template>
  <view class="start-sub-wrapper">
    <view class="sub-btn" @tap="jumpToHome">进入</view>
  </view>
</template>
<script lang="ts" src="./Launch.ts"></script>
<style lang="scss">
.start-sub-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(51, 127, 232, 0.2);
  .sub-btn {
    width: 500rpx;
    height: 500rpx;
    text-align: center;
    line-height: 500rpx;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    -webkit-animation: Gradient 15s ease infinite;
    -moz-animation: Gradient 15s ease infinite;
    animation: Gradient 15s ease infinite;
    border-radius: 50%;
    font-size: 40rpx;
    font-weight: 600;
    color: #ffffff;
  }

  /*渐变背景动画效果*/
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
