var val = 1 ;
function wait()
{
    if(1 == val)  {
        //8000是停留的时间
        setTimeout("wait()",3000);
        val--;
    }
    else  {
        image.style.display='none';
    }
}