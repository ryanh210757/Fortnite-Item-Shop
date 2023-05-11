fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => res.json())
    .then(data => {
    
        const sectionName = []
        const {data: {specialFeatured: {entries}}} = data //object destructuring
        const vBuckIcon = data.data.vbuckIcon
        const entryArray = entries.map(item => {
            return item
         }) 
        console.log(entryArray)

        entryArray.forEach(item => {
            if(!sectionName.includes(item.section.name)){
                sectionName.push(item.section.name)
               // sectionName.push(item.newDisplayAsset.materialInstances[0].images.OfferImage)
            }
        })
        
        for(let i=0;i<sectionName.length;i++){
            document.getElementById("mainDiv").innerHTML += 
                `<h2>${sectionName[i]}</h2>`

            entryArray.filter(item => 
                {
                    if(item.section.name === sectionName[i]){
                        console.log(item)
                        let rarity = item.items[0].rarity.value
                    switch(rarity){
                        case "uncommon":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-uncommon">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </div>
                            `
                                break;
                        case "rare":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-rare">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </div>
                            `
                                break;
                        case "epic":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-epic">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </dip
                            `
                                break;
                        case "legendary":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-legendary">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </div>
                            `
                                break;
                        case "icon":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-icon_series">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </div>
                            `
                                break;
                        case "starwars":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container starwars">
                                    <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <div class="itemInfo">
                                    <h4>${item.items[0].name}</h4>
                                <div class="itemBox">
                                    <img class="vbuck" src="${vBuckIcon}"/>
                                    <p>${item.regularPrice}</p>
                                </div>
                                </div>
                                </div>
                            `

                                break;
                        case "Gaming Legends Series":
                            document.getElementById("mainDiv").innerHTML += 
                            `
                                <div id="square" class="container rarity-gaming_legends">
                                <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                                <p>${item.regularPrice}</p>
                                <p>${item.items[0].name}</p>
                                </div>
                            `
                            break;
                        }
                    }
                })
        }
        console.log(sectionName)
      })
        
      document.getElementById("mainDiv").addEventListener("click", function(e){
                console.log(e.target)
        })