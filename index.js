fetch("https://fortnite-api.com/v2/shop/br")
    .then(res => res.json())
    .then(data => {
    
       // const {data: {featured: {entries: [item1, item2]}}, status} = data
        const {data: {specialFeatured: {entries}}} = data
        const skinNamesArray = entries.map(item => {
            return item.items
         }) 
        console.log(skinNamesArray)
        skinNamesArray.forEach(secondArray => {secondArray.forEach (item => console.log(item.name))})
       

        
    })