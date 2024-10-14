!(function () {
  var gt = window.gtranslateSettings || {},
    lang_array_english = {
      af: "Afrikaans",
      sq: "Albanian",
      am: "Amharic",
      ar: "Arabic",
      hy: "Armenian",
      az: "Azerbaijani",
      eu: "Basque",
      be: "Belarusian",
      bn: "Bengali",
      bs: "Bosnian",
      bg: "Bulgarian",
      ca: "Catalan",
      ceb: "Cebuano",
      ny: "Chichewa",
      "zh-CN": "Chinese (Simplified)",
      "zh-TW": "Chinese (Traditional)",
      co: "Corsican",
      hr: "Croatian",
      cs: "Czech",
      da: "Danish",
      nl: "Dutch",
      en: "English",
      eo: "Esperanto",
      et: "Estonian",
      tl: "Filipino",
      fi: "Finnish",
      fr: "French",
      fy: "Frisian",
      gl: "Galician",
      ka: "Georgian",
      de: "German",
      el: "Greek",
      gu: "Gujarati",
      ht: "Haitian Creole",
      ha: "Hausa",
      haw: "Hawaiian",
      iw: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hu: "Hungarian",
      is: "Icelandic",
      ig: "Igbo",
      id: "Indonesian",
      ga: "Irish",
      it: "Italian",
      ja: "Japanese",
      jw: "Javanese",
      kn: "Kannada",
      kk: "Kazakh",
      km: "Khmer",
      ko: "Korean",
      ku: "Kurdish (Kurmanji)",
      ky: "Kyrgyz",
      lo: "Lao",
      la: "Latin",
      lv: "Latvian",
      lt: "Lithuanian",
      lb: "Luxembourgish",
      mk: "Macedonian",
      mg: "Malagasy",
      ms: "Malay",
      ml: "Malayalam",
      mt: "Maltese",
      mi: "Maori",
      mr: "Marathi",
      mn: "Mongolian",
      my: "Myanmar (Burmese)",
      ne: "Nepali",
      no: "Norwegian",
      ps: "Pashto",
      fa: "Persian",
      pl: "Polish",
      pt: "Portuguese",
      pa: "Punjabi",
      ro: "Romanian",
      ru: "Russian",
      sm: "Samoan",
      gd: "Scottish Gaelic",
      sr: "Serbian",
      st: "Sesotho",
      sn: "Shona",
      sd: "Sindhi",
      si: "Sinhala",
      sk: "Slovak",
      sl: "Slovenian",
      so: "Somali",
      es: "Spanish",
      su: "Sundanese",
      sw: "Swahili",
      sv: "Swedish",
      tg: "Tajik",
      ta: "Tamil",
      te: "Telugu",
      th: "Thai",
      tr: "Turkish",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      vi: "Vietnamese",
      cy: "Welsh",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      zu: "Zulu",
    },
    default_language =
      (gt = gt[document.currentScript.getAttribute("data-gt-widget-id")] || gt)
        .default_language || "auto",
    languages =
      gt.languages ||
      Object.keys(lang_array_english).sort(function (x, y) {
        return x == default_language ? -1 : y == default_language ? 1 : 0;
      }),
    alt_flags = gt.alt_flags || {},
    flag_size = gt.flag_size || 32,
    flag_style = gt.flag_style || "2d",
    flags_location = gt.flags_location || "https://cdn.gtranslate.net/flags/",
    url_structure = gt.url_structure || "none",
    custom_domains = gt.custom_domains || {},
    horizontal_position = gt.horizontal_position || "inline",
    vertical_position = gt.vertical_position || null,
    native_language_names = gt.native_language_names || !1,
    detect_browser_language = gt.detect_browser_language || !1,
    wrapper_selector = gt.wrapper_selector || ".gtranslate_wrapper",
    custom_css = gt.custom_css || "",
    lang_array = native_language_names
      ? {
          af: "Afrikaans",
          sq: "Shqip",
          am: "አማርኛ",
          ar: "العربية",
          hy: "Հայերեն",
          az: "Azərbaycan dili",
          eu: "Euskara",
          be: "Беларуская мова",
          bn: "বাংলা",
          bs: "Bosanski",
          bg: "Български",
          ca: "Català",
          ceb: "Cebuano",
          ny: "Chichewa",
          "zh-CN": "简体中文",
          "zh-TW": "繁體中文",
          co: "Corsu",
          hr: "Hrvatski",
          cs: "Čeština‎",
          da: "Dansk",
          nl: "Nederlands",
          en: "English",
          eo: "Esperanto",
          et: "Eesti",
          tl: "Filipino",
          fi: "Suomi",
          fr: "Français",
          fy: "Frysk",
          gl: "Galego",
          ka: "ქართული",
          de: "Deutsch",
          el: "Ελληνικά",
          gu: "ગુજરાતી",
          ht: "Kreyol ayisyen",
          ha: "Harshen Hausa",
          haw: "Ōlelo Hawaiʻi",
          iw: "עִבְרִית",
          hi: "हिन्दी",
          hmn: "Hmong",
          hu: "Magyar",
          is: "Íslenska",
          ig: "Igbo",
          id: "Bahasa Indonesia",
          ga: "Gaeilge",
          it: "Italiano",
          ja: "日本語",
          jw: "Basa Jawa",
          kn: "ಕನ್ನಡ",
          kk: "Қазақ тілі",
          km: "ភាសាខ្មែរ",
          ko: "한국어",
          ku: "كوردی‎",
          ky: "Кыргызча",
          lo: "ພາສາລາວ",
          la: "Latin",
          lv: "Latviešu valoda",
          lt: "Lietuvių kalba",
          lb: "Lëtzebuergesch",
          mk: "Македонски јазик",
          mg: "Malagasy",
          ms: "Bahasa Melayu",
          ml: "മലയാളം",
          mt: "Maltese",
          mi: "Te Reo Māori",
          mr: "मराठी",
          mn: "Монгол",
          my: "ဗမာစာ",
          ne: "नेपाली",
          no: "Norsk bokmål",
          ps: "پښتو",
          fa: "فارسی",
          pl: "Polski",
          pt: "Português",
          pa: "ਪੰਜਾਬੀ",
          ro: "Română",
          ru: "Русский",
          sm: "Samoan",
          gd: "Gàidhlig",
          sr: "Српски језик",
          st: "Sesotho",
          sn: "Shona",
          sd: "سنڌي",
          si: "සිංහල",
          sk: "Slovenčina",
          sl: "Slovenščina",
          so: "Afsoomaali",
          es: "Español",
          su: "Basa Sunda",
          sw: "Kiswahili",
          sv: "Svenska",
          tg: "Тоҷикӣ",
          ta: "தமிழ்",
          te: "తెలుగు",
          th: "ไทย",
          tr: "Türkçe",
          uk: "Українська",
          ur: "اردو",
          uz: "O‘zbekcha",
          vi: "Tiếng Việt",
          cy: "Cymraeg",
          xh: "isiXhosa",
          yi: "יידיש",
          yo: "Yorùbá",
          zu: "Zulu",
        }
      : lang_array_english,
    u_class =
      ".gt_container-" +
      Array.from("popup" + wrapper_selector)
        .reduce(function (h, c) {
          return 0 | (31 * h + c.charCodeAt(0));
        }, 0)
        .toString(36),
    widget_code = "\x3c!-- GTranslate: https://gtranslate.com --\x3e",
    widget_css = custom_css;
  flags_location += ("3d" == flag_style ? flag_size : "svg") + "/";
  var flag_ext = "3d" == flag_style ? ".png" : ".svg";
  function get_flag_src(lang) {
    return alt_flags[lang]
      ? "usa" == alt_flags[lang]
        ? flags_location + "en-us" + flag_ext
        : "canada" == alt_flags[lang]
        ? flags_location + "en-ca" + flag_ext
        : "brazil" == alt_flags[lang]
        ? flags_location + "pt-br" + flag_ext
        : "mexico" == alt_flags[lang]
        ? flags_location + "es-mx" + flag_ext
        : "argentina" == alt_flags[lang]
        ? flags_location + "es-ar" + flag_ext
        : "colombia" == alt_flags[lang]
        ? flags_location + "es-co" + flag_ext
        : "quebec" == alt_flags[lang]
        ? flags_location + "fr-qc" + flag_ext
        : alt_flags[lang]
      : flags_location + lang + flag_ext;
  }
  widget_css +=
    "a.glink{text-decoration:none}a.glink.gt-current-lang{font-weight:bold}";
  var font_size = 10,
    margin_right = 3;
  24 == flag_size
    ? ((font_size = 15), (margin_right = 5))
    : 32 == flag_size
    ? ((font_size = 20), (margin_right = 7))
    : 48 == flag_size && ((font_size = 24), (margin_right = 10)),
    (widget_css +=
      u_class +
      " a.glink span{margin-right:" +
      margin_right +
      "px;font-size:" +
      font_size +
      "px;vertical-align:middle}"),
    (widget_css +=
      "a.glink img{vertical-align:middle;display:inline;border:0;padding:0;margin:0;opacity:0.8;height:auto}"),
    (widget_css += "a.glink:hover img{opacity:1}");
  var current_lang =
    document.querySelector("html").getAttribute("lang") || default_language;
  if ("none" == url_structure) {
    var googtrans_matches = document.cookie.match(
      "(^|;) ?googtrans=([^;]*)(;|$)"
    );
    current_lang =
      (googtrans_matches && googtrans_matches[2].split("/")[2]) || current_lang;
  }
  lang_array[current_lang] || (current_lang = default_language),
    (widget_code +=
      '<a href="#" class="gt_switcher-popup glink nturl notranslate">');
  var arrow_down =
    '<span style="color:#666;font-size:8px;font-weight:bold;">&#9660;</span>';
  (widget_code +=
    '<img src="' +
    get_flag_src(current_lang) +
    '" height="' +
    flag_size +
    '" width="' +
    flag_size +
    '" alt="' +
    current_lang +
    '" /> <span>' +
    lang_array[current_lang] +
    "</span>" +
    arrow_down +
    "</a>"),
    (widget_code += '<div class="gt_black_overlay"></div>'),
    (widget_code += '<div class="gt_white_content notranslate">'),
    (widget_code += '<div class="gt_languages">'),
    languages.forEach(function (lang) {
      var el_a = document.createElement("a");
      (el_a.href = (function (lang) {
        var href = "#";
        if ("sub_directory" == url_structure) {
          var gt_request_uri =
            (document.currentScript.getAttribute("data-gt-orig-url") ||
              (location.pathname.startsWith("/" + current_lang + "/") &&
                "/" + location.pathname.split("/").slice(2).join("/")) ||
              location.pathname) +
            location.search +
            location.hash;
          href =
            (lang == default_language &&
              location.protocol + "//" + location.hostname + gt_request_uri) ||
            location.protocol +
              "//" +
              location.hostname +
              "/" +
              lang +
              gt_request_uri;
        } else if ("sub_domain" == url_structure) {
          gt_request_uri =
            (document.currentScript.getAttribute("data-gt-orig-url") ||
              location.pathname) +
            location.search +
            location.hash;
          var domain =
            document.currentScript.getAttribute("data-gt-orig-domain") ||
            location.hostname;
          href =
            "object" == typeof custom_domains && custom_domains[lang]
              ? (lang == default_language &&
                  location.protocol + "//" + domain + gt_request_uri) ||
                location.protocol + "//" + custom_domains[lang] + gt_request_uri
              : (lang == default_language &&
                  location.protocol + "//" + domain + gt_request_uri) ||
                location.protocol +
                  "//" +
                  lang +
                  "." +
                  domain.replace(/^www\./, "") +
                  gt_request_uri;
        }
        return href;
      })(lang)),
        el_a.classList.add("glink", "nturl"),
        current_lang == lang && el_a.classList.add("gt-current-lang"),
        el_a.setAttribute("data-gt-lang", lang);
      var el_img = document.createElement("img");
      (el_img.height = el_img.width = flag_size),
        (el_img.alt = lang),
        el_img.setAttribute("data-gt-lazy-src", get_flag_src(lang)),
        el_a.appendChild(el_img),
        (el_a.innerHTML += " <span>" + lang_array[lang] + "</span>"),
        (widget_code += el_a.outerHTML);
    }),
    (widget_code += "</div></div>");
  for (
    var a_height = "2d" == flag_style ? 0.75 * flag_size + 21 : flag_size + 13,
      a_width = flag_size + margin_right + 8 * font_size,
      popup_height = Math.min(375, languages.length * a_height + 12),
      popup_width = Math.min(980, 0.8 * window.innerWidth),
      popup_columns = Math.floor(popup_width / a_width),
      langs_per_col = Math.floor(popup_height / a_height);
    popup_columns > 1 &&
    Math.floor((langs_per_col * popup_columns) / languages.length) > 1;

  )
    popup_width = --popup_columns * a_width + 32;
  (widget_css +=
    ".gt_black_overlay{display:none;position:fixed;top:0%;left:0%;width:100%;height:100%;background-color:black;z-index:10000;-moz-opacity:0.8;opacity:.80;filter:alpha(opacity=80)}"),
    (widget_css +=
      ".gt_white_content{display:none;position:fixed;top:50%;left:50%;width:" +
      popup_width +
      "px;height:" +
      popup_height +
      "px;margin:-" +
      popup_height / 2 +
      "px 0 0 -" +
      popup_width / 2 +
      "px;padding:6px 16px;background-color:white;color:black;z-index:19881205;overflow:auto;text-align:left}"),
    (widget_css +=
      ".gt_white_content a{display:block;padding:" +
      ("2d" == flag_style ? 10 : 6) +
      "px 0;border-bottom:1px solid #e7e7e7;white-space:nowrap;line-height:0;flex-basis:" +
      a_height +
      "px;box-sizing:border-box;}"),
    (widget_css +=
      ".gt_white_content .gt_languages{display:flex;flex-flow:column wrap;max-height:" +
      Math.max(
        popup_height,
        a_height * Math.ceil(languages.length / popup_columns)
      ) +
      "px;overflow-x:hidden;}"),
    (widget_css +=
      ".gt_white_content::-webkit-scrollbar-track{background-color:#F5F5F5}"),
    (widget_css += ".gt_white_content::-webkit-scrollbar{width:5px}"),
    (widget_css +=
      ".gt_white_content::-webkit-scrollbar-thumb{background-color:#888}"),
    "none" == url_structure &&
      ((widget_code += '<div id="google_translate_element2"></div>'),
      (widget_css +=
        "div.skiptranslate,#google_translate_element2{display:none!important}"),
      (widget_css += "body{top:0!important}"),
      (widget_css +=
        "font font{background-color:transparent!important;box-shadow:none!important;position:initial!important}")),
    "inline" != horizontal_position &&
      (widget_code =
        '<div class="gt_switcher_wrapper" style="position:fixed;' +
        vertical_position +
        ":15px;" +
        horizontal_position +
        ':15px;z-index:999999;">' +
        widget_code +
        "</div>");
  var add_css = document.createElement("style");
  add_css.classList.add("gtranslate_css"),
    (add_css.textContent = widget_css),
    document.head.appendChild(add_css),
    document.querySelectorAll(wrapper_selector).forEach(function (e) {
      e.classList.add(u_class.substring(1)), (e.innerHTML += widget_code);
    });
  var gt_popup_open = !1;
  function gt_hide_popup() {
    (gt_popup_open = !1),
      document
        .querySelectorAll(".gt_white_content,.gt_black_overlay")
        .forEach(function (e) {
          e.style.display = "none";
        });
  }
  if (
    (document
      .querySelectorAll(u_class + " a.gt_switcher-popup")
      .forEach(function (e) {
        e.addEventListener("click", function (evt) {
          var el;
          evt.preventDefault(),
            evt.stopPropagation(),
            gt_popup_open
              ? gt_hide_popup()
              : ((gt_popup_open = !0),
                (el = e).parentNode
                  .querySelectorAll(".gt_white_content a img:not([src])")
                  .forEach(function (img) {
                    img.setAttribute(
                      "src",
                      img.getAttribute("data-gt-lazy-src")
                    );
                  }),
                el.parentNode
                  .querySelectorAll(".gt_white_content,.gt_black_overlay")
                  .forEach(function (e) {
                    e.style.display = "block";
                  }));
        }),
          e.addEventListener("pointerenter", function (evt) {
            evt.target.parentNode
              .querySelectorAll(".gt_languages img:not([src])")
              .forEach(function (img) {
                img.setAttribute("src", img.getAttribute("data-gt-lazy-src"));
              });
          });
      }),
    document
      .querySelectorAll(u_class + " .gt_black_overlay")
      .forEach(function (e) {
        e.addEventListener("click", function (evt) {
          gt_popup_open && gt_hide_popup();
        });
      }),
    "none" == url_structure)
  ) {
    function fire_event(element, event) {
      try {
        if (document.createEventObject) {
          var evt = document.createEventObject();
          element.fireEvent("on" + event, evt);
        } else {
          (evt = document.createEvent("HTMLEvents")).initEvent(event, !0, !0),
            element.dispatchEvent(evt);
        }
      } catch (e) {}
    }
    function load_tlib() {
      window.gt_translate_script ||
        ((window.gt_translate_script = document.createElement("script")),
        (gt_translate_script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"),
        document.body.appendChild(gt_translate_script));
    }
    (window.doGTranslate = function (lang_pair) {
      if ((lang_pair.value && (lang_pair = lang_pair.value), "" != lang_pair)) {
        var lang = lang_pair.split("|")[1];
        if (
          null !=
            ((keyValue = document.cookie.match("(^|;) ?googtrans=([^;]*)(;|$)"))
              ? keyValue[2].split("/")[2]
              : null) ||
          lang != lang_pair.split("|")[0]
        ) {
          for (
            var keyValue,
              teCombo,
              sel = document.getElementsByTagName("select"),
              i = 0;
            i < sel.length;
            i++
          )
            if (-1 != sel[i].className.indexOf("goog-te-combo")) {
              teCombo = sel[i];
              break;
            }
          null == document.getElementById("google_translate_element2") ||
          0 ==
            document.getElementById("google_translate_element2").innerHTML
              .length ||
          0 == teCombo.length ||
          0 == teCombo.innerHTML.length
            ? setTimeout(function () {
                doGTranslate(lang_pair);
              }, 500)
            : ((teCombo.value = lang),
              fire_event(teCombo, "change"),
              fire_event(teCombo, "change"));
        }
      }
    }),
      (window.googleTranslateElementInit2 = function () {
        new google.translate.TranslateElement(
          { pageLanguage: default_language, autoDisplay: !1 },
          "google_translate_element2"
        );
      }),
      current_lang != default_language
        ? load_tlib()
        : document.querySelectorAll(u_class).forEach(function (e) {
            e.addEventListener("pointerenter", load_tlib);
          }),
      document
        .querySelectorAll(u_class + " a[data-gt-lang]")
        .forEach(function (e) {
          e.addEventListener("click", function (evt) {
            evt.preventDefault(),
              document
                .querySelectorAll(u_class + " a.gt-current-lang")
                .forEach(function (e) {
                  e.classList.remove("gt-current-lang");
                }),
              e.classList.add("gt-current-lang"),
              doGTranslate(
                default_language + "|" + e.getAttribute("data-gt-lang")
              ),
              (e.parentNode.parentNode.parentNode.querySelector(
                "a.gt_switcher-popup"
              ).innerHTML = e.innerHTML + arrow_down),
              gt_hide_popup();
          });
        });
  }
  if (
    detect_browser_language &&
    window.sessionStorage &&
    window.navigator &&
    null == sessionStorage.getItem("gt_autoswitch") &&
    !/bot|spider|slurp|facebook/i.test(navigator.userAgent)
  ) {
    var accept_language = (
      navigator.language || navigator.userLanguage
    ).toLowerCase();
    switch (accept_language) {
      case "zh":
      case "zh-cn":
        var preferred_language = "zh-CN";
        break;
      case "zh-tw":
      case "zh-hk":
        preferred_language = "zh-TW";
        break;
      case "he":
        preferred_language = "iw";
        break;
      default:
        preferred_language = accept_language.substr(0, 2);
    }
    current_lang == default_language &&
      preferred_language != default_language &&
      languages.includes(preferred_language) &&
      ("none" == url_structure
        ? (load_tlib(),
          (window.gt_translate_script.onload = function () {
            doGTranslate(default_language + "|" + preferred_language);
            var el = document.querySelector(
              u_class + ' a[data-gt-lang="' + preferred_language + '"]'
            );
            el.querySelectorAll("img:not([src])").forEach(function (e) {
              e.setAttribute("src", e.getAttribute("data-gt-lazy-src"));
            }),
              (el.parentNode.parentNode.parentNode.querySelector(
                "a.gt_switcher-popup"
              ).innerHTML = el.innerHTML + arrow_down);
          }))
        : document
            .querySelectorAll(
              u_class + ' a[data-gt-lang="' + preferred_language + '"]'
            )
            .forEach(function (e) {
              location.href = e.href;
            })),
      sessionStorage.setItem("gt_autoswitch", 1);
  }
})();