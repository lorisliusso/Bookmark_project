const tabs = document.querySelectorAll('.a__slider')
const panels= document.querySelectorAll('.panels__slider')
const hamburger= document.querySelector('#hamburger')
const fullContainer= document.querySelector('#full-container')
const mobileNavContainer= document.querySelector('#mobile-nav-container')
const xCloseNavbar= document.querySelector('#x-navbar')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

//Add event listener to hamburger
hamburger.addEventListener('click', openNavbarMobile)

//Add event listener to x navbar
xCloseNavbar.addEventListener('click', closeNavbarMobile)

function onTabClick(event) { //current selected element
  // Deactivate all borders
  tabs.forEach((tab) => {
    tab.classList.remove(
      'activate-border',
    )
  })

  // Activate a new border to the current tab
  event.target.classList.add('activate-border')

 //get a Id number in order to display the correct slider below
  const a_Id= event.target.id.slice(-1)

  panels.forEach((panel) => {
    panel.classList.add(
      'hidden',
    )
  })
  
  const panelToActivate= document.querySelector(`#panels-slider-${a_Id}`)

  panelToActivate.classList.remove('hidden')
  panelToActivate.classList.add('flex')

  
}

function openNavbarMobile(){

  fullContainer.classList.add('hidden')
  mobileNavContainer.classList.remove('hidden')
  mobileNavContainer.classList.add('flex')


}

function closeNavbarMobile(){

  fullContainer.classList.remove('hidden')
  mobileNavContainer.classList.add('hidden')

}






