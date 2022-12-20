document.addEventListener('DOMContentLoaded', function(event)
{
   var DropdownMenu2_dropdownToggle = document.querySelectorAll('#DropdownMenu2 .dropdown-toggle');
   DropdownMenu2_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var DropdownMenu2_dropdown = document.querySelectorAll('#DropdownMenu2 .dropdown');
   DropdownMenu2_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
   var Progressbar9 = document.querySelector('#Progressbar9 .progress-bar');
   var Progressbar9_observer = new window.ResizeObserver(entries => 
   {
      var val = Math.round(((entries[0].target.clientWidth/entries[0].target.offsetParent.clientWidth)*100));
      document.querySelector('#Progressbar9 .progress-bar-text').innerText = val + '%';
      entries[0].target.setAttribute('aria-valuenow', val);
   });
   Progressbar9_observer.observe(Progressbar9);
   window.addEventListener('scroll', function(event)
   {
      var elem = document.querySelector('#Progressbar9');
      var bounding = elem.getBoundingClientRect();
      var current = window.innerHeight - bounding.top;
      var max = window.innerHeight + bounding.height;
      var currentPercent = Math.min(100, Math.max(0, current * 100 / max));
      var val = Math.round(((currentPercent - 0) / (100 - 0)) * 100);
      elem.style.setProperty('--percentage', val);
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var Progressbar4 = document.querySelector('#Progressbar4 .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = Progressbar4.getBoundingClientRect();
      var top = bounding.top*100/window.innerHeight;
      var bottom = bounding.bottom*100/window.innerHeight;
      if (top >= 0 && bottom <= 100)
      {
         Progressbar4.style.width = '50%';
      }
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var Progressbar8 = document.querySelector('#Progressbar8 .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = Progressbar8.getBoundingClientRect();
      var top = bounding.top*100/window.innerHeight;
      var bottom = bounding.bottom*100/window.innerHeight;
      if (top >= 0 && bottom <= 100)
      {
         Progressbar8.style.width = '33%';
      }
   });
   window.dispatchEvent(new CustomEvent('scroll'));
   var Progressbar7 = document.querySelector('#Progressbar7 .progress-bar');
   window.addEventListener('scroll', function(event)
   {
      var bounding = Progressbar7.getBoundingClientRect();
      var top = bounding.top*100/window.innerHeight;
      var bottom = bounding.bottom*100/window.innerHeight;
      if (top >= 0 && bottom <= 100)
      {
         Progressbar7.style.width = '75%';
      }
   });
   window.dispatchEvent(new CustomEvent('scroll'));
});
$(document).ready(function()
{
   $("a[href*='#LayoutGridHeader']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGridHeader').offset().top }, 600, 'easeOutCirc');
   });
});
