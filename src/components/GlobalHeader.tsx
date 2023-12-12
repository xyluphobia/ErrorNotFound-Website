import "./GlobalHeader.css"
  
// Header to be used on each page
function GlobalHeader() {
  const header = document.getElementById('App-header');

  document.body.addEventListener('scroll', function() {
    if (header != null) {
      console.log("help");
      const scrollPos = window.scrollY;
      
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
        <nav className="header-content-wrapper">
            <ul>
              <li><a className="nav-logo"><img></img></a></li>
              <li><a>AHHJ</a></li>
              <li><a>AHHHHHHHHHHH</a></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default GlobalHeader