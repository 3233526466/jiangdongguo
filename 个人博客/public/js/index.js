$(function(){
    var $loginBox=$("#loginBox");
    var $resBox=$("#registerBox");
    var $userBox=$("#userInfo");

    $loginBox.find("a.colMint").on("click",function(){
        $loginBox.hide();
        $resBox.show();
    });

    $resBox.find("a.colMint").on("click",function(){
        $resBox.hide();
        $loginBox.show();
    });

    //注册
    $resBox.find('button').on('click',function(){
        //                属性选择器
        var uname=$resBox.find('[name="username"]').val();
        var pwd=$resBox.find('[name="password"]').val();
        var repwd=$resBox.find('[name="repassword"]').val();
        if(uname==""||uname==null||pwd==""||pwd==null){
            alert("用户名或者是密码不能为空");
            return;
        }
        if(pwd!=repwd){
            alert("输入的两次密码不一致");
            return;
        }

        //通过ajax提交请求
        $.ajax({
            type:'post',
            url:'/api/user/register',
            data:{
                username:$resBox.find('[name="username"]').val(),
                password:$resBox.find('[name="password"]').val()
            },
            dataType:'json',
            success:function(result){
                $resBox.find('.colWarning').html(result.message);
                if(result.code==2){
                    //注册成功
                    setTimeout(function(){
                        $loginBox.show();
                        $resBox.hide();
                    },1000);
                }
            }
        });
    });
//登录
    $loginBox.find('button').on('click',function(){
        var uname=$loginBox.find('[name="username"]').val();
        var pwd=$loginBox.find('[name="password"]').val();
        if(uname==""||uname==null||pwd==""||pwd==null){
            alert("用户名或者是密码不能为空");
            return;
        }
        $.ajax({
            type:'post',
            url:'/api/user/login',
            data:{
                username:$loginBox.find('[name="username"]').val(),
                password:$loginBox.find('[name="password"]').val()
            },
            dataType:'json',
            success:function(result){
                $loginBox.find('.colWarning').html(result.message);
                if(result.code==2){
                    //登录成功
                  //  $loginBox.hide();
                  //  $userBox.show();
                    //判断是管理员还是普通用户
                  //  if(result.info.isAdmin==0){
                   //     $userBox.find("p.userName span").html(result.info.uname);
                  //      $userBox.find("p.adminInfo").hide();
                   // }else if(result.info.isAdmin==1){
                    //    $userBox.find("p.userName span").html(result.info.uname);
                    //    $userBox.find("p.adminInfo").show();
                   // }
                    //重新加载页面
                    window.location.reload();
                }
            }
        });
    });
});

