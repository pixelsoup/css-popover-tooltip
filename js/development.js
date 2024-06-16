const popoverBtn = document.getElementById("js-popoverBtn")

// click info button to toggle popover
popoverBtn.addEventListener('click', event => {
  if (event.currentTarget === event.target) {
    togglePopover()
  }
})

// click anywhere to hide popover
document.addEventListener('click', event => {
  if (event.target != popoverBtn) {
    hidePopover()
  }
})

// press escape to hide popover
window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    hidePopover()
  }
})

const hidePopover = () => {
  const popoverTooltipWrapper = document.getElementById("js-popoverTooltipWrapper")
  popoverTooltipWrapper.classList.add("hidden");
}

const togglePopover = () => {
  const popoverTooltipWrapper = document.getElementById("js-popoverTooltipWrapper")
  popoverTooltipWrapper.classList.toggle("hidden")
}