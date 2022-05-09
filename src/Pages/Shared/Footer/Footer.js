import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white pt-5 pb-5 mt-4'>
            <div className='container text-center'>
                <div className='row text-start '>
                    <div className='col-l-3 col-sm-12 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Product</h5>
                        <p className=''>We believe that organic products are not just a label.

When we offer consumers organic products that come directly from the producer, they do not think of macro-exporting companies that want to monopolise the market by offering an increasingly wide range of intensively grown products.</p>
                    </div>
                    <div className='col-lg-3 col-sm-6 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Fruits & Vegitables</h5>
                        <p>
                            <a href="https://www.crunchbase.com/organization/fresh-fruits-company" className='text-white text-decoration-none'>The Items</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Otrganic Items</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Source Items</a>
                        </p>
                    </div>
                    <div className='col-lg-3 col-sm-6 mx-auto mt-3'>
                        <h5 className='text-warning mb-4'>Useful Links</h5>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Your Account</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Contact</a>
                        </p>
                        <p>
                            <a href="" className='text-white text-decoration-none'>Help Disk</a>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default Footer;