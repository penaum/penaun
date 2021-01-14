<template>
  <div>
    光|暂无内容
    import updateForm from './components/OrderCheck/update-form' // 复制
    import cancelGoods from './components/OrderCheck/cancelGoods' // 修改
    import batchUpdateForm from './components/OrderCheck/batch-update-form' // 批量修改标记
    import downloadForm from './components/OrderCheck/download-form' // 下载
    import uploadFalse from './components/OrderCheck/upload-false' // 反审核
    import uploadForm from './components/OrderCheck/upload-form' // 导入
    import batchList from './components/OrderCheck/batch-list' // 查看批次
    import seeUniqueCode from "./components/OrderCheck/seeUniqueCode"; // 查看批次
    import sreach from './components/OrderCheck/sreach' // 高级搜索
    import check from './components/OrderCheck/check' // 批量审核 好像已不要
    import delgoods from './components/OrderCheck/delgoods' // 批量删除
    import addgoods from './components/OrderCheck/addgoods' // 批量新增
    import manualSplitOrder from './components/OrderCheck/manualSplitOrder' // 手工拆单
    import batchSplitOrder from './components/OrderCheck/batchSplitOrder' // 批量拆单
    import ordersInteceptDialog from './components/OrderCheck/orders-intecept-dialog' // 拦截订单


          // 订单标识
      orderMarksOption() {
        return this.allSelectCodeList['102']
      },
      // 系统发货状态
      systemDeliverStatusOption() {
        return this.allSelectCodeList['A5']
      },
      // 平台发货状态
      platformDeliveryStatusOption() {
        return this.allSelectCodeList['A7']
      },
      // 退款
      platformRefundStatusOption() {
        console.log('21313131313', this.allSelectCodeList['A5'])
        return this.allSelectCodeList['04']
      },
      // 旗帜
      markLevelOption() {
        const data = this.allSelectCodeList['09']
        data.forEach(el => {
          switch (el.code) {
            case '1':
              el.txt = '红旗帜'
              break;
            case '2':
              el.txt = '黄旗帜'
              break;
            case '3':
              el.txt = '绿旗帜'
              break;
            case '4':
              el.txt = '蓝旗帜'
              break;
            case '5':
              el.txt = '紫旗帜'
              break;
            default:
              el.txt = '无旗帜'
              break;
          }
        });
        return data
      },
      // 系统状态
      orderStatusOption() {
        return this.allSelectCodeList['01']
      },
      // 订单类别
      orderKindCodeOption() {
        return this.allSelectCodeList['05']
      },
      // 交易类型
      orderTypeCodeOption() {
        return this.allSelectCodeList['07']
      },
      // 物流公司匹配方式
      logisticsCompanyMatchTypeOption() {
        return this.allSelectCodeList['08']
      },
      // 订单来源
      orderSourceCodeOption() {
        return this.allSelectCodeList['06']
      },
      // 是否拦截
      interceptOption() {
        return this.allSelectCodeList['17']
      },
      // 是否可发货
      canSendCheckOption() {
        return this.allSelectCodeList['59']
      },
      // 时效类型
      agingTypeOption() {
        return this.allSelectCodeList['219']
      },
      // 组合状态
      // combinationOption() {
      //   return this.allSelectCodeList['05']
      // },
      // 商品状态
      goodsStatusOption() {
        return this.allSelectCodeList['90']
      },
      // 赠品
      giftOption() {
        return this.allSelectCodeList['29']
      },
      // 时间选择
      timeTypeOption() {
        return this.allSelectCodeList[20]
      },
      // 物流状态
      logisticsStatusOption() {
        return this.allSelectCodeList[138]
      },
      // 支付方式
      payTypeCodeOption() {
        return this.allSelectCodeList[24]
      },
      // 发票类型
      invoiceTitleTypeOption() {
        return this.allSelectCodeList[10]
      },
      // 发票抬头类型
      invoiceTitleKindOption() {
        return this.allSelectCodeList[12]
      },
      // 发票种类
      invoiceKindOption() {
        return this.allSelectCodeList[11]
      },
      // 付款状态
      payStatusOption() {
        return this.allSelectCodeList[230]
      },
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>