import React, { useContext, useRef, useState } from 'react'
import { StyleClass } from 'primereact/styleclass'
import { Button } from 'primereact/button'
import { Ripple } from 'primereact/ripple'
import { Divider } from 'primereact/divider'
import { classNames } from 'primereact/utils'
import { LayoutContext } from '@/context/Context'
import { Link } from 'react-router'
import { Carousel } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from '@/demo/service/ProductService'
import { useEffect } from 'react'
import { Panel } from "primereact/panel";
import { Dialog } from 'primereact/dialog'
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
const LandingPage = () => {
  const stepperRef = useRef(null);
   const [products, setProducts] = useState([]);
   const responsiveOptions = [
     {
       breakpoint: "1400px",
       numVisible: 3,
       numScroll: 1,
     },
     {
       breakpoint: "1199px",
       numVisible: 3,
       numScroll: 1,
     },
     {
       breakpoint: "767px",
       numVisible: 2,
       numScroll: 1,
     },
     {
       breakpoint: "575px",
       numVisible: 1,
       numScroll: 1,
     },
   ];

  //  const getSeverity = (product) => {
  //    switch (product.inventoryStatus) {
  //      case "INSTOCK":
  //        return "success";

  //      case "LOWSTOCK":
  //        return "warning";

  //      case "OUTOFSTOCK":
  //        return "danger";

  //      default:
  //        return null;
  //    }
  //  };

   useEffect(() => {
     ProductService.getProductsSmall().then((data) =>
       setProducts(data.slice(0, 9))
     );
   }, []);

   const ProductTemplate = (product) => {
     const [visible, setVisible] = useState(false);

     const toggleDetailItemClick = () => {
       setVisible(true);       
     }

     return (
       <>
         <div className="card border-2 surface-border border-round m-2 text-center py-5 px-3 ">
           <div className="mb-3">
             <img
               src="/demo/images/uploads/1750155192228-DeepWorkNEW_860x.webp"
               alt={product.name}
               className="w-6 shadow-2"
             />
           </div>
           <div>
             <h4 className="mb-1">{product.name}</h4>

             {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
             {/* <Tag
             value={product.inventoryStatus}
             severity={getSeverity(product)}
          //  ></Tag>*/}
             <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
               <Button
                 icon="pi pi-search"
                 className="p-button p-button-rounded"
                 onClick={toggleDetailItemClick}
               />
               <Dialog
                 header="Header"
                 visible={visible}
                 style={{ width: "50vw" }}
                 onHide={() => {
                   if (!visible) return;
                   setVisible(false);
                 }}
               >
                 <p className="m-0">{product.name}</p>
               </Dialog>
             </div>
           </div>
         </div>
       </>
     );
   };
   const ReviewTemplate = (product) => {
    

     return (
       <>
         <div className="card border-2 surface-border border-round  py-5 ">
           <div className="flex">
             {/* <h4 className="mb-1">{product.name}</h4> */}
             <img
               src="/demo/images/uploads/1750155192228-DeepWorkNEW_860x.webp"
               alt={product.name}
               height="50"
               width="80"
               style={{ borderRadius: "50%" }}
             />
           <h6 className='ml-5 mt-2'>
             "Dulu saya sering repot cari buku referensi di perpustakaan fisik.
             Sekarang semua bisa diakses dari laptop, bahkan sambil ngopi di
             kosan. Belajar jadi jauh lebih fleksibel!""
           </h6>
           </div>

           <p className="mb-1 mt-3">— Andi, Mahasiswa Teknik Informatika</p>

           {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
           {/* <Tag
             value={product.inventoryStatus}
             severity={getSeverity(product)}
          //  ></Tag>*/}
           <div className="mt-5 flex flex-wrap gap-2 justify-content-center"></div>
         </div>
       </>
     );
   };


  const [isHidden, setIsHidden] = useState(false)
  const { layoutConfig } = useContext(LayoutContext)
  const menuRef = useRef(null)

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState)
  }

  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="landing-wrapper overflow-hidden">
        <div className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
          <Link to="/app" className="flex align-items-center">
            <img
              src={`/layout/images/${
                layoutConfig.colorScheme === "light"
                  ? "logo-dark"
                  : "logo-white"
              }.svg`}
              alt="Sakai Logo"
              height="50"
              className="mr-0 lg:mr-2"
            />
            <span className="text-900 font-medium text-2xl line-height-3 mr-8">
              SAKAI
            </span>
          </Link>
          <StyleClass
            nodeRef={menuRef}
            selector="@next"
            enterClassName="hidden"
            leaveToClassName="hidden"
            hideOnOutsideClick
          >
            <i
              ref={menuRef}
              className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
            ></i>
          </StyleClass>
          <div
            className={classNames(
              "align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2",
              { hidden: isHidden }
            )}
            style={{ top: "100%" }}
          >
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
              <li>
                <a
                  href="#home"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Home</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Features</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#highlights"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Highlights</span>
                  <Ripple />
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={toggleMenuItemClick}
                  className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
                >
                  <span>Pricing</span>
                  <Ripple />
                </a>
              </li>
            </ul>
            <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
              <Link
                to="/login"
                className="p-button p-button-text border-none font-light line-height-2 text-blue-500 hover:underline hover:bg-cyan-300"
              >
                Login
              </Link>
              <Link to="/register">
                <Button
                  label="Register"
                  rounded
                  className="border-none ml-5 font-light line-height-2 bg-blue-500 text-white hover:bg-blue-700"
                >
                  {" "}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          id="hero"
          className="flex flex-column min-h-screen pt-4 px-4 lg:px-8 overflow-hidden"
          style={{
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)",
            clipPath: "ellipse(150% 87% at 93% 13%)",
          }}
        >
          <div className="mx-4 md:mx-8 mt-0 md:mt-4 flex md:flex-column align-items-start justify-content-center">
            <h1 className="text-6xl font-bold text-gray-900 line-height-1 ">
              <span className="font-light block "></span>Akses Ribuan E-Book
              Kampus, Kapan Saja & Di Mana Saja
            </h1>
            <p className="font-bold text-2xl line-height-3  text-gray-700">
              Belajar jadi lebih mudah dengan koleksi digital lengkap, forum
              diskusi, catatan, dan fitur kolaborasi untuk mendukung
              perkuliahanmu.{" "}
            </p>
            {/* <div className="grid justify-content-center gap-3 md:justify-content-start"> */}
            <Button
              type="button"
              label="Mulai Membaca"
              rounded
              className="text-xl border-none  bg-blue-500 font-normal line-height-3 px-3 text-white hover:bg-blue-700"
            ></Button>
            {/* <Button
                type="button"
                label="Mulai Membaca"
                rounded
                className="text-xl border-none mt-3 bg-blue-500 font-normal line-height-3 px-3 text-white"
              ></Button> */}
            {/* </div> */}
          </div>
          <div className="flex justify-content-center -mt-8 md:justify-content-end">
            <img
              src="/demo/images/landing/Desain tanpa judul3.png"
              alt="Hero Image"
              height="400"
            />
          </div>
        </div>

        <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8 ">
          <div className="grid justify-content-center ">
            <div className="col-12 text-center mt-8 mb-4">
              <h2 className="text-900 font-normal mb-2">Fitur Utama</h2>
              <span className="text-600 text-2xl">
                Semua yang Kamu Butuhkan untuk Belajar
              </span>
            </div>

            <div className="col-12 md:col-12 lg:col-6 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0 ">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full "
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-yellow-200 -mb-2"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Cari & Pinjam Buku Digital</h5>
                  <span className="text-600">
                    Ribuan e-book tersedia hanya dengan sekali klik.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-6 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145,226,237,0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-cyan-200 -mb-2"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Highlight & Catatan</h5>
                  <span className="text-600">
                    Tandai teks penting dan simpan catatan pribadimu.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-6 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-indigo-200 -mb-2"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Forum Diskusi</h5>
                  <span className="text-600">
                    Diskusikan materi dengan teman sekelas atau dosen.
                  </span>
                </div>
              </div>
            </div>

            <div className="col-12 md:col-12 lg:col-6 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
              <div
                style={{
                  height: "160px",
                  padding: "2px",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(90deg, rgba(187, 199, 205, 0.2),rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2),rgba(145, 210, 204, 0.2))",
                }}
              >
                <div
                  className="p-3 surface-card h-full"
                  style={{ borderRadius: "8px" }}
                >
                  <div
                    className="flex align-items-center justify-content-center bg-bluegray-200 -mb-2"
                    style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "10px",
                    }}
                  >
                    <i className="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                  </div>
                  <h5 className="mb-2 text-900">Baca di Mana Saja</h5>
                  <span className="text-600">
                    Akses di laptop, tablet, maupun smartphone.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-20 "
          style={{
            height: "100px",
            // background: "#111827",
            background:
              "linear-gradient(180deg,rgba(17, 24, 39, 1) 0%, rgba(47, 57, 76, 1) 100%)",
          }}
        ></div>
        <div
          className="col-12 "
          style={{
            background:
              "linear-gradient(90deg, rgba(145, 226, 237, .1), rgba(172, 180, 223, 0.1)), linear-gradient(180deg, rgba(172, 180, 223, .1), rgba(246, 158, 188, .25))",
          }}
        >
          <div className="w-full">
            <div className="col-12 text-center mt-5 mb-4">
              <h2 className="text-900 font-normal">
                Koleksi Buku Unggulan Kampus
              </h2>
              <span className="text-600 text-2xl">
                Dari literatur wajib kuliah hingga bacaan santai.
              </span>
            </div>
            <Carousel
              value={products}
              numVisible={3}
              numScroll={3}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={ProductTemplate}
            />
          </div>
        </div>

        <div
          className="w-full h-20 "
          style={{
            height: "150px",
            // background: "#111827",
            background:
              "linear-gradient(0deg,rgba(17, 24, 39, 1) 0%, rgba(82, 71, 91, 1) 100%)",
          }}
        ></div>
        <div id="features" className="py-4 px-4 lg:px-8 mt-5 mx-0 lg:mx-8 ">
          <div
            className="col-12 mt-8 mb-8 p-2 md:p-8 "
            style={{
              borderRadius: "20px",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EFE1AF 0%, #C3DCFA 100%)",
            }}
          >
            <div className="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
              <h3 className="text-gray-900 mb-2">
                "Dari Ruang Kelas ke Ujung Jari: Semua Buku Kini Lebih Dekat"
              </h3>
              {/* <span className="text-gray-600 text-2xl">Peak Interactive</span> */}
              <p
                className="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                style={{ maxWidth: "800px" }}
              >
                Bayangkan: tugas kuliah menumpuk, deadline semakin dekat, dan
                kamu butuh referensi cepat. Tidak perlu lagi antre di
                perpustakaan atau repot mencari buku fisik di perpustakaan.
                Dengan E-Library Kampus, semua bacaan ada di genggamanmu.
                Tinggal login, cari, dan baca.
              </p>
              {/* <img
                  src="/demo/images/landing/peak-logo.svg"
                  className="mt-4"
                  alt="Company logo"
                /> */}
            </div>
          </div>
        </div>

        <div className="col-12 " style={{}}>
          <div className="w-full">
            <div className="col-12 text-center mt-5 mb-4">
              <h2 className="text-900 font-normal">
                Apa Kata Mereka Tentang E-Library Kampus?
              </h2>
             
            </div>
            <Carousel
              value={products}
              numVisible={1}
              numScroll={1}
              className="custom-carousel"
              circular
              autoplayInterval={3000}
              itemTemplate={ReviewTemplate}
            />
          </div>
        </div>
        <div id="highlights" className="py-4 px-4 lg:px-8 mx-0 my-6 lg:mx-8">
          <div className="text-center">
            <h2 className="text-900 font-normal mb-2">
              Temukan Buku Favoritmu di Sini
            </h2>
            <span className="text-600 text-2xl">
              Dari literatur wajib kuliah hingga bacaan pengembangan diri —
              semua ada dalam satu platform.
            </span>
          </div>

          <div className="grid mt-8 pb-2 md:pb-8">
            <div
              className="flex justify-content-center col-12 lg:col-6 bg-purple-100 p-0 flex-order-1 lg:flex-order-0"
              style={{ borderRadius: "8px" }}
            >
              <img
                src="/demo/images/landing/mockup.svg"
                className="w-11"
                alt="mockup mobile"
              />
            </div>

            <div className="col-12 lg:col-6 my-auto flex flex-column lg:align-items-end text-center lg:text-right">
              <div
                className="flex align-items-center justify-content-center bg-purple-200 align-self-center lg:align-self-end"
                style={{
                  width: "4.2rem",
                  height: "4.2rem",
                  borderRadius: "10px",
                }}
              >
                <i className="pi pi-fw pi-mobile text-5xl text-purple-700"></i>
              </div>
              <h2 className="line-height-1 text-900 text-4xl font-normal">
                Congue Quisque Egestas
              </h2>
              <span
                className="text-700 text-2xl line-height-3 ml-0 md:ml-2"
                style={{ maxWidth: "650px" }}
              >
                Lectus arcu bibendum at varius vel pharetra vel turpis nunc.
                Eget aliquet nibh praesent tristique magna sit amet purus
                gravida. Sit amet mattis vulputate enim nulla aliquet.
              </span>
            </div>
          </div>

          <div className="grid my-8 pt-2 md:pt-8">
            <div className="col-12 lg:col-6 my-auto flex flex-column text-center lg:text-left lg:align-items-start">
              <div
                className="flex align-items-center justify-content-center bg-yellow-200 align-self-center lg:align-self-start"
                style={{
                  width: "4.2rem",
                  height: "4.2rem",
                  borderRadius: "10px",
                }}
              >
                <i className="pi pi-fw pi-desktop text-5xl text-yellow-700"></i>
              </div>
              <h2 className="line-height-1 text-900 text-4xl font-normal">
                Celerisque Eu Ultrices
              </h2>
              <span
                className="text-700 text-2xl line-height-3 mr-0 md:mr-2"
                style={{ maxWidth: "650px" }}
              >
                Adipiscing commodo elit at imperdiet dui. Viverra nibh cras
                pulvinar mattis nunc sed blandit libero. Suspendisse in est ante
                in. Mauris pharetra et ultrices neque ornare aenean euismod
                elementum nisi.
              </span>
            </div>

            <div
              className="flex justify-content-end flex-order-1 sm:flex-order-2 col-12 lg:col-6 bg-yellow-100 p-0"
              style={{ borderRadius: "8px" }}
            >
              <img
                src="/demo/images/landing/mockup-desktop.svg"
                className="w-11"
                alt="mockup"
              />
            </div>
          </div>
        </div>

        <div id="pricing" className="py-4 px-4 lg:px-8 my-2 md:my-4">
          <div className="text-center">
            <h2 className="text-900 font-normal mb-2">Matchless Pricing</h2>
            <span className="text-600 text-2xl">
              Amet consectetur adipiscing elit...
            </span>
          </div>

          <div className="grid justify-content-between mt-8 md:mt-0">
            <div className="col-12 lg:col-4 p-0 md:p-3">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Free</h3>
                <img
                  src="/demo/images/landing/free.svg"
                  className="w-10 h-10 mx-auto"
                  alt="free"
                />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$0</span>
                  <span className="text-600">per month</span>
                  <Button
                    label="Get Started"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Responsive Layout
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Unlimited Push Messages
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      50 Support Ticket
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Startup</h3>
                <img
                  src="/demo/images/landing/startup.svg"
                  className="w-10 h-10 mx-auto"
                  alt="startup"
                />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$1</span>
                  <span className="text-600">per month</span>
                  <Button
                    label="Try Free"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Responsive Layout
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Unlimited Push Messages
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      50 Support Ticket
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 lg:col-4 p-0 md:p-3 mt-4 md:mt-0">
              <div className="p-3 flex flex-column border-200 pricing-card cursor-pointer border-2 hover:border-primary transition-duration-300 transition-all">
                <h3 className="text-900 text-center my-5">Enterprise</h3>
                <img
                  src="/demo/images/landing/enterprise.svg"
                  className="w-10 h-10 mx-auto"
                  alt="enterprise"
                />
                <div className="my-5 text-center">
                  <span className="text-5xl font-bold mr-2 text-900">$999</span>
                  <span className="text-600">per month</span>
                  <Button
                    label="Get a Quote"
                    rounded
                    className="block mx-auto mt-4 border-none ml-3 font-light line-height-2 bg-blue-500 text-white"
                  ></Button>
                </div>
                <Divider className="w-full bg-surface-200"></Divider>
                <ul className="my-5 list-none p-0 flex text-900 flex-column">
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Responsive Layout
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      Unlimited Push Messages
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">
                      50 Support Ticket
                    </span>
                  </li>
                  <li className="py-2">
                    <i className="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                    <span className="text-xl line-height-3">Free Shipping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
          <div className="grid justify-content-between">
            <div className="col-12 md:col-2" style={{ marginTop: "-1.5rem" }}>
              <Link
                href="/"
                className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer"
              >
                <img
                  src={`/layout/images/${
                    layoutConfig.colorScheme === "light"
                      ? "logo-dark"
                      : "logo-white"
                  }.svg`}
                  alt="footer sections"
                  width="50"
                  height="50"
                  className="mr-2"
                />
                <span className="font-medium text-3xl text-900">SAKAI</span>
              </Link>
            </div>

            <div className="col-12 md:col-10 lg:col-7">
              <div className="grid text-center md:text-left">
                <div className="col-12 md:col-3">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Company
                  </h4>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    About Us
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    News
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Investor Relations
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Careers
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer text-700">
                    Media Kit
                  </a>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Resources
                  </h4>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Get Started
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Learn
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer text-700">
                    Case Studies
                  </a>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Community
                  </h4>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Discord
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Events
                    <img
                      src="/demo/images/landing/new-badge.svg"
                      className="ml-2"
                      alt="badge"
                    />
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    FAQ
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer text-700">
                    Blog
                  </a>
                </div>

                <div className="col-12 md:col-3 mt-4 md:mt-0">
                  <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">
                    Legal
                  </h4>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Brand Policy
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">
                    Privacy Policy
                  </a>
                  <a className="line-height-3 text-xl block cursor-pointer text-700">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage
