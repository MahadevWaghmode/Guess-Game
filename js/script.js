var count = 0;
var list1 = [];
var flag = 0;
var arr = [["img/1.png", "img/2.png", "img/3.png"], ["img/4.png", "img/5.png", "img/6.png"], ["img/7.png", "img/8.png", "img/9.png"], ["img/10.png", "img/11.png", "img/12.png"], ["img/13.png", "img/2D.png", "img/3D.png"], ["img/5H.png", "img/6S.png", "img/8D.png"], ["img/9D.png", "img/10H.png", "img/AS.png"]];
document.getElementById("result").display=none;
function display() {

    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 3; j++) {
            cards[count].src=arr[i][j];
            cards[count].style.display="";
            count++;
        }
}count=0;
    $("#cards img").each(function(i){
        $(this).delay(50*i).fadeIn(500);
      })
}
function shuffle()
{
        if(flag<3){
            flag=flag+1;
        var sel= document.getElementById("sbox");
        switch(sel.options[sel.selectedIndex].value){
            case "1":
                //alert("1");
                list1=[]
                for(var i=0;i<7;i++){
                    list1.push(arr[i][1]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][0]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][2]);
                }
                arr=[];
                for(var i=0;i<7;i++){
                    arr.push(list1.splice(0,3));
                }
                $("#cards img").each(function(i){
                    $(this).delay(50*i).fadeOut(500);
                  })
                display();
                break;
            case "2":
                //alert("2");
                list1=[]
                for(var i=0;i<7;i++){
                    list1.push(arr[i][0]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][1]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][2]);
                }
                arr=[];
                for(var i=0;i<7;i++){
                    arr.push(list1.splice(0,3));
                }
                $("#cards img").each(function(i){
                    $(this).delay(50*i).fadeOut(500);
                  })
               display();
                break;
            case "3":
                //alert("3");
                list1=[]
                for(var i=0;i<7;i++){
                    list1.push(arr[i][0]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][2]);
                }
                for(var i=0;i<7;i++){
                    list1.push(arr[i][1]);
                }
                arr=[];
                for(var i=0;i<7;i++){
                    arr.push(list1.splice(0,3));
                }
                $("#cards img").each(function(i){
                    $(this).delay(50*i).fadeOut(500);
                  })
               display();
                break;
        }
    }
    else{
        $("#main").fadeOut(200);
        document.getElementById("res").src=arr[3][1];
        document.getElementById("result").style.display="";
    }

    
}