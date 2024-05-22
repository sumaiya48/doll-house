const Brands = () => {
  return (
      <div className="px-4 md:px-6 lg:px-8 xl:px-10">
          <h1 className="text-center font-bold text-4xl py-4">Top Brands</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              <div className="card glass my-5 p-4 bg-slate-150">
                  <figure><img src="https://toytime-theme.myshopify.com/cdn/shop/files/Group_141016.png?v=1707910332&width=1500" alt="Car" /></figure>
              </div>
              <div className="card glass my-5 p-4 bg-slate-100">
                  <figure><img src="https://toytime-theme.myshopify.com/cdn/shop/files/Group_141017.png?v=1707910333&width=1500" alt="Car" /></figure>
              </div>
              <div className="card glass my-5 p-4 bg-slate-100">
                  <figure><img src="https://toytime-theme.myshopify.com/cdn/shop/files/Frame_4_77fb1d17-44f3-4dad-9088-7f0b1a22167e.svg?v=1710412399&width=1500" alt="Car" /></figure>
              </div>
              <div className="card glass my-5 p-4 bg-slate-100">
                  <figure><img src="https://toytime-theme.myshopify.com/cdn/shop/files/Group_141015_89c3309e-c489-48a2-ba80-e48fbd8d68f1.png?v=1707910333&width=1500" alt="Car" /></figure>
              </div>
              <div className="card glass my-5 p-4 bg-slate-100">
                  <figure><img src="https://toytime-theme.myshopify.com/cdn/shop/files/Layer_1.png?v=1707910333&width=1500" alt="Car" /></figure>
              </div>
          </div>
      </div>
  );
};

export default Brands;
