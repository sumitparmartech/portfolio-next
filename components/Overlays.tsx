export default function Overlays() {
  return (
    <>
    <a className="fab" id="fab" aria-label="Chat on WhatsApp" href="https://wa.me/918487027268?text=Hi%20Sumit%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener">
      <i className="lgo" id="fabi"></i>
    </a>
    <div className="ov" id="ov" role="dialog" aria-modal="true">
      <div className="md" id="md"></div>
    </div>
    <div className="pal" id="pal">
      <div className="pb">
        <input id="pin" placeholder="Type a command or search" autoComplete="off" />
        <div className="pl" id="plist"></div>
        <div className="pf">
          <span>UP/DOWN navigate</span>
          <span>ENTER open</span>
          <span>ESC close</span>
        </div>
      </div>
    </div>
    </>
  );
}
