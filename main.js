const getProperty = () => {
   let input = prompt('日本の首都は？');
   while(input !== '東京') {
        if(input === '東京') {
        confirm('正解です！');
        break;
    } else if(input !== '東京') {
        alert('不正解です！');
        return getProperty();
  　}
　}
}
getProperty();