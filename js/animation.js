(()=>{
    console.log(window.matchMedia("(min-width: 770px)"));
    if(window.matchMedia("(min-width: 770px)").matches){
        let fpArr = Array.from(document.querySelectorAll(".footprint"));
        fpArr.forEach((elem,index,arr)=>{
        setTimeout(()=>{
            elem.style.display = "block";
        },(index+1)*500);
        });
    };

})();