import React from 'react';
import asusProductImage from '../assets/image/asus_laptop.jpg';
import appleProductImage from '../assets/image/apple_laptop.jpg';
import StarRateIcon from '@mui/icons-material/StarRate';

function CheckoutProduct() {
  return (
    <>
    <div className="row mb-4 py-3 pt-0">
        <div className="col-3">
            <img src={asusProductImage} alt="" className="rounded img-thumbnail" />
        </div>
        <div className="col-9">
            <p>
            ASUS == TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)
            </p>
            <p>79.85</p>
            <p><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></p>
            <button className="btn btn-primary" type="button">
                Remove from basket
            </button>
        </div>
    </div>

    <div className="row mb-4 py-3">
        <div className="col-3">
            <img src={appleProductImage} alt="" className="rounded img-thumbnail" />
        </div>
        <div className="col-9">
            <p>
            Apple ==  TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)
            </p>
            <p>99.85</p>
            <p><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /></p>
            <button className="btn btn-primary" type="button">
                Remove from basket
            </button>
        </div>
    </div>
    </>
  )
}

export default CheckoutProduct