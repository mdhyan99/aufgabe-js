// jede 3m  ist 750m3 
// jede 2.95 m  ist X
// x = (750* 2.95)/3 =737,5 m3
const wassertiefe1 = 300;
const wassermenge = 3750000;
const wassertiefe2 = 5;
const wassermenge2 =  wassermenge / wassertiefe1 * wassertiefe2 ;
console.log("A",wassermenge2 ,"l");
const vebraucht = 8;
const weit = 100;
const tankfüllung= 66;
const neuWeit=   weit*tankfüllung/vebraucht ;
console.log("B",neuWeit ,"km");
 // jede 8  ist   100
    // jede 66  ist X
    // 100*66 = 8*X
    // x = 100*66 /8=825
const neuWeit2=  weit/vebraucht * tankfüllung ;
console.log("B",neuWeit2 ,"km");
// 66/8 *100
const neuWeit3= (tankfüllung/vebraucht)* weit ;
console.log("B",neuWeit3 ,"km");
// c
const arbeiter3 = 3;
const  zeitfür3 = 17;
const arbeiter5 = 5;
const zeitfür5 =  arbeiter3  * zeitfür3 / arbeiter5;
console.log("C",zeitfür5 ,"Stunde");
// D
const varaiblen1 = 882;
const varaiblen2 = 14;
const varaiblen3 = 12;
const varaiblen4 = 2.3;
const varaiblen5 = 999;
const ergibnes =  varaiblen1 /(varaiblen2*varaiblen3) /(varaiblen4*varaiblen5);
console.log("D" ,ergibnes );
// E
const varaible1 = 12*7*17;
const varaible2 = 7;
const varaible3 = 17+333;
const ergibnes2 =  varaible1 /varaible2 /varaible3;
console.log("E" ,ergibnes2);
// F
const varaibl1 = 16.80*100;
const varaibl2 = 120;
const varaibl3 = 24.40*100;
const ergibnesF =  varaibl1 /varaibl2 *varaibl3 /100;
console.log("E" ,ergibnesF ,"€");

   