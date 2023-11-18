function Zap(){
    let i = document.getElementById('inp-rez').textContent;
    return i;
}
let pref = 'c';
for(let i=0;i<10;i++){
    let s=pref+String(i);
    let obj=document.getElementById(s);
    obj.onclick=function(){
        let sum=Zap()+i;
        document.getElementById('inp-rez').innerHTML=sum;
    }
}

p.onclick = function(){
    let sum=Zap();
    if (sum[sum.length-1]=='+'|sum[sum.length-1]=='-'|sum[sum.length-1]=='*'|sum[sum.length-1]=='/'){
    }else{
        sum=sum+'+';
        document.getElementById('inp-rez').innerHTML=sum;
    }
}
m.onclick = function(){
    let sum=Zap();
    if (sum[sum.length-1]=='+'|sum[sum.length-1]=='-'|sum[sum.length-1]=='*'|sum[sum.length-1]=='/'){
    }else{
        sum=sum+'-';
        document.getElementById('inp-rez').innerHTML=sum;
    }
}
d.onclick = function(){
    let sum=Zap();
    if (sum[sum.length-1]=='+'|sum[sum.length-1]=='-'|sum[sum.length-1]=='*'|sum[sum.length-1]=='/'){
    }else{
        sum=sum+'/';
        document.getElementById('inp-rez').innerHTML=sum;
    }
}
y.onclick = function(){
    let sum=Zap();
    if (sum[sum.length-1]=='+'|sum[sum.length-1]=='-'|sum[sum.length-1]=='*'|sum[sum.length-1]=='/'){
    }else{
        sum=sum+'*';
        document.getElementById('inp-rez').innerHTML=sum;
    }
}
rez.onclick = function Rez(){
    document.getElementById('inp-rez').innerHTML=eval(Zap());
}
clear.onclick = function(){
    document.getElementById('inp-rez').innerHTML='';
}