import { Slider } from './home/slider';
import 'swiper/swiper-bundle.css';
import { click} from './home/script.js';
import {AllProducts} from './product/allProducts.js';
function App() {
    return (
    
    <div className="App">

    <header className="header">
        <div>
            <img className ="logo" src="images/om nom logo.png" alt="" /> 
            <a href="https://www.a.com/" className="logo"> Om Nom Cáfe </a>
        </div>

        <nav className="navbar">
            <a href="#home">home</a>
            <a href="#about">About</a>
            <a href="#product">Product</a>
            <a href="#team">Team</a>
            <a href="#gallery">Gallery</a>
            <a href="#order">Order</a>
            <a href="#contact">Contact</a>
            <a href="tel:669-400-1216"> <i className="fas fa-phone-alt"></i> Hotline </a>
        </nav>

        <div className="icons">
            <div id="cart-btn" className="fas fa-shopping-cart" onClick={click}></div>
            <div id="menu-btn" className="fas fa-bars" onClick={click}></div>
        </div>

    </header>

    <div className="cart-items-container">

        <div id="close-form" className="fas fa-times" onClick={click}></div>
        <h3 className="title">Your Cart</h3>

        <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/product7.png" alt=""/>
            <div className="content">
                <h3>Custard Pudding</h3>
                <>
                    <button>+</button>
                    <input className="price" type="text" />
                    <button>-</button>
                </>
                
            </div>
        </div>

        <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/product6.png" alt=""/>
            <div className="content">
                <h3>Coconut Coffee Pudding</h3>
                <div className="price">$9/3</div>
            </div>
        </div>

        <div className="cart-item">
            <span className="fas fa-times"></span>
            <img src="images/product1.png" alt=""/>
            <div className="content">
                <h3>Signature Box</h3>
                <div className="price">$23.5/1</div>
            </div>
        </div>

        <a href="https://www.a.com/" className="btn"> checkout </a>

    </div>

    <div id="home">
        <Slider/>
    </div>
    
    <section className="about" id="about">

        <h1 className="heading"> <span>about</span> us </h1>

        <div className="row">

            <div className="image">
                <img src="images/about.png" alt=""/>
            </div>

            <div className="content" >
                <h3>A <span>triple tribe </span> is all we need to achieve anything</h3>
                <p style={{ textTransform: "none" }}>We have been our greatest family members and friends. Now, we are the greatest team!</p>
                <p style={{ textTransform: "none" }}>Three young individuals with diverse professional backgrounds have come together to start a bakery business. Each member of the team brings unique skills and expertise to the venture.
                "We got inherited ingredients for baking already. It is our sweetness!"</p>
                <a href="https://www.a.com/" className="btn">read more</a>
            </div>

        </div>

    </section>


    <section className="parallax">

        <h1 className="heading">range of <span>products</span></h1>

        <div className="box-container">

            <div className="box">
                <div className="image">
                    <img src="images/parallax-1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>crepe</h3>
                    <p>A mouth-watering dessert that consists of layers of thin, delicate crepes that flavored cream perfectly complements the richness of the filling. Each bite is an explosion of texture and flavor.</p>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="images/parallax-2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>pudding</h3>
                    <p>A creamy and indulgent dessert, with a smooth texture and a rich, satisfying flavor. Whether it's custard or coconut-coffee, pudding is the perfect comfort food that is both sweet and comforting.</p>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="images/parallax-3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>cheese lava bread</h3>
                    <p>A fluffy and savory bread filled with deliciously melted gooey cheese. Burst of flavor and texture is in every bite, making it a perfect treat for cheese lovers.</p>
                </div>
            </div>

        </div>

    </section>

    <AllProducts/>

    <section className="promotion">

        <h1 className="heading">Signature box <span>promotions</span></h1>

        <div className="box-container">

            <div className="box">
                <div className="content">
                    <h3>Buy 8 get 1</h3>
                    <p>Buy any 8 breads, you'll get 1 for free</p>
                </div>

                <img src="images/promo1.png" alt=""/>
            </div>

            <div className="box">
                <img src="images/promo2.png" alt=""/>
                <div className="content">
                    <h3>Signature Box</h3>
                    <p>The set of 8+1 always comes with the signature box</p>
                </div>
                
            </div>

        </div>

    </section>


    <section className="team" id="team">

        <h1 className="heading">our  <span>team</span></h1>

        <div className="box-container">

            <div className="box">
                <div className="image">
                    <img src="images/avatar/1.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Gieng Ta</h3>
                    <p>CEO</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="images/avatar/2.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Beo Ngo</h3>
                    <p>Product manager</p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

            <div className="box">
                <div className="image">
                    <img src="images/avatar/3.png" alt=""/>
                </div>
                <div className="content">
                    <h3>Gieo Ta</h3>
                    <p>Finance director </p>
                    <div className="share">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>
            </div>

        </div>

    </section>

    <section className="review" id="review">

        <h1 className="heading"> customer's <span>review</span> </h1>

        <div className="box-container">

            <div className="box">
                <img src="images/review-1.png" className="user" alt=""/>
                <h3>Hardin Robert</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>Great customer service and great product! The new product lines are exciting</p>
            </div>

            <div className="box">
                <img src="images/review-2.png" className="user" alt=""/>
                <h3>Jessica T.</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>The tiramisu cake with creamy layers of mascarpone cheese and coffee-soaked ladyfingers were perfectly balanced and not too sweet"</p>
            </div>

            <div className="box">
                <img src="images/review-3.png" className="user" alt=""/>
                <h3>Addy Plutan </h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <p>The cheese lava bread's filling was a pleasant surprise! It's a delicious twist on classic bread that will satisfy any cheese lover's cravings</p>
            </div>

        </div>

    </section>

 <section className="gallery" id="gallery">

    <h1 className="heading">rising star <span> gallery</span></h1>

    <div className="gallery-container">

        <a href="images/gallerypud2.png" className="box">
            <img src="images/gallerypud2.png" alt=""/>
            <div className="icons"><i className="fas fa-plus"></i></div>
        </a>

        <a href="images/gallerypud3.jpeg" className="box">
            <img src="images/gallerypud3.jpeg" alt=""/>
            <div className="icons"><i className="fas fa-plus"></i></div>
        </a>

        <a href="images/gallerypud4.jpeg" className="box">
            <img src="images/gallerypud4.jpeg" alt=""/>
            <div className="icons"><i className="fas fa-plus"></i></div>
        </a>

        <a href="images/gallerypud5.png" className="box">
            <img src="images/gallerypud5.png" alt=""/>
            <div className="icons"><i className="fas fa-plus"></i></div>
        </a>

        <a href="images/gallerypud6.png" className="box">
            <img src="images/gallerypud6.png" alt=""/>
            <div className="icons"><i className="fas fa-plus"></i></div>
        </a>


    </div>

</section>


    <section className="order" id="order">

        <h1 className="heading"><span>order</span> now </h1>

        <div className="row">

            <div className="image">
                <img src="images/order.gif" alt=""/>
            </div>

            <form action="">

                <div className="inputBox">
                    <input type="text" placeholder="first name"/>
                    <input type="text" placeholder="last name"/>
                </div>

                <div className="inputBox">
                    <input type="email" placeholder="email address"/>
                    <input type="number" placeholder="phone number"/>
                </div>

                <div className="inputBox">
                    <input type="text" placeholder="food name" />
                    <input type="number" placeholder="how much"/>
                </div>

                <textarea placeholder="your address" name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="order now" className="btn" />
            </form>
      
        </div>

    </section>

  
    <section className="footer" id = "contact">

        <div className="box-container">

            <div className="box">
                <h3>address</h3>
                <p>1676 Mocking Place Wy, San Jose 95121, CA</p>
                <div className="share">
                    <a href="https://www.facebook.com/omnombakery" className="fab fa-facebook-f"> </a>
                    <a href="https://twitter.com/?lang=en" className="fab fa-twitter"> </a>
                    <a href="https://www.instagram.com/omnombakery/" className="fab fa-instagram"> </a>
                    <a href="https://www.linkedin.com/in/gradyta/" className="fab fa-linkedin"> </a>
                </div>
            </div>

            <div className="box">
                <h3>E-mail</h3>
                <a href="mailto:gnt0120@gmail.com?" className="link" style={{textTransform: "none"}}>gnt0120@gmail.com</a>
            </div>

            <div className="box">
                <h3>call us</h3>
                <a href="tel:669-400-1216" className="link">+1 (669) 400-1216</a>
                <a href="tel:971-400-1357" className="link">+1 (971) 400-1357</a>
            </div>

            <div className="box">
                <h3> opening hours</h3>
                <p>Monday - Friday: 9:00 - 23:00 <br/> Saturday: 8:00 - 24:00 </p>
            </div>

        </div>

        <div className="credit">created by <span>ggmaddr</span> all rights reserved! </div>

    </section>
    </div>
  );
}

export default App;
