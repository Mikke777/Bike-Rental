import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["dropdown", "logout"]

  connect() {
    // Check screen size when the page loads
    this.toggleDropdown();

    // Add a listener for screen resize events
    window.addEventListener('resize', () => this.toggleDropdown());
  }

  toggleDropdown() {
    const screenWidth = window.innerWidth;

    // Check if dropdown target exists before attempting to toggle
    if (this.hasDropdownTarget) {
      if (screenWidth <= 574) {
        // Hide dropdown icon and show "Log out" link
        this.dropdownTarget.style.display = "none";
        this.logoutTarget.style.display = "block";
      } else {
        // Show dropdown icon and hide "Log out" link
        this.dropdownTarget.style.display = "flex";
        this.logoutTarget.style.display = "none";
      }
    }
  }
}
