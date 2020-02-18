let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер

router.get('/:id/:action', (req, res, next)=>{ //вешаем на роут обработчик get запросов
    //Выводим параметры из маршрута
    console.log(`Параметры url: id ${req.params.id}` +
        ` action ${req.params.action}`);
    res.send(JSON.stringify(req.body));
});

module.exports = router; //Экспортируем роутер из модуля