(function () {
    function resize() {
      var body = document.getElementsByTagName('body')[0];
      var html = document.getElementsByTagName('html')[0];
      var width = html.clientWidth;
      var height =  html.clientHeight;
      var max = width > height ? width : height;
      var min = width > height ? height : width;
      body.style.width = max + "px";
      body.style.height = min + "px";
    }
    resize();
    window.addEventListener("resize", resize)
  })();

  function readname(){
    let url;
    url = window.location.hash; 
    url=url.slice(1);
    url=decodeURIComponent(url);
    if (url==""){
        i=1
        while(i==1){
            url=prompt("怎么称呼您？");
        if (url!=null&url!="") {
            i=2;   
        }else{alert("姓名不能为空");}
        }
    }
    return url;
}
function showit(){
    let first1=document.getElementById("first");
    console.log(first1);
    let a=readname();
    console.log(a);
    first1.innerText="致 "+a+" :";

}
showit();
async function showagain() {
  const res = await fetch('https://cdn.jsdelivr.net/gh/kaersie/year/data.json');
  const data = await res.json();
  //   随机取出data的某一项
  const randomIndex = Math.floor(Math.random() * data.length);
  const randomtext = data[randomIndex].text;
    let b=document.getElementById("second");
    b.innerText=randomtext;
}
showagain();
function urlq(){
    location.href = "http://kaersie.great-site.net";
}
console.log("version: 0.2");