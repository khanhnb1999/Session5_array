/*
1. Mảng trong Javascript là gì?
2. Khai báo mảng trong javascript
--Khai báo với từ khóa new Array()
--Khai báo với cặp dấu ngoặc vuông []
3. Truy xuất các phần tử trong mảng
4. In mảng ra trình duyệt và console
5. Sử dụng vòng lặp để duyệt mảng trong javascript
--Duyệt mảng với vòng lặp for
--Duyệt mảng với vòng lặp while
 */


//1:Khái niệm về mảng: + 1 loại dữ liệu tập hợp nhiều giá trị
/*
2:Khai báo mảng trong javascript
Có 2 cách: + Khai báo với từ khóa new Array()
           + Khai báo với cặp dấu ngoặc vuông
 */

//Cách1:Khai bảo mảng với từ kháo new Array()
var list_car = new Array('Honda', 'Sirius', 'Wave');
console.log(list_car);


//Cách2: Khai báo với dấu []
var list_car1 = ['Honda', 'Sirius', 'Wave'];
console.log(list_car1);


//3:Truy xuất phần tử trong mảng -->tenmang[vitri];
var userName = ['khanh', 'nam', 'tu', 'quynh'];
console.log(userName[1]);//Lấy ra vị trỉ nam

//4:In danh sách mảng ra màn hình
//Để hiện thị các phần từ thì dùng hàm array.join();
console.log(userName.join(' - '));

//5:Sử dụng vòng lặp để duyệt mảng trong javascript
//Để đếm phần tử trong mảng thì dùng thuộc tính length
console.log('Mảng userName có tổng số phần tử là: ' + userName.length);

//Dùng vòng lặp for để in ra các phần tử có trong mảng
for (var i = 0; i < userName.length; i++) {
    console.log(userName[i]);
}

//Dùng vòng lặp while 
var n = 0;
while (n < userName.length) {
    console.log(userName[n]);
    n++;
}

/*
3 cách lấy phần tử trong mảng: +Theo chỉ mục
                               + Hàm find()
                               + Hàm findlndex()
 */
//1:Lấy theo chỉ mục
var listCar = ['taxi', 'toyota', 'audi', 'foranger'];
console.log(listCar[2]);//Lấy ra phần tử audi

/*
2:Lấy theo hàm find(): + Trả về giá trị phần tử đầu tiên vượt qua kiểm tra
                       + Khôi phục lại undefined nếu không thấy phần từ nào
                       + Không thực thi chức năng cho các phần tử trống
                       + Không thay đổi mảng ban đầu
 */
//Cú pháp : array.find(function(currentValue, index, arr),thisValue)
//function --> hàm để chạy mỗi phần tử mảng
//currentValue --> Giá trị phần tử hiện tại
//index --> chỉ số phần tử hiện tại
//arr --> mảng của phần tử hiện tại
//thisValue --> Giá trị được truyền vào cho hàm dưới dạng giá trị
var number = [2, 10, 18, 20];
function checkNumber(num) {
    return num > 19;
}
console.log(number.find(checkNumber));

//3:Lấy theo hàm findlndex: Trả về vị trí xuất hiện của phần tử cần tìm

const ages = [3, 10, 18, 20];
console.log(ages.findIndex(checkAge));
function checkAge(age) {
    return age > 18;
}

/*
Cách truyền hàm vảo mảng: + Truyền theo cách thông thường
                          + Truyền mảng vào hàm js có tham số vô tận
                          + Truyền mảng vào hàm Math.max()
 */

//1:Truyền mảng vào hàm theo cách thông thường
function showArray(element) {
    console.log(element);
}
showArray([1, 2, 3, 4, 5, 6, 7, 7, 8]);


//2:Truyền mảng vào hàm js có tham số vô tận
function showString(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
//Cách1
const food = ['Apple', 'Rice', 'Milk'];
showString(food[0], food[1], food[2]);

//Cách2
showString.apply(null, food);

//Cách3
showString(...food);

//3:Truyền mảng vào hàm js Math.max() --> Trả về số lớn nhất trong mảng
const number3 = [5, 6, 7, 8, 9];
console.log(Math.max(...number3));


/*
1. Mảng hai chiều trong javascript là gì?
2. Khai báo mảng hai chiều trong javascript
3. Lấy phần tử mảng hai chiều trong javascript
4. Thêm phần tử vào mảng hai chiều trong javascript
--Thêm vào cuối mảng hai chiều
--Thêm vào đầu mảng hai chiều
5. Duyệt mảng hai chiều trong javascript
 */

//1:Khái niệm : Là loại mảng mà mỗi phần tử của mạng là một mảng khác
//2:Khai báo mảng 2 chiều
var numbers = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
];
console.log(numbers[1][2]);//Truy cập cột 2 hàng 3 có vị trí xuất phát từ 0

//3:Lấy phần tử mảng hai chiều
//array[row][column] --> row(hàng)/column(Cột)

//4:Thêm phần tử vào mảng 2 chiều(hàm push)
var list_number = [];
list_number.push([3, 5, 6]);
list_number.push([3, 52, 64]);
list_number.push([33, 53, 65]);
console.log(list_number);
//Thêm vào đầu mảng 2 chiều
var list_number1 = [];
list_number.unshift([3, 5, 6]);
list_number.unshift([3, 52, 64]);
list_number.unshift([33, 53, 65]);
console.log(list_number1);

//5:Duyệt mảng 2 chiều
var numbers = [
    [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21]
];

// Lặp theo hàng
for (var i = 0; i < numbers.lenght; i++) {

    // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
    for (var j = 0; j < numbers[i].length; j++) {
        console.log(numbers[i][j]);
    }
}