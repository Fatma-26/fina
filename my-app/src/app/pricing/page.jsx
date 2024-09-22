import Link from "next/link"
export default function pricing(){
    return(
        <div className="Component3" style={{width: 1440, height: 1024, position: 'relative'}}>
        <div className="Pricing" style={{width: 1440, height: 1024, left: 0, top: 0, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
          <div className="Frame6" style={{width: 1440, height: 139, paddingLeft: 57, paddingRight: 57, paddingTop: 24, paddingBottom: 24, background: '#094546', justifyContent: 'flex-start', alignItems: 'center', gap: 72, display: 'inline-flex'}}>
            <div className="Component1" style={{width: 195, height: 79, position: 'relative'}}>
              <div className="Rectangle2" style={{width: 195, height: 79, left: 0, top: 0, position: 'absolute', border: '1px black solid'}} />
              <div className="Line1" style={{width: 210.39, height: 0, left: 195, top: 79, position: 'absolute', transform: 'rotate(-157.95deg)', transformOrigin: '0 0', border: '1px #131111 solid'}}></div>
              <div className="Line2" style={{width: 210.39, height: 0, left: 0, top: 79, position: 'absolute', transform: 'rotate(-22.05deg)', transformOrigin: '0 0', border: '1px #131111 solid'}}></div>
            </div>
            <div style={{width: 120, height: 58, padding: 19, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div className="Home" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Home</div>
            </div>
            <div style={{width: 120, height: 58, padding: 19, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div className="Home" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>About</div>
            </div>
            <div style={{width: 120, height: 58, padding: 19, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div className="Home" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Pricing  </div>
            </div>
            <div className="Frame1" style={{width: 200, height: 87, paddingLeft: 25, paddingRight: 25, paddingTop: 13, paddingBottom: 13, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div className="SignUp" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Sign up</div>
            </div>
            <div className="Frame2" style={{width: 200, height: 87, paddingLeft: 25, paddingRight: 25, paddingTop: 13, paddingBottom: 13, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
              <div className="SignUp" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Login</div>
            </div>
          </div>
          <img className="Screenshot202409191714491" style={{width: 232.84, height: 79, left: 48, top: 30, position: 'absolute'}} src="https://via.placeholder.com/233x79" />
        </div>
        <div className="Frame10" style={{width: 303, height: 578, paddingLeft: 31, paddingRight: 31, paddingTop: 27, paddingBottom: 27, left: 65, top: 276, position: 'absolute', background: '#3D9B9C', borderRadius: 22, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
          <div className="Economy" style={{width: 218, height: 80, color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Economy</div>
          <div className="Attemps" style={{width: 145, height: 60, color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>20Attemps</div>
          <div className="Egp" style={{width: 240, height: 118, color: 'white', fontSize: 64, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>50 EGP</div>
          <Link href={"/pricing/details"}>  <div className="Frame9" style={{width: 240, height: 110, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
            <div className="SignUpItSFree"
             style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Get it now</div>
            </div>
          </Link> 
        </div>
        <div className="Frame12" style={{width: 303, height: 578, paddingLeft: 31, paddingRight: 31, paddingTop: 27, paddingBottom: 27, left: 1071, top: 276, position: 'absolute', background: '#3D9B9C', borderRadius: 22, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
          <div className="Economy" style={{width: 218, height: 80, color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Premium</div>
          <div className="Attemps" style={{width: 145, height: 60, color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>100Attemps</div>
          <div className="Egp" style={{width: 240, height: 118, color: 'white', fontSize: 64, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>50 EGP</div>
          <div className="Frame9" style={{width: 240, height: 110, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
           <Link href={"/pricing/details"}>
            <div className="SignUpItSFree" 
            style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Get it now

            </div>
            </Link>
          </div>
        </div>
    
        <div className="Frame143" style={{width: 303, height: 578, paddingLeft: 31, paddingRight: 31, paddingTop: 27, paddingBottom: 27, left: 568, top: 276, position: 'absolute', background: '#3D9B9C', borderRadius: 22, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 45, display: 'inline-flex'}}>
          <div className="Economy" style={{width: 218, height: 80, color: 'white', fontSize: 48, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>    Gold</div>
          <div className="Attemps" style={{width: 145, height: 60, color: 'white', fontSize: 24, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>20Attemps</div>
          <div className="Egp" style={{width: 240, height: 118, color: 'white', fontSize: 64, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>50 EGP</div>
          <div className="Frame9" style={{width: 240, height: 110, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <Link href={"/pricing/details"}>
            <div 
            className="SignUpItSFree" 
            style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Get it now

            </div>
          </Link>  
          </div>
        </div>
      </div>
    )
}