document.body.onkeyup = (k) => { 
    if(k = "space"){ 
        document.body.classList.toggle('dark');
        const div = document.querySelector("div");
        div.classList.toggle("dark2");
    }
}
