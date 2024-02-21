class MenuNav {
  constructor(menu) {
    this.menu = menu;
    this.oculto = this.esta_oculto();
  }

  esta_oculto = () => { return this.menu.classList.contains("hidden") }
  alternar = () => {
    if (this.esta_oculto()) {
      menu_nav.classList.remove("hidden");
      menu_nav.classList.add("block");
      this.oculto = false;
    }
    else {
      menu_nav.classList.add("hidden");
      menu_nav.classList.remove("block");
      this.oculto = true;

    }
  }
}


const menu_nav = document.getElementById("menu-navegacion")
const boton_menu = document.getElementById("boton-menu")
const menuNavegacion = new MenuNav(menu_nav);

const fueClickEnMenu = (e) => {
  // Si fue click en un link del menu o en el botón, hay que alternarlo siempre
  if (
    (menu_nav.contains(e.target) && e.target != menu_nav) || boton_menu.contains(e.target)
  ) {
    menuNavegacion.alternar();
  }
  else {
    // Si no, ver si es un click fuera del menú, pero no en los bordes del menu
    if (!menuNavegacion.esta_oculto() && e.target != menu_nav) {
      menuNavegacion.alternar();
    }
  }
}





window.addEventListener("click", (e) => { fueClickEnMenu(e) })
