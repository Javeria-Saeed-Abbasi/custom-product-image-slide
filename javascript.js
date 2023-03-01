const imgs = document.querySelectorAll('.img a');
let imgId = 1;
const imgDiv = document.querySelectorAll('.img');
imgs.forEach((img)=>{
    img.addEventListener('click', (e)=> {
        e.preventDefault();
        imgId=img.dataset.id;
        console.log(imgId);
        imgDiv.forEach((img)=>{
            img.classList.remove('active');
        });
        img.parentElement.classList.add('active')
        moveImage();
    });

});

function moveImage() {
    const imgWidth = document.querySelector('.main-image img:first-child').clientWidth;
    console.log(imgWidth + ' width');
    let width = (imgId-1)*imgWidth;
    document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;
};
function expandImage(images) {
    console.log(images)
    $('#bigImage').attr('src',images)
    $('#galleryModal').modal('show');
  }
//   $(".display_image").on('click',()=>{
//     const image = $(".display_image").attr('src')
//     console.log(image);
//     $('#bigImage').attr('src',image)
//     $('#galleryModal').modal('show');
//   });
//Counter Button;
const qtyText = document.querySelector('#qty');
function counter(a) {
    let qty = parseInt(qtyText.value);
        if(qty >= 1 && a=='a'){
            qty--;
            qtyText.value=qty;
            console.log(qty+ 'minus clicked');
            }else if(a=='b'){
            qty++;
            qtyText.value=qty;
        console.log(qty + 'plus clicked');
            };
};






