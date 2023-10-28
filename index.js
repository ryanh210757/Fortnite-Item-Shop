fetch("https://fortnite-api.com/v2/shop/br")

    
    .then(res => res.json())
    .then(data => {
        let html, rarity, newArray, name

        const sectionName = []
        const {data: {featured: {entries}}} = data //object destructuring for special featured
        const vBuckIcon = data.data.vbuckIcon
        const entryArray = entries.map(item => item) 

        entryArray.forEach(item => {
            if(!sectionName.includes(item.section.name)){
                sectionName.push(item.section.name)
            }
        })
        console.log(sectionName)

            for(let i=0;i<sectionName.length;i++){
                newArray =  entryArray.filter(item => item.section.name === sectionName[i])
                console.log(newArray)
                document.getElementById("mainDiv").innerHTML += `<h2>${sectionName[i]}</h2>`
   
                newArray.forEach(item => {
                    name = item.items[0].name
                   // if(name.length > 10){
                     //   animate = true
                    //}
                    rarity = item.items[0].rarity.value
                    html =  `<a id="testID">
                    <div class="container ${rarity}">
                    <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                    <div class="itemInfo">
                        <h4 id="name">${item.items[0].name}</h4>
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
        })
    