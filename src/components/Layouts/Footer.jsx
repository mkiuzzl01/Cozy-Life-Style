const Footer = () => {
  return (
    <footer className="p-10 bg-[#082119] text-white font-PT_Sans">
      <div className="footer  max-w-7xl m-auto border-b-2 pb-4 border-dashed">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Construct</a>
          <a className="link link-hover">Rent</a>
          <a className="link link-hover">Selling</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">UserProfile</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-full">
            <label className="label">
              <span className="">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-full input-bordered text-black join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
        <div className="text-center mt-4"><p>Copyright © 2024 - All right reserved by Cozy-Life-Style</p></div>
    </footer>
  );
};

export default Footer;
