// Dark mode toggle functionality
(function() {
  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply theme immediately to prevent flash
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Toggle function
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button text
    updateButtonText(newTheme);
  }
  
  // Update button text based on current theme
  function updateButtonText(theme) {
    const button = document.getElementById('dark-mode-toggle');
    if (button) {
      button.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }
  
  // Initialize button when DOM is ready
  function init() {
    const button = document.getElementById('dark-mode-toggle');
    if (button) {
      button.addEventListener('click', toggleTheme);
      const currentTheme = document.documentElement.getAttribute('data-theme');
      updateButtonText(currentTheme || 'light');
    }
  }
  
  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
