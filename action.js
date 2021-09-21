var flag = true;
var src1 = "https://vodzilla.co/wp-content/uploads/2019/12/AF78976D-4B5F-48F4-8588-7AA258C67C60.jpeg";
var src2 = "https://i.pinimg.com/originals/6a/61/98/6a619824442b2a9d402334292321dd01.jpg";

function cambio(){    
    var src = flag ? src1:src2;
    console.log(src);
    console.log(flag);
    document.getElementById("myimg").src = src;
    flag = !flag;
}