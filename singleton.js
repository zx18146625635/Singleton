/*
 *created by zx
 *2016-8-23
 *每个人都要有优雅的写代码
 */

var Singleton = function(name) {
  //name 属性
  this.name = name;
  //instance 实例
  this.instance = null;

}

Singleton.prototype.getName = function (name) {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if(!this.instance){
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();
