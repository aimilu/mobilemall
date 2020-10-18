import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// ES6的类,详情数据
export class Goods {
  constructor(itemInfo, columns, services) {
    // 标题
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    // 新价格
    this.newPrice = itemInfo.price;
    // 旧价格
    this.oldPrice = itemInfo.oldPrice;
    // 打折
    this.discount = itemInfo.discountDesc;
    // 实际价格
    this.realPrice = itemInfo.lowNowPrice;
    // 销量, 收藏, 默认快递
    this.columns = columns;
    this.services = services;
  }
}

// 店铺数据
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

// 尺寸数据
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
