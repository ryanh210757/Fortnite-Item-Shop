fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => res.json())
    .then(data => {
        const sectionName = []
        const {data: {specialFeatured: {entries}}} = data //object destructuring for special featured
        const vBuckIcon = data.data.vbuckIcon
        const entryArray = entries.map(item => item) 

        document.getElementById('mainDiv').addEventListener("click", function(e){
            console.log(entryArray)
        })

        entryArray.forEach(item => {
            if(!sectionName.includes(item.section.name)){
                sectionName.push(item.section.name)
            }
        })

        let html
        let rarity
        let newArray
        for(let i=0;i<sectionName.length;i++){

            newArray =  entryArray.filter(item => item.section.name === sectionName[i])
            
            console.log(newArray)
            document.getElementById("mainDiv").innerHTML = `<h2>${sectionName[i]}</h2>`
            newArray.forEach(item =>{
                
                html +=  `   <a>
                <div class="container icon">
                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                <div class="itemInfo">
                    <h4>${item.items[0].name}</h4>
                <div class="itemBox">
                    <img class="vbuck" src="${vBuckIcon}"/>
                    <p>${item.regularPrice}</p>
                </div>
                </div>
                </div>
                </a>
            `
                document.getElementById("mainDiv").innerHTML +=  html
            })
            
        }
        
        console.log(sectionName)
   
        
      })
        
     