import React from "react";
import "@/app/global.scss";
import Image from "next/image";
import {
  app,
  back,
  back11,
  back2,
  back22,
  back3,
  back33,
  belgi,
  card,
  city,
  finger,
  han,
  hands,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  logo,
  logo2,
  man,
  people,
  tesla,
} from "@/assets";

const page = () => {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="cards">
              <div className="card">
                <h1 className="hero__title">
                  Lessons and insights <span>from 8 years</span>
                </h1>
                <p className="hero__text">
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
                <button className="b1"> Register</button>
              </div>
              <div className="card">
                <div className="img">
                  <Image src={back} alt="bc" className="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our__client">
          <div className="container">
            <div className="content">
              <h2 className="title">Our Clients</h2>
              <p className="text">
                We have been working with some Fortune 500+ clients
              </p>

              <div className="cards">
                <Image src={img1} className="img" alt="img" />
                <Image src={img2} className="img" alt="img" />
                <Image src={img3} alt="img" className="img" />
                <Image src={img4} alt="img" className="img" />
                <Image src={img5} alt="img" className="img" />
                <Image src={img6} alt="img" className="img" />
              </div>
            </div>
          </div>
        </section>
        <section className="single-section">
          <div className="container">
            <div className="content">
              <h2 className="title">
                Manage your entire community in a single system
              </h2>
              <p className="text">Who is Nextcent suitable for?</p>

              <div className="cards">
                <div className="card">
                  <div className="card__img">
                    <Image src={city} alt="people" className="imag" />
                  </div>
                  <h3 className="card__title">Membership Organisations</h3>
                  <p className="card__text">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
                <div className="card">
                  <div className="card__img">
                    <Image src={hands} alt="people" className="imag" />
                  </div>
                  <h3 className="card__title">Membership Organisations</h3>
                  <p className="card__text">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
                <div className="card">
                  <div className="card__img">
                    <Image src={people} alt="people" className="imag" />
                  </div>
                  <h3 className="card__title">Membership Organisations</h3>
                  <p className="card__text">
                    Our membership management software provides full automation
                    of membership renewals and payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pixelgrade">
          <div className="container">
            <div className="cards">
              <div className="card">
                <Image src={back2} className="img" alt="" />
              </div>
              <div className="card">
                <h2 className="title">
                  The unseen of spending three years at Pixelgrade
                </h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet justo ipsum. Sed accumsan quam vitae est varius
                  fringilla. Pellentesque placerat vestibulum lorem sed porta.
                  Nullam mattis tristique iaculis. Nullam pulvinar sit amet
                  risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                  vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className="submit__btn">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="helping">
          <div className="container">
            <div className="cards">
              <div className="card">
                <h2 className="title">
                  Helping a local <br /> <span>business reinvent itself</span>
                </h2>
                <p className="text">
                  We reached here with our hard work and dedication
                </p>
              </div>
              <div className="card child__cards">
                <div className="card">
                  <div className="div1">
                    <Image src={man} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">2,245,341</p>
                    <p className="p2">Members</p>
                  </div>
                </div>
                <div className="card">
                  <div className="div1">
                    <Image src={han} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">46,328</p>
                    <p className="p2">Clubs</p>
                  </div>
                </div>
                <div className="card">
                  <div className="div1">
                    <Image src={finger} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">828,867</p>
                    <p className="p2">Event Bookings</p>
                  </div>
                </div>
                <div className="card">
                  <div className="div1">
                    <Image src={card} alt="man" className="img" />
                  </div>
                  <div className="div2">
                    <p className="p1">1,926,436</p>
                    <p className="p2">Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="we__did">
          <div className="container">
            <div className="cards">
              <div className="card">
                <Image src={back3} className="img" alt="" />
              </div>
              <div className="card">
                <h2 className="title">
                  How to design your site footer like <br /> we did
                </h2>
                <p className="text">
                  Donec a eros justo. Fusce egestas tristique ultrices. Nam
                  tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                  at scelerisque elit erat a magna. Donec quis erat at libero
                  ultrices mollis. In hac habitasse platea dictumst. Vivamus
                  vehicula leo dui, at porta nisi facilisis finibus. In euismod
                  augue vitae nisi ultricies, non aliquet urna tincidunt.
                  Integer in nisi eget nulla commodo faucibus efficitur quis
                  massa. Praesent felis est, finibus et nisi ac, hendrerit
                  venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <button className="submit__btn">Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section className="tim__smith">
          <div className="container">
            <div className="cards">
              <div className="card">
                <Image src={tesla} alt="tesla" className="img" />
              </div>
              <div className="card">
                <p className="text">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                  lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
                  Proin eu enim metus. Vivamus sed libero ornare, tristique quam
                  in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
                  Morbi laoreet elit at ligula molestie, nec molestie mi
                  blandit. Suspendisse cursus tellus sed augue ultrices, quis
                  tristique nulla sodales. Suspendisse eget lorem eu turpis
                  vestibulum pretium. Suspendisse potenti. Quisque malesuada
                  enim sapien, vitae placerat ante feugiat eget. Quisque
                  vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <p className="name">Tim Smith</p>
                <p className="text">British Dragon Boat Racing Association</p>
                <div className="child__cards">
                  <Image src={app} className="logo" alt="aa" />
                  <Image src={img1} className="logo" alt="aa" />
                  <Image src={img2} className="logo" alt="aa" />
                  <Image src={logo2} className="logo" alt="aa" />
                  <Image src={img4} className="logo" alt="aa" />
                  <Image src={img5} className="logo" alt="aa" />
                  <p className="link__text">
                    Meet all customers
                    <Image src={belgi} alt="st" className="img" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="caring">
          <div className="container">
            <div className="content">
              <h2 className="title">Caring is the new marketing</h2>
              <p className="text">
                The Nexcent blog is the best place to read about the latest
                membership insights, trends and more. See who's joining the
                community, read about how our community are increasing their
                membership income and lot's more.​
              </p>
              <div className="cards">
                <div className="card">
                  <Image src={back11} className="img" alt="" />
                  <div className="text">
                    <p className="pp1">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </p>
                    <div className="text_img">
                      <p className="pp2">Readmore </p>
                      <Image src={belgi} alt="" className="str" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  {" "}
                  <Image src={back22} className="img" alt="" />
                  <div className="text">
                    <p className="pp1">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </p>
                    <div className="text_img">
                      <p className="pp2">Readmore </p>
                      <Image src={belgi} alt="" className="str" />
                    </div>
                  </div>
                </div>
                <div className="card">
                  {" "}
                  <Image src={back33} className="img" alt="" />
                  <div className="text">
                    <p className="pp1">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </p>
                    <div className="text_img">
                      <p className="pp2">Readmore </p>
                      <Image src={belgi} alt="" className="str" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="demo">
          <div className="container">
          <div className="demo_text">
            <h1 className="title">
              Pellentesque suscipit <br /> fringilla libero eu.
            </h1>
            <button className="submit__btn">
              Get a Demo <Image src={belgi} alt="" />
            </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
