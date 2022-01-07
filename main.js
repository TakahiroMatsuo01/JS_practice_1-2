const getProperty = () => {
   let input = prompt("日本の首都は？");
    if( input === "東京" ) {
        confirm(　"正解です！"　);
    }else if( input !== "東京" ) {
        alert( "不正解です！" );
  }
}
while(getProperty.input!=="東京"){
     getProperty();
    break;
}