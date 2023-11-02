function tile(url, left, bottom, width, height){
  for(let h = 0; h < height; h++){
    for(let w = 0; w < width; w++){
        newImage(url, left + w*100, bottom+h*100)
    }
  }
}

function newImage(url, left, bottom) {
  let object = document.createElement('img')
  object.src = url
  object.style.position = 'fixed'
  object.style.left = left + 'px'
  object.style.bottom = bottom + 'px'
  document.body.append(object)
  return object
}

function newItem(url, left, bottom) {
  let object = newImage(url, left, bottom)

  object.addEventListener('dblclick', () => {
    object.remove()
  })
}

function newInventory(){
  let inventory = document.createElement('div')
  inventory.style.position = 'fixed'
  inventory.style.bottom = '0px';
  inventory.style.left = '0px'
  inventory.style.width = '100%'
  inventory.style.height = '100px'
  inventory.style.display = 'flex'
  inventory.style.flexDirection = 'row'
  inventory.style.alignItems = 'center'
  inventory.style.justifyContent = 'space-evenly'
  inventory.style.border = '2px solid black'
  inventory.style.backgroundColor = 'brown'
  document.body.append(inventory)
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newInventory()
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)
