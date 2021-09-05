<template>
  <view class="home-wrapper">
    <view class="header-wrapper">
      <view class="title">{{ todayDate }}</view>
    </view>
    <view class="content-wrapper">
      <view class="item-wrapper" v-if="lists.val.length">
       <daily-card :daily="list" v-for="list in lists.val" :key="list.uuid"></daily-card>
      </view>
    </view>
  </view>
</template>
<script src="./Home.ts" lang="ts"></script>
<style lang="scss">
.home-wrapper {
  height: 100%;
  width: 750rpx;
  .header-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80rpx;
    background: #40514e;;
    .title {
      color: #ffffff;
      font-size: 32rpx;
      font-weight: 600;
    }
  }
  .content-wrapper {
    margin: 20rpx 0;
    .item-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0 20rpx;
    }
  }
}
</style>