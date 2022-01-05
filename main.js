const getProperty = function () {
    let input = prompt("日本の首都は？");
     if( input === "東京" ) {
         confirm(　"正解です！"　);
     } else if( input !== "東京" ) {
         confirm( "不正解です！" );
     }
 }
 
 getProperty();