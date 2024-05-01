// const create =(e)=>{
//     e.preventDefault();
//     let result = document.getElementById("result")
//     let width = e.target [0].value
//     let height = e.target [1].value
//     let bg_color= e.target [2].value
//     let border_r = e.target [3].value
//     console.log(width, height, bg_color, border_r)
//     result.style.width = `${width}px`
//     result.style.height = `${height}px`
//     result.style.backgroundColor = bg_color
//     result.style.borderRadius = `${border_r}px`
// }

document.getElementById("result_btn").addEventListener("click", function(e) {
    e.preventDefault();
    let result = document.querySelector(".result");
    let width = document.getElementById("input1").value;
    let height = document.getElementById("input2").value;
    let bg_color = document.getElementById("input3").value;
    let border_r = document.getElementById("input4").value;
    console.log(width, height, bg_color, border_r);
    result.style.width = `${width}px`;
    result.style.height = `${height}px`;
    result.style.backgroundColor = bg_color;
    result.style.borderRadius = `${border_r}px`;
});
