/**
 * storage
 * Created By WebStorm.
 * author jiangshunxin
 * date 2019-04-30
 */

class Storage {
  constructor (name) {
    this.name = 'storage';
  }
  /**
   *  设置缓存
   * @param name 键名
   * @param value 键值 (如果是数据或者对象，会自动序列化)
   * @param expires 过期时间,以小时为单位
   */
  setItem (name = '', value = '', expires = '') {
    // 如果options.expires设置了的话
    if (expires) {
      // 将options和传进来的params合并
      let options = {
        name: name,
        value: value,
        expires: expires * 60 * 60 * 1000, // 一小时为单位
        startTime: new Date().getTime() // 记录何时将值存入缓存，毫秒级
      };
      // 以options.name为key，options为值放进去
      localStorage.setItem(name, JSON.stringify(options));
      return;
    }
    // 如果options.expires没有设置，就判断一下value的类型
    let type = Object.prototype.toString.call(value);
    let stringifyArr = ['[object Object]', '[object Array]'];
    // 如果value是对象或者数组对象的类型，就先用JSON.stringify转一下，再存进去
    if (stringifyArr.includes(type)) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(name, value);
  }

  /**
   *  拿到缓存，如果有startTime的值，说明设置了失效时间，会做一个比较
   *  将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
   * @param name 键名
   * @returns {*} 1(设置了过期时间)：缓存未过期，返回值、过期则返回false 。2(未设置过期时间): 直接返回值
   */
  getItem (name) {
    let item = localStorage.getItem(name);
    // 先将拿到的试着进行json转为对象的形式
    try {
      item = JSON.parse(item);
    } catch (error) {
      // 如果不行就不是json的字符串，就直接返回
    }
    // 如果有startTime的值，说明设置了失效时间
    if (item && item.startTime) {
      let date = new Date().getTime();
      // 何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或等于就还没过期
      if (date - item.startTime > item.expires) {
        // 缓存过期，清除缓存，返回false
        localStorage.removeItem(name);
        return false;
      } else {
        // 缓存未过期，返回值
        return item.value;
      }
    } else {
      // 如果没有设置失效时间，直接返回值
      return item;
    }
  }
  // 移出缓存
  removeItem (name) {
    localStorage.removeItem(name);
  }
  // 移出全部缓存
  clear () {
    localStorage.clear();
  }
}

export default new Storage();
