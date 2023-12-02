<template>
<section id="news" class="pb-4">
   <div class="container">
      <div class="row">
         <div class="col-12">
            <nav aria-label="breadcrumb d-flex ">
               <ol class="breadcrumb news-breadcrumb">
                  <li class="breadcrumb-item"><a href="https://www.yogyagroup.com" class="text-success">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                     <a href="https://www.yogyagroup.com/articles?cat=all" class="text-success">
                     Berita</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">Semua Kategori</li>
               </ol>
            </nav>
         </div>
      </div>
      <div class="row">
         <div class="col-12 col-md-6">
            <h4 class="facility-title mb-4">Tips, Berita, &amp; Artikel</h4>
         </div>
         <div class="col-12 col-md-6 d-flex justify-content-start justify-content-md-end">
            <form id="form-categories" action="https://www.yogyagroup.com/articles" method="GET">
               <div class="form-group d-flex align-items-baseline form-filter-articles">
                  <span class="btn-filter"><i class="fas fa-filter"></i>&nbsp;Filter</span>
                  <select name="cat" class="form-control select-filter-articles" onchange="document.getElementById('form-categories').submit()">
                     <option value="all">Semua Kategori</option>
                     <option value="Promo">Promo</option>
                     <option value="Tips">Tips</option>
                     <option value="Berita">Berita</option>
                  </select>
               </div>
            </form>
         </div>
      </div>
      <div class="row">
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/655c5b84e2dd9_1700551556.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">21/11/2023</p>
               <span class="badge badge-success">Tips</span>
            </div>
            <a href="https://www.yogyagroup.com/article/memahami-kebutuhan-si-kecil-part2-edisi-menyambut-si-buah-hati" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Memahami Kebutuhan Si Kecil #Part2 (Edisi Menyambut Si Buah Hati)</h6>
            </a>
         </div>
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/654c5c534f42a_1699503187.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">09/11/2023</p>
               <span class="badge badge-success">Tips</span>
            </div>
            <a href="https://www.yogyagroup.com/article/memahami-kebutuhan-si-kecil" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Memahami Kebutuhan si kecil</h6>
            </a>
         </div>
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/65265b391fe86_1697012537.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">11/10/2023</p>
               <span class="badge badge-success">Berita</span>
            </div>
            <a href="https://www.yogyagroup.com/article/perjalanan-untuk-semakin-dekat-dengan-yo-people" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Perjalanan Untuk Semakin Dekat dengan YO People</h6>
            </a>
         </div>
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/650c13c7c09b2_1695290311.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">21/09/2023</p>
               <span class="badge badge-success">Tips</span>
            </div>
            <a href="https://www.yogyagroup.com/article/berbagai-jenis-dan-manfaat-beras-lokal-yang-enak" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Berbagai Jenis dan Manfaat Beras Lokal yang Enak</h6>
            </a>
         </div>
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/64faf0c7c0e48_1694167239.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">08/09/2023</p>
               <span class="badge badge-success">Tips</span>
            </div>
            <a href="https://www.yogyagroup.com/article/rahasia-dapur-keajaiban-bawang-dalam-masakan" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Rahasia Dapur : Keajaiban bawang dalam masakan</h6>
            </a>
         </div>
         <div class="col-6 col-md-4 mb-5">
            <img src="https://www.yogyagroup.com/storage/article/64e5c2a561622_1692779173.jpg" class="img-fluid mb-2">
            <div class="d-flex justify-content-between align-items-baseline">
               <p class="news-date text-muted">23/08/2023</p>
               <span class="badge badge-success">Tips</span>
            </div>
            <a href="https://www.yogyagroup.com/article/tips-mr-clean-bikin-si-kecil-jadi-jagoan-bersih-bersih-part-2" class="news-link">
               <h6 class="font-montserrat font-weight-bold news-title accordion">Tips Mr. Clean Bikin Si Kecil Jadi Jagoan Bersih-Bersih #PART 2</h6>
            </a>
         </div>
      </div>
      <div class="row">
         <div class="col-12">
            <nav aria-label="Page navigation example">
               <ul class="pagination m-0">
                  <li class="page-item">
                     <a class="page-link" href="javascript:void(0)" aria-label="Previous"> <span aria-hidden="true">«</span> </a>
                  </li>
                  <li class="page-item active">
                     <a class="page-link" href="javascript:void(0)">1</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=2">2</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=3">3</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=4">4</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=5">5</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=6">6</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=7">7</a>
                  </li>
                  <li class="page-item">
                     <a class="page-link" href="http://www.yogyagroup.com/articles?cat=all&amp;page=2" aria-label="Next"> <span aria-hidden="true">»</span> </a>
                  </li>
               </ul>
            </nav>
         </div>
      </div>
   </div>
</section>
</template>
<script>
export default {

}
</script>
<style lang="css">
/* News Page */
#news {
    margin-top: 7rem;
}

#news .news-breadcrumb {
    background-color: transparent;
    padding: 0;
    margin-bottom: 1rem;
}

#news .news-breadcrumb .breadcrumb-item a,
#news .news-breadcrumb .breadcrumb-item a:hover,
#news .news-breadcrumb .breadcrumb-item a:visited {
    text-decoration: none;
}

#news .select-filter-articles {
    border-radius: 1rem;
    color: #000;
    border: 1px solid #000000;
}

#news .select-filter-articles:focus {
    -webkit-box-shadow: none;
            box-shadow: none
}

#news .btn-filter {
    font-weight: 500;
    width: 100px;
}

#news .pagination .page-item:not(:last-child) {
    margin-right: 1rem;
}

#news .pagination .page-item.active .page-link {
    background-color: #EC3337;
    color: #FFF;
}

#news .pagination .page-item .page-link {
    color: #000;
    border-radius: 10px;
    padding: .75rem 1.15rem;
    border: none;
    background-color: #F8F8F8;
    font-family: Montserrat, sans-serif;
}

.news-date {
    font-size: .8rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
}

.news-link,
.news-link:hover,
.news-link:visited {
    color: #000;
    text-decoration: none;
}

.news-link-mobile {
    font-size: .8rem;
}

</style>