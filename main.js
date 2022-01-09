const getProperty = () => {
   let input = prompt('日本の首都は？');
   while(true) {
        if(input === '東京') {
        alert('正解です！');
        break;
    } else {
        alert('不正解です！');
        return getProperty();
  　}
　}
}
getProperty();