const roomsJson = {
  rooms: [
    {
      index: "1",
      checkinImgSrc:
        "https://pocimg-c.okcashbag.com/fw/ocbevt/upload/event/nft/assets/A/202305/ocb-nft-bridge-v2.png",
      minReward: "x 오또",
      checkinTitle: "로드 투 리치",
      appName: "오케이 캐쉬백",
      checkinLink: "https://event.okcashbag.com/gateway/nft/event/nft/events/daily_mission.mocb",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "2",
      checkinImgSrc: "https://m.okcashbag.com/g/img/OCB_bridge.png",
      minReward: "x 1",
      checkinTitle: "출석체크",
      appName: "오케이 캐쉬백",
      checkinLink:
        "http://m.okcashbag.com/g/p/life/event/attend/tocbAttendMain.mocb?mission_id=85255&event_id=85255&mission_id=85255&utm_source=copylink&utm_medium=social&utm_campaign=mission_85255",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "3",
      checkinImgSrc: "https://res.heraldm.com/content/image/2022/04/14/20220414000575_0.jpg",
      minReward: "x 1",
      checkinTitle: "출석체크",
      appName: "모니모",
      checkinLink:
        "https://apps.apple.com/kr/app/monimo-%EB%AA%A8%EB%8B%88%EB%AA%A8-%EC%82%BC%EC%84%B1%EA%B8%88%EC%9C%B5%EB%84%A4%ED%8A%B8%EC%9B%8D%EC%8A%A4/id379577046",
      registerLink:
        "https://www.monimo.com/w/applink/WPFMAL0104M0?cmpId=M231089157&frndInvtCd=GM19HO6&invateDate=20230715",
      invitationCode: "GM19HO6",
    },
    {
      index: "4",
      checkinImgSrc: "",
      minReward: "x 1",
      checkinTitle: "매일 9시 출석체크",
      appName: "KB Pay",
      checkinLink:
        "https://webpay.kbcard.com/kbpayIos.jsp;jsessionid=o0dehPLHnmUe_DCvhwQaT1yAM1C0SZkQpQixlV8z9xM_oRNvQhrz!429211231?eventID=702",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "5",
      checkinImgSrc: "https://paybooc.co.kr/pc/front/inc/images/renew/event/2023/icon_error_01.png",
      minReward: "x 머니박스",
      checkinTitle: "출석체크",
      appName: "페이북",
      checkinLink: "https://paybooc.co.kr/app/paybooc/REventAtndDetail.do",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "6",
      checkinImgSrc: "",
      minReward: "x 1",
      checkinTitle: "행운복권",
      appName: "토스",
      checkinLink: "https://toss.im/_m/byx7tht",
      registerLink: "",
      invitationCode: "",
    },
  ],
};

// Function to set the fixed color for .room.visited elements
function setFixedColorForVisitedRooms() {
  // Select all the .room.visited elements
  const visitedRoomElements = document.querySelectorAll("ol.room.visited");

  // Set a fixed color for .room.visited elements
  visitedRoomElements.forEach((visitedRoomElement) => {
    updateElementColors(visitedRoomElement, "#fafaf9", "#78716c");
  });
}

// Select the parent element that will contain the rooms
const roomsContainer = document.querySelector(".rooms");

// Function to handle the click event on checkin-btn
function handleCheckinButtonClick(event) {
  const roomElement = event.target.closest(".room");
  if (roomElement) {
    roomElement.classList.add("visited");
    const checkinBtn = event.target;
    checkinBtn.textContent = "방문 완료";

    // Save the clicked status to local storage
    const roomIndex = roomElement.querySelector(".data-index").textContent;
    localStorage.setItem(`clickedStatus_${roomIndex}`, "방문완료");

    setFixedColorForVisitedRooms();
  }
}

// Map the rooms from the JSON and create the HTML structure
const roomsHtml = roomsJson.rooms
  .map((room) => {
    const roomIndex = room.index;
    const clickedStatus = localStorage.getItem(`clickedStatus_${roomIndex}`);
    const clickedClass = clickedStatus === "방문완료" ? "visited" : "";
    const checkinBtnText = clickedStatus === "방문완료" ? "방문 완료" : "방문하기";
    const checkinImg = room.checkinImgSrc
      ? `<img src="${room.checkinImgSrc}" alt="${room.checkinTitle}" />`
      : `<span class="no-img">${room.appName} ${room.checkinTitle}</span>`;
    const invitationCode = room.invitationCode
      ? `<li class="invitation-code">
          추천코드:
          <span>${room.invitationCode}</span>
        </li>`
      : "";
    const registerLink = room.registerLink
      ? `  <li class="register-btn">
          <a href="${room.registerLink}" target="_blank" rel="noopener noreferrer">회원가입</a>
        </li>`
      : "";
    return `
    <ol class="room pixel-border ${clickedClass}">
      <li class="data-index">${roomIndex}</li>
      <li class="data-checkin-img">
        ${checkinImg}
      </li>
      <ul class="data-checkin-info">
        <li class="rewards">
          최소
          <span class="bottomline-coin">
            <img src="https://raw.githubusercontent.com/LantareCode/random-this-and-thats/master/CSS/SuperMario-Animation/images/Coin.gif" height="20px" />
            <span class="data-min-reward">${room.minReward}</span>
          </span>
        </li>
        <li class="data-checkin-title">${room.checkinTitle}</li>
        <li class="data-app-name">${room.appName}</li>
      </ul>
      <ul class="link-btn">
        <li class="checkin-btn">
          <a href="${room.checkinLink}" target="_blank" rel="noopener noreferrer">${checkinBtnText}</a>
        </li>
        ${registerLink}
        ${invitationCode}
      </ul>
    </ol>
  `;
  })
  .join("");

// Append the generated HTML to the rooms container
roomsContainer.innerHTML = roomsHtml;

// Select all the checkin-btn elements
const checkinBtns = document.querySelectorAll(".checkin-btn");

// Add event listener to each checkin-btn element
checkinBtns.forEach((checkinBtn) => {
  checkinBtn.addEventListener("click", handleCheckinButtonClick);
});

// Function to reset local storage at midnight local time (Seoul)
function resetLocalStorage() {
  const now = new Date();
  const timezoneOffset = now.getTimezoneOffset() + 9 * 60; // KST is 9 hours ahead of UTC
  const midnightTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    -timezoneOffset,
    0
  );
  const timeUntilMidnight = midnightTime - now;

  setTimeout(() => {
    // Reset local storage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("clickedStatus_")) {
        localStorage.removeItem(key);
      }
    });

    // Call the function again to reset at the next midnight
    resetLocalStorage();
  }, timeUntilMidnight);
}

// Check if it's a new day (past midnight), then reset local storage
resetLocalStorage();

// Check local storage on page load and update room elements accordingly
document.addEventListener("DOMContentLoaded", () => {
  const roomElements = document.querySelectorAll(".room");
  roomElements.forEach((roomElement) => {
    const roomIndex = roomElement.querySelector(".data-index").textContent;
    const clickedStatus = localStorage.getItem(`clickedStatus_${roomIndex}`);
    if (clickedStatus === "방문완료") {
      roomElement.classList.add("visited");
      const checkinBtn = roomElement.querySelector(".checkin-btn a");
      checkinBtn.textContent = "방문 완료";
    }
  });
  setFixedColorForVisitedRooms();
});

const colorTheme = [
  {
    color: "#f7efa2",
    subColor: "#6fac75",
  },
  {
    color: "#cad3fa",
    subColor: "#050d9c",
  },
  {
    color: "#f5e4c4",
    subColor: "#234433",
  },
  {
    color: "#e7efd8",
    subColor: "#4411fd",
  },
  {
    color: "#f0e9db",
    subColor: "#f41ade",
  },
];

// Function to update the colors of an element
function updateElementColors(element, color, subColor) {
  element.style.setProperty("--pixel-bg", color);
  element.style.setProperty("--pixel-border", subColor);
}

// Select all the ol.room elements except those with class .visited
const roomElements = document.querySelectorAll("ol.room:not(.visited)");

// Loop through each room element and assign colors from the colorTheme array
roomElements.forEach((roomElement, index) => {
  const { color, subColor } = colorTheme[index % colorTheme.length];
  updateElementColors(roomElement, color, subColor);
});

// Function to handle the click event
function handleClick(event) {
  if (event.target.tagName === "SPAN") {
    const clickedValue = event.target.textContent.trim();

    // Copy the value to the clipboard (you may need to adjust browser support)
    navigator.clipboard
      .writeText(clickedValue)
      .then(() => {
        console.log("Value copied to clipboard:", clickedValue);
        // Display the copied value in a <div> element
        const invitationClickedDiv = document.querySelector(".invitation-clicked");
        invitationClickedDiv.innerHTML = `<span>${clickedValue} copied!</span>`;
        invitationClickedDiv.classList.add("active");
        setTimeout(() => {
          invitationClickedDiv.classList.remove("active");
        }, 1000);
      })
      .catch((err) => {
        console.error("Unable to copy value to clipboard:", err);
      });
  }
}

// Add event listener to each element with class .invitation-code
const invitationCodeElements = document.querySelectorAll(".invitation-code");
invitationCodeElements.forEach((element) => {
  element.addEventListener("click", handleClick);
});
