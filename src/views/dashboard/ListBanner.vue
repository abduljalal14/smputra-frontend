<template lang="">
    BANNER LIST
    <hr>
    <button type="button" class="btn btn-md btn-success rounded shadow border-0 mb-3" data-bs-toggle="modal" data-bs-target="#addbannerModal">ADD NEW banner</button>
 <table class="table table-bordered">
                             <thead class="bg-dark text-white">
                                 <tr>
                                     <th scope="col">Id</th> 
                                     <th scope="col">Image</th> 
                                     <th scope="col">Banner link</th>
                                     <th scope="col" style="width:30%">Actions</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr v-if="bannerStore.banners.length == 0">
                                     <td colspan="4" class="text-center">
                                         <div class="alert alert-danger mb-0">
                                             Data Belum Tersedia!
                                         </div>
                                     </td>
                                 </tr>
                                 <tr v-else v-for="(banner, index) in bannerStore.banners" :key="index">
                                     <td>{{ banner.id }}</td>
                                     <td class="text-center">
                                        <!-- <img src="../../assets/images/banner/banner-atta-rice-dal.jpg" width="200" class="rounded-3"/> --> 
                                        <img v-bind:src="banner.image" width="200" class="rounded-3"/>
                                     </td>
                                     <td>{{ banner.link }}</td>
                                     <td class="text-center">
                                         <button @click="editBanner(banner)" data-bs-toggle="modal" data-bs-target="#editbannerModal" class="btn btn-sm btn-primary rounded-sm shadow border-0 me-2">EDIT</button>
                                         <button @click="confirmDelete(banner.id)" class="btn btn-sm btn-danger rounded-sm shadow border-0 me-2">DELETE</button>
                                     </td>
                                 </tr>
                             </tbody>
                         </table>

<!-- Modal Store -->
<div class="modal fade" id="addbannerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form @submit.prevent="bannerStore.storeBanner(router)">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add banner</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
            <label for="link" class="form-label">banner link</label>
            <input v-model="bannerStore.banner.link" type="text" class="form-control" id="link"/>
          </div>
          <div class="mb-3">
            <label class="form-label fw-bold">Image</label>
              <input type="file" class="form-control" @change="handleFileChange($event)">
            <!-- <div v-if="bannerStore.errors.image" class="alert alert-danger mt-2">
              <span>{{ bannerStore.errors.image[0] }}</span>
            </div> -->
          </div>         
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Save changes</button> 
      </div>
    </div>
  </form>
  </div>
</div>

<!-- Modal Update -->
<div class="modal fade" id="editbannerModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form @submit.prevent="bannerStore.updateBanner(router)">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit banner</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
            <label class="form-label fw-bold">Image</label>
             <input type="file" class="form-control" @change="handleFileChange($event)">
             <!-- <div v-if="bannerStore.errors.image" class="alert alert-danger mt-2">
                <span>{{ bannerStore.errors.image[0] }}</span>
             </div> -->
          </div>
          <div class="mb-3">
            <label for="link" class="form-label">banner link</label>
            <input v-model="bannerStore.banner.link" type="text" class="form-control" id="link" />
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Save changes</button> 
      </div>
    </div>
  </form>
  </div>
</div>


 
 </template>
 
<script setup>
import { useBanner } from "@/store/banner" 
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
//init router
const router = useRouter();
const bannerStore = useBanner()


//method for handle file changes
const handleFileChange = (e) => {
        //assign file to state
        bannerStore.banner.image = e.target.files[0];
    };

const editBanner = (banner) => {
    bannerStore.banner = banner
    console.log("Isi bannerEdit: ",bannerStore.banner )
    console.log("Isi bannerLink: ",bannerStore.banner.link)
    console.log("Isi bannerId: ", bannerStore.banner.id)
};


const confirmDelete = (bannerId) => {
  if (window.confirm("Are you sure you want to delete this banner?")) {
    bannerStore.deleteBanner(bannerId);
  }
};

onMounted(() => {
  bannerStore.fetchDataBanner();
});

watch(() => bannerStore.banner, () => {
  bannerStore.fetchDataBanner();
});
</script>
 
<style lang="">
 </style>