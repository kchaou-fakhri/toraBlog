<template>
 <div id="title" class="row">
        <div>
            <h1 class="text-center">The News</h1>
        </div>
            
       
    </div>
<div  id="sct">
   
    <div class="row">
        <div class="col-8">
             <router-link style="text-decoration:none; color: inherit;" to="/more">
              <div class="card mb-3"  style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="../../assets/header.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
             </router-link>

    <router-link style="text-decoration:none; color: inherit;" to="/more">
  <div class="card mb-3"  style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="../../assets/header.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
</div>
    </router-link>
  <div class="card mb-3"  style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="../../assets/header.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
</div>
  <div class="card mb-3"  style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="../../assets/header.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
</div>
  <div class="card mb-3"  style="max-width: 940px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="../../assets/header.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
</div>
        </div>
        <div class="col-4">
           <div class="card" >
  <img src="../../assets/header.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
            </div>
             <div class="card border-0  mt-xl-5">
                                <div class="card-body p-4 py-lg-5">
                                    <div class="d-flex align-items-center justify-content-center">
                                        <div class="text-center">
                                            <div class="h6 fw-bolder">Have more questions?</div>
                                            <p class="text-muted mb-4">
                                                Contact us at
                                                <br />
                                                <a href="#!">support@domain.com</a>
                                            </p>
                                            <div class="h6 fw-bolder">Follow us</div>
                                            <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-twitter"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-facebook"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-linkedin"></i></a>
                                            <a class="fs-5 px-2 link-dark" href="#!"><i class="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    </div>
  
</div>

   
</template>

<style>
#title{
    background:#fff;
    padding: 1%;
    margin: 1% 0;
}
 #title h1{
     font-size:200%;
     padding: 4%;
     color:#000;
font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif }
    #sct{
    padding: 0 2% 0 2%;
   
    }
    @media  (max-width: 600px){
        #sct .row .col-4{
            display:none;
        }
        #sct .row .col-8{
                width: 90%;
    margin: auto;
    padding-top: 6%;
        }

        
    }
</style>