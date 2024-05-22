

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  bg-custom-color text-white">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer> 
<footer className="footer justify-between px-10 py-4 border-t  bg-custom-color text-white border-base-300">
  <div className="items-center grid-flow-col">
    
  <img className="h-12 w-15 rounded-full" src="data:image/png;base64,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" alt="" />
  <h4 className="text-white px-3">Doll House</h4>
  
    
  </div> 
  <div className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
      <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
    </div>
  </div>
 
</footer>
<footer className="text-center bg-black text-white pb-3">
  Copyright by Sumaiya Akter
</footer>
        </div>
    );
};

export default Footer;