import React, { useRef } from 'react';
function Ref() {

    
    return (
<>
<h1>Go To paragraph</h1>
<button >down</button>
<div>
<section>
<img src="https://picsum.photos/id/237/200/300"/>
<p  >Get a specific image by adding to the start of the url.Get a specific image
     by adding to the start of the url.
    Get a specific image by adding to the start of the url.</p>
</section>
<section>
<img src="https://picsum.photos/seed/picsum/200/300"/>
<p>Get the same random image every time based on a seed, by adding /seed/ to the start of the url
Get a specific image by adding to the start of the url.
Get a specific image by adding to the start of the url.
Get a specific image by adding to the start of the url..</p>

</section>

<section>
<img src="https://picsum.photos/200/300.webp"/>
<p>Get the same random image every time based on a seed, by adding /seed/ to the start of the url
Get a specific image by adding to the start of the url.
Get a specific image by adding to the start of the url..</p>

</section>

<section>
<img src="https://picsum.photos/200/300/?blur=2"/>
<p>Get the same random image every time based on a seed, by adding /seed/ 
Get a specific image by adding to the start of the url.Get a specific image by adding to the start of the url.to the start of the url.</p>

</section>
<section>
<img src="https://picsum.photos/200/300"/>
<p >Get the same random image every time based on 
Get a specific image by adding to the start of the url.a seed, by adding /seed/ to the start of the url.</p>

</section>
<button  >Up</button>
</div>


      <div>
        <input  type="text" />
        <button >Focus Input</button>
      </div>
      </>
    );  
  
}

export default Ref


