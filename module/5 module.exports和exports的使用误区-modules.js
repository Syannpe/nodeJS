// exports仅仅是对module.exports对象的一个引用
// 如果让exports引用另一个对象，那么他就会和module.exports失去联系，返回的依然是module.exports
// 归根到底module.exports和exports是两个指针，指向一段引用空间，
// 当使用module.exports和exports的时候，要注意指向关系以及赋值关系
// 一般情况下只使用module.exports和exports中的一种
