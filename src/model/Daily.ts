/*
 * @Author: wuchangping
 * @Date: 2021-03-14 12:17:20
 * @LastEditTime: 2021-03-14 12:32:19
 * @LastEditors: wuchangping
 * @Description: 日记信息模型
 * @FilePath: /taro-mini-app/src/model/Daily.ts
 * 记得注释
 */

export default class Daily {
    uuid: string = ''
    author: string = '' // 作者
    date: string = '' // 日期
    imgs: string[] = [] // 图片
    title: string = '' // 标题
    context: string = '' // 内容
    commment: any // 评论
}
