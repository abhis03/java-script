const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('MH',"Maharastra")

//console.log(map)
for (const [key,Value] of map) {
    console.log(key,':-',Value)
}