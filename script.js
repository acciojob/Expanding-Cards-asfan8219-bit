//your JS code here. If required.
    const panels = document.querySelectorAll(".panel")
        panels.forEach((selected)=>{
            selected.addEventListener("click",()=>{
                panels.forEach((panel)=>{
                    panel.classList.remove("active")
                })
                selected.classList.add("active")
            })
        });