// ? ------- HOUSING --------- //
//  housing data

const housing = [
  {
    id: 1,
    title: "Maneckshaw Enclave",
    description:
      "lorem ipsum lorem ipsum dolor sit amet, consectetur adispscing elit at",
    image: "./assets/images/housing/ image.png",
  },
  {
    id: 2,
    title: "Maneckshaw ",
    description:
      "Aut blanditiis tenetur qui perspiciatis voluptatem aut maxime corrupti. Et galisum placeat eum aperiam minus non deserunt v",
    image: "./assets/images/housing/ image.png",
  },
  {
    id: 3,
    title: " Enclave",
    description:
      "Id voluptatem nisi quo officia quae est porro alias aut nulla sunt? A ",
    image: "./assets/images/housing/ image.png",
  },
];

// selecting the housing container
const housing_image_container = document.querySelector(
  ".housing-image-container"
);
// setting index for getting the data
var housing_index = 1;
// define arrows
const housing_left_arrow = document.querySelector(".housing-left");
const housing_right_arrow = document.querySelector(".housing-right");

// adding click functionality to left arrow
housing_left_arrow.addEventListener("click", () => {
  housing_index--;
  if (housing_index < 0) {
    housing_index = housing.length - 1;
  }
  const { title, description, image } = housing[housing_index];
  housing_image_container.innerHTML = `
  <div class="overlay-container">
  <p class="overlay-heading">${title}</p>
  <p class="overlay-content">
   ${description}
  </p>
  <button class="overlay-button" type="button">
    VIEW PROPERTIES
  </button>
</div>
  `;
  housing_image_container.style.background = `url(${image})`;
});

// adding click functionality to right arrow

housing_right_arrow.addEventListener("click", () => {
  housing_index++;
  if (housing_index > housing.length - 1) {
    housing_index = 0;
  }
  const { title, description, image } = housing[housing_index];
  housing_image_container.innerHTML = `
    <div class="overlay-container">
    <p class="overlay-heading">${title}</p>
    <p class="overlay-content">
     ${description}
    </p>
    <button class="overlay-button" type="button">
      VIEW PROPERTIES
    </button>
  </div>
    `;
  housing_image_container.style.background = `url(${image})`;
});

// function for automatic carousel specially for small screen where arrows are removed
function Housing_carousel() {
  const { title, description, image } = housing[housing_index];
  housing_image_container.innerHTML = `
  <div class="overlay-container">
  <p class="overlay-heading">${title}</p>
  <p class="overlay-content">
   ${description}
  </p>
  <button class="overlay-button" type="button">
    VIEW PROPERTIES
  </button>
</div>
  `;
  housing_image_container.style.background = `url(${image})`;
  housing_index++;
  if (housing_index > housing.length - 1) {
    housing_index = 0;
  }
  setTimeout(Housing_carousel, 4000); // Change image every 4 seconds
}
Housing_carousel();

// ? ------- TESTIMONIALS --------- //

//          testimonial data
const testimonial = [
  {
    id: 1,
    category: "Travel",
    image: "./assets/images/testimonial.png",
    name: "rahul",
    designation: "ceo",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: 2,
    category: "Travel",
    image: "./assets/images/testimonial.png",
    name: "sahil",
    designation: "cto",
    description:
      "imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero..",
  },
  {
    id: 3,
    category: "Electronics",
    image: "./assets/images/testimonial.png",
    name: "yubraj",
    designation: "sde",
    description:
      "Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam",
  },
  {
    id: 4,
    category: "Electronics",
    image: "./assets/images/testimonial.png",
    name: "raj",
    designation: "guard",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tinc",
  },
  {
    id: 5,
    category: "Finance",
    image: "./assets/images/testimonial.png",
    name: "har",
    designation: "hr",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa",
  },
  {
    id: 6,
    category: "Finance",
    image: "./assets/images/testimonial.png",
    name: "akhil",
    designation: "cto",
    description:
      "imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero..",
  },
  {
    id: 7,
    category: "Housing",
    image: "./assets/images/testimonial.png",
    name: "sahil",
    designation: "cto",
    description:
      "imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero..",
  },
  {
    id: 8,
    category: "Housing",
    image: "./assets/images/testimonial.png",
    name: "lihas",
    designation: "admin",
    description:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.",
  },
];

const testimonial_tabs = document.querySelector(".testimonial-tabs"); // testimonial tabs container
const testimonial_tab_heading = document.querySelectorAll(
  ".testimonial-tab-heading"
); // testimonial individual tab
const testimonial_container = document.querySelector(".testimonial-container"); // testimonial container
// testimonial images
const testimonial_left_arrow = document.querySelector(
  ".testimonial-left-arrow"
);
const testimonial_right_arrow = document.querySelector(
  ".testimonial-right-arrow"
);

var testimonial_current = "Travel"; // current selected tab
var testimonial_index = 0; // testimonial index
// getting new array containing the respective of the tab selected
var new_data_testimonial = testimonial.filter((item) => {
  return item.category == testimonial_current;
});

// adding the event listener on every tab
for (let index = 0; index < testimonial_tab_heading.length; index++) {
  // adding to one tab
  testimonial_tab_heading[index].addEventListener("click", (e) => {
    testimonial_current = e.target.innerText; // getting the clicked tab
    new_data_testimonial = testimonial.filter((item) => {
      return item.category == testimonial_current;
    });
    for (let i = 0; i < testimonial_tab_heading.length; i++) {
      testimonial_tab_heading[i].classList.remove("active");
    }
    testimonial_tab_heading[index].classList.add("active");

    const { name, designation, description, image } =
      new_data_testimonial[testimonial_index];
    testimonial_container.innerHTML = `
    <div class="testimonial-left">
    <img src=${image} alt="testimonial" />
    <p class="testimonial-name">${name}</p>
    <div class="testimonial-designation">${designation}</div>
  </div>
  <div class="testimonial-right">
   ${description}
  </div>
    `;
  });
}
testimonial_right_arrow.addEventListener("click", () => {
  testimonial_index++;
  if (testimonial_index > new_data_testimonial.length - 1) {
    testimonial_index = 0;
  }
  const { name, designation, description, image } =
    new_data_testimonial[testimonial_index];
  testimonial_container.innerHTML = `
<div class="testimonial-left">
<img src=${image} alt="testimonial" />
<p class="testimonial-name">${name}</p>
<div class="testimonial-designation">${designation}</div>
</div>
<div class="testimonial-right">
${description}
</div>
`;
});
testimonial_left_arrow.addEventListener("click", () => {
  testimonial_index--;
  if (testimonial_index < 0) {
    testimonial_index = new_data_testimonial.length - 1;
  }
  const { name, designation, description, image } =
    new_data_testimonial[testimonial_index];
  testimonial_container.innerHTML = `
<div class="testimonial-left">
<img src=${image} alt="testimonial" />
<p class="testimonial-name">${name}</p>
<div class="testimonial-designation">${designation}</div>
</div>
<div class="testimonial-right">
${description}
</div>
`;
});
// function for automatic carousel specially for small screen where arrows are removed

function tesimonial_carousal() {
  const { name, designation, description, image } =
    new_data_testimonial[testimonial_index];
  testimonial_container.innerHTML = `
<div class="testimonial-left">
<img src=${image} alt="testimonial" />
<p class="testimonial-name">${name}</p>
<div class="testimonial-designation">${designation}</div>
</div>
<div class="testimonial-right">
${description}
</div>
`;
  testimonial_index++;
  if (testimonial_index > new_data_testimonial.length - 1) {
    testimonial_index = 0;
  }
  setTimeout(tesimonial_carousal, 4000); // Change image every 4 seconds
}
tesimonial_carousal();
