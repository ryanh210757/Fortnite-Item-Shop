fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => res.json())
    .then(data => {
    
        const sectionName = []
        const {data: {specialFeatured: {entries}}} = data
        const skinNamesArray = entries.map(item => {
            return item.section
         }) 
        console.log(skinNamesArray)

        skinNamesArray.map(item => {
            if(!sectionName.includes(item.name)){
                sectionName.push(item.name)
            }
        })
        
        for(let i=0;i<sectionName.length;i++){
            document.getElementById("div").innerHTML += 
                `
                <h2>${sectionName[i]}</h2>
                `
        }

        console.log(sectionName)
    })