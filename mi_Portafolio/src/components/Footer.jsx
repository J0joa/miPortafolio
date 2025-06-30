import React from "react";

import "./footer.css";

function Footer({ className }) {
  return (
    <>
      <div className={className}>
        <section className="Footer">
          <div className="redes">
            <div>

                <div><i class="bxr  bx-git-repo-forked"></i></div>
                <div><span>https://github.com/J0joa</span></div>
              
              
            </div>
            <div>
                <div><i class="bxr  bx-phone-outgoing"></i></div>
                <div><span>+573115219258</span></div> 
              
            </div>
            <div>
                <div><i class="bxr  bx-link-break"></i></div>
                <div><span>www.linkedin.com/in/jojoa25</span></div>        
              
            </div>
          </div>

          <div className="derechos">
            <h2> Derechos Recervados de @utor</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
