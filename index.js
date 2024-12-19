import { orders } from "./files.js";

const filterOptions = document.getElementById("filter_options"),
  userDetails = document.getElementById("user_details"),
  itemLeft = document.querySelector(".item_left"),
  userList = document.querySelector(".users_list");

filterOptions.addEventListener("change", () => {
  const placeholders = {
    first_name: "Enter First Name",
    last_name: "Enter Last Name",
    company: "Enter Company",
  };
  userDetails.placeholder = placeholders[filterOptions.value];
});

orders.forEach((personalDane) => {
  const newLi = document.createElement("li");
  const newDivLeft = document.createElement("div");
  const newDivRight = document.createElement("div");
  const newSpan = document.createElement("span");

  newLi.className = "users_item";
  newDivLeft.className = "item_left";
  newDivRight.className = "item_right";
  newSpan.className = "order_number";

  newSpan.textContent = `#${personalDane.order_number}`;

  userList.appendChild(newLi);
  newLi.appendChild(newDivLeft);
  newLi.appendChild(newDivRight);
  newDivLeft.appendChild(newSpan);
});
