/**
 * Variables (Biến)
 * Toán tử tính toán (+, -, *, / ...)
 * Toán tử tăng/giảm
 */

//dòng code thông báo kiểm tra của dev
// clg
console.log("Hello world!");

//? Variables (Biến) : lưu trữ các giá trị của thông tin
//? Kiểu dữ liệu JS: string, number, boolean (true/false), array, object

//?Khai báo biến (khởi tạo) => tukhoa tenbien = gia trị cần lưu;
//đặt biến theo cú pháp camel case (fullName, age...)
// =: dấu gán giá trị
// tạo biến => máy tính lấy 1 ô/vùng nhớ => lưu giá trị của biến  
// nếu có quá nhiều biến => tốn bộ nhớ
var fullName = "Nguyễn Thị Khách Hàng" ; //string
var age = 20; // number
var autoplay = true; //boolean

//?Sử dụng biến
console.log(fullName,age,autoplay);
console.log(age);

//? toán tử tính toán
//+, - , * , /, %
console.log("Cộng: ", 2 + 2);
console.log("Trừ: ", 2 - 2)
console.log("Nhân: ", 2 * 2)
console.log("Chia: ", 5 / 3)
console.log("Chia lấy dư: ", 5 % 3)

//? toán tử tăng/ giảm
var num1 = 0;//giá trị ban đầu/ khởi tạo/ giá trị mặc định

//gán lại giá trị
num1 = 3;

var num2 = 0;
// nếu có dấu = => đọc từ phải qua trái
// 1 + 0 (giá trị ban đầu của num2) được 1 , đem 1 lưu lại vào biến num2
//? num2 = num2 + 1;// => num2 là 1
// cách rút gọn => 
//? num2 += 1;
//rút gọn hơn: 
num2++; // 1
console.log(num2)
++num2;//2
console.log(num2)

// khi dùng toán tử tăng/giảm với dấu = 
var num3 = 0;
num3 = num3++;// dấu ++ đặt sau => gán trước (đem 0 lưu trước) tăng sau (sau đó mới tăng + 1 => đã gán xong giá trị rồi nên ko gán lại nữa)
console.log(num3)//0

num3 = ++num3; // dấu ++ đặt trước => tăng trước gán sau
console.log(num3)//1




