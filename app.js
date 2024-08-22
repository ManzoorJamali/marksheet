

/*var a = 20;
document.write(a);
document.write("hello");
*/
//var arr=[1,2,3,4,5];

//var  arr2 =  arr.slice(0,1, );
//var  arr2 =  arr.splice(0,2,'manzoor');
/*for(var i = 0; i<arr.length; i++){
	document.write(arr[i]);
}*/
/*for(var i = 1; i<=10; i++){
	document.write(i, "manzoor,<br>");
}*/
/*var a = +prompt("enter value")
for (var i = 1; i<=10; i++){
	document.write(a+ "*" +i+ "=" +i*a+ '<br>');
}*/

// Math Fuctions:
// var a= prompt("enter first value");
// var b= prompt("enter value two");
// var toss = Math.random()*2;
// var c = Math.floor(toss);
// if(c == 0){
// 	document.write(a +" "+"Won");
// }
// else
// {
// 	document.write(b+ " " +"Won");
// }


/*var arr=['Manzoor','ayaz','taha'];
 var arr2=['Ghulam shabir', 'balach khan'];
for(var i=0; i<arr.length; i++){
for(var j =0; j<arr2.length; j++){
	document.write(arr[i]  +arr2[j]);
	document.write("<br>")
}}*/

/*var a = 78
var b=79
var c =46
 var obt = a+b+c;

var total = 300;
var p = obt*100/total;
perc = Math.round(p);
document.write("Total" +total +"<br>");
document.write("obtain Marks"+obt +"<br>");
document.write("Percentage"+perc +"<br>");



*/

	
	
// var arr=['Manzoor','ayaz','taha'];
// //	arr.push('jamali');//for add element in aar;
// //arr.pop(); for remove last element in array;
// //array.shift(); remove for first element in array;
// //arr.unshift('jamali'); for add element in first element;
// arr.toSorted();
// console.log(arr);




const calcy =() => {
    result = '';
 
     let wd = document.getElementById('eng').value;
 
     let math = document.getElementById('math').value;
 
     let web = document.getElementById('web').value;
 
     let Grades = "";
     let obtain = parseFloat(wd)+parseFloat(math)+parseFloat(web);
      total = 300;
     let per = obtain*100/total;
     // perc = Math.round(per);
     perc = Math.round(per);
     
       if(perc <=100 && perc>=80){
         Grades = 'A1';
     }
     else if(perc <=79 && perc >=70){
         Grades = 'A';
     }
     else if(perc <=69 && perc >=60){
         Grades = 'B';
     }
     else if(perc <=59 && perc >=50){
         Grades = 'C';
     }
     else if(perc <=49 && perc >=40){
         Grades = 'D';
     }
     // else if(perc >=101  ){
     // 	obtain = 'undefined; <br>please fill the exact properties';
     // 	Grades = 'undefined';
     // 	perc = 'undefined';
     // 	result = 'Fail';
         
 
     // }
     
 
 
     else{
         Grades = 'F';
     }
     
     if (isNaN(total) || isNaN(obtain) ||  obtain < 0 || obtain > total) {
         alert('Please enter valid marks.');
         return;
     }
 
 if(perc >=40){
 document.getElementById('english').innerHTML = wd;
 document.getElementById('math1').innerHTML = math;
 document.getElementById('web1').innerHTML = web	;
 document.getElementById('obt').innerHTML = obtain;
 document.getElementById('total').innerHTML = total;
 
 document.getElementById('perc').innerHTML=	` ${perc}% `;
 document.getElementById('grade').innerHTML=	`grade ${Grades} :  Result: Pass`;
 
     
 // document.getElementById('showdata').innerHTML = `Total Marks: ${total}<br>
 // 	 obtain Marks is : ${obtain} <br> Percentage:  ${perc}%. 
 // 	 <br> Grade: ${Grades}.<br> Result : Pass`;
 }  
 
 else{
 document.getElementById('english').innerHTML = wd;
 document.getElementById('math1').innerHTML = math;
 document.getElementById('web1').innerHTML = web	;
 
 document.getElementById('obt').innerHTML=  	`${obtain}`;
 document.getElementById('total').innerHTML=	` ${total}`;
 document.getElementById('perc').innerHTML=	` ${perc}%	`;
 document.getElementById('grade').innerHTML=	`Grade:  ${Grades}   Result : Fail`;
 
     
 }

 }

 function del(){

	var a = document.getElementById('english').innerHTML = ''; 
 
	  if (a.innerHTML = '') {
	
		alert('Please enter english marks.');
		return;
		
	}
 }
    

 function del2(){
     document.getElementById('math1').innerHTML = '';
 }
 function del3(){
     document.getElementById('web1').innerHTML = '';
 }