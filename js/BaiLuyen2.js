/**
 * Khối 1: Input
 *   số nguyên dương có 3 chữ số (123,567,234)
 *?  num, hund (hàng trăm),ten (hang chuc), unit (don vị)
 * 
 * Khối 2: Các bước xử lý
 *      B1: Khai báo biến và gán giá trị
 *      B2: lập công thức
 *          bóc tách từng số: hàng tram, hang chuc, hang dơn vị
 *       + lấy hàng trăm (phép chia, phép lấy phần nguyên)
 *          Math.floor(num / 100) => phần nguyên trong phép toán chia 100    
 *       + lấy hàng chục
 *          - Lây phần dư trong phép chia 100 => có được số 2 chữ số
 *          - đem phần dư => lấy phần nguyên trong phép chia 10
 *       + lấy hàng dơn vị  
 *          - đem phần dư => lấy phần dư trong phép chia 10
 *      B3: thông báo kết quả
 * 
 * Khối 3: Output
 *   tổng của 3 chữ số  (123 => 1 + 2 +3)
 * 
 * ?  total
 */

//?  B1
// var fullName = "";
//Nếu không khai báo giá trị => kết quả là undefined

var num = 123;
var hund = 0;
var ten = 0;
var unit = 0;
var total = 0;

//? B2
//+ lấy hàng trăm 
hund = Math.floor(num / 100);

//lấy hàng chục
var phanDu = num % 100; // 86

ten = Math.floor(phanDu / 10);

// lấy hàng dơn vị  
unit = phanDu % 10;

total = hund + ten + unit;

//? B3
console.log("Tổng 3 chữ số: "+ total);






