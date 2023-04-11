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
            entryArray.filter(item => item.section.name === sectionName)
            
        })
        
        for(let i=0;i<sectionName.length;i++){
            
            console.log(entryArray.filter(item => item.section.name === sectionName[i]))
            document.getElementById("div").innerHTML += 
                `
                <h2>${sectionName[i]}</h2>
                
                `
        }

        console.log(sectionName)
      
    })

