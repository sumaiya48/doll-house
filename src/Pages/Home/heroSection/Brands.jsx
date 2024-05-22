import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brands = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // Adjust the speed of the slider (in milliseconds)
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 30, // Set autoplay speed (in milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className="px-4 md:px-6 lg:px-8 xl:px-10">
            <h1 className="text-center font-bold text-4xl py-4">Top Brands</h1>
            <div className="slick-container">
                <Slider {...settings}>
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
                </Slider>
            </div>
        </div>
    );
};

export default Brands;
