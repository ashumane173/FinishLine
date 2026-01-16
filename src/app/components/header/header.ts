import { Component, ElementRef, HostListener, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, Observable, startWith, takeUntil } from 'rxjs';
import $ from "jquery";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  todaysTimeAndDate$!: Observable<string>;
  isMenuOpen = false;

  @ViewChild('dropdown') dropdown!: ElementRef;

  isOpen = false;
  selectedOption: any;

  isProfileDropdownOpen: boolean = false;
  isHamburgerMenuActive: boolean = false;
  mySubscription: any;

  showNavItems: boolean = true;
  showIcons: boolean = true;
  showHamburger: boolean = true;

  isDropdownOpen: boolean = false;
  myDate = new Date();
  isMenuOpened: boolean = false;
  isLoggingOut = false;

  @ViewChild('warrantySelect') warrantySelect!: ElementRef;
  
  siteUrl = environment.frontendUrl;

  navList: any [] = [
    {
      "name": "HOME",
      "Url": "/",
      "iconPath": "assets/hamburger-home.png",
      "type": "link"
    },
    {
      "name": "ABOUT US",
      "Url": "/about-us",
      "iconPath": "assets/my-profile-icon.png",
      "type": "link"
    },
    {
      "name": "PRODUCTS",
      "Url": "/products",
      "iconPath": "assets/order-icon.png",
      "type": "link"
    },
    {
      "name": "OUR GUARANTEE",
      "Url": "/our-guarantee",
      "iconPath": "assets/hamburger-reports.png",
      "type": "link"
    },
    {
      "name": "CONTACT US",
      "Url": "/contact-us",
      "iconPath": "assets/marker-icon.png",
      "type": "link"
    }
  ]

  constructor(
    private router: Router, 
    ) { }

  ngOnInit(): void {

      // DROPDOWN CODE
      document.addEventListener("click", e => {
        const target = e.target as Element; // or HTMLElement
        const isDropdownButton = target.matches("[data-dropdown-button]");
        if (!isDropdownButton && target.closest("[data-dropdown]") != null) return;
        
        let currentDropdown: HTMLElement | null = null;
        if (isDropdownButton) {
          debugger;
          currentDropdown = target.closest("[data-dropdown]") as HTMLElement;
          if (currentDropdown) {
            currentDropdown.classList.toggle("active");
          }
        }
      
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove("active");
        });
      });      
  }

  ngAfterViewInit(): void {
     // HAMBURGER MENU STARTS HERE
     const hamburger = document.querySelector(".hamburger")!;
     const navMenu = document.querySelector(".nav-menu")!;
     const dropdownSelect = document.querySelector("select.dropdown");

     if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        this.toggleHamburgerMenu(); // Toggle the dimming effect
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
      });

      document.querySelectorAll(".nav-link").forEach(n => {
        n.addEventListener("click", () => {
          this.isHamburgerMenuActive = false;
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      });

      // document.querySelectorAll(".nav-menu li").forEach(item => {
      //   item.addEventListener("click", () => {
      //     this.isHamburgerMenuActive = false;
      //     hamburger.classList.remove("active");
      //     navMenu.classList.remove("active");
      //   });
      // });
      // Add event listeners to nav menu items but exclude dropdown parent
    document.querySelectorAll(".nav-menu li").forEach(item => {
      // Skip if this li contains the dropdown
      if (!item.querySelector("select.dropdown")) {
        item.addEventListener("click", () => {
          this.isHamburgerMenuActive = false;
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        });
      }
    });

    // Add special handler for dropdown
    if (dropdownSelect) {
      // Stop propagation on dropdown click to prevent menu closing
      dropdownSelect.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      
      // Close menu when a dropdown option is selected (change event)
      dropdownSelect.addEventListener("change", () => {
        // Small delay to allow navigation to start before closing menu
        setTimeout(() => {
          this.isHamburgerMenuActive = false;
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }, 50);
      });
    }
    }
  }

  toggleHamburgerMenu(): void {
    this.isHamburgerMenuActive = !this.isHamburgerMenuActive;
  }

  navigateToWarranty(event: any) {
    const selectedPath = event.target.value;
    if (selectedPath) {
      this.router.navigate([selectedPath]);
    }
  }

  toggleDropdown(event: Event) {
      debugger;
      event.stopPropagation(); // Prevent the click event from reaching the document click handler
      this.isDropdownOpen = !this.isDropdownOpen;
    }

    closeDropdown() {
      this.isDropdownOpen = false;
    }

    toggleCreateDropdown(): void {
      debugger;
      this.isOpen = !this.isOpen;
  }

    open(i: any) {
      const triggerElement = $(".utility-drop__trigger")[i];
      if (triggerElement) {
        const parentElement = triggerElement.parentElement as HTMLElement;
        if (parentElement) {
          parentElement.classList.toggle("open");
        }
      }
    }

    ngOnDestroy() {
      if (this.mySubscription) {
       this.mySubscription.unsubscribe();
      }
    }

    toggleMenu() {
        this.showHamburger = !this.showHamburger;
      }
    
      @HostListener('document:click', ['$event'])
      onDocumentClick(event: MouseEvent) {
        // Close menu when clicking outside the menu
        const target = event.target as HTMLElement;
        if (!target.closest('.navbar_menu')) {
          this.showHamburger = false;
        }
      }

      whereToBuy(): void {
        window.open('https://www.certainteed.com/where-to-buy', '_blank');
      }

      findContractor(): void {
        window.open('https://www.certainteed.com/find-a-pro', '_blank');
      }

}