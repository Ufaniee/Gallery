import React from "react";
import Image1 from "./Image/a.jpg";
import Image2 from "./Image/b.jpg";
import Image3 from "./Image/c.jpg";
import Image5 from "./Image/e.jpg";
import Image6 from "./Image/f.jpg";
import Image7 from "./Image/g.jpg";
import Image8 from "./Image/h.jpg";
import Image9 from "./Image/i.jpg";
import Image10 from "./Image/j.jpg";
import Image11 from "./Image/k.jpg";
import Image12 from "./Image/l.jpg";
import Image13 from "./Image/m.jpg";
import Image14 from "./Image/n.jpg";
import Image15 from "./Image/o.jpg";


function Images(){

    return(
        <div class="Images">
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_5terre.jpg">
                        <img src={Image1} alt="Cinque Terre" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>


                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_forest.jpg">
                        <img src={Image2} alt="Forest" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_lights.jpg">
                        <img src={Image3}alt="Northern Lights" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image3} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image5} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image6} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>

                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image7} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image8} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image9} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image10} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image11} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image12} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image13} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image14} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>
                    <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="img_mountains.jpg">
                        <img src={Image15} alt="Mountains" width="600" height="400"/>
                        </a>
                        <div class="desc">Add a description of the image here</div>
                    </div>
                    </div>


                    <div class="clearfix"></div>

                    <div>
                    <p>This example use media queries to re-arrange the images on different screen sizes: for screens larger than 700px wide, it will show four images side by side, for screens smaller than 700px, it will show two images side by side. For screens smaller than 500px, the images will stack vertically (100%).</p>
                    </div>
        </div>

    )
}

export default Images;