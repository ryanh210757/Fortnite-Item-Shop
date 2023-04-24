fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => res.json())
    .then(data => {
    
        const sectionName = []
        const {data: {specialFeatured: {entries}}} = data
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
            document.getElementById("div").innerHTML += 
                        `
                        <h2>${sectionName[i]}</h2>
                
                        `
            entryArray.filter(item => 
                {
                    if(item.section.name === sectionName[i]){
                        console.log(item)
                        let style
                        
                        document.getElementById("div").innerHTML += 
                        `
                        <div class="container"">
                        <img src="${item.newDisplayAsset.materialInstances[0].images.OfferImage}" />
                        <p>${item.regularPrice}</p>
                        <h1>${item.items[0].name}</h1>
                        </div>
                        `
                    }
                })
        }

        console.log(sectionName)
      
    })

