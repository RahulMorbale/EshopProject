import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsArray: any
  categoryArray: any
  filteredProducts: any = []
  constructor() { }

  ngOnInit(): void {
    this.productsArray = [{
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }, {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    }, {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, ",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    }, {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    }, {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "Ariel Complete Detergent Powder 4 kg",
      "category": "grocery",
      "image": "https://rukminim1.flixcart.com/image/280/280/kv6zvrk0/washing-powder/g/e/z/complete-ariel-original-imag85cc5jkk6ybg.jpeg?q=70",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    }, {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Himalayan Natives Yellow Toor/Arhar Dal (Split) (Pesticide Free)",
      "category": "grocery",
      "image": "https://rukminim1.flixcart.com/image/280/280/xif0q/pulses/z/u/f/-original-imagh4g3gng7u6wt.jpeg?q=70",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    }, {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Flipkart Supermart Home Essentials Disinfectant Surface Cleaner Lemon",
      "category": "grocery",
      "image": "https://rukminim1.flixcart.com/image/280/280/khavrm80/bathroom-floor-cleaner/z/4/y/lemon-2-disinfectant-surface-cleaner-bottle-flipkart-supermart-original-imafxcghszxjmttb.jpeg?q=70",
      "rating": {
        "rate": 3,
        "count": 400
      }
    }, {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Happilo 100% Natural Premium Whole Kaju / Cashews",
      "category": "grocery",
      "image": "https://rukminim1.flixcart.com/image/280/280/kwv0djk0/nut-dry-fruit/i/3/6/-original-imag9fus2bbkmge7.jpeg?q=70",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    }, {
      "id": 9,
      "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      "price": 64,
      "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10,",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      "rating": {
        "rate": 3.3,
        "count": 203
      }
    }, {
      "id": 10,
      "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      "price": 109,
      "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; )",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 470
      }
    }, {
      "id": 11,
      "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      "price": 109,
      "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. ",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 319
      }
    }, {
      "id": 12,
      "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      "price": 114,
      "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      "rating": {
        "rate": 4.8,
        "count": 400
      }
    }, {
      "id": 13,
      "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      "price": 599,
      "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 250
      }
    }, {
      "id": 14,
      "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      "price": 999.99,
      "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY,",
      "category": "electronics",
      "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      "rating": {
        "rate": 2.2,
        "count": 140
      }
    }, {
      "id": 15,
      "title": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      "price": 56.99,
      "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. ",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      "rating": {
        "rate": 2.6,
        "count": 235
      }
    }, {
      "id": 16,
      "title": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      "price": 29.95,
      "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front,",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      "rating": {
        "rate": 2.9,
        "count": 340
      }
    }, {
      "id": 17,
      "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      "price": 39.99,
      "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, ",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      "rating": {
        "rate": 3.8,
        "count": 679
      }
    }, {
      "id": 18,
      "title": "MBJ Women's Solid Short Sleeve Boat Neck V ",
      "price": 9.85,
      "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline ",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
      "rating": {
        "rate": 4.7,
        "count": 130
      }
    }, {
      "id": 19,
      "title": "Opna Women's Short Sleeve Moisture",
      "price": 7.95,
      "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy ",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      "rating": {
        "rate": 4.5,
        "count": 146
      }
    }, {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.",
      "category": "clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
        "rate": 3.6,
        "count": 145
      }
    }]
    // this.categoryArray = [
    //   {
    //     "id": 1,
    //     "image": "/assets/Images/Top_Offers.png",
    //     "title": "Top Offers",
    //     "category": "All"
    //   },
    //   {
    //     "id": 2,
    //     "image": "/assets/Images/Grocery.png",
    //     "title": "Grocery",
    //     "category": "All"
    //   },
    //   {
    //     "id": 3,
    //     "image": "/assets/Images/Mobiles.png",
    //     "title": "Mobiles",
    //     "category": "All"
    //   },
    //   {
    //     "id": 4,
    //     "image": "/assets/Images/Fashion.png",
    //     "title": "Fashion",
    //     "category": "clothing"
    //   },
    //   {
    //     "id": 5,
    //     "image": "/assets/Images/Electronics.png",
    //     "title": "Electronics",
    //     "category": "All"
    //   },
    //   {
    //     "id": 6,
    //     "image": "/assets/Images/Home.jpg",
    //     "title": "Home",
    //     "category": "All"
    //   },
    //   {
    //     "id": 7,
    //     "image": "/assets/Images/Appliances.png",
    //     "title": "Appliances",
    //     "category": "All"
    //   },
    //   {
    //     "id": 8,
    //     "image": "/assets/Images/Travel.png",
    //     "title": "Travel",
    //     "category": "All"
    //   }
    // ]

    this.filteredProducts = this.productsArray
  }

  filterproduct(type: any) {
    if (type == 'All') {
      this.filteredProducts = this.productsArray
    } else {
      this.filteredProducts = this.productsArray.filter((el: any) => (el.category == type))
    }
  }
}
