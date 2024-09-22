import Link from "next/link";

export default function Signin(){
    return(


<div className="SignIn" style={{width: 1440, height: 1024, paddingLeft: 486, paddingRight: 486, paddingTop: 180, paddingBottom: 180, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
  <div className="Desktop1" style={{width: 1440, height: 1024, left: 0, top: 0, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 39, display: 'inline-flex'}}>
    <div className="Rectangle3" style={{width: 1440, height: 139, background: '#094546'}} />
    <div className="Rectangle4" style={{width: 641, height: 788, background: '#EFEFEF'}} />
    <div className="Component1" style={{width: 195, height: 79, left: 622, top: 30, position: 'absolute'}}>
      <div className="Rectangle2" style={{width: 195, height: 79, left: 0, top: 0, position: 'absolute', border: '1px black solid'}} />
      <div className="Line1" style={{width: 210.39, height: 0, left: 195, top: 79, position: 'absolute', transform: 'rotate(-157.95deg)', transformOrigin: '0 0', border: '1px #131111 solid'}}></div>
      <div className="Line2" style={{width: 210.39, height: 0, left: 0, top: 79, position: 'absolute', transform: 'rotate(-22.05deg)', transformOrigin: '0 0', border: '1px #131111 solid'}}></div>
    </div>
    <img className="Screenshot202409191714491" style={{width: 232.84, height: 79, left: 604, top: 30, position: 'absolute'}} src="https://via.placeholder.com/233x79" />
    <div className="SignIn" style={{width: 115, height: 51, left: 424, top: 199, position: 'absolute', color: '#094546', fontSize: 32, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Sign in</div>
    <div className="Frame19" style={{height: 121, left: 424, top: 264, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
      <div className="EnterYourEmail" style={{alignSelf: 'stretch', color: '#094546', fontSize: 32, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Enter your email</div>
      <div className="Rectangle5" style={{alignSelf: 'stretch', height: 67, background: 'white', borderRadius: 11, border: '1px #FFF9F9 solid'}} />
    </div>
    <div className="Frame20" style={{height: 121, left: 424, top: 399, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 15, display: 'flex'}}>
      <div className="EnterYourEmail" style={{alignSelf: 'stretch', color: '#094546', fontSize: 32, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Enter password</div>
      <div className="Rectangle5" style={{alignSelf: 'stretch', height: 67, background: 'white', borderRadius: 11, border: '1px #FFF9F9 solid'}} />
    </div>
    <div className="Frame5" style={{width: 590, height: 95, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, left: 424, top: 580, position: 'absolute', background: '#FF914C', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
    <Link href="/home2">
      <div className="SignUpItSFree" 
      style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
        Sign in</div>
        </Link>     
    </div>
    <div className="Or" style={{left: 691, top: 698, position: 'absolute', color: '#094546', fontSize: 40, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>OR</div>
    <div className="Frame21" style={{width: 590, height: 95, paddingTop: 9, paddingBottom: 13, paddingLeft: 25, paddingRight: 25, left: 425, top: 769, position: 'absolute', background: 'white', borderRadius: 19, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex'}}>
      <div className="SignUpItSFree" style={{color: '#094546', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Continue with Google</div>
    </div>
    <div className="ForgotYourPassword" style={{left: 547, top: 887, position: 'absolute', color: '#094546', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Forgot your password?</div>
  </div>
</div>)}