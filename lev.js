let img = [
    "https://group.mercedes-benz.com/bilder/produkte/pkw/mercedes-benz/a-klasse/a-klasse-w1920xh1080-cutout.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/2024-mercedes-amg-c63-s-e-performance-front-1663695516.jpg?crop=0.539xw:0.808xh;0.225xw,0.117xh&resize=640:*",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-G-63/9737/1679289361128/front-left-side-47.jpg",
    "https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/bmw_i/2023/230201_BMW_Group_BMW_i4eDrive40.png",
    "https://motor.ru/imgs/2022/09/28/02/5602932/c566a0a89d849c5a7c5966aa0a49633834f7af92.jpg",
    "https://motor.ru/thumb/0x1000/filters:quality(75):no_upscale()/imgs/2022/05/20/08/5412803/4b6da1510ca5e60e3c0ad760a0ca59dc3938bf78.jpg",
    "https://assets-eu-01.kc-usercontent.com/fb793c58-315a-0196-d3af-7c9c2613d52c/dc6de68e-111b-4207-ad43-25b1de2d4b06/P90450318_lowRes_2-series-coup-imager.jpg",
    "https://xo-customs.co.uk/cdn/shop/products/Hamer_King_front_bumper_roller_ce2b05a5-ff0f-43f4-b45c-70ff244e87ae_1200x1200.png?v=1633691054",
    "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2020/12/896/500/trx-7.jpg?ve=1&tl=1",
    "https://www.ironman4x4.co.nz/assets/slider-files/WebReady-Ford-Ranger-Ironman-4x4-Raid-1.jpg",
    "https://img.mercedes-benz-kiev.com/data/news/318-oglyad-mercedes-amg-g-63-4x4-2022-model-dostupna-na-zamovlennya/mercedes-amg-g-63-4x4-2022.jpg",
    "https://cdn.motor1.com/images/mgl/0ee6Rm/s1/nuova-mercedes-amg-g-63-4x42-2022.webp",
    "https://i0.shbdn.com/photos/73/51/04/x5_1073735104lvr.jpg",
    "https://mitsubishi-skj.com/images/triton-4x4/car-model/triton-4x4-preview.png",
    "https://hips.hearstapps.com/hmg-prod/images/2024-volkswagen-id4-102-64ee3ad38a733.jpg?crop=0.658xw:0.493xh;0.168xw,0.301xh&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/2024-volkswagen-id4-103-64ee3ad291f24.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/VW_ID4_1st_Max.jpg",
    "https://images.drive.ru/i/0/607fd9a75f5f1b766adb4297.jpg",
    "https://cdn.wheel-size.com/automobile/body/volkswagen-id4-crozz-2021-2024-1676272846.6215389.jpg",
    "https://www.cnet.com/a/img/resize/d49500c0c0e47a3fb9a96946ac9de8ab8f38aefb/hub/2021/11/01/177d8fc4-fd4d-4b46-8313-6368f678ecf7/id4-promo.jpg?auto=webp&width=768",
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
