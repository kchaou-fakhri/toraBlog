<template>
     <section class="py-5">
                <div class="container px-5">
                    <h1 class="fw-bolder fs-5 mb-4">Company Blog</h1>
                    <div class="card border-0 shadow rounded-3 overflow-hidden card-padding">
                        <div class="card-body p-0">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-xl-5 py-lg-5">
                                    <div class="p-4 p-md-5">
                                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <div class="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <a class="stretched-link text-decoration-none" href="#!">
                                            Read more
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-7"><div class="bg-featured-blog" 
                             >
                                    <img style="    width: 100%; width: 100%;
                                                     height: 100%"
                                                      src="../../assets/header.jpg" />
                            
                            </div></div>
                            </div>
                        </div>
                    </div>

                     <div class="card border-0 shadow rounded-3 overflow-hidden card-padding">
                        <div class="card-body p-0">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-xl-5 py-lg-5">
                                    <div class="p-4 p-md-5">
                                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <div class="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <a class="stretched-link text-decoration-none" href="#!">
                                            Read more
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-7"><div class="bg-featured-blog" 
                             >
                                    <img style="    width: 100%; width: 100%;
                                                     height: 100%"
                                                      src="../../assets/header.jpg" />
                            
                            </div></div>
                            </div>
                        </div>
                    </div>

                     <div class="card border-0 shadow rounded-3 overflow-hidden card-padding">
                        <div class="card-body p-0">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-xl-5 py-lg-5">
                                    <div class="p-4 p-md-5">
                                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">News</div>
                                        <div class="h2 fw-bolder">Article heading goes here</div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus ab doloremque, qui doloribus ea officiis...</p>
                                        <a class="stretched-link text-decoration-none" href="#!">
                                            Read more
                                            <i class="bi bi-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-7"><div class="bg-featured-blog" 
                             >
                                    <img style="    width: 100%; width: 100%;
                                                     height: 100%"
                                                      src="../../assets/header.jpg" />
                            
                            </div></div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    
</template>

<script>


export default {
    data() {
        return {
           image :  `url(${require('@/assets/header.jpg')})`,
        }
    }
}
</script>


<style>
.card-padding{
    margin-bottom: 8%;
}
</style>