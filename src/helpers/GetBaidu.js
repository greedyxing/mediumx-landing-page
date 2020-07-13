const GetBaidu = props => {
  let children = props.children;
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?5aafa25d50339782f08e82eaa9aabb96";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })();
  return children;
};

export default GetBaidu;
