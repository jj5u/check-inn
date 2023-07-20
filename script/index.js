const roomsJson = {
  rooms: [
    {
      index: "1",
      checkinImgSrc:
        "https://pocimg-c.okcashbag.com/fw/ocbevt/upload/event/nft/assets/A/202305/ocb-nft-bridge-v2.png",
      minReward: "오또",
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
      minReward: "x 10",
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
    {
      index: "7",
      checkinImgSrc:
        " https://paycdn.shinhancard.com/conts/images/common/deeplink_fanguin_200907.png",
      minReward: "x 2",
      checkinTitle: "매일 출첵 팡팡!",
      appName: "신한플레이",
      checkinLink:
        "https://pay.shinhancard.com/pay/PAYFM005N/PAYFM005J01.shc?screenId=PAYFM006O01JUL03",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "8",
      checkinImgSrc:
        "https://allthatcdn.aws.shinhancard.com/upload_image/event/1883/1883_20_3638.jpg",
      minReward: "x 2",
      checkinTitle: "올댓 출석",
      appName: "신한플레이",
      checkinLink: "https://allthat.aws.shinhancard.com/Evt00000?evtN=1883",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "9",
      checkinImgSrc:
        "https://paycdn.shinhancard.com/conts/images/common/deeplink_fanguin_200907.png",
      minReward: "x 3",
      checkinTitle: "신한 퀴즈 팡팡",
      appName: "신한플레이",
      checkinLink:
        "https://pay.shinhancard.com/pay/PAYFM005N/PAYFM005J01.shc?screenId=NATIVE%7CRBFNA8021X01",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "10",
      checkinImgSrc: "",
      minReward: "x 1",
      checkinTitle: "\b매일 주식 받기",
      appName: "토스",
      checkinLink: "https://tossinvest.com/_ul/Qu4w",
      registerLink: "",
      invitationCode: "",
    },
    {
      index: "11",
      checkinImgSrc: "",
      minReward: "x 행운상자",
      checkinTitle: "매일매일 출첵",
      appName: "케이뱅크",
      checkinLink: "https://m.kbanknow.com/k/KAeZN1z",
      registerLink: "https://m.kbanknow.com/k/KAeZN1z",
      invitationCode: "",
    },
    {
      index: "12",
      checkinImgSrc: "",
      minReward: "x 3",
      checkinTitle: "매일모으기 출석체크",
      appName: "카카오페이",
      checkinLink: "http://kko.to/everyday",
      registerLink: "",
      invitationCode: "",
    },
  ],
};
const colorTheme = [
  {
    color: "#fffbda",
    buttonColor: "#ffc107",
  },
];

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
// Function to save the next reset time in local storage
function saveResetTime(resetTime) {
  localStorage.setItem("reset_time", resetTime.getTime());
}
// Function to reset local storage
function resetLocalStorage() {
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith("clickedStatus_")) {
      localStorage.removeItem(key);
    }
  });
}

// Function to save the next reset time in local storage
function calculateNextResetTime(hour) {
  const now = new Date();

  // Step 1: Get the current local time (hour) in the local timezone
  const currentHours = now.getHours();

  // Step 2: Get the current time difference (UTC offset) between the local timezone and UTC (UTC+0)
  const currentTimeDifference = now.getTimezoneOffset() / 60; // Get the offset in hours

  // Step 3: Calculate the current local time (hour) in GMT+9 by adding the UTC offset of GMT+9 to the current local time
  const current0900Hours = (currentHours + currentTimeDifference + 9) % 24;

  // Step 4: Calculate the time difference in hours between GMT+9 and UTC+0
  const timeDifference = 9;

  // Step 5: Calculate the number of hours remaining until the specified hour in GMT+9 based on the current local time in GMT+9
  const hoursRemaining = (hour - current0900Hours + 24) % 24;

  // Step 6: Calculate the next reset time by adding the hoursRemaining to the current local time (hour) and set the minutes, seconds, and milliseconds to 0 to get midnight of the next day
  const nextResetTime = new Date(now);
  nextResetTime.setHours(now.getHours() + hoursRemaining, 0, 0, 0);

  return nextResetTime;
}

// Function to check the reset time and perform local storage reset if needed
function checkResetTime() {
  const now = new Date();
  const resetTime = localStorage.getItem("reset_time");

  if (resetTime) {
    if (now.getTime() >= Number(resetTime)) {
      resetLocalStorage();
      const nextMidnight = calculateNextResetTime(0);
      saveResetTime(nextMidnight);
    }
  } else {
    const nextMidnight = calculateNextResetTime(0);
    saveResetTime(nextMidnight);
    resetLocalStorage();
  }

  // Schedule the next reset at the saved reset_time
  const nextResetTime = localStorage.getItem("reset_time");
  const timeUntilReset = Number(nextResetTime) - now.getTime();
  setTimeout(checkResetTime, timeUntilReset);
}

// Perform the check on page load
checkResetTime();

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

// Function to update the colors of an element
function updateElementColors(element, color, buttonColor) {
  element.style.setProperty("--pixel-bg", color);
  element.style.setProperty("--pixel-border", buttonColor);
}

// Select all the ol.room elements except those with class .visited
const roomElements = document.querySelectorAll("ol.room:not(.visited)");

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the colorTheme array
const shuffledColorTheme = shuffleArray(colorTheme);

// Loop through each room element and assign colors from the shuffled colorTheme array
roomElements.forEach((roomElement, index) => {
  const { color, buttonColor } = shuffledColorTheme[index % shuffledColorTheme.length];
  updateElementColors(roomElement, color, buttonColor);
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
