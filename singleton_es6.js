/*
 *created by zx
 *2016-8-23
 *每个人都要有优雅的写代码
 */
 "use strict";

class Singleton{
  constructor(name){
    //name 属性
    this.name = name;
    //instance 实例
    this.instance = null;
  }
  getName(name){
    console.log(this.name);
  }
  static getInstance(name){
    if(!this.instance){
      this.instance = new Singleton(name);
    }
    return this.instance;
  }
}

let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');
a.getName();
b.getName();
console.log(a === b);
