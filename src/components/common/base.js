export default {
  api: (location.origin !== "http://gportal.thewallet.com.cn")
    ? "http://121.42.169.26:8080/eWallet"
    : location.origin
};
