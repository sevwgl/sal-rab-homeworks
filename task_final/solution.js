// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(fname, fphone, faddress, fgoods, fsum) {
    let countOfGoods = fgoods.length;
    let data ={client:fname, order:{address:"", sum:fsum}, goods:[]};
    
    for (let i = 0; i < countOfGoods; i += 1) {
         let sgd = {title:"",count:""};
         sgd.title = fgoods[i].title;
         sgd.count = fgoods[i].count;
         data.goods.push(sgd);
        //data.goods.push({title: fgoods[i].title, count: fgoods[i].count})
               
    }

    data.client = `${fname} ${fphone}`;
    data.order.address =`ул. ${faddress.street}, дом ${faddress.house}, ${faddress.entrance} подъезд, ${faddress.floor} этаж, кв ${faddress.flat}`;
    
    let jsonData = JSON.stringify({data});

    return jsonData;
}
