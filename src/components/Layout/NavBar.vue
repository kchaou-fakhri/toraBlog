<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <router-link style="text-decoration:none;" to="/">
                    <a class="navbar-brand"   >Tora News</a>
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <router-link style="text-decoration:none;" to="/">
                           
                            <li class="nav-item"><a class="nav-link" href="#">Home</a></li>

                             </router-link>
                              <router-link style="text-decoration:none;" to="/bytype">
                           
                            <li class="nav-item"><a class="nav-link" href="#">Politics</a></li>

                             </router-link>
                               <router-link style="text-decoration:none;" to="/bytype">
                            <li class="nav-item"><a class="nav-link" >Business</a></li>
                               </router-link>
                                 <router-link style="text-decoration:none;" to="/bytype">
                            <li class="nav-item"><a class="nav-link" >Health</a></li>
                                 </router-link>
                                   <router-link style="text-decoration:none;" to="/bytype">

                            <li class="nav-item"><a class="nav-link" >Entertainment</a></li>
                                   </router-link>
                                     <router-link style="text-decoration:none;" to="/bytype">
                            <li class="nav-item"><a class="nav-link" >Sports</a></li>
                                     </router-link>
                                     <router-link style="text-decoration:none;" to="/bytype">
                            <li class="nav-item"><a class="nav-link" >Videos</a></li>
                                     </router-link>
                           
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Profil</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a class="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a class="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
</template>

