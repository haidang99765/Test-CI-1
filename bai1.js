//bài 1 - ý a
var arr = [];
for(var n = 0; n < 5; n++) {
    var input = Number(prompt('Nhập vào số mà bạn muốn nhập:'));
    arr.push(input);
}
let m = Number(prompt('Mời bạn nhập vào m: '));
var couples = [];
for(var i = 0; i< arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] == m) {
            couples.push({i , j});
        }
    }
}
if(couples.length == 0) {
    console.log('Không tìm thấy cặp số nào!')
} else {
    console.log(couples);
}

//bài 1 - ý b em chưa biết làm ạ