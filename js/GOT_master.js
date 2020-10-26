(() => {
  console.log('fired!');

  let lightBox = document.querySelector(".lightbox"),
      lbClose = lightBox.querySelector("span"),
      lbVideo = lightBox.querySelector("video"),
      sigils = document.querySelectorAll(".sigilContainer"),
      houseImages = document.querySelector("#houseImages"),
      houseName = document.querySelector(".house-name"),
      houseBio = document.querySelector(".house-info"),
      vidControl = document.querySelector(".vid-control");

  const houseInfo = [
    ["Stark",`House Stark of Winterfell is a Great House of Westeros,
    ruling over the vast region known as the North from their seat in
    Winterfell. It is one of the oldest lines of Westerosi nobility by far,
    claiming a line of descent stretching back over eight thousand years.
    Before the Targaryen conquest, as well as during the War of the Five Kings
    and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark
    ruled over the region as the Kings in the North.`],

    ["baratheon",`House Baratheon of Storm's End is a legally extinct Great House
    of Westeros. A cadet branch was formerly the royal house, but House Lannister
    now controls the throne. House Baratheon traditionally ruled the Stormlands on
    the eastern coast of Westeros, aptly named for its frequent storms, from their
    seat of Storm's End.
    House Baratheon became the royal house of the Seven Kingdoms after Robert Baratheon
    led a rebellion against the Targaryen dynasty. At the end of the rebellion, Robert
    ascended the Iron Throne as Robert I and married Cersei Lannister after the death
    of Lyanna Stark.`],

    ["lannister",`House Lannister of Casterly Rock is one of the Great Houses of Westeros,
     one of its richest and most powerful families and oldest dynasties. It is also the current
     royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing,
     which had been their puppet house anyway.
     The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory
      overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia.
     They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also
     rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of
     the royal family.`],

    ["Tully",`House Tully of Riverrun is an exiled Great House of Westeros. Its most
    senior member carried the title of Lord of Riverrun and Lord Paramount of the Trident,
     until the Red Wedding. The current head is Lord Edmure Tully, son of the late Hoster Tully.
     The Tully sigil is a silver trout on a red and blue background. Their house words are "Family,
     Duty, Honor."`],

    ["greyjoy",`House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands,
    a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of
    the house is the Lord Reaper of Pyke.
    House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are
    "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with
    House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `],

    ["Arryn",`House Arryn of the Eyrie is one of the Great Houses of Westeros. It has ruled over the
    Vale of Arryn for millennia, originally as the Kings of Mountain and Vale and more recently as Lords
     Paramount of the Vale and Wardens of the East under the Targaryen kings and Baratheon-Lannister kings.
      The nominal head of House Arryn is Robin Arryn, the Lord of the Eyrie, with his stepfather Petyr
      Baelish acting as Lord Protector until he reaches the age of majority. `],

    ["Targaryen",`House Targaryen of Dragonstone is a noble family of Valyrian descent who once ruled the
    Seven Kingdoms of Westeros. The Targaryen sigil is a three-headed dragon breathing flames, red on black.
    The house words are "Fire and Blood".`],

    ["Tyrell",`House Tyrell of Highgarden is one of the Great Houses of the Seven Kingdoms, being Lords Paramount
    of the Mander and the liege lords of the Reach. A large, wealthy house, its wealth is only surpassed among
    the Great Houses by House Lannister, and the Tyrells can field the greatest armies.`],

    ["Frey",`House Frey of the Crossing is a noble house of the riverlands. Their main seat is the Twins, a pair
    of castles on each bank of the northern Green Fork of the Trident that serves as a vital bridge across the river.
    The lord of the house is called the Lord of the Crossing. The strategic location of the Twins has allowed the house
    to become quite wealthy, House Frey rules over wider domains than House Tully.`]

  ]


  function showLightbox() {
    lightBox.classList.add('show-lightbox');

    // try making the video play as well
    // load the right video, and then play setInterval
  let house = this.classList[1], //css's stark, baratheon etc
     targetSource = house.charAt(0).toUpperCase() + house.slice(1);//Stark

      lbVideo.src = `video/House-${targetSource}.mp4`;
      lbVideo.load();
      lbVideo.play();


   }


     function hideLightbox() {
     lightBox.classList.remove('show-lightbox');

     lbVideo.currentTime = 0;
     lbVideo.pause();
    }



  function animatedBanner(){
    // 600 is the width of each image - multiply them together
     //move the banner to the right using the data-offset attribute
     //we get from the shields
     houseImages.style.right = `${this.dataset.offset * 600}px`;

      // and also show the house name
    //houseName.textContent = housedInfo[this.dataset.offset];

     houseName.textContent = `House ${houseInfo[this.dataset.offset][0]}`;
     houseBio.textContent = `House ${houseInfo[this.dataset.offset][1]}`;
  }

  sigils.forEach(sigil => sigil.addEventListener("click", showLightbox));
  sigils.forEach(sigil => sigil.addEventListener("click", animatedBanner));


  lbClose.addEventListener("click",hideLightbox);

  // add an "ended" event handler for the video -> close the lightBox
  lbVideo.addEventListener("ended",hideLightbox);
})();
