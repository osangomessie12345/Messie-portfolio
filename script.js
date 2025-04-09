AOS.init({
            duration: 1000,
            once: false,
            offset: 120,
            mirror: false
        });

        function closeAlert() {
            document.getElementById("overlay").style.display = "none";
            document.getElementById("content").style.visibility = "visible";  
            
            document.body.style.overflowY = "auto";
            AOS.refreshHard(); 
        }
        
