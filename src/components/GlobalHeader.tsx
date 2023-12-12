import "./GlobalHeader.css"
  
// Header to be used on each page
function GlobalHeader() {
  let header = document.getElementById('App-header');

  document.addEventListener('scroll', function() {
    if (header != null) {
      let scrollPos = window.scrollY;
      
      if ( scrollPos > 50 ) {  // The int here is sensitivity, lower = more sensitive;
        header.style.backgroundColor = "black";
      } else {
        header.style.backgroundColor = "transparent";
      }
    }
  });

  return (
    <>
      <header id="App-header" className="header">
        <div className="header-content-wrapper">
          
        </div>
      </header>
    </>
  )
}

export default GlobalHeader