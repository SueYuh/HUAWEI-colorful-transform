
//滚动比率
let scrolled
//监听滚动事件，更新滚动比率
window.addEventListener('scroll',()=>{
    scrolled = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
    console.log(scrolled);
    let $x = document.querySelector(".x");
    let $h = document.querySelector(".h");
    let $y = document.querySelector(".y");
    let $z = document.querySelector(".z");

    $z.style.clipPath = `inset(${scrolled * 400}% 0 0 0)`;
    $y.style.clipPath = `inset(${(scrolled-0.25) * 400}% 0 0 0)`;
    $h.style.clipPath = `inset(${(scrolled-0.5) * 400}% 0 0 0)`;
    $x.style.clipPath = `inset(${(scrolled-0.75) * 400}% 0 0 0)`;

       
})




