const csvToJSON = (csv) => {
  const lines = csv.split("\n");
  const headers = lines[0].split(",");
  const jsonData = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    const item = {};

    for (let j = 0; j < headers.length; j++) {
      item[headers[j]] = values[j];
    }

    jsonData.push(item);
  }

  return jsonData;
};

const csvData = `index,checkinImgSrc,minReward,checkinTitle,appName,checkinLink,registerLink,invitationCode
1,https://pocimg-c.okcashbag.com/fw/ocbevt/upload/event/nft/assets/A/202305/ocb-nft-bridge-v2.png,오또,로드 투 리치,오케이 캐쉬백,https://event.okcashbag.com/gateway/nft/event/nft/events/daily_mission.mocb,,
2,https://m.okcashbag.com/g/img/OCB_bridge.png,x 1,출석체크,오케이 캐쉬백,http://m.okcashbag.com/g/p/life/event/attend/tocbAttendMain.mocb?mission_id=85255&event_id=85255&mission_id=85255&utm_source=copylink&utm_medium=social&utm_campaign=mission_85255,,
3,https://res.heraldm.com/content/image/2022/04/14/20220414000575_0.jpg,x 10,출석체크,모니모,https://apps.apple.com/kr/app/monimo-%EB%AA%A8%EB%8B%88%EB%AA%A8-%EC%82%BC%EC%84%B1%EA%B8%88%EC%9C%B5%EB%84%A4%ED%8A%B8%EC%9B%8D%EC%8A%A4/id379577046,https://www.monimo.com/w/applink/WPFMAL0104M0?cmpId=M231089157&frndInvtCd=GM19HO6&invateDate=20230715,GM19HO6
4,,x 1,매일 9시 출석체크,KB Pay,https://webpay.kbcard.com/kbpayIos.jsp;jsessionid=o0dehPLHnmUe_DCvhwQaT1yAM1C0SZkQpQixlV8z9xM_oRNvQhrz!429211231?eventID=702,,
5,https://paybooc.co.kr/pc/front/inc/images/renew/event/2023/icon_error_01.png,x 머니박스,출석체크,페이북,https://paybooc.co.kr/app/paybooc/REventAtndDetail.do,,
6,,x 1,행운복권,토스,https://toss.im/_m/byx7tht,,
7, https://paycdn.shinhancard.com/conts/images/common/deeplink_fanguin_200907.png,x 2,매일 출첵 팡팡!,신한플레이,https://pay.shinhancard.com/pay/PAYFM005N/PAYFM005J01.shc?screenId=PAYFM006O01JUL03,,
8,https://allthatcdn.aws.shinhancard.com/upload_image/event/1883/1883_20_3638.jpg,x 2,올댓 출석,신한플레이,https://allthat.aws.shinhancard.com/Evt00000?evtN=1883,,
9,https://paycdn.shinhancard.com/conts/images/common/deeplink_fanguin_200907.png,x 3,신한 퀴즈 팡팡,신한플레이,https://pay.shinhancard.com/pay/PAYFM005N/PAYFM005J01.shc?screenId=NATIVE%7CRBFNA8021X01,,
10,,x 1,매일 주식 받기,토스,https://tossinvest.com/_ul/Qu4w,,
11,,x 행운상자,매일매일 출첵,케이뱅크,https://m.kbanknow.com/k/KAeZN1z,https://m.kbanknow.com/k/KAeZN1z,
12,,x 3,매일모으기 출석체크,카카오페이,http://kko.to/everyday,,`;
const jsonData = csvToJSON(csvData);
console.log(JSON.stringify(jsonData));
