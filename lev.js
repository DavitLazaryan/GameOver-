let img = [
    "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA4VBMVEX/AAD/jAAAAM7///8AANH/lgCRExORVxP6AAD8iwD/jgCRkZEAANsSEopAExP0AAD0hgBAKhP/gwD/fQDo6Pr/sbH1+f+qr/D/3a7/S0v/rkdDR9wOEc0AAMmeo+v/+fn///j/6+s2OdT/JCT/lyT/4K4TFkjP1Pb/pjb/+Ov/aGj/uGiZnOpgYGD/paUlKNKOlOq0tvDZ3vj/dAA2JCSRBgaRbm5DDQ3/urqRnZ3/GRn/xsb/OjqRNTX/XV3/ra3/e3v/vHD/tVr/5cORVxT/1aP/tkuRaDT/8Lo2KySRhW5m/cE9AAAC7ElEQVR4nO3cSVNTURBA4YQwxzERIcokIkYFRBFlkoiA0///QUK5oer0oqkQzLs5Z//ezf2q2TSE2qfJEWnvczPXVu1LbVTab+Rq1h48/N+f9a7qaYI0YZowTZgmTBOmCdOEacI0YZowTZgmTBOmCdOEacK2kyYHZZocbs+h3ovg/kfHHfS1TJOXK8mZ6AUP7xVqEs1E1Fzw8KQmSBOmCdOEacI0YZowTZgmTBOmCdOEacI0YZowTVihJodZk/3g4QJMDrlR7ZxEu8ejHna0+9+CFxZg8jY5Eo3j5AtHyaSTfKEmTBOmCdOEacI0YZowTZgmTBOmCdOEacI0YZowTdilyfRAP/HgG8ycTFem6Aon0f2fskYnecZebWNsfKwqLS6vrqCI5Ekfh9y7X9sYr06Ly8kfk9AkeciVSaXmpB+TZJowTZgmTBOmCdOEacI0YZowTZgmTBOmCdOEacI0YcNsshS0mTRp9HHuEJu835lnH4Prf1h7zvo4eIhN1qL7R+1EA9XHwcNs8jppstkPQJAmTBOmCdOEacI0YZowTZgmTBOmCdOEacI0YZowTdgwm7hnQ+5jg9zbpxr53+8EacI0YZowTZgmTBOmCdOEacI0YZowTZgmTBOmCbszk4F+c/x2W8zu2fr+HnqFml9ltzwnS5cmjx/NzlSmOmu9i1Ci/2vRbaXOmJi6MqlOaZOobit1xj+T4KTqdBOT1As1YZowTZgmTBOmCdOEacI0YZowTZgmTBOmCdOEacJKMDnNmkzstlHAVIBJff0Z+x5trs8W2ClRSjCpt1B75k1ydhbaeF0RJkHrWZMLTTTR5HqaME2YJkwTpgnThGnCNGGaME2YJkwTpglLm0Q7pfNCTcK/mo3mZBdLunqpc3IR7F6j2TnrYpf742eZJnVu6Nu7r5Kzc1CoSVAra9LURBNNrqcJ04RpwjRhmjBNmCZME6YJ04RpwjRhmrD2DUxmJ0aj+q+0ye/zqRHpTzPX1l8JQbh0tApMzAAAAABJRU5ErkJggg==",
    "https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg",
    "https://www.advantour.com/russia/images/symbolics/russia-flag.jpg",
    "https://ae01.alicdn.com/kf/HTB1gmw8JXXXXXXoXVXXq6xXFXXX5.jpg_640x640Q90.jpg_.webp",
    "https://armwiki.files.wordpress.com/2012/07/belgium_small_flag.gif?w=584",
    "https://armwiki.files.wordpress.com/2012/07/colombia_small_flag.gif?w=584",
    "https://armwiki.files.wordpress.com/2012/07/spain_small_flag.gif?w=584",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/300px-Flag_of_Albania.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/300px-Flag_of_Bahrain.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/270px-Flag_of_Indonesia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/301px-Flag_of_Luxembourg.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/300px-Flag_of_Norway.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/300px-Flag_of_Sweden.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/300px-Flag_of_Ukraine.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/271px-Flag_of_Burkina_Faso.svg.png",
]


let towimg = []
let newArr = []
let count = 0
let towid= []
let lev = document.querySelectorAll(".col2")
lev.forEach((e) => {
    e.addEventListener("click", function () {
        let h = +e.id
        newArr = []
        document.getElementById("gg").innerHTML = ""
        document.getElementById("gg").style=`width:${h*100/2}px`
        for (i = 0; i < h; i++) {
        if(i%2==0){
              random()
        }
                    let pp = document.createElement("img")
            pp.id = "id" + i
            pp.src = "https://img2.freepng.ru/20180715/yag/kisspng-question-mark-computer-icons-exclamation-mark-desk-question-mark-emoji-5b4bb794264216.8330599815316888521567.jpg"
            pp.onclick = function () {

                if(count<2){
                   count++  
                  
                }else{
                    count=1
                 
                }
             
          
                let id = +this.id.slice(2)
                this.src = newArr[id]
                 towid.push(this.id)
               
                   if(count==2){ 
              
                    if(document.getElementById(towid[0]).src!== document.getElementById(towid[1]).src){ 
                         setTimeout(function(){
                            document.getElementById(towid[0]).src="https://img2.freepng.ru/20180715/yag/kisspng-question-mark-computer-icons-exclamation-mark-desk-question-mark-emoji-5b4bb794264216.8330599815316888521567.jpg"
                            document.getElementById(towid[1]).src="https://img2.freepng.ru/20180715/yag/kisspng-question-mark-computer-icons-exclamation-mark-desk-question-mark-emoji-5b4bb794264216.8330599815316888521567.jpg"
                            towid=[]
                        },300)             
                   
                  }else{
                    towid=[]
                   }
                   }
            }
            document.getElementById("gg").append(pp)
        }

    })
})

function random() {
    let x = Math.floor(Math.random() * img.length)
    if (newArr.length > 0) {
        if (!newArr.includes(img[x])) {
            newArr.push(img[x])
            newArr.push(img[x])
        } else {
            random()
        }


    } else {
        newArr.push(img[x])
        newArr.push(img[x])
    }
newArr=newArr.sort(function(){ return 0.5 - Math.random()})

}
