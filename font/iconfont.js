;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shangyishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.715328 4.489216c-281.168896 0-509.094912 227.926016-509.094912 509.095936 0 281.155584 227.926016 509.093888 509.094912 509.093888 281.161728 0 509.094912-227.938304 509.094912-509.093888C1020.81024 232.415232 792.877056 4.489216 511.715328 4.489216zM511.430656 967.023616c-251.047936 0-454.559744-203.518976-454.559744-454.565888 0-251.035648 203.511808-454.5536 454.559744-454.5536s454.559744 203.518976 454.559744 454.5536C965.9904 763.50464 762.478592 967.023616 511.430656 967.023616zM666.975232 274.441216c-9.142272-0.049152-17.189888 4.476928-22.012928 11.42272L396.259328 490.103808c-2.107392 1.1776-4.09088 2.6624-5.878784 4.468736-10.28096 10.3936-10.28096 27.231232 0 37.61152l0.464896 0.376832c0.04096 0.04096 0.077824 0.084992 0.118784 0.125952 1.451008 1.466368 3.030016 2.719744 4.697088 3.77856L645.809152 739.300352c4.933632 6.634496 12.81536 10.959872 21.677056 10.998784 0.538624 0.003072 1.073152-0.014336 1.603584-0.04096 6.489088-0.182272 12.921856-2.766848 17.871872-7.769088 0.429056-0.433152 0.832512-0.881664 1.225728-1.337344 3.831808-4.328448 6.232064-9.908224 6.448128-16.114688 0.032768-0.657408 0.03584-1.314816 0.021504-1.973248l-0.226304-421.59104C694.352896 286.625792 681.82528 274.520064 666.975232 274.441216zM451.557376 513.994752 640.253952 359.037952l0.169984 308.092928L451.557376 513.994752zM354.731008 302.123008c-14.854144-0.079872-26.832896 11.906048-26.754048 26.754048l0.232448 367.438848c0.072704 14.861312 12.177408 26.966016 27.031552 27.031552 14.849024 0.079872 27.250688-11.4688 27.179008-26.3168l-0.232448-367.875072C382.108672 314.307584 369.580032 302.201856 354.731008 302.123008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiayishou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M631.200768 493.799424c-0.039936-0.04096-0.075776-0.083968-0.115712-0.123904-1.426432-1.439744-2.973696-2.675712-4.608-3.72224L375.805952 285.83424c-4.942848-6.662144-12.848128-11.010048-21.740544-11.058176-0.637952-0.003072-1.26976 0.022528-1.898496 0.06144-6.401024 0.252928-12.729344 2.840576-17.6128 7.774208-0.423936 0.429056-0.82432 0.872448-1.21344 1.323008-3.830784 4.3264-6.23616 9.899008-6.465536 16.09728-0.037888 0.728064-0.043008 1.458176-0.022528 2.187264l0.224256 422.310912c0.079872 14.876672 12.63104 27.001856 27.505664 27.080704 9.152512 0.049152 17.21344-4.475904 22.04672-11.429888L625.718272 536.369152c2.134016-1.184768 4.14208-2.683904 5.950464-4.509696 10.292224-10.411008 10.292224-27.27936 0-37.679104L631.200768 493.799424zM381.35296 666.996736l-0.164864-308.722688 189.197312 154.051584L381.35296 666.996736zM511.02208 4.277248c-281.655296 0-509.999104 228.330496-509.999104 509.997056 0 281.654272 228.343808 509.99808 509.999104 509.99808 281.667584 0 509.996032-228.343808 509.996032-509.99808C1021.018112 232.607744 792.690688 4.277248 511.02208 4.277248zM510.742528 968.51968c-251.493376 0-455.359488-203.879424-455.359488-455.3728 0-251.47904 203.866112-455.359488 455.359488-455.359488 251.4944 0 455.360512 203.880448 455.360512 455.359488C966.102016 764.640256 762.236928 968.51968 510.742528 968.51968zM666.862592 301.975552c-14.8736-0.078848-27.291648 11.501568-27.211776 26.376192l0.226304 368.978944c0.077824 14.874624 12.630016 27.001856 27.503616 27.07968 14.875648 0.079872 26.882048-11.912192 26.802176-26.801152l-0.226304-368.553984C693.876736 314.181632 681.750528 302.055424 666.862592 301.975552z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yinle" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M889.881018 253.461689c-0.368405-18.682501-15.599919-33.708729-34.383474-33.708729-18.782532 0-34.014045 15.027252-34.383474 33.708729l-0.017397 0 0 642.091894 68.799695 0L889.896368 253.461689 889.881018 253.461689zM167.513902 449.071785c-18.782532 0-34.015068 15.027252-34.38245 33.709753l-0.017397 0 0 412.773068 68.797648 0L201.911702 482.781538l-0.017397 0C201.5259 464.099037 186.296433 449.071785 167.513902 449.071785zM396.8411 128.025838c-18.782532 0-34.014045 15.026228-34.38245 33.707706l-0.017397 0 0 733.820038 68.797648 0L431.238901 161.734568l-0.017397 0C430.854122 143.052067 415.624655 128.025838 396.8411 128.025838zM626.170345 334.412372c-18.782532 0-34.015068 15.026228-34.384497 33.708729l-0.017397 0 0 527.432481 68.800718 0 0-527.432481-0.017397 0C660.185414 349.438601 644.951854 334.412372 626.170345 334.412372z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont05" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M884.133485 255.150144l-85.733617 0-159.635767 0 0-29.04757c0-39.084157-34.509978-77.376275-73.602322-77.376275l-106.323561 0c-39.093367 0-67.714218 38.292118-67.714218 77.376275l0 29.04757-159.635767 0-91.622744 0c-9.795087 0-17.720593 8.121981-17.720593 17.907858 0 9.785877 7.925507 17.907858 17.720593 17.907858l91.622744 0 0 466.756563c0 68.39881 52.634778 117.551276 121.026424 117.551276l318.971705 0c68.390623 0 126.913505-49.151443 126.913505-117.551276l0-466.756563 85.733617 0c9.795087 0 17.720593-8.121981 17.720593-17.907858C901.854079 263.271102 893.928572 255.150144 884.133485 255.150144zM426.939719 226.102574c0-19.546172 12.360516-41.560558 31.898501-41.560558l106.323561 0c19.537985 0 38.809911 22.014386 38.809911 41.560558l0 29.04757-177.031972 0L426.939719 226.102574zM763.607458 757.722424c0 48.852638-43.268456 81.735559-92.121094 81.735559l-318.971705 0c-48.853661 0-85.210707-32.881898-85.210707-81.735559l0-466.756563 123.82005 0 247.6401 0 124.843356 0L763.607458 757.722424z"  ></path>' +
    '' +
    '<path d="M514.944052 385.587915c-9.795087 0-17.396205 7.934716-17.396205 17.720593l0 301.251112c0 9.785877 7.601118 17.720593 17.396205 17.720593s17.396205-7.934716 17.396205-17.720593l0-301.251112C532.340257 393.522632 524.738116 385.587915 514.944052 385.587915z"  ></path>' +
    '' +
    '<path d="M373.216143 421.030126c-9.795087 0-17.907858 7.934716-17.907858 17.720593L355.308285 669.119457c0 9.785877 8.112772 17.720593 17.907858 17.720593s17.907858-7.934716 17.907858-17.720593l0-230.368738C391.124002 428.963819 383.010207 421.030126 373.216143 421.030126z"  ></path>' +
    '' +
    '<path d="M621.367897 438.750719 621.367897 669.119457c0 9.785877 8.112772 17.720593 17.907858 17.720593s17.907858-7.934716 17.907858-17.720593l0-230.368738c0-9.785877-8.112772-17.720593-17.907858-17.720593S621.367897 428.963819 621.367897 438.750719z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M570.326724 283.890131l242.051617 0 0 243.616237-242.051617 0L570.326724 283.890131zM570.326724 588.035602l242.051617 0 0 243.675433-242.051617 0L570.326724 588.035602zM241.335138 588.035602l242.051617 0 0 243.675433L241.335138 831.711035 241.335138 588.035602zM174.76584 520.155821l308.56274 0L483.32858 209.675325 174.76584 209.675325 174.76584 520.155821zM223.282309 258.434703l211.647174 0 0 212.902544-211.647174 0L223.282309 258.434703zM916.539329 0 107.066709 0c-58.256301 0-105.704174 47.742834-105.704174 106.302261l0 811.395479c0 58.558406 47.388677 106.302261 105.704174 106.302261l809.471599 0c58.197104 0 105.644978-47.742834 105.644978-106.302261l0-811.395479C1022.184307 47.742834 974.736433 0 916.539329 0zM958.523792 917.696719c0 23.364166-18.824422 42.186547-41.984463 42.186547L107.066709 959.883266c-23.160041 0-42.04468-18.822381-42.04468-42.186547L65.022029 106.30124c0-23.303949 18.825443-42.186547 42.04468-42.186547l809.471599 0c23.160041 0 41.984463 18.882598 41.984463 42.186547L958.522772 917.696719z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shengyin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M536.204262 947.58154l-7.823176 0L225.611387 743.329623l-62.124919 0c-22.333658 0-43.591821-8.601912-59.860343-24.221658-16.659425-15.995299-25.834388-37.20332-25.834388-59.718103L77.791737 396.779815c0-22.514783 9.174963-43.723827 25.834388-59.719126 16.268522-15.619746 37.526685-24.221658 59.860343-24.221658l61.23055 0L527.487739 79.408561l8.717546 0c46.284139 0 83.939761 37.655621 83.939761 83.940784l0 700.29141C620.144022 909.925918 582.489424 947.58154 536.204262 947.58154zM163.486468 364.004341c-18.717294 0-34.529421 15.008832-34.529421 32.775474l0 262.609023c0 17.765619 15.812127 32.774451 34.529421 32.774451l77.770248 0 301.725926 203.547883c14.8318-3.131317 25.997094-16.321734 25.997094-32.07144L568.979736 163.349345c0-15.467273-10.768251-28.466332-25.203008-31.892361L242.151086 364.004341 163.486468 364.004341zM784.919856 812.32195c-8.147564 0-16.155958-3.882424-21.115923-11.106965-7.994068-11.649318-5.033643-27.572986 6.615675-35.5691 82.752726-56.800657 132.156926-150.544715 132.156926-250.767324 0-102.052281-50.816363-196.751083-135.933949-253.318426-11.766998-7.821129-14.966876-23.699772-7.145747-35.46677s23.697725-14.9679 35.46677-7.14677c99.42136 66.074881 158.778236 176.703491 158.778236 295.930943 0 117.090788-57.70833 226.606041-154.36881 292.952098C794.950304 810.865785 789.908474 812.32195 784.919856 812.32195zM765.969249 640.2305c-8.147564 0-16.155958-3.882424-21.1149-11.106965-7.996115-11.649318-5.034666-27.572986 6.614651-35.5691 26.253944-18.020422 41.928948-47.758724 41.928948-79.546707 0-32.369222-16.122189-62.408375-43.128263-80.356143-11.766998-7.821129-14.966876-23.699772-7.145747-35.46677 7.820106-11.766998 23.699772-14.9679 35.46677-7.145747 41.309848 27.455305 65.972551 73.424266 65.972551 122.968659 0 48.657186-23.978111 94.164636-64.139809 121.730459C775.999696 638.774335 770.957867 640.2305 765.969249 640.2305z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M660.367119 696.447872 660.367119 696.447872c-20.289092 0-36.890188-16.600073-36.890188-36.889165L623.476931 364.441293c0-20.289092 16.600073-36.889165 36.889165-36.889165l0 0c20.289092 0 36.889165 16.600073 36.889165 36.889165l0 295.117414C697.257308 679.847799 680.656211 696.447872 660.367119 696.447872z"  ></path>' +
    '' +
    '<path d="M362.630041 696.447872 362.630041 696.447872c-20.289092 0-36.890188-16.600073-36.890188-36.889165L325.739852 364.441293c0-20.289092 16.600073-36.889165 36.889165-36.889165l0 0c20.289092 0 36.889165 16.600073 36.889165 36.889165l0 295.117414C399.519206 679.847799 382.919133 696.447872 362.630041 696.447872z"  ></path>' +
    '' +
    '<path d="M512.239454 0.260943c-282.624892 0-511.738034 229.113141-511.738034 511.738034s229.113141 511.738034 511.738034 511.738034 511.738034-229.113141 511.738034-511.738034S794.865369 0.260943 512.239454 0.260943zM512.239454 969.689047c-252.775051 0-457.689047-204.91502-457.689047-457.689047S259.465426 54.30993 512.239454 54.30993s457.689047 204.913996 457.689047 457.689047S765.014504 969.689047 512.239454 969.689047z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bofang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.717999 1.548626C230.37665 1.548626 1.493605 230.43167 1.493605 512.7743s228.883045 511.225674 511.224394 511.225674S1023.942393 795.115649 1023.942393 512.7743 795.059349 1.548626 512.717999 1.548626zM512.717999 972.873567c-254.107727 0-460.101827-205.995381-460.101827-460.101827S258.610272 52.669914 512.717999 52.669914s460.101827 205.995381 460.101827 460.101827S766.825726 972.873567 512.717999 972.873567zM744.777647 476.541577c-79.555848-54.132789-223.814815-135.156632-305.958532-185.360262-33.67813-21.23793-61.996223-12.70897-64.717197 24.801049-1.970978 100.467414 0 294.316962 0 396.522421 1.711167 38.079555 35.28179 43.10171 64.418991 27.81255 82.050287-49.710887 223.071218-135.147673 305.536179-185.10941C743.516988 554.880282 806.671482 520.146271 744.777647 476.541577z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jingyin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M948.1 183.2c11.6-12.1 11.3-31.3-0.8-42.9-12.1-11.6-31.3-11.3-42.9 0.8L151.7 908.2c-11.6 12.1-11.3 31.3 0.8 42.9 12.1 11.6 31.3 11.3 42.9-0.8l752.7-767.1zM463.6 839.1c7.8 3.9 32.3 16.2 48.4 24.3 83.6 42 83.6 42 111.5 56 70.3 35.4 142.3-8.7 142.3-87.4V532.8h-0.2c-1.7-15.2-14.5-27-30.2-27s-28.5 11.8-30.2 27h-0.2v299.3s-24.2 48.3-54.3 33.2l-161.9-81.4c-0.1-0.1-0.2-0.1-0.3-0.1-15.3-6.8-33.2 0-40.1 15.4-6.4 14.4-0.7 31.1 12.7 38.7 0 0 0.1 0.1 0.4 0.2 0.6 0.3 1.3 0.7 2.1 1zM232.4 680.2l-41.6-0.1c-33.5 0-60.8-27.4-61.1-60.9L128.1 377c-0.2-33.7 26.6-61 60.3-61h94.1l368.1-185c30-15.1 54.4-0.1 54.4 33.6V182h0.2c1.7 15.2 14.5 27 30.2 27 15.6 0 28.5-11.8 30.2-27h0.2v-17.5c0-78.8-71.9-123.2-142.3-87.8L268.1 255.4h-79.7c-67.5 0-121.5 54.7-121 122L69 619.6c0.5 66.9 54.9 121.2 121.8 121.2h43c16.8 0 30.3-13.6 30.3-30.3 0-16.8-13.6-30.3-30.3-30.3h-1.4z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)