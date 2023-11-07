import React from 'react'
import { useState } from 'react'
import ListProduct from './ListProduct'

function Shop() {
    const[listProduct,setListProduct]=useState([{
        name:"CoCa",
        price:5,
        img :"https://www.coca-cola.com/content/dam/onexp/vn/home-image/coca-cola/Coca-Cola_OT%20320ml_VN-EX_Desktop.png",
        quatity:0
    },
    {
        name:"Lexus",
        price:6000,
        img :"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/40e7a937d9ff8f48f48f684260129b23.jpg",
        quatity:0


    },{
        name:"Du Thuyền",
        price:6000000,
        img:"https://autopro8.mediacdn.vn/2021/9/23/photo-1-16323731813861531474467.jpg",
        quatity:0

    },{
        name:"Manchester United",
        price:1000000000,
        img:"https://images2.alphacoders.com/969/969536.jpg",
        quatity:0

    },{
        name:"Manchester City",
        price:2000000000,
        img:"https://images4.alphacoders.com/133/1330232.jpeg",
        quatity:0

    },{
        name:"Laptop",
        price:1000,
        img:"https://s.yimg.com/uu/api/res/1.2/pHtSIoVk_CptFqmRsgNBjg--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/cc201060-8ffe-11ea-aff7-9444289fde6e.cf.jpg",
        quatity:0

    },
    {
        name:"Ninja-H2",
        price:60000,
        img:"https://autopro8.mediacdn.vn/zoom/600_315/2021/11/3/h2r4c-1635904001368332787053-crop-163590428038913901430.jpeg",
        quatity:0

    },{
        name:"Biệt Phủ",
        price:6000,
        img:"https://file4.batdongsan.com.vn/2022/12/28/JGcIp0rf/20221228111224-1ea5.jpg",
        quatity:0

    },
    {
        name:"Roll Royce",
        price:1000000,
        img:"https://media.vneconomy.vn/w800/images/upload/2022/01/11/rolls-royce-cullinan-0518-019.jpg",
        quatity:0

    },{
        name:"Bit Coin",
        price:40000,
        img:"https://www.brookings.edu/wp-content/uploads/2021/06/shutterstock_1708749826_small.jpg?w=1500",
        quatity:0

    },{
        name:"Apple",
        price:10000000,
        img:"https://traderviet.vn/wp-content/uploads/2023/09/4bbcf544-ea97-4081-8c0c-4f9f4c35f83d_16-9-discover-aspect-ratio_default_1141525.jpg",
        quatity:0

    },{
        name:"SamSung",
        price:5000000000,
        img:"https://c8.alamy.com/comp/2AP5XBY/samsung-logo-samsung-store-oxford-circus-london-england-uk-gb-2AP5XBY.jpg",
        quatity:0

    }
])
  return (
    <div>
        <ListProduct listProduct={listProduct}/>
    </div>
  )
}

export default Shop