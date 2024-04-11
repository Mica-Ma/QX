/*
 * @Author: machao
 * @Date: 2024-04-11 14:37:55
 * @LastEditors: machao
 * @LastEditTime: 2024-04-11 15:09:30
 */
const CHECK_URL = "api.sojan.top:3363/app-config/info";

const url = $request.url;
const isCheckUrl = (url) => url.includes(CHECK_URL);

if (isCheckUrl(url) && $response.status != 200) {
  const unlock = {
    notice: "赶紧去注册",
    canRegister: true,
  };

  const status = 200;
  const headers = $response.headers;
  const body = JSON.stringify(unlock);

  $done({ status, headers, body });
} else {
  $done({});
}
