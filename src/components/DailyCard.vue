<template>
  <view class="daily-card-wrapper">
      <view class="image-wrapper">
          <view class="header">{{ daily.date }}</view>
          <image class="image" lazyLoad mode="scaleToFill" :src="imgSrc" />
      </view>
      <view class="footer">{{ desc }}</view>
  </view>
</template>

<script>
import { computed, toRefs, ref, onMounted, watch } from 'vue'
import Daily from '../model/Daily'

export default {
  props: {
      daily: { type: Object, default: () => { return new Daily() } }
  },

  setup (props) {
      const { daily } = toRefs(props)

      const imgSrc = computed(() => {
          const defaultIcon = require('../static/icon/default.png')
          if (!daily.value.imgs || daily.value.imgs.length === 0 ) {
              return defaultIcon
          }
          return daily.value.imgs[0] || defaultIcon
      })

      const desc = computed(() => {
          const len = daily.value.title.length
          const MAX_LEN = 10
          return len > MAX_LEN ? daily.value.title.substring(0, MAX_LEN) : daily.value.title
      })
   
    return {
      imgSrc,
      desc
    }
  }
}
</script>

<style lang="scss">
.daily-card-wrapper {
    width: 345rpx;
    background: #ffffff;
    border-radius: 10rpx;
    overflow: hidden;
    padding-bottom: 20rpx;
    .image-wrapper {
        position: relative;
        .image {
            width: 345rpx;
            height: 300rpx;
        }
        .header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 60rpx;
            text-align: center;
            line-height: 60rpx;
            // background-color: rgba(17,153,158, 0.3);
            background: linear-gradient(180deg, #11999e, transparent);
            color: #ffffff;
            font-weight: 500;
        }
    }
    .footer {
        height: 60rpx;
        text-align: center;
        line-height: 60rpx;
        color: #40514e;
    }
}
</style>
