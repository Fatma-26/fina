import Link from "next/link"

export default function section1(){
    return(
      <div className="Component4" style={{width: 1440, height: 1024, position: 'relative'}}>
      <div className="Home" style={{width: 1440, height: 1024, left: 0, top: 0, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
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
           <Link href="/pricing"> <div className="Home" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Pricing  </div></Link>
          </div>
          <div className="Frame1" style={{width: 200, height: 87, paddingLeft: 25, paddingRight: 25, paddingTop: 13, paddingBottom: 13, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <Link href="/signup">
            <div className="SignUp" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Sign up</div>
           </Link>
          </div>
          <div className="Frame2" style={{width: 200, height: 87, paddingLeft: 25, paddingRight: 25, paddingTop: 13, paddingBottom: 13, background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
          <Link href="/signIn">
            <div className="SignUp"
             style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
              Login</div>
              </Link>
          </div>
        </div>
        <img className="Screenshot202409191714491" style={{width: 232.84, height: 79, left: 48, top: 30, position: 'absolute'}} src="https://via.placeholder.com/233x79" />
      </div>
      <div className="Frame146" style={{width: 1274, height: 726, left: 69, top: 228, position: 'absolute'}}>
        <div className="Frame3" style={{width: 576, height: 390, paddingTop: 109, paddingBottom: 109, paddingLeft: 98, paddingRight: 84, left: 0, top: 0, position: 'absolute', background: '#3D9B9C', borderRadius: 63, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
          <div className="TestYourLevelOfProgrammingNow"><span style={{color: 'white', fontSize: 64, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Test your level of<br/>programming<br/></span><span style={{color: '#094546', fontSize: 96, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Now</span></div>
        </div>
        <div className="Frame5" style={{width: 312, height: 95, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, left: 132, top: 487, position: 'absolute', background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
        <Link href="/signup">
          <div className="SignUpItSFree" 
          style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Sign up -it is free</div>
          </Link>
        </div>
        <div className="UndrawLoginRe4vu211" style={{width: 626, height: 631, left: 648, top: 0, position: 'absolute'}}>
          <img className="UndrawLoginRe4vu211" style={{width: 626, height: 631, left: 0, top: 0, position: 'absolute'}} src="https://via.placeholder.com/626x631" />
        </div>
      </div>
    </div>
    )}